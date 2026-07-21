"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const DESIGN_WIDTH = 1200;
const HEIGHT_STOPS = [
  { width: 400, height: 1650 },
  { width: 546, height: 2300 },
  { width: 768, height: 3200 },
  { width: 992, height: 4000 },
  { width: 1200, height: 4900 },
  { width: 1408, height: 6200 },
  { width: 1440, height: 6000 },
  { width: 1920, height: 8400 },
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
  const [dimensions, setDimensions] = useState({ scale: 1, height: "auto" });

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const updateDimensions = () => {
      const scale = wrapper.clientWidth / DESIGN_WIDTH;
      setDimensions({
        scale,
        height: `${getTimelineHeight(window.innerWidth)}px`,
      });
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
        {children}
      </div>
    </div>
  );
}
