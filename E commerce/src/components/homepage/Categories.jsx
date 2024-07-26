import React, { useState } from "react";
import { Link } from "react-router-dom";
import Catalogues from "./Catalogues";
const Categories = () => {
  const tabs = [
    {
      label: "COPORATE",
      content: (
        <div>
          <Catalogues />
        </div>
      ),
    },
    {
      label: "OWANBE",
      content: (
        <div>
          {" "}
          <Catalogues />
        </div>
      ),
    },
    {
      label: "DINNER",
      content: (
        <div>
          {" "}
          <Catalogues />
        </div>
      ),
    },
    {
      label: "GOWNS",
      content: (
        <div>
          {" "}
          <Catalogues />
        </div>
      ),
    },
    {
      label: "ANKARA",
      content: (
        <div>
          {" "}
          <Catalogues />
        </div>
      ),
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="bg-white h-full lg:w-full w-[100%] mt-2 lg:mt-8  lg:px-16 px-2">
      <h1 className=" lg:text-3xl text-1xl font-extrabold">
        Explore Our Collection
      </h1>
      <div className="py-4">
        <div className="flex lg:flex-row flex-col items-center justify-between ">
          <div className="flex lg:flex-row flex-wrap justify-between lg:w-[70%] ">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`mr-4 px-4 py-2  rounded ${
                  activeTab === index ? "bg-[#BE0CE7]" : ""
                }`}
                onClick={() => setActiveTab(index)}
              >
                <p
                  key={index}
                  className={` text-gray-300 lg:text-base text-xs ${
                    activeTab === index ? "text-gray-500" : ""
                  }`}
                >
                  {tab.label}
                </p>
              </div>
            ))}
          </div>
          <form className="hidden lg:block">
            <div className=" flex  items-center gap-2 sm:flex-row sm:gap-3 border-2 border-[#BE0CE7] lg:bg-white bg-transparent rounded-full p-1">
              <div className="w-full">
                <input
                  type="text"
                  id="hero-input"
                  name="hero-input"
                  className="py-3 px-4 block w-full border-transparent rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 "
                  placeholder="Search"
                />
              </div>
              <a
                className="w-full sm:w-auto whitespace-nowrap p-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent bg-[#BE0CE7] text-white  "
                href="#"
              >
                Find Now
              </a>
            </div>
          </form>
        </div>

        <div className="py-3 ">{tabs[activeTab].content}</div>
      </div>
    </div>
  );
};

export default Categories;
