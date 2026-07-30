"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

import HomepageCircle from "../../animated-assets/homepage-circle.svg";

gsap.registerPlugin(ScrollTrigger);

const mapImages = [
  { name: "1", src: "/assets/home/1.svg", width: 1127, height: 1096 },
  { name: "2", src: "/assets/home/2.svg", width: 1088, height: 1096 },
  { name: "3", src: "/assets/home/3.svg", width: 1074, height: 1096 },
  { name: "4", src: "/assets/home/4.svg", width: 1127, height: 1096 },
  { name: "5", src: "/assets/home/5.svg", width: 1113, height: 1096 },
  { name: "6", src: "/assets/home/6.svg", width: 1059, height: 1096 },
  { name: "plane", src: "/assets/home/plane.svg", width: 1890, height: 870 },
] as const;

const Hero = () => {
  const circleRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!circleRef.current) return;

    const path = circleRef.current.querySelector(
      'path[class*="circle-path"]',
    ) as SVGPathElement | null;

    if (!path) {
      console.warn("Circle path not found.");
      return;
    }

    const length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
      opacity: 0.2,
    });

    gsap.to(path, {
      strokeDashoffset: 0,
      opacity: 1,
      duration: 3.8,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: circleRef.current,
        start: "30% 90%",
        once: true,
      },
    });
  }, []);

  useEffect(() => {
    if (!mapRef.current) return;

    const numberedImages = mapRef.current.querySelectorAll(
      ".map-image:not(.map-image--plane)",
    );

    const context = gsap.context(() => {
      gsap.fromTo(
        numberedImages,
        { autoAlpha: 0, scale: 0.35, transformOrigin: "center" },
        {
          autoAlpha: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.3,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: mapRef.current,
            start: "top 80%",
            once: true,
          },
        },
      );
    }, mapRef);

    return () => context.revert();
  }, []);

  return (
    <section className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <section className="hero">
              <h2 className="title">Find Yourself,</h2>

              <p className="intro">
                Have you ever thought about finding yourself in a faraway land?
              </p>

              <p className="copy">
                In a balance of wild nature, authentic connections, and inner
                exploration, you will come into contact with the most joyful
                part of yourself.
              </p>

              <p className="copy accent">
                This is the spark you have been looking for, the engine of the
                change you deeply desire.
              </p>

              <p className="kicker">India is ready to...</p>

              <h3 className="headline">Change Your Life.</h3>

              <div className="hero-circle" ref={circleRef}>
                <HomepageCircle className="circle-svg" />
              </div>

              <div className="map" aria-hidden="true" ref={mapRef}>
                {mapImages.map(({ name, src, width, height }) => (
                  <Image
                    className={`map-image map-image--${name}`}
                    key={src}
                    src={src}
                    alt=""
                    width={width}
                    height={height}
                    unoptimized
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
