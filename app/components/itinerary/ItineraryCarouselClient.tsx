"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export interface ItineraryCarouselSlide {
	src: string;
	alt: string;
	fullSrc?: string;
}

interface Props {
	slides: ItineraryCarouselSlide[];
}

export default function ItineraryCarouselClient({ slides }: Props) {
	const [activeIndex, setActiveIndex] = useState(0);
	const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
	const [lightboxAlt, setLightboxAlt] = useState("");

	const visibleSlides = [0, 1, 2].map(
		(offset) => slides[(activeIndex + offset) % slides.length],
	);

	const showPrevious = () => {
		setActiveIndex((index) => (index - 1 + slides.length) % slides.length);
	};

	const showNext = () => {
		setActiveIndex((index) => (index + 1) % slides.length);
	};

	const openLightbox = (slide: ItineraryCarouselSlide) => {
		if (!slide.fullSrc) return;
		setLightboxSrc(slide.fullSrc);
		setLightboxAlt(slide.alt);
	};

	const closeLightbox = useCallback(() => {
		setLightboxSrc(null);
	}, []);

	// Close on Escape key
	useEffect(() => {
		if (!lightboxSrc) return;
		const handler = (e: KeyboardEvent) => {
			if (e.key === "Escape") closeLightbox();
		};
		window.addEventListener("keydown", handler);
		return () => window.removeEventListener("keydown", handler);
	}, [lightboxSrc, closeLightbox]);

	// Lock body scroll when lightbox is open
	useEffect(() => {
		document.body.style.overflow = lightboxSrc ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [lightboxSrc]);

	return (
		<>
			<section
				className="itinerary-carousel"
				aria-label="Journey photo gallery">
				<div className="itinerary-carousel__inner">
					<div className="itinerary-carousel__slides">
						{visibleSlides.map((slide, index) => (
							<div
								className={`itinerary-carousel__slide itinerary-carousel__slide--${index}${slide.fullSrc ? " itinerary-carousel__slide--clickable" : ""}`}
								key={slide.src}
								onClick={() => openLightbox(slide)}
								role={slide.fullSrc ? "button" : undefined}
								tabIndex={slide.fullSrc ? 0 : undefined}
								aria-label={
									slide.fullSrc ? `View full image: ${slide.alt}` : undefined
								}
								onKeyDown={(e) => {
									if (slide.fullSrc && (e.key === "Enter" || e.key === " ")) {
										openLightbox(slide);
									}
								}}>
								<Image
									src={slide.src}
									alt={slide.alt}
									width={644}
									height={627}
									sizes="(min-width: 1920px) 280px, (min-width: 1200px) 220px, (min-width: 768px) 170px, 30vw"
								/>
							</div>
						))}
					</div>

					<button
						type="button"
						className="itinerary-carousel__control itinerary-carousel__control--previous"
						onClick={showPrevious}
						aria-label="Show previous photos">
						<Image
							src="/assets/itinerary/carousel/left-arrow.png"
							alt=""
							width={732}
							height={135}
						/>
					</button>
					<button
						type="button"
						className="itinerary-carousel__control itinerary-carousel__control--next"
						onClick={showNext}
						aria-label="Show next photos">
						<Image
							src="/assets/itinerary/carousel/right-arrow.png"
							alt=""
							width={728}
							height={131}
						/>
					</button>
				</div>
			</section>

			{/* Lightbox */}
			{lightboxSrc && (
				<div
					className="carousel-lightbox"
					role="dialog"
					aria-modal="true"
					aria-label="Full size image"
					onClick={closeLightbox}>
					<button
						className="carousel-lightbox__close"
						onClick={closeLightbox}
						aria-label="Close">
						<Image
							src="/assets/hamburger/cross.png"
							alt="Close"
							width={36}
							height={36}
						/>
					</button>
					<div
						className="carousel-lightbox__img-wrap"
						onClick={(e) => e.stopPropagation()}>
						<Image
							src={lightboxSrc}
							alt={lightboxAlt}
							fill
							sizes="100vw"
							quality={90}
							style={{ objectFit: "contain" }}
						/>
					</div>
				</div>
			)}
		</>
	);
}
