import itineraryData from "./itinerary-data";
import ScaledTimelineDays from "./ScaledTimelineDays";
import TimelineItem from "./TimelineItem";

export default function Itinerary() {
  return (
    <section className="itinerary">
      <div className="itinerary__container">
        <ScaledTimelineDays>
          {itineraryData.map((day) => (
            <TimelineItem key={day.id} day={day} />
          ))}
        </ScaledTimelineDays>
      </div>
    </section>
  );
}
