import React from "react";
import { GoTag } from "react-icons/go";
import Cloth1 from "../assets/Cloth1.png";

const MyAccount = () => {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-12 gap-0 lg:px-16 px-2">
      <div className="">
        <div className="border-2 border-gray-200 p-4 w-full mx-auto pb-12">
          <div className="flex items-center justify-between">
            <p className="font-bold text-2xl">My account</p>
            <p className="text-xs underline text-[#BE0CE7]">Edit Profile</p>
          </div>

          <hr class="my-3 border-gray-400 sm:mx-auto  lg:my-3" />
          <div className="flex pt-8 justify-between ">
            <div className="space-y-8">
              <p>Full Name</p> <p>Email Address</p>
              <p>Address</p>
              <p>Phone Number</p>
            </div>
            <div className="space-y-8 text-end">
              <p>John Doe</p>
              <p>JohnDoe@gmail.com</p> <p className="">House 3 ikeja</p>{" "}
              <p>08034575243</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-3 border-2 border-gray-200  p-4">
        <div className="flex items-center justify-between">
          <p className="font-bold text-2xl">Order History</p>
        </div>

        <hr class="my-3 border-gray-200 sm:mx-auto  lg:my-3" />

        {/* Cart */}
        <div className="flex lg:flex-row flex-col space-y-4  items-center justify-between">
          <img src={Cloth1} className="h-32 w-32" alt="" />
          <div className="lg:text-start text-center">
            <p className="text-2xl font-bold text-gray-400">Osmond Armchair</p>

            <p>Color: Brown</p>
            <p>17-07-2024</p>
          </div>
          <div className=" px-4 py-2 text-white font-medium bg-[#FFC41F]  rounded-md duration-150">
            In Transit
          </div>
          <div className="space-y-12 lg:text-end text-center">
            <p className="text-2xl font-bold">N150,000</p>
            <p className="underline text-[#BE0CE7]">See Details</p>
          </div>
        </div>
        <hr class="my-3 border-gray-400 sm:mx-auto  lg:my-3" />

        {/* Cart */}
        <div className="flex lg:flex-row flex-col space-y-4  items-center justify-between">
          <img src={Cloth1} className="h-32 w-32" alt="" />
          <div className="lg:text-start text-center">
            <p className="text-2xl font-bold text-gray-400">Osmond Armchair</p>

            <p>Color: Brown</p>
            <p>17-07-2024</p>
          </div>
          <div className=" px-4 py-2 text-white font-medium bg-[#0ACF83]  rounded-md duration-150">
            Delivered
          </div>
          <div className="space-y-12 lg:text-end text-center">
            <p className="text-2xl font-bold">N150,000</p>
            <p className="underline text-[#BE0CE7]">See Details</p>
          </div>
        </div>
        <hr class="my-3 border-gray-400 sm:mx-auto  lg:my-3" />
      </div>
    </div>
  );
};

export default MyAccount;
