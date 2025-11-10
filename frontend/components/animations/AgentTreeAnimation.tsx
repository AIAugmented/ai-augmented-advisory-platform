"use client";

import React, { useCallback, useEffect, useRef } from "react";

import * as d3 from "d3";

import { useStore } from "@/store";

/**
 * ============================================================================
 * TYPE DEFINITIONS
 * ============================================================================
 */

/**
 * Represents a node in the hierarchical tree structure
 * @property id - Unique identifier for the node
 * @property name - Display name of the agent or capability
 * @property category - Type of node: "center" (root), "primary" (main agents), or undefined (sub-capabilities)
 * @property color - Hex color code for the node cluster
 * @property children - Optional array of child nodes
 */
interface TreeNode {
  id: string;
  name: string;
  category?: "center" | "primary";
  color: string;
  children?: TreeNode[];
}

/**
 * D3 simulation node with additional properties for force-directed layout
 * @extends d3.SimulationNodeDatum - Provides x, y, vx, vy, fx, fy properties
 * @property radius - Collision detection radius for the node
 * @property parentId - ID of the primary parent (for clustering effect)
 */
interface D3Node extends d3.SimulationNodeDatum {
  id: string;
  name: string;
  category?: "center" | "primary";
  color: string;
  radius: number;
  parentId?: string;
}

/**
 * D3 link connecting two nodes
 */
interface D3Link extends d3.SimulationLinkDatum<D3Node> {
  source: D3Node | string;
  target: D3Node | string;
}

interface AgentTreeAnimationProps {
  className?: string;
}

/**
 * ============================================================================
 * DATA STRUCTURE
 * ============================================================================
 */

/**
 * Hierarchical data structure representing the AI Augmented agent ecosystem
 * - Root: "AI Augmented" (category: "center")
 * - Primary agents: 5 specialized agents (category: "primary")
 * - Secondary nodes: Specific capabilities under each primary agent
 *
 * Colors chosen for luxury/prestige: deep, muted, sophisticated tones
 */
const AGENTS_DATA: TreeNode = {
  id: "root",
  name: "AI Augmented",
  color: "#8B7355", // Warm bronze
  category: "center",
  children: [
    {
      id: "market-compass",
      name: "The Market Compass",
      color: "#3D5A80", // Deep navy blue
      category: "primary",
      children: [
        {
          id: "non-linear-disruption",
          name: "Non-Linear Disruption",
          color: "#3D5A80",
        },
        {
          id: "signal-detection",
          name: "Signal Detection",
          color: "#3D5A80",
        },
        {
          id: "adaptive-strategy",
          name: "Adaptive Strategy",
          color: "#3D5A80",
        },
        {
          id: "defensible-value-creation",
          name: "Defensible Value Creation",
          color: "#3D5A80",
        },
      ],
    },
    {
      id: "financial-guardian",
      name: "The Financial Guardian",
      color: "#2D6A4F", // Deep emerald green
      category: "primary",
      children: [
        {
          id: "capital-efficiency",
          name: "Capital Efficiency",
          color: "#2D6A4F",
        },
        {
          id: "tail-risk-management",
          name: "Tail Risk Management",
          color: "#2D6A4F",
        },
        {
          id: "beyond-variance",
          name: "Beyond Variance",
          color: "#2D6A4F",
        },
        {
          id: "moat-valuation",
          name: "Moat Valuation",
          color: "#2D6A4F",
        },
      ],
    },
    {
      id: "strategy-analyst",
      name: "The Strategy Analyst",
      color: "#A0522D", // Elegant sienna
      category: "primary",
      children: [
        {
          id: "moat-analysis",
          name: "Moat Analysis",
          color: "#A0522D",
        },
        {
          id: "market-signal",
          name: "Market Signal",
          color: "#A0522D",
        },
        {
          id: "positioning-under-uncertainty",
          name: "Positioning Under Uncertainty",
          color: "#A0522D",
        },
      ],
    },
    {
      id: "people-advisor",
      name: "The People Advisor",
      color: "#6B4C7C", // Deep plum
      category: "primary",
      children: [
        {
          id: "decision-velocity",
          name: "Decision Velocity",
          color: "#6B4C7C",
        },
        {
          id: "organizational-coherence",
          name: "Organizational Coherence",
          color: "#6B4C7C",
        },
        {
          id: "political-capital",
          name: "Political Capital",
          color: "#6B4C7C",
        },
        {
          id: "influence-networks",
          name: "Influence Networks",
          color: "#6B4C7C",
        },
      ],
    },
    {
      id: "action-architect",
      name: "The Action Architect",
      color: "#4A5C6A", // Slate grey
      category: "primary",
      children: [
        {
          id: "execution-under-uncertainty",
          name: "Execution Under Uncertainty",
          color: "#4A5C6A",
        },
        {
          id: "resource-allocation",
          name: "Resource Allocation",
          color: "#4A5C6A",
        },
        {
          id: "leading-indicators",
          name: "Leading Indicators",
          color: "#4A5C6A",
        },
      ],
    },
  ],
};

