"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import ItineraryCarouselClient, {
	type ItineraryCarouselSlide,
} from "./ItineraryCarouselClient";

interface Props {
	slides: ItineraryCarouselSlide[];
}

export default function CarouselModal({ slides }: Props) {
	const [open, setOpen] = useState(false);

	const close = useCallback(() => setOpen(false), []);

	// Close on Escape
	useEffect(() => {
		if (!open) return;
		const handler = (e: KeyboardEvent) => {
			if (e.key === "Escape") close();
		};
		window.addEventListener("keydown", handler);
		return () => window.removeEventListener("keydown", handler);
	}, [open, close]);

	// Lock body scroll
	useEffect(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);

	return (
		<>
			{/* Button — image 44.png */}
			<button
				className="carousel-open-btn"
				onClick={() => setOpen(true)}
				aria-label="View photo gallery">
				<Image
					src="/assets/itinerary/carousel/44.png"
					alt="View photo gallery"
					width={300}
					height={120}
				/>
			</button>

			{/* Modal overlay */}
			{open && (
				<div
					className="carousel-modal"
					role="dialog"
					aria-modal="true"
					aria-label="Photo gallery"
					onClick={close}>
					{/* Close button */}
					<button
						className="carousel-modal__close"
						onClick={close}
						aria-label="Close gallery">
						<Image
							src="/assets/hamburger/cross.png"
							alt="Close"
							width={36}
							height={36}
						/>
					</button>

					{/* Carousel — stop click propagating so it doesn't close */}
					<div
						className="carousel-modal__inner"
						onClick={(e) => e.stopPropagation()}>
						<ItineraryCarouselClient slides={slides} />
					</div>
				</div>
			)}
		</>
	);
}
