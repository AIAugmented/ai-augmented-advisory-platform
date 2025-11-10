import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import * as THREE from "three";

import { useStore } from "@/store";

// Animation configuration
const CONFIG = {
  colors: {
    human: { glow: 0xd4a574, emissive: 0xb08d5b },
    ai: { glow: 0x446f6f, emissive: 0x36454f },
    lines: {
      light: { human: 0x8b5a3c, ai: 0x3a6b6b }, // Darker versions of original colors for light background
      dark: { human: 0xd4a574, ai: 0x5a9999 }, // Original colors for dark background
    },
    sparks: {
      light: 0x0066cc, // Darker blue for light background
      dark: 0x00ffff, // Bright cyan for dark background
    },
  },
  animation: {
    orbitSpeed: 0.08,
    objectCount: 120, // Reduced from 150 for better performance
    cameraDistance: 25,
    ringCount: 5, // Reduced from 6 for better performance
  },
  layout: { baseRadius: 3.2, maxRadius: 16.0, ringSpacing: 1.6 },
};

// Theme-based background colors
const getBackgroundColor = (theme: "light" | "dark" | "system"): number => {
  // For system theme, check system preference
  if (theme === "system") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? 0x000000 // Dark background
      : 0xffffff; // Light background
  }

  return theme === "dark" ? 0x000000 : 0xffffff;
};

// Theme-based spark colors
const getSparkColor = (theme: "light" | "dark" | "system"): number => {
  const isDark =
    theme === "system"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
      : theme === "dark";

  return isDark ? CONFIG.colors.sparks.dark : CONFIG.colors.sparks.light;
};

// Theme-based blending mode for sparks
const getSparkBlending = (
  theme: "light" | "dark" | "system",
): THREE.Blending => {
  const isDark =
    theme === "system"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
      : theme === "dark";

  return isDark ? THREE.AdditiveBlending : THREE.NormalBlending;
};

// Theme-based line colors
const getLineColor = (
  theme: "light" | "dark" | "system",
  type: "human" | "ai",
): number => {
  const isDark =
    theme === "system"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
      : theme === "dark";

  return isDark
    ? CONFIG.colors.lines.dark[type]
    : CONFIG.colors.lines.light[type];
};

interface ThreeJsOrbitAnimationProps {
  className?: string;
}

interface ComplexOrbitSystem {
  objects: THREE.Mesh[];
  trails: THREE.Line[];
  rings: THREE.Line[];
  center: THREE.Vector3;
  type: "human" | "ai";
}

interface ElectricStrike {
  line: THREE.Line;
  startTime: number;
  duration: number;
  particle1: THREE.Mesh;
  particle2: THREE.Mesh;
}

