import { readdir } from "node:fs/promises";
import path from "node:path";
import CarouselModal from "./CarouselModal";
import type { ItineraryCarouselSlide } from "./ItineraryCarouselClient";

const carouselDirectory = path.join(
	process.cwd(),
	"public/assets/itinerary/carousel",
);
const carouselPattern = /^carousel-(\d+)\./i;

export default async function CarouselModalServer() {
	const filenames = await readdir(carouselDirectory);

	const slides: ItineraryCarouselSlide[] = filenames
		.filter((filename) => carouselPattern.test(filename))
		.sort((left, right) =>
			left.localeCompare(right, undefined, {
				numeric: true,
				sensitivity: "base",
			}),
		)
		.map((filename) => {
			const match = filename.match(carouselPattern);
			const index = match ? match[1] : null;
			const fullSrc = index
				? filenames.find((f) => new RegExp(`^${index}-full\\.`, "i").test(f))
				: undefined;
			return {
				src: `/assets/itinerary/carousel/${filename}`,
				alt: `Journey photo ${index ?? filename}`,
				fullSrc: fullSrc ? `/assets/itinerary/carousel/${fullSrc}` : undefined,
			};
		});

	if (slides.length === 0) return null;

	return <CarouselModal slides={slides} />;
}
