import React from "react";

import Cloth3 from "../../assets/Explore1.png";
import Cloth4 from "../../assets/Explore2.png";
import Cloth5 from "../../assets/Explore3.png";
import Cloth6 from "../../assets/Explore4.png";

const Explore = () => {
  const posts = [
    {
      item: "OWANBE COLLECTIONS",

      img: Cloth4,
    },
    {
      item: "DINNER WEARS COLLECTION",

      img: Cloth3,
    },

    {
      item: "GOWNS WEARS COLLECTIONS",

      img: Cloth5,
    },
    {
      item: "ANKARA WEARS COLLECTIONS",

      img: Cloth6,
    },
  ];

  return (
    <section class="text-white body-font bg-[#000000]">
      <div class="container px-5 py-12 mx-auto">
        <div class="flex flex-col items-start w-full">
          <h1 class="lg:text-5xl text-2xl font-medium title-font mb-4 text-white">
            Explore other Collection
          </h1>
          <p class=" leading-relaxed text-base text-start text-gray-400 pb-12">
            Take a look at our best selling products that we have
            <br /> provided for your beauty needs.
          </p>
        </div>
        <div class="grid lg:grid-cols-4 grid-cols-1 gap-6">
          {posts.map((items, key) => (
            <div
              className="w-full mx-auto group sm:max-w-sm cursor-pointer relative"
              key={key}
            >
              <div className="block h-full relative">
                <img
                  src={items.img}
                  loading="lazy"
                  alt={items.title}
                  className="w-full rounded-lg bg-white h-full"
                />
                <div className="absolute top-[30%] p-6 text-center items-center flex flex-col">
                  <p className="text-3xl">{items.item}</p>

                  <button className="mt-6 bg-transparent flex items-center gap-4 border-white border-2  hover:bg-[#BE0CE7] text-white font-bold py-2 px-4 rounded">
                    SHOP NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
