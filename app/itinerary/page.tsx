import Footer from "../components/Footer";
import Itinerary from "../components/itinerary/Itinerary";
import ItineraryCTA from "../components/itinerary/ItineraryCTA";
import ItineraryHero from "../components/itinerary/ItineraryHero";
import Navbar from "../components/Navbar";

const ItineraryPage = () => {
  return (
    <>
      <Navbar />
      <ItineraryHero />
      <Itinerary />
      <ItineraryCTA />
      <Footer />
    </>
  );
};

export default ItineraryPage;
