import Hero from "./components/Hero";
// import Navbar from "./components/Navbar";
import Collage from "./components/Collage";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
import VideoHero from "./components/VideoHero";

const page = () => {
  return (
    <>
      <VideoHero />
      {/* <Navbar /> */}
      <Hero />
      <Collage />
      <Connect />
      <Footer />
    </>
  );
};

export default page;
