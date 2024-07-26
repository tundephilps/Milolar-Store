import React from "react";

import Cloth1 from "../../assets/Cloth1.png";
import Cloth2 from "../../assets/Cloth2.png";
import Cloth3 from "../../assets/Cloth3.png";
import Cloth4 from "../../assets/Cloth4.png";
import Cloth5 from "../../assets/Cloth5.png";
import Cloth6 from "../../assets/Cloth6.png";

const Trending = () => {
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
  ];

  return (
    <section class="text-gray-600 body-font bg-[#F0BCFC33]">
      <div class="container px-5 py-12 mx-auto">
        <div class="flex flex-col items-start w-full">
          <h1 class="lg:text-5xl text-2xl font-medium title-font mb-4 text-gray-900">
            Trending Products
          </h1>
          <p class=" leading-relaxed text-base text-start text-[#222222]">
            Take a look at our best selling products that we have
            <br /> provided for your beauty and jewelry needs.
          </p>
        </div>
        <div class="grid lg:grid-cols-4 grid-cols-2 gap-6">
          {posts.map((items, key) => (
            <li
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
            </li>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trending;
