import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Product1 from "../assets/Product1.png";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import CustomerReview from "../components/productpage/CustomerReview";
import Similar from "../components/productpage/Similar";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const [count, setCount] = useState(1); // Start count at 1

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const increment = () => setCount(count + 1);

  return (
    <>
      <div className="lg:px-16 px-2 py-12">
        <div className="flex flex-row gap-2 items-center pb-8">
          <p className="text-gray-400">Home</p>
          <MdKeyboardArrowRight />
          <p className="text-[#782495]">Shop</p>
        </div>
        <div className="grid  lg:grid-cols-2 grid-cols-1 lg:gap-12 ">
          <div className="space-y-4">
            <h1 className="lg:text-6xl text-2xl">Product Code: TMC 0051 </h1>
            <p className="text-2xl text-[#782495]">N112,500</p>
            <p className="lg:text-2xl text-[#17183B]">
              The gently curved lines accentuated by sewn details are kind to
              your body and pleasant to look at. Also, there’s a tilt and
              height-adjusting mechanism that’s built to outlast years of ups
              and downs.
            </p>
            <div className="flex flex-row gap-2 items-center pt-8 pb-8">
              <div className="flex gap-2 text-yellow-400">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </div>
              <p>4.6/5.0</p>
            </div>
            <div class="flex">
              <button class="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
              <button class="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
              <button class="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>

              <button class="border-2 border-gray-300 ml-1 bg-red-600 rounded-full w-6 h-6 focus:outline-none"></button>
            </div>

            <div className="flex lg:flex-row flex-col lg:items-center items-start gap-12">
              <div className="flex items-center justify-start space-x-8  border-2 border-gray-300 rounded-md w-[160px] ">
                <button
                  onClick={decrement}
                  className="px-4 py-2  text-black font-bold rounded-lg focus:outline-none "
                >
                  -
                </button>
                <span className="text-2xl">{count}</span>
                <button
                  onClick={increment}
                  className="px-4 py-2  text-black font-bold rounded-lg focus:outline-none "
                >
                  +
                </button>
              </div>
              <div className="flex flex-row items-center pt-2">
                <div className="font-medium rounded-lg lg:text-sm text-[10px] lg:px-8 px-2 py-3 me-2 mb-2 focus:outline-none bg-[#BE0CE7] text-white">
                  Add to Cart
                </div>
                <Link
                  to="/CartPage"
                  className="font-medium rounded-lg lg:text-sm text-[10px] lg:px-8 px-2 py-2.5 me-2 mb-2 focus:outline-none border-2 border-gray-300 text-black"
                >
                  Buy Now
                </Link>
              </div>
            </div>
            <p>Free 3-5 days shipping. Tool free assembly - 30-day trial</p>
            <p className="flex items-center gap-4 text-[#782495]">
              <CiHeart className="text-2xl" /> Add to Wishlist
            </p>
          </div>
          <div>
            <img src={Product1} />
          </div>
        </div>

        <div className="h-[0.5px] w-full bg-gray-300 my-12" />
        <div>
          <div className="flex flex-row items-center justify-between pb-4">
            <p className="font-extrabold text-2xl">Description</p>
            <MdOutlineKeyboardArrowDown />
          </div>
          <p>
            The gently curved lines accentuated by sewn details are kind to your
            body and pleasant to look at. Also, there’s a tilt and
            height-adjusting mechanism that’s built to outlast years of ups and
            downs .The gently curved lines accentuated by sewn details are kind
            to your body and pleasant to look at. Also, there’s a tilt and
            height-adjusting mechanism that’s built to outlast years of ups and
            downs.
          </p>
        </div>

        <div className="h-[0.5px] w-full bg-gray-300 my-12" />
        <CustomerReview />
      </div>
      <Similar />
    </>
  );
};

export default ProductPage;
