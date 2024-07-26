import React from "react";

import Cloth1 from "../../assets/Cloth1.png";
import Cloth2 from "../../assets/Cloth2.png";
import Cloth3 from "../../assets/Cloth3.png";
import Cloth4 from "../../assets/Cloth4.png";
import Cloth5 from "../../assets/Cloth5.png";
import Cloth6 from "../../assets/Cloth6.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import Pagination from "../homepage/Pagination";
import { Link } from "react-router-dom";

const AllWears = () => {
  const posts = [
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
    <section class="text-gray-600 body-font bg-white">
      <div class="container px-5 py-12 mx-auto">
        <div class="flex flex-row items-start w-full justify-between pb-8">
          <h1 class="lg:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            All wears
          </h1>
          <div className="flex flex-row items-center gap-8">
            <p>Sort By</p>
            <div className="relative w-72 max-w-full mx-auto ">
              <MdKeyboardArrowDown className="absolute top-0 bottom-0 w-5 h-5 my-auto text-gray-400 right-3" />
              <select className="w-full px-3 py-2 text-sm text-gray-600 bg-white border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2">
                <option>Corporate Wears</option>
                <option>Owambe Wears</option>
                <option>Gowns</option>
                <option>Dinner Wears</option>
                <option>Ankara Wears</option>
              </select>
            </div>
          </div>
        </div>
        <div class="grid lg:grid-cols-4 grid-cols-2 gap-6">
          {posts.map((items, key) => (
            <Link
              to="/ProductPage"
              className="w-full mx-auto group sm:max-w-sm cursor-pointer relative"
              key={key}
            >
              <div href={items.href} className="block">
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
              </div>
            </Link>
          ))}
        </div>
        <div className="mx-auto w-full justify-center flex pt-12">
          <Pagination />
        </div>
      </div>
    </section>
  );
};

export default AllWears;
