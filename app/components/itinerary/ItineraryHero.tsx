"use client";

import Image from "next/image";

const ItineraryHero = () => {
	return (
		<section className="itinerary-hero-section">
			<div className="container">
				{/* Title */}
				<div className="row">
					<div className="col-10 offset-1">
						<h1 className="itinerary-hero__title">
							A Journey
							<br />
							Into the Himalayas
						</h1>
					</div>
				</div>

				{/* Date */}
				<div className="row">
					<div className="col-10 offset-1">
						<p className="itinerary-hero__date">10-25 October &apos;26</p>
					</div>
				</div>

				{/* Card — brush rendered via ::before pseudo-element */}
				<div className="row">
					<div className="col-12">
						<div className="itinerary-hero__card">
							{/* Body copy */}
							<p className="itinerary-hero__body">
								This trip has been purposely designed to reconnect you with your
								deepest and most sincere purpose.
								<br />
								An Himalayan guide will lead us through some of India&apos;s
								most powerful sanctuaries,
								<br />
								while a family constellation facilitator will help us heal
								wounds from the past.
								<br />
								Together, around a campfire, we will joyfully reconnect with our
								divine essence.
							</p>

							{/* Three overlapping circular photos — bottom right */}
							<div className="itinerary-hero__circles">
								<div className="itinerary-hero__circle itinerary-hero__circle--back">
									<Image
										src="/assets/itinerary/32.png"
										alt="Himalayan journey destination"
										fill
										sizes="130px"
									/>
								</div>
								<div className="itinerary-hero__circle itinerary-hero__circle--mid">
									<Image
										src="/assets/itinerary/31.png"
										alt="Himalayan journey destination"
										fill
										sizes="150px"
									/>
								</div>
								<div className="itinerary-hero__circle itinerary-hero__circle--front">
									<Image
										src="/assets/itinerary/30.png"
										alt="Himalayan journey destination"
										fill
										sizes="130px"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ItineraryHero;
