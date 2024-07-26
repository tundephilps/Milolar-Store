import React from "react";
import Stepper from "../components/ordersuccess/Stepper";
import Check from "../assets/Check.png";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="w-full">
      <Stepper />
      <div className="mx-auto flex justify-center items-center w-full flex-col gap-8 lg:py-32">
        <img src={Check} className="h-40 w-48" />
        <p className="font-bold text-3xl text-center">
          Your Order has been place Sucessfully
        </p>
        <p className="text-gray-400">
          Your Order will be sent to your address shortly
        </p>
        <Link to="/ShopPage">
          <button
            type="button"
            class="text-white bg-[#BE0CE7] hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-12 py-2.5 text-center mb-2 "
          >
            Keep Shopping
          </button>
        </Link>

        <Link to="/MyAccount">
          <p className="text-gray-400">Check Order History</p>
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
