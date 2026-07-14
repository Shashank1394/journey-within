"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import itineraryDays from "./itinerary-data";

const offsetStyle = (offset?: { x?: string; y?: string }): CSSProperties =>
  ({
    "--itinerary-offset-x": offset?.x ?? "0px",
    "--itinerary-offset-y": offset?.y ?? "0px",
  }) as CSSProperties;

const ItineraryDays = () => {
  return (
    <section className="itinerary-days-section">
      <div className="container">
        {itineraryDays.map((item, index) => {
          const isReversed = index % 2 === 0;

          return (
            <div
              key={index}
              className={`row align-items-center itinerary-day${isReversed ? " itinerary-day--reversed" : ""}`}
            >
              {/* Image — on reversed rows moves to the right on all screen sizes */}
              <div
                className={`col-5 col-md-4 offset-md-1 ${isReversed ? "order-2" : "order-1"} itinerary-day__image-col`}
              >
                <div
                  className="itinerary-day__image"
                  style={offsetStyle(item.imageOffset)}
                >
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    width={400}
                    height={400}
                    style={{ objectPosition: item.imagePosition ?? "center" }}
                  />
                </div>
              </div>

              {/* Text — on reversed rows moves to the left on all screen sizes */}
              <div
                className={`col-7 col-md-5 ${isReversed ? "order-1 offset-md-0" : "order-2 offset-md-1"} itinerary-day__text-col`}
              >
                <div
                  className={`itinerary-day__text${isReversed ? " itinerary-day__text--right" : ""}`}
                  style={offsetStyle(item.textOffset)}
                >
                  <h3 className="itinerary-day__heading">
                    {item.day}
                    <span className="itinerary-day__separator"> | </span>
                    {item.date}
                  </h3>
                  <ul className="itinerary-day__list">
                    {item.description.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ItineraryDays;
