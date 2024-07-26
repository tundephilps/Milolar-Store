import React from "react";
import Logo from "../../assets/Logo.png";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer class="bg-white">
      <div class="mx-auto w-full lg:px-16 px-2 items-center p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <img src={Logo} />
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 class="mb-6 text-2xl font-semibold text-gray-900 ">
                Address
              </h2>
              <p className="flex items-center gap-3 whitespace-nowrap">
                <CiLocationOn className="text-[#BE0CE7] text-2xl " />
                No 13, River side estate, Jabi Abuja
              </p>
            </div>
            <div></div>
            <div>
              <h2 class="mb-6 text-2xl font-semibold text-gray-900 ">
                Phone No
              </h2>

              <p className="flex items-center gap-3">
                <IoCallOutline className="text-[#BE0CE7] text-2xl" />
                +2348093263333
              </p>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center ">
            © Privacy Policy
          </span>
          <p className="text-sm text-gray-500 sm:text-center ">
            Terms and Condition{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
