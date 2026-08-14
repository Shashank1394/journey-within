import Image from "next/image";
import CarouselModalServer from "./CarouselModalServer";
import { Suspense } from "react";

const ItineraryHero = () => {
  return (
    <section className="itinerary-hero-section">
      <div className="container">
        {/* Title */}
        <div className="row">
          <div className="col-10 offset-1">
            <h1 className="itinerary-hero__title">
              A Journey
              <br />
              Into the Himalayas
            </h1>
          </div>
        </div>

        {/* Date */}
        <div className="row">
          <div className="col-10 offset-1">
            <p className="itinerary-hero__date">10-25 October &apos;26</p>
          </div>
        </div>

        {/* Card — brush rendered via ::before pseudo-element */}
        <div className="row">
          <div className="col-12">
            <div className="itinerary-hero__card">
              {/* Body SVG */}
              <div className="itinerary-hero__body-svg">
                <Image
                  src="/assets/itinerary/itinerary.svg"
                  alt="This trip has been purposely designed to reconnect you with your deepest and most sincere purpose."
                  width={800}
                  height={300}
                />
              </div>

              {/* Gallery button — opens carousel modal */}
              <div className="itinerary-hero__gallery-btn">
                <Suspense fallback={null}>
                  <CarouselModalServer />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItineraryHero;
