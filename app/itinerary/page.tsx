import Footer from "../components/Footer";
import ItineraryCTA from "../components/itinerary/ItineraryCTA";
import ItineraryDays from "../components/itinerary/ItineraryDays";
import ItineraryHero from "../components/itinerary/ItineraryHero";
import Navbar from "../components/Navbar";

const ItineraryPage = () => {
	return (
		<>
			<Navbar />
			<ItineraryHero />
			<ItineraryDays />
			<ItineraryCTA />
			<Footer />
		</>
	);
};

export default ItineraryPage;
