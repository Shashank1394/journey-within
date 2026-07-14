import type { CSSProperties } from "react";
import Image from "next/image";
import { ItineraryDay } from "./itinerary.types";

interface Props {
  day: ItineraryDay;
}

const layoutStyle = (day: ItineraryDay): CSSProperties => {
  const text = day.layout?.text;
  const image = day.layout?.image;

  return {
    "--timeline-min-height": day.layout?.minHeight ?? "30rem",
    "--timeline-text-column": text?.column ?? "1 / span 6",
    "--timeline-text-width": text?.maxWidth ?? "32rem",
    "--timeline-text-x": text?.x ?? "0px",
    "--timeline-text-y": text?.y ?? "0px",
    "--timeline-text-align": text?.textAlign ?? "left",
    "--timeline-text-justify": text?.align ?? "start",
    "--timeline-image-column": image?.column ?? "7 / span 6",
    "--timeline-image-width": image?.maxWidth ?? "30rem",
    "--timeline-image-x": image?.x ?? "0px",
    "--timeline-image-y": image?.y ?? "0px",
    "--timeline-image-justify": image?.align ?? "center",
  } as CSSProperties;
};

export default function TimelineItem({ day }: Props) {
  const variant = day.variant ?? (day.id % 2 === 0 ? "left" : "right");

  return (
    <article
      className={`timeline-item timeline-item--${variant} timeline-item--${day.id}`}
      style={layoutStyle(day)}
    >
      <div className="timeline-item__content">
        <h3 className="timeline-item__heading">
          <span className="timeline-item__day">{day.day}</span>
          <span className="timeline-item__separator"> | </span>
          <span className="timeline-item__date">{day.date}</span>
        </h3>

        <ul className="timeline-item__list">
          {day.description.map((line, index) => (
            <li key={index}>{line}</li>
          ))}
        </ul>
      </div>

      {day.image && (
        <div className="timeline-item__image">
          <Image
            src={day.image}
            alt={day.imageAlt}
            width={450}
            height={450}
            className="timeline-item__illustration"
            style={{ objectPosition: day.imagePosition ?? "center" }}
            priority={day.id <= 2}
          />
        </div>
      )}
    </article>
  );
}
