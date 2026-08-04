import Image from "next/image";
import Link from "next/link";

const Landing = () => {
  return (
    <section className="landing">
      <div className="container">
        <div className="map">
          <Image
            src="/assets/india-map.webp"
            alt="Future Journeys Map"
            width={1080}
            height={1430}
            priority
          />

          {/* Himalaya pin */}
          <div className="pin pin--himalaya">
            <Link href="/itinerary" aria-label="View Himalaya journey">
              <Image
                src="/assets/upcoming-journey/mountains.png"
                alt="Himalaya mountains"
                width={180}
                height={130}
                className="pin__image"
              />
            </Link>
          </div>

          {/* Preview */}
          <div
            className="pin__preview pin__preview--himalaya pin__preview--visible"
          >
            <Link href="/itinerary" aria-label="View Himalaya journey">
              <Image
                src="/assets/upcoming-journey/himalaya-mobile.png"
                alt="Himalaya destination"
                width={320}
                height={220}
                className="pin__preview-img pin__preview-img--mobile"
              />

              <Image
                src="/assets/upcoming-journey/himalaya.png"
                alt="Himalaya destination"
                width={800}
                height={560}
                sizes="(max-width: 767px) 0px, (max-width: 991px) 28vw, 24vw"
                quality={90}
                className="pin__preview-img pin__preview-img--desktop"
              />
            </Link>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <h2 className="title">Future Journeys</h2>
          </div>

          <div className="col-12">
            <p className="copy">
              Every journey has a different flavor,
              <br />
              but all of them are designed
              <br />
              specifically for you
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
