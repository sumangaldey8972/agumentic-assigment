import React from "react";
import Navbar from "../commonFiles/Navbar";
import TopSection from "../commonFiles/TopSection";
import AboutSection from "../MainPageSection/AboutSection";
import Footer from "../MainPageSection/Footer";
import ProductSections from "../MainPageSection/ProductSections";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <TopSection/>
      <ProductSections />
      <AboutSection />
      <Footer />
    </>
  );
};

export default HomePage;
