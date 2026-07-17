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

export default async function ItineraryCarousel() {
  const filenames = await readdir(carouselDirectory);
  const slides: ItineraryCarouselSlide[] = filenames
    .filter((filename) => imageExtension.test(filename))
    .filter((filename) => !filename.endsWith("-arrow.png"))
    .sort((left, right) =>
      left.localeCompare(right, undefined, {
        numeric: true,
        sensitivity: "base",
      }),
    )
    .map((filename, index) => ({
      src: `/assets/itinerary/carousel/${filename}`,
      alt: `Journey photo ${index + 1}`,
    }));

  if (slides.length === 0) return null;

  return <ItineraryCarouselClient slides={slides} />;
}
