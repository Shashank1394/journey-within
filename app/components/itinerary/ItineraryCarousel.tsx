import { readdir } from "node:fs/promises";
import path from "node:path";
import ItineraryCarouselClient, {
	type ItineraryCarouselSlide,
} from "./ItineraryCarouselClient";

const carouselDirectory = path.join(
	process.cwd(),
	"public/assets/itinerary/carousel",
);
const imageExtension = /\.(avif|gif|jpe?g|png|webp)$/i;
// Matches carousel-1.png, carousel-2.jpg etc.
const carouselPattern = /^carousel-(\d+)\./i;

export default async function ItineraryCarousel() {
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

			// Look for a matching full-size file: {index}-full.jpeg or {index}-full.png
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

	return <ItineraryCarouselClient slides={slides} />;
}
