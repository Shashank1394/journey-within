import Link from "next/link";
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
							<div className="footer-social">
								<a
									href="https://wa.me/4917645617368"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Chat with us on WhatsApp">
									<Image
										src="/assets/wp-footer.png"
										alt="WhatsApp"
										width={60}
										height={60}
										className="footer-social__icon"
									/>
								</a>
								<a
									href="https://www.instagram.com/riccardoborelli__"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Follow us on Instagram">
									<Image
										src="/assets/insta-footer.png"
										alt="Instagram"
										width={60}
										height={60}
										className="footer-social__icon"
									/>
								</a>
								<Link href="/enquire" className="footer-social__label">
									Begin Your Journey
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