const ThreeJsOrbitAnimation: React.FC<ThreeJsOrbitAnimationProps> = ({
  className = "",
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const clockRef = useRef<THREE.Clock>(new THREE.Clock());

  // Get theme from store
  const theme = useStore(state => state.theme);
  const orbitSystemsRef = useRef<ComplexOrbitSystem[]>([]);
  const mouseRef = useRef<THREE.Vector2>(new THREE.Vector2());
  const electricStrikesRef = useRef<ElectricStrike[]>([]);

  const [reducedMotion, setReducedMotion] = useState(false);

  // Check for reduced motion preference and dark mode
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) =>
      setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
  }, []);

  // Mouse tracking for subtle interaction
  const handleMouseMove = useCallback((event: MouseEvent) => {
    if (!mountRef.current) return;

    const rect = mountRef.current.getBoundingClientRect();
    mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  }, []);

  // Create simple sphere geometries like network nodes in the attached image
  const createPolyhedralGeometry = useCallback((): THREE.BufferGeometry => {
    // Simple small spheres to match the network node style in the image
    const radius = 0.08 + Math.random() * 0.04; // Small, consistent sphere sizes
    return new THREE.SphereGeometry(radius, 16, 12); // Smooth spheres with good detail
  }, []);

  // Create electric strike effect between two particles
  const createElectricStrike = useCallback(
    (particle1: THREE.Mesh, particle2: THREE.Mesh): ElectricStrike => {
      // Get world positions of both particles
      const pos1 = new THREE.Vector3();
      const pos2 = new THREE.Vector3();
      particle1.getWorldPosition(pos1);
      particle2.getWorldPosition(pos2);

      // Create lightning-like path with multiple segments
      const segments = 20;
      const points: THREE.Vector3[] = [];

      for (let i = 0; i <= segments; i++) {
        const t = i / segments;
        const basePoint = new THREE.Vector3().lerpVectors(pos1, pos2, t);

        // Add random displacement for lightning effect (less at endpoints)
        const displacement = Math.sin(t * Math.PI) * 0.5; // Increased displacement for more dramatic effect
        const randomOffset = new THREE.Vector3(
          (Math.random() - 0.5) * displacement,
          (Math.random() - 0.5) * displacement,
          (Math.random() - 0.5) * displacement,
        );

        points.push(basePoint.add(randomOffset));
      }

      // Create geometry from points
      const geometry = new THREE.BufferGeometry().setFromPoints(points);

      // Create electric material with theme-aware default color
      const defaultSparkColor = getSparkColor(theme);
      const defaultSparkBlending = getSparkBlending(theme);
      const material = new THREE.LineBasicMaterial({
        color: defaultSparkColor, // Use theme-aware default color
        transparent: true,
        opacity: 0.9, // Increased opacity for better visibility in light mode
        linewidth: 8, // Slightly thicker line for more visibility
        blending: defaultSparkBlending, // Use theme-aware blending
      });

      const line = new THREE.Line(geometry, material);

      return {
        line,
        startTime: Date.now(),
        duration: 1000 + Math.random() * 1000, // Longer duration: 1000-2000ms for better visibility
        particle1,
        particle2,
      };
    },
    [theme],
  );

  // Check for collisions between particles from different systems
  const checkParticleCollisions = useCallback(() => {
    if (!sceneRef.current || orbitSystemsRef.current.length < 2) return;

    const humanSystem = orbitSystemsRef.current.find(s => s.type === "human");
    const aiSystem = orbitSystemsRef.current.find(s => s.type === "ai");

    if (!humanSystem || !aiSystem) return;

    const collisionDistance = 1.5; // Increased distance threshold for easier collision detection
    const humanGroup = sceneRef.current.userData.humanGroup;
    const aiGroup = sceneRef.current.userData.aiGroup;

    if (!humanGroup || !aiGroup) return;

    // Check each human particle against each AI particle
    humanSystem.objects.forEach(humanParticle => {
      aiSystem.objects.forEach(aiParticle => {
        // Get world positions
        const humanPos = new THREE.Vector3();
        const aiPos = new THREE.Vector3();
        humanParticle.getWorldPosition(humanPos);
        aiParticle.getWorldPosition(aiPos);

        const distance = humanPos.distanceTo(aiPos);

        if (distance < collisionDistance) {
          // Check if we already have a strike between these particles
          const existingStrike = electricStrikesRef.current.find(
            strike =>
              (strike.particle1 === humanParticle &&
                strike.particle2 === aiParticle) ||
              (strike.particle1 === aiParticle &&
                strike.particle2 === humanParticle),
          );

          if (!existingStrike) {
            // Create new electric strike
            const strike = createElectricStrike(humanParticle, aiParticle);
            electricStrikesRef.current.push(strike);
            if (sceneRef.current) {
              sceneRef.current.add(strike.line);
            }
          }
        }
      });
    });
  }, [createElectricStrike]);

  // Update electric strikes
  const updateElectricStrikes = useCallback(() => {
    if (!sceneRef.current) return;

    const currentTime = Date.now();

    // Update existing strikes and remove expired ones
    electricStrikesRef.current = electricStrikesRef.current.filter(strike => {
      const age = currentTime - strike.startTime;

      if (age > strike.duration) {
        // Remove expired strike
        sceneRef.current!.remove(strike.line);
        strike.line.geometry.dispose();
        if (Array.isArray(strike.line.material)) {
          strike.line.material.forEach(mat => mat.dispose());
        } else {
          strike.line.material.dispose();
        }
        return false;
      }

      // Update strike appearance (fade out over time)
      const fadeProgress = age / strike.duration;
      const opacity = 1 - fadeProgress;

      if (strike.line.material instanceof THREE.LineBasicMaterial) {
        strike.line.material.opacity = opacity * 0.9;

        // Add flickering effect
        const flicker = Math.sin(age * 0.05) * 0.3 + 0.7;
        strike.line.material.opacity *= flicker;
      }

      return true;
    });
  }, []);

  // Create dynamic network lines between particles of the same type
  const createStaticNetworkLines = useCallback(
    (particles: THREE.Mesh[], type: "human" | "ai", scene: THREE.Scene) => {
      const maxDistance = 8.0; // Increased from 5.0 to 8.0 to match larger orbital systems
      const longLineThreshold = 5.0; // Increased threshold for larger systems
      const lineColor = type === "human" ? 0xd4a574 : 0x5a9999; // Default colors matching dark theme

      // ALWAYS clear existing connections first to prevent accumulation
      const existingConnectionsKey =
        type === "human" ? "humanConnections" : "aiConnections";
      if (scene.userData[existingConnectionsKey]) {
        scene.userData[existingConnectionsKey].forEach(
          ({ line }: { line: THREE.Line }) => {
            scene.remove(line);
            line.geometry.dispose();
            if (Array.isArray(line.material)) {
              line.material.forEach((mat: THREE.Material) => mat.dispose());
            } else {
              line.material.dispose();
            }
          },
        );
        scene.userData[existingConnectionsKey] = [];
      }

      const connections: Array<{
        line: THREE.Line;
        particle1: THREE.Mesh;
        particle2: THREE.Mesh;
      }> = [];

      // Use deterministic approach with preference for longer lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const particle1 = particles[i];
          const particle2 = particles[j];

          // Create line with initial positions
          const worldPos1 = new THREE.Vector3();
          const worldPos2 = new THREE.Vector3();
          particle1.getWorldPosition(worldPos1);
          particle2.getWorldPosition(worldPos2);

          const distance = worldPos1.distanceTo(worldPos2);

          if (distance <= maxDistance) {
            // Much denser connection network for image-like appearance
            const isLongLine = distance >= longLineThreshold;
            const baseConnection = (i + j) % 5 === 0; // Increased from 8 to 5 for much denser connections
            const longLineBonus = isLongLine && (i + j) % 2.5 === 0; // Increased from 5 to 2.5 for more long connections
            const closeConnection = distance <= 2.0 && (i + j) % 6 === 0; // Increased from 12 to 6 for more close connections

            const shouldConnect =
              baseConnection || longLineBonus || closeConnection;
            if (!shouldConnect) continue;

            const points = [worldPos1.clone(), worldPos2.clone()];
            const geometry = new THREE.BufferGeometry().setFromPoints(points);
            const material = new THREE.LineBasicMaterial({
              color: lineColor,
              transparent: true,
              opacity: 0.35, // Reduced from 0.45 to 0.35 to prevent overwhelming density
              linewidth: 1,
            });

            const line = new THREE.Line(geometry, material);
            scene.add(line);

            connections.push({
              line,
              particle1,
              particle2,
            });
          }
        }
      }

      // Store connections for animation updates
      scene.userData[existingConnectionsKey] = connections;
      return connections;
    },
    [],
  );

  // Create complex orbital system with multiple rings
  const createComplexOrbitSystem = useCallback(
    (
      type: "human" | "ai",
      centerPosition: THREE.Vector3,
      isDarkModeValue: boolean,
    ): ComplexOrbitSystem => {
      const objects: THREE.Mesh[] = [];
      const trails: THREE.Line[] = [];
      const rings: THREE.Line[] = [];

      // Create multiple concentric orbital rings
      for (let ring = 0; ring < CONFIG.animation.ringCount; ring++) {
        const ringRadius =
          CONFIG.layout.baseRadius + ring * CONFIG.layout.ringSpacing;
        const objectsInRing =
          Math.floor(
            CONFIG.animation.objectCount / CONFIG.animation.ringCount,
          ) + Math.floor(Math.random() * 5);

        // Ring visualization removed for cleaner look

        // Create objects in this ring
        for (let i = 0; i < objectsInRing; i++) {
          const geometry = createPolyhedralGeometry();

          // Create elegant gold gradient texture like the attached example
          const canvas = document.createElement("canvas");
          canvas.width = 256;
          canvas.height = 256;
          const context = canvas.getContext("2d")!;

          // Create sophisticated gold gradient inspired by the luxury design example
          const gradient = context.createRadialGradient(
            128,
            128,
            0,
            128,
            128,
            128,
          );

          if (type === "human") {
            // Elegant gold gradient for human particles - matching the luxury invitation style
            gradient.addColorStop(0, "#FFD700"); // Bright gold center
            gradient.addColorStop(0.3, "#DAA520"); // Rich gold
            gradient.addColorStop(0.6, "#B8860B"); // Darker gold
            gradient.addColorStop(0.8, "#8B6914"); // Deep gold
            gradient.addColorStop(1, "#2C1810"); // Dark bronze edge
          } else {
            // Ultra-bright sophisticated teal-platinum gradient for AI particles
            gradient.addColorStop(0, "#D0F0FF"); // Ultra-bright light platinum center
            gradient.addColorStop(0.3, "#9AD5E0"); // Ultra-bright cadet blue
            gradient.addColorStop(0.6, "#85C5E8"); // Ultra-bright steel blue
            gradient.addColorStop(0.8, "#5A8080"); // Much brighter dark slate
            gradient.addColorStop(1, "#464646"); // Much brighter charcoal edge
          }

          context.fillStyle = gradient;
          context.fillRect(0, 0, 256, 256);

          // Add subtle texture overlay for premium finish
          context.globalCompositeOperation = "overlay";
          context.fillStyle = "rgba(255, 255, 255, 0.1)";
          context.fillRect(0, 0, 256, 256);

          // Create texture from gradient canvas
          const gradientTexture = new THREE.CanvasTexture(canvas);
          gradientTexture.wrapS = THREE.RepeatWrapping;
          gradientTexture.wrapT = THREE.RepeatWrapping;

          const material = new THREE.MeshPhysicalMaterial({
            map: gradientTexture, // Apply elegant gradient texture
            color: new THREE.Color(0xffffff), // White base to show texture colors
            metalness: 0.95, // Ultra-high metalness for premium gold/platinum effect
            roughness: 0.02, // Ultra-smooth for mirror-like finish
            clearcoat: 1.0,
            clearcoatRoughness: 0.01, // Perfect clearcoat for luxury
            transmission: 0.05, // Minimal transparency for solid luxury feel
            thickness: 1.0, // Maximum thickness for premium weight
            ior: 2.8, // Higher IOR for premium refraction
            emissive: new THREE.Color(type === "human" ? 0xffd700 : 0x87ceeb), // Brighter emissive colors
            emissiveIntensity: isDarkModeValue ? 0.6 : 0.8, // Much brighter for more sparkle
            transparent: true,
            opacity: 0.95, // High opacity for solid premium feel
            side: THREE.DoubleSide,
            envMapIntensity: 3.0, // Maximum reflections for luxury
            reflectivity: 0.95, // Ultra-high reflectivity
            sheen: 1.0, // Maximum luxury sheen
            sheenColor: new THREE.Color(type === "human" ? 0xffd700 : 0x87ceeb),
          });

          const object = new THREE.Mesh(geometry, material);

          // Position objects along ring with slightly wider spread
          const angle = (i / objectsInRing) * Math.PI * 2;
          const radiusVariation = ringRadius + (Math.random() - 0.5) * 0.75; // Increased from 0.55 to 0.75 for wider spread
          const heightVariation = (Math.random() - 0.5) * 1.8; // Increased from 1.5 to 1.8 for more vertical spread

          object.position.set(
            centerPosition.x + Math.cos(angle) * radiusVariation,
            centerPosition.y + heightVariation,
            centerPosition.z + Math.sin(angle) * radiusVariation,
          );

          // Store orbital properties
          object.userData = {
            originalRadius: radiusVariation,
            angle: angle,
            speed: 0.5 + Math.random() * 1.0,
            ring: ring,
            pulsePhase: Math.random() * Math.PI * 2,
            type: type,
            rotationSpeed: {
              x: (Math.random() - 0.5) * 0.02,
              y: (Math.random() - 0.5) * 0.02,
              z: (Math.random() - 0.5) * 0.02,
            },
          };

          objects.push(object);

          // Particle trails removed for cleaner look
        }
      }

      return {
        objects,
        trails,
        rings,
        center: centerPosition,
        type,
      };
    },
    [createPolyhedralGeometry],
  );

  // Wrapped function to pass isDarkMode into createComplexOrbitSystem
  const createOrbitSystem = useCallback(
    (type: "human" | "ai", centerPosition: THREE.Vector3) => {
      return createComplexOrbitSystem(type, centerPosition, false);
    },
    [createComplexOrbitSystem],
  );

  // Initialize scene without font loading
  const initComplexThreeJS = useCallback(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    // Set background based on current theme
    const backgroundColor = getBackgroundColor(theme);
    scene.background = new THREE.Color(backgroundColor);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      60,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000,
    );
    camera.position.set(0, 0, CONFIG.animation.cameraDistance);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Premium renderer setup for luxury visual quality
    const renderer = new THREE.WebGLRenderer({
      antialias: false, // Disabled for performance
      alpha: true,
      powerPreference: "high-performance",
      precision: "highp",
      logarithmicDepthBuffer: false, // Disabled for performance
    });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight,
    );
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1)); // Capped at 1 for performance
    renderer.shadowMap.enabled = false; // Disabled shadows for huge performance gain
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.4;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    rendererRef.current = renderer;

    mountRef.current.appendChild(renderer.domElement);

    // Lightweight lighting setup
    const ambientIntensity = 0.5;
    const ambientLight = new THREE.AmbientLight(0xffffff, ambientIntensity);
    scene.add(ambientLight);

    // Single key light (no shadows)
    const keyLightIntensity = 2.0;
    const keyLight = new THREE.DirectionalLight(0xffffff, keyLightIntensity);
    keyLight.position.set(15, 15, 10);
    scene.add(keyLight);

    // Reduced rim lighting
    const rimLightIntensity = 1.2;
    const rimLight = new THREE.DirectionalLight(0xffffff, rimLightIntensity);
    rimLight.position.set(-10, 5, -10);
    scene.add(rimLight);

    // Simplified accent lights (no shadows)
    const pointLightIntensity = 2.5;
    const humanLight = new THREE.PointLight(
      CONFIG.colors.human.glow,
      pointLightIntensity,
      20,
    );
    scene.add(humanLight);

    const aiLight = new THREE.PointLight(
      CONFIG.colors.ai.glow,
      pointLightIntensity,
      20,
    );

    scene.add(aiLight);

    // Spot lights removed for performance

    // Create separate orbital systems
    const maxRadius =
      CONFIG.layout.baseRadius +
      (CONFIG.animation.ringCount - 1) * CONFIG.layout.ringSpacing;
    const optimalCenterDistance = maxRadius * 1.2; // Reduced from 1.35 to 1.2 for more intersection with bigger orbits
    const halfDistance = optimalCenterDistance / 2;

    const humanCenter = new THREE.Vector3(-halfDistance, 1, 0); // Left orbit center - slightly lower
    const aiCenter = new THREE.Vector3(halfDistance, 1, 0); // Right orbit center - slightly lower

    // Position the accent lights at the calculated centers
    humanLight.position.set(humanCenter.x, 2, 3);
    aiLight.position.set(aiCenter.x, 2, 3);

    // Create separate systems that will overlap in the middle
    const humanSystem = createOrbitSystem("human", humanCenter);
    const aiSystem = createOrbitSystem("ai", aiCenter);

    orbitSystemsRef.current = [humanSystem, aiSystem];

    // Create groups for each orbital system to apply vertical rotation
    const humanGroup = new THREE.Group();
    const aiGroup = new THREE.Group();

    // Apply 90-degree rotation on X-axis to make orbits vertical
    humanGroup.rotation.x = Math.PI / 2;
    aiGroup.rotation.x = Math.PI / 2;

    // Position the groups at their respective centers
    humanGroup.position.copy(humanCenter);
    aiGroup.position.copy(aiCenter);

    // Add all human system objects to human group
    humanSystem.objects.forEach(obj => {
      // Adjust object position relative to group center
      obj.position.sub(humanCenter);
      humanGroup.add(obj);
      // Shadow casting removed for performance
    });

    // Add all AI system objects to AI group
    aiSystem.objects.forEach(obj => {
      // Adjust object position relative to group center
      obj.position.sub(aiCenter);
      aiGroup.add(obj);
      // Shadow casting removed for performance
    });

    // Add all AI system objects to AI group
    aiSystem.objects.forEach(obj => {
      // Adjust object position relative to group center
      obj.position.sub(aiCenter);
      aiGroup.add(obj);
      // Shadow casting removed for performance
    });

    // Trails removed for cleaner look

    // Rings removed for cleaner look

    // Add groups to scene
    scene.add(humanGroup);
    scene.add(aiGroup);

    // Store groups for animation updates
    scene.userData.humanGroup = humanGroup;
    scene.userData.aiGroup = aiGroup;

    // Central flare removed - replaced with simple "x" in HTML overlay
    // const centralFlare = createCentralFlare(new THREE.Vector3(0, 0, 0));
    // scene.add(centralFlare);
    // scene.userData.centralFlare = centralFlare;

    // Create static network lines immediately during initialization
    // Always create lines on fresh component mount (page refresh)
    if (!scene.userData.linesCreated) {
      // Create static lines for human particles
      createStaticNetworkLines(humanSystem.objects, "human", scene);

      // Create static lines for AI particles
      createStaticNetworkLines(aiSystem.objects, "ai", scene);

      // Mark lines as created to prevent duplicates within this component instance
      scene.userData.linesCreated = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createOrbitSystem, createStaticNetworkLines]);

  // Update background color when theme changes
  useLayoutEffect(() => {
    if (sceneRef.current && rendererRef.current && cameraRef.current) {
      const backgroundColor = getBackgroundColor(theme);
      sceneRef.current.background = new THREE.Color(backgroundColor);
      // Force a render to show the background change immediately
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    }
  }, [theme]);

  // Handle system theme changes
  useLayoutEffect(() => {
    if (theme !== "system") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = () => {
      if (sceneRef.current && rendererRef.current && cameraRef.current) {
        const backgroundColor = getBackgroundColor(theme);
        sceneRef.current.background = new THREE.Color(backgroundColor);
        // Force a render to show the background change immediately
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () =>
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, [theme]);

  // Update existing electric strike colors when theme changes
  useLayoutEffect(() => {
    const sparkColor = getSparkColor(theme);
    const sparkBlending = getSparkBlending(theme);
    electricStrikesRef.current.forEach(strike => {
      if (strike.line.material instanceof THREE.LineBasicMaterial) {
        strike.line.material.color.setHex(sparkColor);
        // Use theme-aware blending for proper visibility
        strike.line.material.blending = sparkBlending;
      }
    });
  }, [theme]);

  // Update existing line colors when theme changes
  useLayoutEffect(() => {
    if (!sceneRef.current) return;

    // Update human connections
    if (sceneRef.current.userData.humanConnections) {
      const humanLineColor = getLineColor(theme, "human");
      sceneRef.current.userData.humanConnections.forEach(
        ({ line }: { line: THREE.Line }) => {
          if (line.material instanceof THREE.LineBasicMaterial) {
            line.material.color.setHex(humanLineColor);
          }
        },
      );
    }

    // Update AI connections
    if (sceneRef.current.userData.aiConnections) {
      const aiLineColor = getLineColor(theme, "ai");
      sceneRef.current.userData.aiConnections.forEach(
        ({ line }: { line: THREE.Line }) => {
          if (line.material instanceof THREE.LineBasicMaterial) {
            line.material.color.setHex(aiLineColor);
          }
        },
      );
    }
  }, [theme]);

  // Complex animation loop
  const animate = useCallback(() => {
    if (!sceneRef.current || !rendererRef.current || !cameraRef.current) return;

    const deltaTime = clockRef.current.getDelta();
    const elapsedTime = clockRef.current.getElapsedTime();

    // Animate orbital systems
    orbitSystemsRef.current.forEach(system => {
      // Animate objects
      system.objects.forEach(object => {
        const userData = object.userData;

        if (!reducedMotion) {
          // Complex orbital motion - human orbits move anti-clockwise, AI orbits move clockwise
          const rotationDirection = userData.type === "human" ? -1 : 1;
          userData.angle +=
            deltaTime *
            userData.speed *
            CONFIG.animation.orbitSpeed *
            rotationDirection;

          const radius =
            userData.originalRadius +
            Math.sin(elapsedTime * 0.5 + userData.pulsePhase) * 0.2;
          const height =
            Math.sin(elapsedTime * 0.3 + userData.pulsePhase) * 1.0;

          // Position objects relative to group center (0,0,0) since they're now in groups
          object.position.set(
            Math.cos(userData.angle) * radius,
            height,
            Math.sin(userData.angle) * radius,
          );

          // Complex rotation
          object.rotation.x += userData.rotationSpeed.x;
          object.rotation.y += userData.rotationSpeed.y;
          object.rotation.z += userData.rotationSpeed.z;

          // Pulsing emissive intensity with stronger variation for sparkle effect
          if (object.material instanceof THREE.MeshPhysicalMaterial) {
            const pulse =
              Math.sin(elapsedTime * 2 + userData.pulsePhase) * 0.3 + 0.7; // Increased amplitude and base
            object.material.emissiveIntensity = pulse;
          }
        }

        // Trail updates removed for cleaner look
      });

      // Ring animations removed for cleaner look
    });

    // Check for particle collisions and update electric strikes
    if (!reducedMotion) {
      checkParticleCollisions();
    }
    updateElectricStrikes();

    // Update dynamic network lines to follow particles
    if (sceneRef.current.userData.humanConnections) {
      sceneRef.current.userData.humanConnections.forEach(
        ({
          line,
          particle1,
          particle2,
        }: {
          line: THREE.Line;
          particle1: THREE.Mesh;
          particle2: THREE.Mesh;
        }) => {
          const worldPos1 = new THREE.Vector3();
          const worldPos2 = new THREE.Vector3();
          particle1.getWorldPosition(worldPos1);
          particle2.getWorldPosition(worldPos2);

          const positions = line.geometry.attributes.position;
          positions.setXYZ(0, worldPos1.x, worldPos1.y, worldPos1.z);
          positions.setXYZ(1, worldPos2.x, worldPos2.y, worldPos2.z);
          positions.needsUpdate = true;
        },
      );
    }

    if (sceneRef.current.userData.aiConnections) {
      sceneRef.current.userData.aiConnections.forEach(
        ({
          line,
          particle1,
          particle2,
        }: {
          line: THREE.Line;
          particle1: THREE.Mesh;
          particle2: THREE.Mesh;
        }) => {
          const worldPos1 = new THREE.Vector3();
          const worldPos2 = new THREE.Vector3();
          particle1.getWorldPosition(worldPos1);
          particle2.getWorldPosition(worldPos2);

          const positions = line.geometry.attributes.position;
          positions.setXYZ(0, worldPos1.x, worldPos1.y, worldPos1.z);
          positions.setXYZ(1, worldPos2.x, worldPos2.y, worldPos2.z);
          positions.needsUpdate = true;
        },
      );
    }

    // Central flare animation removed
    // if (sceneRef.current.userData.centralFlare) {
    //   const flare = sceneRef.current.userData.centralFlare;
    //   flare.rotation.z += deltaTime * 0.5;
    //
    //   // Pulsing intensity for flare children
    //   flare.children.forEach((child, index) => {
    //     if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshBasicMaterial) {
    //       const pulse = Math.sin(elapsedTime * 3 + index * 0.3) * 0.2 + 1.0;
    //       child.material.opacity = Math.min(pulse, 1.0);
    //     }
    //   });
    // }

    // Subtle camera movement
    if (!reducedMotion) {
      const cameraRadius = 2;
      cameraRef.current.position.x =
        Math.sin(elapsedTime * 0.05) * cameraRadius;
      cameraRef.current.position.y =
        Math.cos(elapsedTime * 0.03) * cameraRadius;
      cameraRef.current.lookAt(0, 0, 0);
    }

    rendererRef.current.render(sceneRef.current, cameraRef.current);
    animationIdRef.current = requestAnimationFrame(animate);
  }, [reducedMotion, checkParticleCollisions, updateElectricStrikes]);

  // Handle window resize
  const handleResize = useCallback(() => {
    if (!mountRef.current || !cameraRef.current || !rendererRef.current) return;

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    cameraRef.current.aspect = width / height;
    cameraRef.current.updateProjectionMatrix();
    rendererRef.current.setSize(width, height);
  }, []);

  // Initialize and cleanup
  useEffect(() => {
    const currentMount = mountRef.current;

    initComplexThreeJS();

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);

      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }

      if (rendererRef.current && currentMount) {
        currentMount.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }

      // Cleanup electric strikes
      electricStrikesRef.current.forEach(strike => {
        if (sceneRef.current) {
          sceneRef.current.remove(strike.line);
        }
        strike.line.geometry.dispose();
        if (Array.isArray(strike.line.material)) {
          strike.line.material.forEach(mat => mat.dispose());
        } else {
          strike.line.material.dispose();
        }
      });
      electricStrikesRef.current = [];

      // Cleanup network connections
      if (sceneRef.current) {
        if (sceneRef.current.userData.humanConnections) {
          sceneRef.current.userData.humanConnections.forEach(
            ({ line }: { line: THREE.Line }) => {
              sceneRef.current!.remove(line);
              line.geometry.dispose();
              if (Array.isArray(line.material)) {
                line.material.forEach((mat: THREE.Material) => mat.dispose());
              } else {
                line.material.dispose();
              }
            },
          );
        }
        if (sceneRef.current.userData.aiConnections) {
          sceneRef.current.userData.aiConnections.forEach(
            ({ line }: { line: THREE.Line }) => {
              sceneRef.current!.remove(line);
              line.geometry.dispose();
              if (Array.isArray(line.material)) {
                line.material.forEach((mat: THREE.Material) => mat.dispose());
              } else {
                line.material.dispose();
              }
            },
          );
        }
      }

      // Cleanup geometries and materials
      if (sceneRef.current) {
        sceneRef.current.traverse(object => {
          if (object instanceof THREE.Mesh) {
            object.geometry.dispose();
            if (Array.isArray(object.material)) {
              object.material.forEach(material => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        });
      }
    };
  }, [initComplexThreeJS, handleResize, handleMouseMove]);

  // Start animation loop immediately and initialize async
  useEffect(() => {
    const startAnimation = () => {
      animationIdRef.current = requestAnimationFrame(animate);
    };

    // Start animation immediately without waiting for full load
    startAnimation();

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [animate]);

  return (
    <div
      ref={mountRef}
      className={`pointer-events-none absolute inset-0 z-1 ${className}`}
    />
  );
};

export default ThreeJsOrbitAnimation;
