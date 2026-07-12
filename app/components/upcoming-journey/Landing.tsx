"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Landing = () => {
	const [himalayaVisible, setHimalayaVisible] = useState(false);
	const [tamilnaduVisible, setTamilnaduVisible] = useState(false);
	const [isMobile, setIsMobile] = useState<boolean | null>(null);
	// Tracks whether mobile animation has been triggered (separate from visibility)
	const [mobileAnimated, setMobileAnimated] = useState(false);

	const himalayaPinRef = useRef<HTMLDivElement>(null);
	const tamilnaduPinRef = useRef<HTMLDivElement>(null);

	// Detect mobile after hydration
	useEffect(() => {
		const mq = window.matchMedia("(max-width: 767px)");
		const raf = requestAnimationFrame(() => setIsMobile(mq.matches));
		const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
		mq.addEventListener("change", handler);
		return () => {
			cancelAnimationFrame(raf);
			mq.removeEventListener("change", handler);
		};
	}, []);

	// Mobile: trigger pop animation 1s after mount
	useEffect(() => {
		if (isMobile !== true) return;
		const t = setTimeout(() => setMobileAnimated(true), 1000);
		return () => clearTimeout(t);
	}, [isMobile]);

	// Desktop: observe each pin — show on enter, hide on leave
	useEffect(() => {
		if (isMobile !== false) return;

		const observe = (
			el: HTMLDivElement,
			onVisible: () => void,
			onHidden: () => void,
		) => {
			const observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) onVisible();
					else onHidden();
				},
				{ threshold: 0 },
			);
			observer.observe(el);
			return observer;
		};

		const o1 = himalayaPinRef.current
			? observe(
					himalayaPinRef.current,
					() => setHimalayaVisible(true),
					() => setHimalayaVisible(false),
				)
			: null;

		const o2 = tamilnaduPinRef.current
			? observe(
					tamilnaduPinRef.current,
					() => setTamilnaduVisible(true),
					() => setTamilnaduVisible(false),
				)
			: null;

		return () => {
			o1?.disconnect();
			o2?.disconnect();
		};
	}, [isMobile]);

	// Build class strings
	const himalayaClasses = [
		"pin__preview",
		"pin__preview--himalaya",
		// Desktop visibility
		!isMobile && himalayaVisible ? "pin__preview--visible" : "",
		// Mobile classes
		isMobile ? "pin__preview--mobile" : "",
		isMobile && mobileAnimated ? "pin__preview--pop" : "",
	]
		.filter(Boolean)
		.join(" ");

	const tamilnaduClasses = [
		"pin__preview",
		"pin__preview--tamilnadu",
		!isMobile && tamilnaduVisible ? "pin__preview--visible" : "",
		isMobile ? "pin__preview--mobile" : "",
		isMobile && mobileAnimated ? "pin__preview--pop" : "",
	]
		.filter(Boolean)
		.join(" ");

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
					<div ref={himalayaPinRef} className="pin pin--himalaya">
						<Image
							src="/assets/upcoming-journey/mountains.png"
							alt="Himalaya mountains"
							width={180}
							height={130}
							className="pin__image"
						/>
					</div>

					{/* Tamil Nadu pin */}
					<div ref={tamilnaduPinRef} className="pin pin--tamilnadu">
						<Image
							src="/assets/upcoming-journey/elephant.png"
							alt="Tamil Nadu elephant"
							width={150}
							height={110}
							className="pin__image"
						/>
					</div>

					{/* Himalaya preview */}
					<div className={himalayaClasses}>
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
							width={320}
							height={220}
							className="pin__preview-img pin__preview-img--desktop"
						/>
					</div>

					{/* Tamil Nadu preview */}
					<div className={tamilnaduClasses}>
						<Image
							src="/assets/upcoming-journey/tamilnadu-mobile.png"
							alt="Tamil Nadu destination"
							width={320}
							height={220}
							className="pin__preview-img pin__preview-img--mobile"
						/>
						<Image
							src="/assets/upcoming-journey/tamilnadu.png"
							alt="Tamil Nadu destination"
							width={320}
							height={220}
							className="pin__preview-img pin__preview-img--desktop"
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
