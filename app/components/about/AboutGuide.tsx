"use client";

import Image from "next/image";

const AboutGuide = () => {
  return (
    <section className="about-guide-section">
      <div className="container">
        <div className="row align-items-stretch">
          <div className="col-10 offset-1">
            <div className="about-guide">
              <h2 className="title">About your Guide</h2>

              <div className="intro">
                Hello, my name is Riccardo, and I am a spiritual researcher and
                traveller. Raised as an engineer at Ferrari, since 2022 I have
                devoted every ounce of my energy to the search for a higher
                purpose.
              </div>

              <div className="guide-content">
                <div className="guide-image">
                  <Image
                    src="/assets/about/border.png"
                    alt="Riccardo"
                    width={600}
                    height={800}
                    priority
                  />
                </div>

                <div className="guide-copy">
                  <p>
                    This journey has pushed me to step out of my comfort zone
                    countless times, exploring spiritual places and cultures
                    across the world.
                  </p>

                  <p>
                    Among them all, however, it was India that changed my life
                    forever.
                  </p>

                  <p>
                    And it is with immense joy that I now place myself in
                    service of anyone who feels this same calling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGuide;
