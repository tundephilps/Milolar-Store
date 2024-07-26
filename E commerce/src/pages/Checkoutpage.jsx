import React from "react";
import Stepper from "../components/checkout/Stepper";
import { GoTag } from "react-icons/go";
import Card1 from "../assets/Card1.png";

import Card2 from "../assets/Card2.png";
import Card3 from "../assets/Card3.png";
import { Link } from "react-router-dom";

const Checkoutpage = () => {
  return (
    <div>
      <Stepper />
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-12 gap-6 lg:px-16 px-2 lg:pt-8">
        <div className="">
          <p className="text-2xl font-bold">Buyer Info</p>

          <hr class="my-3 border-gray-400 sm:mx-auto  lg:my-3" />

          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-8 text-gray-400 py-4"
          >
            <div>
              <label className="font-medium">Full name</label>
              <input
                type="text"
                required
                className="w-full mt-2 px-3 py-4 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Address</label>
              <input
                type="email"
                required
                className="w-full mt-2 px-3 py-4 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Phone Number</label>
              <input
                type="text"
                required
                className="w-full mt-2 px-3 py-4 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">City</label>
              <input
                type="email"
                required
                className="w-full mt-2 px-3 py-4 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
              <div>
                <label className="font-medium">State</label>
                <input
                  type="text"
                  required
                  className="w-full mt-2 px-3 py-4 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Zip Code (Optional)</label>
                <input
                  type="text"
                  required
                  className="w-full mt-2 px-3 py-4 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
            </div>
          </form>
        </div>

        <div className="">
          <p className="text-2xl font-bold">Order Summary</p>
          <div className="border-2 border-gray-200 p-4 w-full mx-auto mt-3">
            <div className="flex pt-8 justify-between ">
              <div className="space-y-8">
                <p>Price</p> <p>Discount</p>
                <p>Shipping</p>
                <p>Coupon Applied</p>
              </div>
              <div className="space-y-8 text-end">
                <p>$319.99</p>
                <p>$31.9</p> <p className="text-green-600">Free</p> <p>$0.00</p>
              </div>
            </div>
            <hr class="my-3 border-gray-400 sm:mx-auto  lg:my-3" />
            <div className="flex pt-8 justify-between ">
              <div className="space-y-8">
                <p>TOTAL</p> <p>Estimated Delivery by</p>
              </div>
              <div className="space-y-8 text-end">
                <p>$319.99</p>
                <p className="font-extrabold">01 Feb, 2023</p>
              </div>
            </div>

            <div className="relative mt-6 mb-6">
              <input
                placeholder="Coupon Code"
                className="h-12 w-full px-4 border-2 border-gray-300"
              />
              <GoTag className="absolute top-[36%] right-3 " />
            </div>
          </div>

          <p className="text-2xl font-bold pt-6">Payment Method</p>
          <div className="border-2 border-gray-200 p-4 w-full mx-auto mt-3">
            <p className="text-center text-xs text-gray-400">
              Securely pay with Paystack
            </p>
            <div className="flex flex-row items-end justify-around pt-4 pb-8">
              <img src={Card1} alt="" />
              <img src={Card2} alt="" /> <img src={Card3} alt="" />
            </div>
            <Link to="/OrderSuccess">
              <button className="w-full px-4 py-2 text-white font-medium bg-[#BE0CE7] hover:bg-purple-500 rounded-md duration-150">
                Make Payment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkoutpage;
