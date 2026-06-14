import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Collage from "./components/Collage";
import Connect from "./components/Connect";
import Footer from "./components/Footer";

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Collage />
      <Connect />
      <Footer />
    </>
  );
};

export default page;
