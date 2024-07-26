import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import Logo from "../../assets/Logo.png";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-between py-4 lg:px-16 px-4">
        <div className="flex flex-row items-center gap-3">
          <CiLocationOn className="text-[#BE0CE7] text-2xl lg:pb-0 mb-2" />
          <div className="lg:text-base lg:block hidden">Locates our Store</div>
        </div>

        <div className="flex items-center lg:gap-6 gap-1">
          <Link to="/Login">
            <button
              type="button"
              class="text-black   focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full lg:text-sm text-xs px-5 py-2.5 text-center me-2 mb-2 "
            >
              Login
            </button>
          </Link>
          <Link to="/SignUp">
            <button
              type="button"
              class="text-white bg-[#BE0CE7] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full lg:text-sm text-xs px-5 py-2.5 text-center me-2 mb-2 "
            >
              Register
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-[#F6D0FF] py-4 lg:px-16 px-4 flex lg:flex-row flex-col items-center lg:justify-between space-y-4">
        <img src={Logo} className="lg:h-[100px] lg:w-[100px] h-12 w-12" />

        <form className="lg:w-[700px]">
          <div class="flex bg-transparent">
            <button
              id="dropdown-button"
              data-dropdown-toggle="dropdown"
              class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-transparent border border-e-0 border-gray-700 rounded-l-lg  focus:outline-none"
              type="button"
            >
              All categories <MdKeyboardArrowDown />
            </button>
            {/* <div
              id="dropdown"
              class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                class="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdown-button"
              >
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Shopping
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Images
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Finance
                  </a>
                </li>
              </ul>
            </div> */}
            <div class="relative w-full">
              <FaSearch className="absolute top-[30%] left-4 text-gray-400 " />
              <input
                type="search"
                class="block p-2.5 px-12 w-full z-20  text-sm outline-none text-gray-900 bg-transparent rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-700 "
                placeholder="Search Products"
                required
              />
            </div>
          </div>
        </form>

        <div className="flex flex-row items-center gap-8">
          <div>
            <p>Call us on</p>
            <p>090123456789</p>
          </div>
          <div className="h-24 w-[0.2px] bg-black lg:flex hidden" />
          <div className="flex items-center gap-3">
            <div className="text-center">
              <p>Shopping Cart</p>
              <p>NGN 0.00</p>
            </div>
            <Link to="/CartPage" className="p-2 bg-[#BE0CE7] rounded-full">
              <FaCartShopping />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
