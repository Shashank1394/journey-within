import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../components/about/About";
import JourneyPillars from "../components/about/JourneyPillars";
import Discover from "../components/about/Discover";
import AboutGuide from "../components/about/AboutGuide";

const AboutPage = () => {
  return (
    <main className="about-page">
      <Navbar />
      <About />
      <JourneyPillars />
      <AboutGuide />
      <Discover />
      <Footer />
    </main>
  );
};

export default AboutPage;
