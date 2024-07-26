import React from "react";
import Cloth from "../../assets/Cloth.png";
import Cloth1 from "../../assets/Cloth1.png";
import Cloth2 from "../../assets/Cloth2.png";
import Cloth3 from "../../assets/Cloth3.png";
import Cloth4 from "../../assets/Cloth4.png";
import Cloth5 from "../../assets/Cloth5.png";
import Cloth6 from "../../assets/Cloth6.png";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";

const Catalogues = () => {
  const posts = [
    {
      item: "Product Code: TMC 0051",
      cost: "150,000",
      img: Cloth1,
    },
    {
      item: "Product Code: TMC 0051",
      cost: "150,000",
      img: Cloth2,
    },
    {
      item: "Product Code: TMC 0051",
      cost: "150,000",
      img: Cloth3,
    },
    {
      item: "Product Code: TMC 0051",
      cost: "150,000",
      img: Cloth4,
    },
    {
      item: "Product Code: TMC 0051",
      cost: "150,000",
      img: Cloth5,
    },
    {
      item: "Product Code: TMC 0051",
      cost: "150,000",
      img: Cloth6,
    },
  ];

  return (
    <div className="grid lg:grid-cols-6 grid-cols-1  gap-2 ">
      <div className="col-span-2 bg-white">
        <div className="lg:p-4 p-2 border-2 border-gray-400 space-y-4">
          <p className="lg:text-3xl font-bold">Deal of the Week</p>
          <img src={Cloth} className=" w-full" />
          <p className="text-2xl font-bold">Product Code: TMC 0051</p>
          <p className="text-2xl text-[#BE0CE7] ">
            <span className="line-through text-gray-400">N150,000</span>{" "}
            N112,500
          </p>
          <h1>20 Units Avaliable</h1>
          <div className="flex flex-row items-center justify-between">
            <div className="bg-[#F6D0FF] flex flex-row items-center lg:gap-8 gap-2 p-4 lg:px-8 px-4">
              <div className="text-center">
                <p>00</p>
                <p>Days</p>
              </div>
              <div className="text-center">
                <p>00</p>
                <p>Hours</p>
              </div>{" "}
              <div className="text-center">
                <p>00</p>
                <p>Mins</p>
              </div>{" "}
              <div className="text-center">
                <p>00</p>
                <p>Secs</p>
              </div>
            </div>
            <div>
              <p className="lg:text-3xl text-sm font-extrabold">Buy Now</p>
              <p className="lg:text-2xl text-sm"> & 25% off</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-4">
        <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((items, key) => (
            <Link
              to="/ProductPage"
              className="w-full mx-auto group sm:max-w-sm cursor-pointer relative"
              key={key}
            >
              <a href={items.href} className="block">
                <img
                  src={items.img}
                  loading="lazy"
                  alt={items.title}
                  className="w-full rounded-lg"
                />
                <div className="mt-3 space-y-2">
                  <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                    {items.item}
                  </h3>
                  <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800 pb-12">
                    {items.cost}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
                  <button className="w-full px-12 py-2 text-white duration-300 transform translate-y-full group-hover:translate-y-0 bg-[#BE0CE7] rounded-sm shadow-md focus:shadow-none ring-offset-2 ring-indigo-600 focus:ring-2">
                    ADD TO CART
                  </button>
                </div>
              </a>
            </Link>
          ))}
        </ul>
        <div className=" flex items-center justify-center w-full">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Catalogues;
