"use client";

import Image from "next/image";
import Link from "next/link";

const ItineraryCTA = () => {
  return (
    <section className="itinerary-cta-section">
      <div className="container">
        <div className="row align-items-center">
          {/* India map — left */}
          <div className="col-5 col-md-4 offset-md-1 itinerary-cta__map-col">
            <div className="itinerary-cta__map">
              <Image
                src="/assets/itinerary/india-brushed.png"
                alt="India map"
                width={600}
                height={720}
                priority
              />
            </div>
          </div>

          {/* Text + CTA — right */}
          <div className="col-7 col-md-5 offset-md-1 itinerary-cta__text-col">
            <div className="itinerary-cta__text">
              <h2 className="itinerary-cta__title">Listen your heart</h2>

              <p className="itinerary-cta__copy">
                Each journey is crafted to <br /> express your higher purpose.
                <br />
                You just have to answer the call
              </p>

              <Link href="/enquire" className="itinerary-cta__cta">
                Write me a message!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItineraryCTA;
