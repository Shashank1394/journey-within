import Footer from "../components/Footer";
import ItineraryDays from "../components/itinerary/ItineraryDays";
import ItineraryHero from "../components/itinerary/ItineraryHero";
import Navbar from "../components/Navbar";

const ItineraryPage = () => {
	return (
		<>
			<Navbar />
			<ItineraryHero />
			<ItineraryDays />
			<Footer />
		</>
	);
};

export default ItineraryPage;
