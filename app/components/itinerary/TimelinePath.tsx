/* eslint-disable @typescript-eslint/no-unused-vars */
import { forwardRef } from "react";
import type { SVGProps } from "react";

// Each subpath as a standalone absolute-coordinate path.
// Ordered top-to-bottom by vertical position so the animation
// flows naturally as the user scrolls down.
export const TIMELINE_SUBPATHS = [
  // Decorative top segment (y ≈ -0.08 → 173)
  "M328.293 -0.080C300.793 46.420 118.293 83.420 102.793 173.419",
  // Tiny connector near top (y ≈ 304 → 356)
  "M72.793 304.419C112.293 349.419 230.793 356.419 230.793 356.419",
  // Main timeline segments ordered by starting y
  "M291.793 419.919C319.793 453.419 197.293 473.419 174.793 521.919",
  "M102.293 588.919C73.293 677.419 282.293 703.419 338.293 782.919",
  "M368.293 906.919C377.793 963.919 85.293 946.919 61.293 1039.420",
  "M84.793 1123.420C194.793 1190.420 389.793 1166.920 393.793 1206.420",
  "M349.793 1284.420C277.793 1356.420 86.793 1261.920 0.293 1437.420",
  "M22.293 1501.420C74.793 1548.920 226.293 1544.420 266.793 1575.920",
  "M381.793 1622.920C380.793 1684.920 183.293 1674.420 148.293 1723.920",
  "M205.293 1948.420C212.793 2027.920 411.793 1978.920 422.293 2051.920",
  "M422.293 2163.420C389.793 2226.420 214.293 2163.420 140.293 2226.420",
  "M263.293 2521.420C258.793 2589.420 111.293 2540.420 86.293 2643.920",
  "M62.793 2732.920C152.793 2814.920 271.293 2688.420 330.293 2768.920",
] as const;

interface TimelinePathProps extends SVGProps<SVGSVGElement> {
  pathRefs?: React.RefObject<SVGPathElement>[];
}

const TimelinePath = forwardRef<SVGPathElement, TimelinePathProps>(
  ({ pathRefs, ...props }, _ref) => {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width={691}
        height={8400}
        viewBox="0 0 691 8400"
        fill="none"
        className={props.className}
      >
        <defs>
          {TIMELINE_SUBPATHS.map((d, i) => (
            <mask id={`timeline-mask-${i}`} key={i}>
              <path
                ref={pathRefs?.[i]}
                d={d}
                stroke="white"
                strokeWidth={12}
                fill="none"
              />
            </mask>
          ))}
        </defs>

        <g transform="translate(0 0) scale(1.634 1.8)">
          {TIMELINE_SUBPATHS.map((d, i) => (
            <path
              key={i}
              d={d}
              stroke="#000"
              strokeWidth={2}
              strokeLinecap="round"
              strokeDasharray="1 8"
              fill="none"
              mask={`url(#timeline-mask-${i})`}
            />
          ))}
        </g>
      </svg>
    );
  },
);

TimelinePath.displayName = "TimelinePath";

export default TimelinePath;
