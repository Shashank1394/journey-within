import Hero from "./components/Hero";
import Collage from "./components/Collage";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
import VideoHero from "./components/VideoHero";

const page = () => {
	return (
		<>
			<VideoHero />
			<Hero />
			<Collage />
			<Connect />
			<Footer />
		</>
	);
};

export default page;
