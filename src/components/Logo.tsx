/* eslint-disable @next/next/no-img-element */
/**
 * The Zelcodes logo: handwritten "zelcodes". Liquid-glass version in dark mode,
 * ink version in light mode (the glass logo is near-white and needs a dark background).
 */
export function Logo({ height = 30 }: { height?: number }) {
  const glassW = Math.round((height * 280) / 118);
  const inkW = Math.round((height * 560) / 219);
  return (
    <span className="inline-flex items-center" style={{ height }}>
      <img src="/brand/logo-ink.png" alt="Zelcodes" width={inkW} height={height}
        className="block dark:hidden" style={{ height, width: "auto" }} />
      <img src="/brand/logo-glass@2x.png" alt="Zelcodes" width={glassW} height={height}
        className="hidden dark:block" style={{ height: height * 1.12, width: "auto" }} />
    </span>
  );
}