/**
 * ============================================================================
 * COMPONENT
 * ============================================================================
 */

/**
 * AgentTreeAnimation - A refined D3-based force-directed graph visualization
 *
 * Designed for senior professionals with:
 * - Slower, gentler initial animation (no dizziness)
 * - Clear cluster groupings (bubble map effect)
 * - Subtle, prestigious color palette
 * - Clean, uncluttered layout
 * - Easy-to-digest information hierarchy
 *
 * Features:
 * - Responsive to container size
 * - Theme-aware (supports dark/light/system themes)
 * - Interactive dragging of nodes
 * - Force-directed layout with cluster-based organization
 * - Smooth, calming animations
 *
 * @param className - Optional CSS classes for the container
 */
export const AgentTreeAnimation: React.FC<AgentTreeAnimationProps> = ({
  className = "",
}) => {
  // ============================================================================
  // REFS & STATE
  // ============================================================================

  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useStore();

  // ============================================================================
  // THEME UTILITIES
  // ============================================================================

  /**
   * Resolves the current theme to determine text color
   * Handles "system" theme by checking user's OS preference
   */
  const getTextColor = useCallback((): string => {
    if (theme === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "#e5e5e5"
        : "#1a1a1a";
    }
    return theme === "dark" ? "#e5e5e5" : "#1a1a1a";
  }, [theme]);

  /**
   * Resolves the current theme to determine background color
   */
  const getBackgroundColor = useCallback((): string => {
    if (theme === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "#0a0a0a"
        : "#ffffff";
    }
    return theme === "dark" ? "#0a0a0a" : "#ffffff";
  }, [theme]);

  // ============================================================================
  // DATA TRANSFORMATION
  // ============================================================================

  /**
   * Converts hierarchical tree structure into flat arrays of nodes and links
   * for D3 force simulation
   *
   * @param root - The root node to flatten
   * @param nodes - Accumulator for node objects
   * @param links - Accumulator for link objects
   * @param parent - Parent node reference for creating links
   * @returns Object containing arrays of nodes and links
   */
  const flattenTree = useCallback(
    (
      root: TreeNode,
      nodes: D3Node[] = [],
      links: D3Link[] = [],
      parent?: D3Node,
    ) => {
      // Define collision radius based on node category
      // Larger radius = more space = better clustering visibility
      let radius = 50; // Secondary nodes (more compact)
      if (root.category === "center")
        radius = 50; // Root node
      else if (root.category === "primary") radius = 25; // Primary agents

      const node: D3Node = {
        id: root.id,
        name: root.name,
        category: root.category,
        color: root.color,
        radius,
        parentId: parent?.category === "primary" ? parent.id : undefined,
      };

      nodes.push(node);

      // Create link from parent to current node
      if (parent) {
        links.push({ source: parent.id, target: node.id });
      }

      // Recursively process children
      if (root.children) {
        root.children.forEach(child => flattenTree(child, nodes, links, node));
      }

      return { nodes, links };
    },
    [],
  );

  // ============================================================================
  // D3 VISUALIZATION EFFECT
  // ============================================================================

  // Store refs to svg elements for theme updates
  const svgElementsRef = useRef<{
    background: d3.Selection<SVGRectElement, unknown, null, undefined> | null;
    text: d3.Selection<SVGTextElement, D3Node, SVGGElement, unknown> | null;
  }>({ background: null, text: null });

  // Separate effect for theme changes - only updates colors, no re-animation
  useEffect(() => {
    if (svgElementsRef.current.background) {
      svgElementsRef.current.background.attr("fill", getBackgroundColor());
    }
  }, [theme, getBackgroundColor]);

  // Main initialization effect - runs once
  useEffect(() => {
    // Guard clause: ensure refs are ready
    if (!svgRef.current || !containerRef.current) return;

    // Get container dimensions for responsive sizing
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Clear any existing visualization
    d3.select(svgRef.current).selectAll("*").remove();

    // Initialize SVG
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height]);

    // Add background rectangle (for theme support)
    const background = svg
      .append("rect")
      .attr("width", width)
      .attr("height", height)
      .attr("fill", getBackgroundColor());

    // Store background ref for theme updates
    svgElementsRef.current.background = background;

    // Transform hierarchical data into flat structure
    const { nodes, links } = flattenTree(AGENTS_DATA);

    // ========================================================================
    // INITIAL POSITIONING (GENTLE START)
    // ========================================================================

    // Position primary agents in a circle around center
    // Starting close to final positions reduces initial chaos
    // Adjust radial distance per-primary based on how many children they have.
    // Primaries with fewer children are pushed slightly farther out to avoid
    // label overlap when some primaries have only 3 children.
    const primaryNodes = nodes.filter(n => n.category === "primary");
    // Map primary id -> child count
    const childCountMap: { [id: string]: number } = {};
    primaryNodes.forEach(p => {
      childCountMap[p.id] = nodes.filter(n => n.parentId === p.id).length;
    });

    const maxChildren = Math.max(...Object.values(childCountMap), 1);
    const baseRadius = 250; // default circle radius
    const extraPerMissingChild = 40; // push outwards for each missing child

    const angleStep = (2 * Math.PI) / primaryNodes.length;
    primaryNodes.forEach((node, i) => {
      const angle = i * angleStep - Math.PI / 2; // Start from top
      const childCount = childCountMap[node.id] ?? 0;
      const missing = Math.max(0, maxChildren - childCount);
      const radius = baseRadius + missing * extraPerMissingChild;

      node.x = width / 2 + Math.cos(angle) * radius;
      node.y = height / 2 + Math.sin(angle) * radius;
      // Start with low velocity for gentle movement
      node.vx = 0;
      node.vy = 0;
    });

    // Fix center node at exact center (fx/fy prevent movement)
    const centerNode = nodes.find(n => n.category === "center");
    if (centerNode) {
      centerNode.x = width / 2;
      centerNode.y = height / 2;
      centerNode.fx = width / 2; // Fixed x position
      centerNode.fy = height / 2; // Fixed y position
    }

    // Position secondary nodes near their primary parents
    // This creates immediate clustering effect
    nodes
      .filter(n => !n.category)
      .forEach(node => {
        const parent = primaryNodes.find(p => p.id === node.parentId);
        if (parent && parent.x && parent.y) {
          // Start near parent with small random offset
          const offsetAngle = Math.random() * 2 * Math.PI;
          const offsetDistance = 80;
          node.x = parent.x + Math.cos(offsetAngle) * offsetDistance;
          node.y = parent.y + Math.sin(offsetAngle) * offsetDistance;
          node.vx = 0;
          node.vy = 0;
        }
      });

    // ========================================================================
    // FORCE SIMULATION SETUP (OPTIMIZED FOR CLUSTERS)
    // ========================================================================

    /**
     * Boundary force to keep nodes within visible area
     * Applied after each simulation tick
     */
    const boundaryForce = () => {
      const padding = 120;
      nodes.forEach(node => {
        if (node.x! < padding) node.x = padding;
        if (node.x! > width - padding) node.x = width - padding;
        if (node.y! < padding) node.y = padding;
        if (node.y! > height - padding) node.y = height - padding;
      });
    };

    /**
     * Cluster force: Centers primary nodes with their children
     * and pulls secondary nodes toward their primary parent
     */
    const clusterForce = (alpha: number) => {
      // First, center primary nodes within their children
      nodes
        .filter(n => n.category === "primary")
        .forEach(primaryNode => {
          const children = nodes.filter(n => n.parentId === primaryNode.id);
          if (children.length > 0) {
            // Calculate centroid of children
            let centerX = 0;
            let centerY = 0;
            children.forEach(child => {
              if (child.x && child.y) {
                centerX += child.x;
                centerY += child.y;
              }
            });
            centerX /= children.length;
            centerY /= children.length;

            // Pull primary node toward the center of its children
            if (primaryNode.x && primaryNode.y) {
              const dx = centerX - primaryNode.x;
              const dy = centerY - primaryNode.y;
              primaryNode.vx! += dx * alpha * 0.2;
              primaryNode.vy! += dy * alpha * 0.2;
            }
          }
        });

      // Then, pull secondary nodes toward their primary parent
      nodes
        .filter(n => !n.category && n.parentId)
        .forEach(node => {
          const parent = nodes.find(n => n.id === node.parentId);
          if (parent && parent.x && parent.y && node.x && node.y) {
            const dx = parent.x - node.x;
            const dy = parent.y - node.y;
            // Gentle pull toward parent
            node.vx! += dx * alpha * 0.15;
            node.vy! += dy * alpha * 0.15;
          }
        });
    };

    /**
     * Create D3 force simulation with multiple forces:
     * Optimized for gentle movement and clear clustering
     *
     * 1. Link force: Connects parent-child relationships (weak)
     * 2. Charge force: Nodes repel each other (creates space between clusters)
     * 3. Collision force: Prevents node overlap
     * 4. Cluster force: Keeps related nodes together
     * 5. Boundary force: Keeps nodes within container
     *
     * Key changes for senior professionals:
     * - Lower alphaDecay = slower, calmer animation
     * - Lower velocityDecay = smoother, less jittery movement
     * - Stronger cluster forces = clearer groupings
     */
    const simulation = d3
      .forceSimulation<D3Node>(nodes)
      .alphaDecay(0.015) // Slower decay = gentler animation (default: 0.0228)
      .velocityDecay(0.6) // Higher friction = calmer movement (default: 0.4)

      // Link force: Very weak, just suggests connections
      .force(
        "link",
        d3
          .forceLink<D3Node, D3Link>(links)
          .id(d => d.id)
          .distance(d => {
            const source = d.source as D3Node;
            const target = d.target as D3Node;
            // Secondary nodes stay close to primary parent
            if (source.category === "primary" && !target.category) return 90;
            // Primary nodes maintain distance from center
            if (source.category === "center") return 280;
            return 100;
          })
          .strength(0.3), // Weak links allow clustering to dominate
      )

      // Charge force: Strong repulsion between different clusters
      .force(
        "charge",
        d3.forceManyBody().strength(d => {
          const node = d as D3Node;
          // Strong repulsion between primary nodes = clear separation
          if (node.category === "primary") return -800;
          // Weak repulsion for secondary = allows tight clustering
          if (!node.category) return -100;
          return -200;
        }),
      )

      // Collision force: Prevents overlap, creates breathing room
      .force(
        "collision",
        d3
          .forceCollide<D3Node>()
          .radius(d => d.radius + 30) // Increased padding to prevent text overlap
          .strength(1.0), // Maximum collision strength for clean separation
      )

      // Cluster force: Custom force to group related nodes
      .force("cluster", clusterForce)

      // Boundary force: Custom force to contain nodes
      .force("boundary", boundaryForce);

    // ========================================================================
    // SVG ELEMENTS (WITH SUBTLE STYLING)
    // ========================================================================

    // Create links (lines connecting nodes) with color by cluster
    const link = svg
      .append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke", d => {
        const target = d.target as D3Node;
        // Use the cluster color for connections
        return target.color;
      })
      .attr("stroke-opacity", 0.25) // Subtle, not distracting
      .attr("stroke-width", 1.5);

    // Create node groups (contains text labels)
    const node = svg
      .append("g")
      .attr("class", "nodes")
      .selectAll<SVGGElement, D3Node>("g")
      .data(nodes)
      .join("g")
      .style("cursor", "grab")
      // Add drag behavior (gentle interaction)
      .call(
        d3
          .drag<SVGGElement, D3Node>()
          .on("start", (event, d) => {
            // Very gentle reheat on drag
            if (!event.active) simulation.alphaTarget(0.1).restart();
            d.fx = d.x;
            d.fy = d.y;
          })
          .on("drag", (event, d) => {
            d.fx = event.x;
            d.fy = event.y;
          })
          .on("end", (event, d) => {
            // Gentle cool down
            if (!event.active) simulation.alphaTarget(0);
            // Release all nodes except center
            if (d.category !== "center") {
              d.fx = null;
              d.fy = null;
            }
          }),
      );

    // Create gradient definitions for text
    const defs = svg.append("defs");

    // Create a gradient for each cluster color
    const gradients = [
      { id: "gradient-center", color: "#8B7355" },
      { id: "gradient-market-compass", color: "#3D5A80" },
      { id: "gradient-financial-guardian", color: "#2D6A4F" },
      { id: "gradient-strategy-analyst", color: "#A0522D" },
      { id: "gradient-people-advisor", color: "#6B4C7C" },
      { id: "gradient-action-architect", color: "#4A5C6A" },
    ];

    gradients.forEach(({ id, color }) => {
      const gradient = defs
        .append("linearGradient")
        .attr("id", id)
        .attr("x1", "0%")
        .attr("y1", "0%")
        .attr("x2", "0%")
        .attr("y2", "100%");

      gradient
        .append("stop")
        .attr("offset", "0%")
        .attr("stop-color", color)
        .attr("stop-opacity", 1);

      gradient
        .append("stop")
        .attr("offset", "100%")
        .attr("stop-color", color)
        .attr("stop-opacity", 1);
    });

    // Mapping of node IDs to gradient IDs
    const gradientIdMap: { [key: string]: string } = {
      "market-compass": "url(#gradient-market-compass)",
      "financial-guardian": "url(#gradient-financial-guardian)",
      "strategy-analyst": "url(#gradient-strategy-analyst)",
      "people-advisor": "url(#gradient-people-advisor)",
      "action-architect": "url(#gradient-action-architect)",
    };

    // Helper function to get gradient ID for a node
    const getGradientId = (node: D3Node): string => {
      if (node.category === "center") return "url(#gradient-center)";
      if (node.id && gradientIdMap[node.id]) return gradientIdMap[node.id];
      if (node.parentId && gradientIdMap[node.parentId])
        return gradientIdMap[node.parentId];
      return getTextColor();
    };

    // Add text labels to nodes with gradient fills
    node
      .append("text")
      .text(d => d.name)
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "middle")
      .attr("fill", d => getGradientId(d))
      // Dynamic font size based on node importance
      .attr("font-size", d => {
        if (d.category === "center") return "24px";
        if (d.category === "primary") return "18px";
        return "14px";
      })
      // Dynamic font weight based on node importance
      .attr("font-weight", d => {
        if (d.category === "center") return "1000";
        if (d.category === "primary") return "700";
        return "400";
      })
      .attr("font-family", "-apple-system, Inter, sans-serif")
      // Subtle shadow for depth
      .style("filter", "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.15))")
      // Prevent text from interfering with drag events
      .style("pointer-events", "none")
      .style("user-select", "none");

    // ========================================================================
    // SIMULATION TICK HANDLER
    // ========================================================================

    /**
     * Update visual positions on each simulation tick
     * This creates the smooth animation effect
     */
    simulation.on("tick", () => {
      // Update link positions
      link
        .attr("x1", d => (d.source as D3Node).x!)
        .attr("y1", d => (d.source as D3Node).y!)
        .attr("x2", d => (d.target as D3Node).x!)
        .attr("y2", d => (d.target as D3Node).y!);

      // Update node positions
      node.attr("transform", d => `translate(${d.x},${d.y})`);
    });

    // ========================================================================
    // CLEANUP
    // ========================================================================

    /**
     * Stop simulation when component unmounts to prevent memory leaks
     */
    return () => {
      simulation.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run once on mount

  // ============================================================================
  // RENDER
  // ============================================================================

  return (
    <div
      ref={containerRef}
      className={`relative h-[900px] w-full ${className}`}
    >
      <svg ref={svgRef} className="h-full w-full" />
    </div>
  );
};

export default AgentTreeAnimation;
