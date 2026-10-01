/** Hand-drawn style Dauin scene: sun, palm island, bangka boat, turtle and waves */
export function HeroScene({ className }: { className?: string }) {
  const rays = Array.from({ length: 12 }, (_, i) => (i * Math.PI) / 6);
  return (
    <svg
      viewBox="0 0 520 440"
      className={className}
      role="img"
      aria-label="Illustration of a palm island, a bangka boat and a sea turtle under the sun"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Sun */}
      <g className="stroke-ink" strokeWidth={5}>
        {rays.map((angle) => (
          <line
            key={angle}
            x1={390 + Math.cos(angle) * 80}
            y1={105 + Math.sin(angle) * 80}
            x2={390 + Math.cos(angle) * 100}
            y2={105 + Math.sin(angle) * 100}
          />
        ))}
      </g>
      <circle cx={390} cy={105} r={62} className="fill-accent stroke-ink" strokeWidth={4} />

      {/* Back sea */}
      <path
        d="M0 262c43-14 87-14 130 0s87 14 130 0 87-14 130 0 87 14 130 0V440H0z"
        className="fill-primary stroke-ink"
        strokeWidth={4}
      />

      {/* Island */}
      <path d="M140 266c30-52 170-52 200 0z" className="fill-palm stroke-ink" strokeWidth={4} />

      {/* Palm tree */}
      <path d="M246 236c-6-46-14-86-34-122" className="fill-none stroke-ink" strokeWidth={18} />
      <path d="M246 236c-6-46-14-86-34-122" className="fill-none stroke-[oklch(0.6_0.08_60)]" strokeWidth={10} />
      <g className="fill-palm stroke-ink" strokeWidth={4}>
        <path d="M212 112c-30-26-70-26-96-6 34-4 66 6 96 6z" />
        <path d="M212 112c-8-36-40-58-74-58 28 14 50 34 74 58z" />
        <path d="M212 112c18-34 54-44 84-30-32 2-58 14-84 30z" />
        <path d="M212 112c36-12 72 4 88 32-28-16-58-24-88-32z" />
        <path d="M212 112c-24 10-40 36-38 66 10-28 22-48 38-66z" />
      </g>
      <circle cx={214} cy={118} r={7} className="fill-[oklch(0.5_0.08_60)] stroke-ink" strokeWidth={3} />

      {/* Middle wave */}
      <path
        d="M0 318c43-14 87-14 130 0s87 14 130 0 87-14 130 0 87 14 130 0V440H0z"
        className="fill-secondary stroke-ink"
        strokeWidth={4}
      />

      {/* Bangka boat with outriggers */}
      <g className="stroke-ink" strokeWidth={4}>
        <line x1={318} y1={322} x2={482} y2={322} />
        <path d="M350 300l-22 22M450 300l22 22" className="fill-none" />
        <path d="M332 298c46 22 102 22 148 0l-14 20c-40 16-80 16-120 0z" className="fill-card" />
        <line x1={406} y1={300} x2={406} y2={236} />
        <path d="M410 240l40 46h-40z" className="fill-sun" />
      </g>

      {/* Front wave */}
      <path
        d="M0 362c43-14 87-14 130 0s87 14 130 0 87-14 130 0 87 14 130 0V440H0z"
        className="fill-primary stroke-ink"
        strokeWidth={4}
      />

      {/* Turtle */}
      <g className="stroke-ink" strokeWidth={4}>
        <ellipse cx={92} cy={386} rx={14} ry={9} transform="rotate(-30 92 386)" className="fill-palm" />
        <ellipse cx={176} cy={388} rx={14} ry={9} transform="rotate(30 176 388)" className="fill-palm" />
        <circle cx={196} cy={404} r={12} className="fill-palm" />
        <ellipse cx={136} cy={406} rx={46} ry={30} className="fill-[oklch(0.55_0.1_150)]" />
        <path d="M110 396l26-14 26 14-10 22h-32z" className="fill-none" strokeWidth={3} />
      </g>
      <circle cx={200} cy={400} r={2.5} className="fill-ink" />

      {/* Fish */}
      <g className="fill-sun stroke-ink" strokeWidth={3}>
        <path d="M420 400c12-12 30-12 40 0-10 12-28 12-40 0zM420 400l-14-9v18z" />
        <path d="M470 424c8-8 20-8 28 0-8 8-20 8-28 0zM470 424l-10-6v12z" />
      </g>
    </svg>
  );
}
