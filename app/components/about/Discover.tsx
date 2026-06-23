"use client";

import Image from "next/image";

const Discover = () => {
  return (
    <section className="discover-section">
      <div className="container">
        <div className="row align-items-stretch">
          {/* Columns 2-7 */}
          <div className="col-7 offset-1 d-flex">
            <div className="discover w-100 d-flex flex-column justify-content-center text-center">
              <h2 className="title">Discover your future</h2>

              <p className="intro">
                These trips have been thought and designed for this moment of
                your life. A purpose-giving experiences is what is needed to
                boost you into your next phase.
              </p>
            </div>
          </div>

          {/* Columns 8-11 */}
          <div className="col-4 col-md-3 offset-md-1 d-flex align-items-center justify-content-center">
            <div className="photo">
              <Image
                src="/assets/discover.png"
                alt="Riccardo"
                width={450}
                height={450}
                priority
              />
            </div>
          </div>

          {/* Column 8 */}
          <div className="col-2 offset-7 offset-md-7 d-flex justify-content-center">
            <Image
              src="/assets/arrow.svg"
              alt="Arrow"
              width={300}
              height={150}
              className="arrow"
            />
          </div>

          {/* Columns 9-10 */}
          <div className="col-9 offset-3 col-md-7 offset-md-5 d-flex justify-content-center text-center">
            <p className="cta">Journey Within</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
