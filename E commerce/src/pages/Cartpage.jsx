import React, { useState } from "react";
import Stepper from "../components/cartpage/Stepper";
import { IoTrashOutline } from "react-icons/io5";
import CartItem from "../components/cartpage/CartItem";
import { GoTag } from "react-icons/go";
import { Link } from "react-router-dom";

const Cartpage = () => {
  const [count, setCount] = useState(1); // Start count at 1

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const increment = () => setCount(count + 1);

  return (
    <div>
      <Stepper />
      <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-6 gap-0 lg:px-16 py-12">
        <div className="col-span-3 ">
          <div className="lg:flex hidden flex-row justify-between font-bold text-2xl ">
            <p>Product</p>
            <div className="flex flex-row space-x-40">
              <p>Quality </p>
              <p>Price</p>
              <p>Action</p>
            </div>
          </div>

          <hr class="my-3 border-gray-400 sm:mx-auto  lg:my-3" />
          <CartItem />
          <CartItem />
        </div>
        <div className="border-2 border-gray-200 p-4 w-full mx-auto">
          <p className="font-bold text-2xl">Order Summary</p>
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

          <Link
            to="/CheckoutPage"
            className="w-full flex justify-center  px-4 py-2 text-white font-medium bg-[#BE0CE7] hover:bg-purple-500 rounded-md duration-150"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cartpage;
