"use client";

import Image from "next/image";

const AboutGuide = () => {
  return (
    <section className="about-guide-section">
      <div className="container">
        <div className="row">
          <div className="col-10 offset-1">
            <div className="about-guide">
              {/* Hand-drawn frame — decorative border stretched to the card */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/about/frame.png"
                alt=""
                aria-hidden="true"
                className="about-guide__frame"
              />

              {/* Title */}
              <h2 className="about-guide__title">About your Guide</h2>

              {/* Intro — full width, centred */}
              <p className="about-guide__intro">
                Hello, my name is Riccardo, and I am a spiritual researcher
                <br /> and traveller. Raised as an engineer at Ferrari, since
                2022 I have devoted every ounce of my energy to the search for a
                higher purpose.
              </p>

              {/* Bottom — photo left, copy right */}
              <div className="about-guide__body">
                <div className="about-guide__photo">
                  <Image
                    src="/assets/about/ricc.png"
                    alt="Riccardo, your guide"
                    width={420}
                    height={520}
                    priority
                  />
                </div>

                <div className="about-guide__copy">
                  <p>
                    This journey has pushed me to step out of my comfort zone
                    countless times, exploring spiritual places and cultures
                    across the world. Among them all, however, it was India that
                    changed my life forever. And it is with immense joy that I
                    now place myself in service of anyone who feels this same
                    calling.
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
