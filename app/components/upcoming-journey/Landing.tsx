"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !previewRef.current) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        previewRef.current,
        { autoAlpha: 0, y: 16, pointerEvents: "none" },
        {
          autoAlpha: 1,
          y: 0,
          pointerEvents: "auto",
          duration: 2.65,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top",
            once: true,
          },
        },
      );
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section className="landing" ref={sectionRef}>
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
          <div className="pin pin--himalaya">
            <Link href="/itinerary" aria-label="View Himalaya journey">
              <Image
                src="/assets/upcoming-journey/mountains.png"
                alt="Himalaya mountains"
                width={180}
                height={130}
                className="pin__image"
              />
            </Link>
          </div>

          {/* Preview */}
          <div className="pin__preview pin__preview--himalaya" ref={previewRef}>
            <Link href="/itinerary" aria-label="View Himalaya journey">
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
            </Link>
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
