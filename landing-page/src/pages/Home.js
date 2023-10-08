import React from "react";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/Navbar/HeroSection";
import About from "../components/About/About";
import About_two from "../components/About/About_two";
import Contact from "../components/Contact/Contact";
import Features from "../components/Features/Features";
import Services from "../components/Services/Services";
import ImgSection from "../components/ImgSection/ImgSection";

function Home() {
  return (
    <>
      <HeroSection />
      {/* <Services /> */}
      <About />
      <Features />
      <About_two />
      <ImgSection />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
