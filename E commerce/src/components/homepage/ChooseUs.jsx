import React from "react";
import Choose1 from "../../assets/Choose1.png";
import Choose2 from "../../assets/Choose2.png";
import Choose3 from "../../assets/Choose3.png";
import Choose4 from "../../assets/Choose4.png";

const ChooseUs = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="lg:text-5xl text-2xl font-extrabold title-font mb-4 text-gray-900">
            Why do you choose us?
          </h1>
        </div>
        <div class="flex flex-wrap -m-4 text-center">
          <div class="p-4 md:w-1/4 sm:w-1/2  w-full">
            <div class=" px-4 py-6 rounded-lg space-y-4">
              <div className=" bg-pink-100 rounded-full h-14 w-14 mx-auto flex items-center justify-center">
                <img src={Choose1} className="text-center" />
              </div>
              <h2 class="title-font font-medium text-3xl text-gray-900">
                Quality Certified
              </h2>
              <p class="leading-relaxed">
                Available certificates of authenticity.
              </p>
            </div>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2  w-full">
            <div class=" px-4 py-6 rounded-lg space-y-4">
              <div className=" bg-pink-100 rounded-full h-14 w-14 mx-auto flex items-center justify-center">
                <img src={Choose2} className="text-center" />
              </div>
              <h2 class="title-font font-medium text-3xl text-gray-900">
                Secure Transaction
              </h2>
              <p class="leading-relaxed">Certified marketplace since 2017</p>
            </div>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2  w-full">
            <div class=" px-4 py-6 rounded-lg space-y-4">
              <div className=" bg-pink-100 rounded-full h-14 w-14 mx-auto flex items-center justify-center">
                <img src={Choose3} className="text-center" />
              </div>
              <h2 class="title-font font-medium text-3xl text-gray-900">
                Delivery Shipping
              </h2>
              <p class="leading-relaxed">Free, fast, and reliable worldwide</p>
            </div>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2  w-full">
            <div class=" px-4 py-6 rounded-lg space-y-4">
              <div className=" bg-pink-100 rounded-full h-14 w-14 mx-auto flex items-center justify-center">
                <img src={Choose4} className="text-center" />
              </div>
              <h2 class="title-font font-medium text-3xl text-gray-900">
                Transparent Service
              </h2>
              <p class="leading-relaxed">
                Satisfying hassle-free return policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
