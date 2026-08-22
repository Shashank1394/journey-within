"use client";

import { useId, useLayoutEffect, useSyncExternalStore } from "react";

import type { SVGProps } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ItineraryLine from "../../../public/assets/itinerary/itinerary-line.svg";
import ItineraryLineMobile from "../../../public/assets/itinerary/itinerary-line-mobile.svg";

gsap.registerPlugin(ScrollTrigger);

// Adjust these design-canvas values to size or reposition the timeline.
//
// ScaledTimelineDays scales the entire 1200px canvas, so this placement stays
// proportional at every viewport size.
const TIMELINE_LAYOUT = {
  width: 458,
  height: 5157,
  top: 250,
  left: 470,
} as const;

const TIMELINE_LAYOUT_MOBILE = {
  width: 458,
  height: 4152,
  top: 250,
  left: 280,
} as const;

// Separate GSAP animation values for desktop and mobile.
const TIMELINE_ANIMATION = {
  desktop: {
    fromClipPath: "inset(0 0px 100% 0)",
    toClipPath: "inset(0 0px 0% 0)",
    start: "top 60%",
    end: "bottom 50%",
    scrub: true,
    fastScrollEnd: true,
  },

  mobile: {
    fromClipPath: "inset(0 -350px 100% 0)",
    toClipPath: "inset(0 -350px -100% 0)",
    start: "top 60%",
    end: "bottom 0%",
    scrub: true,
    fastScrollEnd: true,
  },
} as const;

// The imported SVG replaces the previously hand-authored timeline paths.
// Retained as an empty export for ScaledTimelineDays' existing API.
export const TIMELINE_SUBPATHS = [] as const;

interface TimelinePathProps extends SVGProps<SVGSVGElement> {
  pathRefs?: React.RefObject<SVGPathElement>[];
}

const MOBILE_BREAKPOINT = 992;

const TimelinePath = ({ pathRefs, ...props }: TimelinePathProps) => {
  void pathRefs;

  const svgId = useId();

  // useSyncExternalStore is the correct pattern for subscribing to external
  // browser APIs like matchMedia — no effect, no manual setState needed.
  // The server snapshot returns false (desktop) to avoid SSR/hydration mismatch.
  const isMobile = useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

      mq.addEventListener("change", onChange);

      return () => mq.removeEventListener("change", onChange);
    },
    () => window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`).matches,
    () => false,
  );

  useLayoutEffect(() => {
    const svg = document.getElementById(
      svgId,
    ) as unknown as SVGSVGElement | null;

    const timeline = svg?.closest(".itinerary-scaled-days");

    if (!svg || !timeline) return;

    // Select the correct animation values for the current breakpoint.
    const animation = isMobile
      ? TIMELINE_ANIMATION.mobile
      : TIMELINE_ANIMATION.desktop;

    const context = gsap.context(() => {
      gsap.fromTo(
        svg,
        {
          clipPath: animation.fromClipPath,
        },
        {
          clipPath: animation.toClipPath,
          ease: "none",
          scrollTrigger: {
            trigger: timeline,
            start: animation.start,
            end: animation.end,
            scrub: animation.scrub,
            fastScrollEnd: animation.fastScrollEnd,
          },
        },
      );
    });

    return () => context.revert();

    // Re-run when the SVG swaps or breakpoint changes so ScrollTrigger
    // attaches to the correct element with the correct animation values.
  }, [svgId, isMobile]);

  const layout = isMobile ? TIMELINE_LAYOUT_MOBILE : TIMELINE_LAYOUT;

  const sharedProps = {
    ...props,
    id: svgId,
    width: layout.width,
    height: layout.height,
    viewBox: "0 0 2776 27180",
    preserveAspectRatio: "none" as const,
    style: {
      ...props.style,
      position: "absolute" as const,
      width: layout.width,
      height: layout.height,
      top: layout.top,
      left: layout.left,
    },
  };

  return isMobile ? (
    <ItineraryLineMobile {...sharedProps} />
  ) : (
    <ItineraryLine {...sharedProps} />
  );
};

export default TimelinePath;
