export default function OrbitalAnimation() {
  return (
    <div className="relative flex h-96 items-center justify-center overflow-hidden">
      {/* SVG Rings */}
      <svg
        className="absolute h-full w-full"
        viewBox="0 0 300 300"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient
            id="amberGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="rgb(251,191,36)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="rgb(251,191,36)" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(59,130,246)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="rgb(59,130,246)" stopOpacity="0.1" />
          </linearGradient>
          <filter id="orbitGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Amber Ring */}
        <circle
          cx="150"
          cy="150"
          r="100"
          fill="none"
          stroke="url(#amberGradient)"
          strokeWidth="1.5"
          className="animate-ring-pulse"
          filter="url(#orbitGlow)"
        />
        {/* Blue Ring */}
        <circle
          cx="150"
          cy="150"
          r="65"
          fill="none"
          stroke="url(#blueGradient)"
          strokeWidth="1.5"
          className="animate-ring-pulse-delayed"
          filter="url(#orbitGlow)"
        />

        {/* Connection Lines */}
        <g
          opacity="0.2"
          stroke="rgba(251,191,36,0.3)"
          strokeWidth="1"
          strokeDasharray="4,4"
        >
          <line
            x1="150"
            y1="150"
            x2="250"
            y2="150"
            className="animate-connection-pulse"
          />
          <line
            x1="150"
            y1="150"
            x2="191"
            y2="59"
            className="animate-connection-pulse-delayed"
          />
          <line
            x1="150"
            y1="150"
            x2="109"
            y2="59"
            className="animate-connection-pulse-delayed-1"
          />
        </g>
      </svg>

      {/* Orbits and Core */}
      <div className="relative flex h-full w-full items-center justify-center">
        {/* Amber Orbit 1 */}
        <div className="animate-orbit-primary absolute flex h-[240px] w-[240px] items-center justify-center">
          <div className="animate-glow-amber absolute top-0 left-1/2 h-7 w-7 -translate-x-1/2 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 shadow-[0_0_20px_rgba(251,191,36,0.9)]" />
        </div>

        {/* Amber Orbit 2 */}
        <div className="animate-orbit-primary-delayed-4 absolute flex h-[240px] w-[240px] items-center justify-center">
          <div className="animate-glow-amber-delayed absolute top-0 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.7)]" />
        </div>

        {/* Amber Orbit 3 */}
        <div className="animate-orbit-primary-delayed-8 absolute flex h-[240px] w-[240px] items-center justify-center">
          <div className="animate-glow-amber-delayed-1 absolute top-0 left-1/2 h-5 w-5 -translate-x-1/2 rounded-full bg-amber-600 shadow-[0_0_12px_rgba(251,191,36,0.6)]" />
        </div>

        {/* Blue Orbit 1 */}
        <div className="animate-orbit-secondary absolute flex h-[160px] w-[160px] items-center justify-center">
          <div className="animate-glow-blue absolute top-0 left-1/2 h-7 w-7 -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-[0_0_20px_rgba(59,130,246,0.9)]" />
        </div>

        {/* Blue Orbit 2 */}
        <div className="animate-orbit-secondary-delayed-3 absolute flex h-[160px] w-[160px] items-center justify-center">
          <div className="animate-glow-blue-delayed absolute top-0 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.7)]" />
        </div>

        {/* Blue Orbit 3 */}
        <div className="animate-orbit-secondary-delayed-6 absolute flex h-[160px] w-[160px] items-center justify-center">
          <div className="animate-glow-blue-delayed-1 absolute top-0 left-1/2 h-5 w-5 -translate-x-1/2 rounded-full bg-blue-700 shadow-[0_0_12px_rgba(59,130,246,0.6)]" />
        </div>

        {/* Core */}
        <div className="animate-pulse-core">
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-amber-300 to-blue-500 shadow-[0_0_40px_rgba(251,191,36,0.7),_0_0_50px_rgba(59,130,246,0.5),_inset_0_0_25px_rgba(255,255,255,0.6)]" />
        </div>
      </div>
    </div>
  );
}
