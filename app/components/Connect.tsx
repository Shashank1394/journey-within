"use client";

import Image from "next/image";

const Connect = () => {
  return (
    <section className="connect-section">
      <div className="container">
        <div className="row align-items-stretch">
          {/* Columns 2-7 */}
          <div className="col-6 offset-1 d-flex">
            <div className="connect w-100 d-flex flex-column justify-content-center text-center">
              <h2 className="title">Hey, I&apos;m Riccardo</h2>

              <p className="intro">
                And I&apos;m looking forward to guiding you through our
                beautiful journey, both in India and within. I invite you to
                discover what pushed me to create this project
              </p>
            </div>
          </div>

          {/* Columns 8-11 */}
          <div className="col-5 col-md-4 offset-md-1 d-flex align-items-center justify-content-center">
            <div className="photo">
              <Image
                src="/assets/riccardo.webp"
                alt="Riccardo"
                width={450}
                height={450}
                priority
              />
            </div>
          </div>

          {/* Column 8 */}
          <div className="col-2 offset-6 offset-md-7 d-flex justify-content-center">
            <Image
              src="/assets/arrow.svg"
              alt="Arrow"
              width={300}
              height={150}
              className="arrow"
            />
          </div>

          {/* Columns 9-10 */}
          <div className="col-5 offset-7 col-md-5 offset-md-7 d-flex justify-content-center text-center">
            <p className="cta">Let&apos;s connect!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
