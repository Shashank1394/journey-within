"use client";

import Image from "next/image";

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

					{/* Himalaya pin — north-center */}
					<div className="pin pin--himalaya">
						<Image
							src="/assets/upcoming-journey/mountains.png"
							alt="Himalaya mountains"
							width={180}
							height={130}
							className="pin__image"
						/>
					</div>

					{/* Tamil Nadu pin — south-west */}
					<div className="pin pin--tamilnadu">
						<Image
							src="/assets/upcoming-journey/elephant.png"
							alt="Tamil Nadu elephant"
							width={150}
							height={110}
							className="pin__image"
						/>
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<h2 className="title">Future Journeys</h2>
					</div>
				</div>

				<div className="row">
					<div className="col-6 offset-6">
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
