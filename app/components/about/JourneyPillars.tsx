"use client";

import JourneyPillar from "./JourneyPillar";
import { pillars } from "./pillars-data";

const JourneyPillars = () => {
  return (
    <section className="journey-pillars-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {pillars.map((pillar) => (
              <JourneyPillar key={pillar.id} {...pillar} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyPillars;
