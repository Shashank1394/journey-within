import Link from "next/link";

const Collage = () => {
  return (
    <section className="collage-section">
      <div className="container">
        <div className="row">
          <div className="col-8 offset-2 d-flex justify-content-center">
            <Link href="/upcoming-journey" aria-label="View upcoming journeys">
              <video
                className="collage"
                src="/assets/jw-vid.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collage;
