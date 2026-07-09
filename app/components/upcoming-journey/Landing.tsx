"use client";

import { useState } from "react";
import Image from "next/image";

type ActivePin = "himalaya" | "tamilnadu" | null;

const Landing = () => {
	const [activePin, setActivePin] = useState<ActivePin>(null);

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
					<div
						className="pin pin--himalaya"
						onMouseEnter={() => setActivePin("himalaya")}
						onMouseLeave={() => setActivePin(null)}>
						<Image
							src="/assets/upcoming-journey/mountains.png"
							alt="Himalaya mountains"
							width={180}
							height={130}
							className="pin__image"
						/>
					</div>

					{/* Tamil Nadu pin — south-west */}
					<div
						className="pin pin--tamilnadu"
						onMouseEnter={() => setActivePin("tamilnadu")}
						onMouseLeave={() => setActivePin(null)}>
						<Image
							src="/assets/upcoming-journey/elephant.png"
							alt="Tamil Nadu elephant"
							width={150}
							height={110}
							className="pin__image"
						/>
					</div>

					{/* Previews — siblings of the pins, same stacking context, no clipping */}
					<div
						className={`pin__preview pin__preview--himalaya${activePin === "himalaya" ? " pin__preview--visible" : ""}`}>
						<Image
							src="/assets/upcoming-journey/himalaya.png"
							alt="Himalaya destination"
							width={320}
							height={220}
						/>
					</div>

					<div
						className={`pin__preview pin__preview--tamilnadu${activePin === "tamilnadu" ? " pin__preview--visible" : ""}`}>
						<Image
							src="/assets/upcoming-journey/tamilnadu.png"
							alt="Tamil Nadu destination"
							width={320}
							height={220}
						/>
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
