import React from "react";
import Hero from "../components/homepage/Hero";
import Gallery from "../components/homepage/Gallery";
import Categories from "../components/homepage/Categories";
import Trending from "../components/homepage/Trending";
import ChooseUs from "../components/homepage/ChooseUs";
import SocialMedia from "../components/homepage/SocialMedia";
import Footer from "../components/layout/Footer";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Gallery />
      <Categories />
      <Trending />
      <ChooseUs />
      <SocialMedia />
    </div>
  );
};

export default Homepage;
