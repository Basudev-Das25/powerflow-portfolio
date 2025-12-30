export default function WireSystem({ isBooted, start }) {
  if (!isBooted || !start) return null;

  const x = start.x ?? 0;
  const y = start.y ?? 0;

  return (
    <svg
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-10" viewBox={`0 0 ${window.innerWidth} ${window.innerHeight}`} preserveAspectRatio="none"
    >
      <path
        d={`
          M ${x} ${y}
          H ${x + 300}
          V ${y + 500}
        `}
        fill="none"
        stroke="#00f6ff"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
