/* eslint-disable prefer-const */
/* eslint-disable react-hooks/refs */
"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  createRef,
  type ReactNode,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TimelinePath, { TIMELINE_SUBPATHS } from "./TimelinePath";

gsap.registerPlugin(ScrollTrigger);

const DESIGN_WIDTH = 1200;

const HEIGHT_STOPS = [
  { width: 400, height: 1650 },
  { width: 546, height: 2300 },
  { width: 768, height: 3200 },
  { width: 992, height: 4300 },
  { width: 1200, height: 5600 },
  { width: 1408, height: 6200 },
  { width: 1440, height: 6000 },
  { width: 1920, height: 8500 },
] as const;

interface Props {
  children: ReactNode;
}

const getTimelineHeight = (viewportWidth: number) => {
  const firstStop = HEIGHT_STOPS[0];
  const lastStop = HEIGHT_STOPS.at(-1)!;

  if (viewportWidth <= firstStop.width) return firstStop.height;

  if (viewportWidth >= lastStop.width) {
    return lastStop.height * (viewportWidth / lastStop.width);
  }

  const upperIndex = HEIGHT_STOPS.findIndex(
    (stop) => stop.width >= viewportWidth,
  );

  const lowerStop = HEIGHT_STOPS[upperIndex - 1];
  const upperStop = HEIGHT_STOPS[upperIndex];

  const progress =
    (viewportWidth - lowerStop.width) / (upperStop.width - lowerStop.width);

  return lowerStop.height + (upperStop.height - lowerStop.height) * progress;
};

export default function ScaledTimelineDays({ children }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  // One ref per subpath — stable across renders
  const pathRefs = useRef(
    TIMELINE_SUBPATHS.map(() => createRef<SVGPathElement>()),
  );

  const [dimensions, setDimensions] = useState({
    scale: 1,
    height: "auto",
  });

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const updateDimensions = () => {
      const scale = wrapper.clientWidth / DESIGN_WIDTH;

      setDimensions({
        scale,
        height: `${getTimelineHeight(window.innerWidth)}px`,
      });

      ScrollTrigger.refresh();
    };

    const observer = new ResizeObserver(updateDimensions);
    observer.observe(wrapper);
    window.addEventListener("resize", updateDimensions);
    updateDimensions();

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  useLayoutEffect(() => {
    if (dimensions.height === "auto") return;

    let ctx: gsap.Context | undefined;
    let rafId: number;

    rafId = requestAnimationFrame(() => {
      const paths = pathRefs.current
        .map((r) => r.current)
        .filter(Boolean) as SVGPathElement[];
      if (paths.length === 0) return;

      // Build a GSAP timeline that drives all subpaths sequentially,
      // tied to a single ScrollTrigger on the wrapper.
      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 60%",
            end: "bottom 50%",
            scrub: 1,
          },
        });

        const totalLength = paths.reduce((sum, path) => {
          const local = path.getTotalLength();
          const ctm = path.getCTM();
          const sx = ctm ? Math.sqrt(ctm.a * ctm.a + ctm.b * ctm.b) : 1;
          const sy = ctm ? Math.sqrt(ctm.c * ctm.c + ctm.d * ctm.d) : 1;
          return sum + local * Math.sqrt(sx * sy);
        }, 0);

        // Weight each subpath's position in the timeline by its share of total length
        let position = 0;
        paths.forEach((path) => {
          const local = path.getTotalLength();
          const ctm = path.getCTM();
          const sx = ctm ? Math.sqrt(ctm.a * ctm.a + ctm.b * ctm.b) : 1;
          const sy = ctm ? Math.sqrt(ctm.c * ctm.c + ctm.d * ctm.d) : 1;
          const rendered = local * Math.sqrt(sx * sy);
          const weight = rendered / totalLength;

          // Hide fully before its turn
          gsap.set(path, {
            strokeDasharray: rendered,
            strokeDashoffset: rendered,
          });

          tl.to(
            path,
            {
              strokeDashoffset: 0,
              ease: "none",
              duration: weight,
            },
            position,
          );

          position += weight;
        });
      }, wrapperRef);
    });

    return () => {
      cancelAnimationFrame(rafId);
      ctx?.revert();
    };
  }, [dimensions]);

  return (
    <div
      ref={wrapperRef}
      className="itinerary-scaled-days"
      style={{ height: dimensions.height }}
    >
      <div
        className="itinerary-scaled-days__canvas"
        style={{ transform: `scale(${dimensions.scale})` }}
      >
        <TimelinePath pathRefs={pathRefs.current} className="timeline-svg" />
        {children}
      </div>
    </div>
  );
}
