import Image from "next/image";
import Link from "next/link";

const Collage = () => {
	return (
		<section className="collage-section">
			<div className="container">
				<div className="row">
					<div className="col-8 offset-2 d-flex justify-content-center">
						<Link href="/upcoming-journey" aria-label="View upcoming journeys">
							<Image
								className="collage"
								src="/assets/hp-collage.webp"
								alt="image"
								width={660}
								height={660}
							/>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Collage;
