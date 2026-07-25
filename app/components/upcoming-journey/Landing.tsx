"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Landing = () => {
  const [himalayaVisible, setHimalayaVisible] = useState(false);
  const [previewOpacity, setPreviewOpacity] = useState(0);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [mobileAnimated, setMobileAnimated] = useState(false);

  const pinRef = useRef<HTMLDivElement>(null);

  // Detect mobile after hydration
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const raf = requestAnimationFrame(() => setIsMobile(mq.matches));

    const handler = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    mq.addEventListener("change", handler);

    return () => {
      cancelAnimationFrame(raf);
      mq.removeEventListener("change", handler);
    };
  }, []);

  // Mobile animation
  useEffect(() => {
    if (isMobile !== true) return;

    const t = setTimeout(() => {
      setMobileAnimated(true);
    }, 1000);

    return () => clearTimeout(t);
  }, [isMobile]);

  // Desktop scroll animation
  useEffect(() => {
    if (isMobile !== false) return;

    const el = pinRef.current;
    if (!el) return;

    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;

      // Pin reaches 60% of viewport -> start fade in
      const fadeInStart = vh * 0.6;

      // Pin reaches 30% of viewport -> fully visible
      const fadeInEnd = vh * 0.3;

      // Fade out after pin has completely left the viewport
      const fadeOutDistance = 150;

      let opacity = 0;

      // -------------------------
      // Fade In
      // -------------------------
      if (rect.top > fadeInStart) {
        // Hidden before reaching 60%
        opacity = 0;
      } else if (rect.top > fadeInEnd) {
        // Fade between 60% and 30%
        opacity = (fadeInStart - rect.top) / (fadeInStart - fadeInEnd);
      } else {
        // Fully visible above 30%
        opacity = 1;
      }

      // -------------------------
      // Fade Out
      // -------------------------
      if (rect.bottom <= 0) {
        opacity = Math.max(0, 1 + rect.bottom / fadeOutDistance);
      }

      opacity = Math.max(0, Math.min(1, opacity));

      setPreviewOpacity(opacity);
      setHimalayaVisible(opacity > 0.01);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  const himalayaClasses = [
    "pin__preview",
    "pin__preview--himalaya",
    !isMobile && himalayaVisible ? "pin__preview--visible" : "",
    isMobile ? "pin__preview--mobile" : "",
    isMobile && mobileAnimated ? "pin__preview--pop" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className="landing">
      <div className="container">
        <div className="map">
          <Image
            src="/assets/india-map.webp"
            alt="Future Journeys Map"
            width={1080}
            height={1430}
            priority
          />

          {/* Himalaya pin */}
          <div ref={pinRef} className="pin pin--himalaya">
            <Image
              src="/assets/upcoming-journey/mountains.png"
              alt="Himalaya mountains"
              width={180}
              height={130}
              className="pin__image"
            />
          </div>

          {/* Preview */}
          <div
            className={himalayaClasses}
            style={
              !isMobile
                ? {
                    opacity: previewOpacity,
                    transition: "none",
                  }
                : undefined
            }
          >
            <Image
              src="/assets/upcoming-journey/himalaya-mobile.png"
              alt="Himalaya destination"
              width={320}
              height={220}
              className="pin__preview-img pin__preview-img--mobile"
            />

            <Image
              src="/assets/upcoming-journey/himalaya.png"
              alt="Himalaya destination"
              width={800}
              height={560}
              sizes="(max-width: 767px) 0px, (max-width: 991px) 28vw, 24vw"
              quality={90}
              className="pin__preview-img pin__preview-img--desktop"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <h2 className="title">Future Journeys</h2>
          </div>

          <div className="col-12">
            <p className="copy">
              Every journey has a different flavor,
              <br />
              but all of them are designed
              <br />
              specifically for you
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
