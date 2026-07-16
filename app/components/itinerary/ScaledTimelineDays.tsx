"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const DESIGN_WIDTH = 1200;

interface Props {
  children: ReactNode;
}

export default function ScaledTimelineDays({ children }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ scale: 1, height: "auto" });

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const canvas = canvasRef.current;

    if (!wrapper || !canvas) return;

    const updateDimensions = () => {
      const scale = wrapper.clientWidth / DESIGN_WIDTH;
      setDimensions({
        scale,
        height: `${canvas.offsetHeight * scale}px`,
      });
    };

    const observer = new ResizeObserver(updateDimensions);
    observer.observe(wrapper);
    observer.observe(canvas);
    updateDimensions();

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="itinerary-scaled-days"
      style={{ height: dimensions.height }}
    >
      <div
        ref={canvasRef}
        className="itinerary-scaled-days__canvas"
        style={{ transform: `scale(${dimensions.scale})` }}
      >
        {children}
      </div>
    </div>
  );
}
