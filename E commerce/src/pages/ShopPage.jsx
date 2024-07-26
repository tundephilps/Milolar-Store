import React from "react";
import Hero from "../components/shoppage/Hero";
import { MdKeyboardArrowRight } from "react-icons/md";
import AllWears from "../components/shoppage/AllWears";
import Explore from "../components/shoppage/Explore";

const ShopPage = () => {
  return (
    <div>
      <div className="flex flex-row gap-2 items-center px-16 py-8">
        <p className="text-gray-400">Home</p>
        <MdKeyboardArrowRight />
        <p>Shop</p>
      </div>

      <Hero />
      <AllWears />
      <Explore />
    </div>
  );
};

export default ShopPage;
