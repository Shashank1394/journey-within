"use client";

import { useState } from "react";
import Image from "next/image";

export interface ItineraryCarouselSlide {
  src: string;
  alt: string;
}

interface Props {
  slides: ItineraryCarouselSlide[];
}

export default function ItineraryCarouselClient({ slides }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleSlides = [0, 1, 2].map(
    (offset) => slides[(activeIndex + offset) % slides.length],
  );

  const showPrevious = () => {
    setActiveIndex((index) => (index - 1 + slides.length) % slides.length);
  };

  const showNext = () => {
    setActiveIndex((index) => (index + 1) % slides.length);
  };

  return (
    <section className="itinerary-carousel" aria-label="Journey photo gallery">
      <div className="itinerary-carousel__inner">
        <div className="itinerary-carousel__slides">
          {visibleSlides.map((slide, index) => (
            <div
              className={`itinerary-carousel__slide itinerary-carousel__slide--${index}`}
              key={slide.src}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                width={644}
                height={627}
                sizes="(min-width: 1920px) 280px, (min-width: 1200px) 220px, (min-width: 768px) 170px, 30vw"
              />
            </div>
          ))}
        </div>

        <button
          type="button"
          className="itinerary-carousel__control itinerary-carousel__control--previous"
          onClick={showPrevious}
          aria-label="Show previous photos"
        >
          <Image
            src="/assets/itinerary/carousel/left-arrow.png"
            alt=""
            width={732}
            height={135}
          />
        </button>
        <button
          type="button"
          className="itinerary-carousel__control itinerary-carousel__control--next"
          onClick={showNext}
          aria-label="Show next photos"
        >
          <Image
            src="/assets/itinerary/carousel/right-arrow.png"
            alt=""
            width={728}
            height={131}
          />
        </button>
      </div>
    </section>
  );
}
