import React from "react";

import Cloth1 from "../../assets/Cloth1.png";
import Cloth2 from "../../assets/Cloth2.png";
import Cloth3 from "../../assets/Cloth3.png";
import Cloth4 from "../../assets/Cloth4.png";
import Cloth5 from "../../assets/Cloth5.png";
import Cloth6 from "../../assets/Cloth6.png";
import Pagination from "./Pagination";

const SocialMedia = () => {
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
    <section class="text-gray-600 body-font bg-[#222222]">
      <div class="container px-5 py-12 mx-auto">
        <div class="flex flex-col items-start w-full">
          <h1 class="lg:text-5xl text-2xl font-medium title-font mb-4 text-white">
            Trending Products
          </h1>
          <p class=" leading-relaxed text-base text-start text-white">
            Take a look at our product from our social media platform
          </p>
        </div>
        <div class="grid lg:grid-cols-4 grid-cols-2 gap-6">
          {posts.map((items, key) => (
            <li
              className="w-full  sm:max-w-sm cursor-pointer relative"
              key={key}
            >
              <div className="block">
                <img
                  src={items.img}
                  alt={items.title}
                  className="w-full rounded-lg"
                />
              </div>
            </li>
          ))}
        </div>
        <div className="flex justify-center">
          <Pagination />
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
