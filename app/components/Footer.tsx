import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer-component">
      <div className="container-fluid px-0">
        <div className="row g-0">
          <div className="col-12">
            <Image
              src="/assets/footer.webp"
              alt="footer image"
              width={1383}
              height={391}
              sizes="100vw"
              className="footer-image"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
