import Image from "next/image";

const Footer = () => {
	return (
		<footer className="footer-component">
			<div className="container-fluid px-0">
				<div className="row g-0">
					<div className="col-12">
						<div className="footer-image-wrapper">
							<Image
								src="/assets/footer.webp"
								alt="footer image"
								width={1383}
								height={391}
								sizes="100vw"
								className="footer-image"
							/>
							<Image
								src="/assets/stamps.png"
								alt="Journey Within stamps"
								width={531}
								height={485}
								className="footer-stamps"
							/>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
