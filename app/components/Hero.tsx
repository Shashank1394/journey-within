"use client";

import HomepageCircle from "../../animated-assets/homepage-circle.svg";

const Hero = () => {
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
                part of yourself
              </p>

              <p className="copy accent">
                This is the spark you have been looking for, the engine of the
                change you deeply desire.
              </p>

              <p className="kicker">India is ready to...</p>

              <h3 className="headline">Change Your Life.</h3>

              <div className="hero-circle">
                <HomepageCircle className="circle-svg" />
              </div>

              <div className="map" aria-hidden="true" />
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
