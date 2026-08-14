"use client";

import { useId, useLayoutEffect } from "react";
import type { SVGProps } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ItineraryLine from "../../../public/assets/itinerary/itinerary-line.svg";

gsap.registerPlugin(ScrollTrigger);

// Adjust these design-canvas values to size or reposition the timeline.
// ScaledTimelineDays scales the entire 1200px canvas, so this placement stays
// proportional at every viewport size.
const TIMELINE_LAYOUT = {
  width: 458,
  height: 5157,
  top: 250,
  left: 470,
} as const;

// The imported SVG replaces the previously hand-authored timeline paths.
// Retained as an empty export for ScaledTimelineDays' existing API.
export const TIMELINE_SUBPATHS = [] as const;

interface TimelinePathProps extends SVGProps<SVGSVGElement> {
  pathRefs?: React.RefObject<SVGPathElement>[];
}

const TimelinePath = ({ pathRefs, ...props }: TimelinePathProps) => {
  void pathRefs;
  const svgId = useId();

  useLayoutEffect(() => {
    const svg = document.getElementById(
      svgId,
    ) as unknown as SVGSVGElement | null;
    const timeline = svg?.closest(".itinerary-scaled-days");

    if (!svg || !timeline) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        svg,
        { clipPath: "inset(0 0 100% 0)" },
        {
          clipPath: "inset(0 0 0% 0)",
          ease: "none",
          scrollTrigger: {
            trigger: timeline,
            start: "top 60%",
            end: "bottom 50%",
            scrub: true,
            fastScrollEnd: true,
          },
        },
      );
    });

    return () => context.revert();
  }, [svgId]);

  return (
    <ItineraryLine
      {...props}
      id={svgId}
      width={TIMELINE_LAYOUT.width}
      height={TIMELINE_LAYOUT.height}
      viewBox="0 0 2776 27180"
      preserveAspectRatio="none"
      style={{
        ...props.style,
        position: "absolute",
        width: TIMELINE_LAYOUT.width,
        height: TIMELINE_LAYOUT.height,
        top: TIMELINE_LAYOUT.top,
        left: TIMELINE_LAYOUT.left,
      }}
    />
  );
};

export default TimelinePath;
