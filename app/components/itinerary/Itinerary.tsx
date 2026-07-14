import itineraryData from "./itinerary-data";
import TimelineItem from "./TimelineItem";

export default function Itinerary() {
  return (
    <section className="itinerary">
      <div className="itinerary__container">
        {itineraryData.map((day) => (
          <TimelineItem key={day.id} day={day} />
        ))}
      </div>
    </section>
  );
}
