import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../components/about/About";
import JourneyPillars from "../components/about/JourneyPillars";
import Discover from "../components/about/Discover";
import AboutGuide from "../components/about/AboutGuide";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <About />
      <JourneyPillars />
      <AboutGuide />
      <Discover />
      <Footer />
    </>
  );
};

export default AboutPage;
