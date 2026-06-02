/**
 * ETIAS circular emblem — a laurel wreath around a serif "E"
 * with a small accent star. Brand palette: navy / white / red.
 */
export default function Logo({
  size = 38,
  className,
}: {
  size?: number;
  className?: string;
}) {
  const leaves: [number, number, number][] = [
    [21.36, 38.97, 115], [15.95, 36.89, 137], [11.7, 32.93, 159],
    [9.25, 27.68, 181], [8.95, 21.88, 203], [10.84, 16.4, 225],
    [26.64, 38.97, 65], [32.05, 36.89, 43], [36.3, 32.93, 21],
    [38.75, 27.68, -1], [39.05, 21.88, -23], [37.16, 16.4, -45],
  ];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="ETIAS Application Desk"
    >
      <circle cx="24" cy="24" r="23" fill="#ffffff" />
      <circle cx="24" cy="24" r="23" fill="none" stroke="#0d3b66" strokeWidth="2" />
      {leaves.map(([cx, cy, rot], i) => (
        <ellipse
          key={i}
          cx={cx}
          cy={cy}
          rx="3.1"
          ry="1.35"
          fill="#0d3b66"
          transform={`rotate(${rot} ${cx} ${cy})`}
        />
      ))}
      <path
        d="M24,7.5 L24.5,8.81 L25.9,8.88 L24.81,9.76 L25.18,11.12 L24,10.35 L22.82,11.12 L23.19,9.76 L22.1,8.88 L23.5,8.81 Z"
        fill="#e4002b"
      />
      <text
        x="24"
        y="31"
        textAnchor="middle"
        fontWeight="600"
        fontSize="20"
        fill="#0d3b66"
        style={{ fontFamily: "var(--font-fraunces), Georgia, 'Times New Roman', serif" }}
      >
        E
      </text>
    </svg>
  );
}
