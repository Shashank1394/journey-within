import Image from "next/image";
import Link from "next/link";

const Collage = () => {
  return (
    <section className="collage-section">
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <Link href="/upcoming-journey">
              <Image
                src="/assets/hp-collage.webp"
                alt="Hero Map Collage"
                width={1300}
                height={1000}
                className="collage"
                loading="eager"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collage;
