import React, { useState } from "react";
import { IoTrashOutline } from "react-icons/io5";

import Cloth1 from "../../assets/Cloth1.png";

const CartItem = () => {
  const [count, setCount] = useState(1); // Start count at 1

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const increment = () => setCount(count + 1);

  return (
    <div>
      {/* Card */}
      <div className="flex lg:flex-row flex-col space-y-4 items-center justify-between">
        <img src={Cloth1} alt="" className="h-32 w-32" />
        {/* Details */}
        <div>
          <p className="text-2xl">Product 001</p>
          <p className="text-gray-400 text-xs">
            color: <span className="text-black font-bold"> Brown</span>{" "}
          </p>
        </div>
        {/* Counter */}
        <div className="flex items-center justify-start space-x-8  border-2 border-gray-300 rounded-md w-[160px] ">
          <button
            onClick={decrement}
            className="px-4 py-2  text-black font-bold rounded-lg focus:outline-none "
          >
            -
          </button>
          <span className="text-2xl">{count}</span>
          <button
            onClick={increment}
            className="px-4 py-2  text-black font-bold rounded-lg focus:outline-none "
          >
            +
          </button>
        </div>
        <p className="font-bold text-1xl">N150,000.00</p>

        <div className="text-red-600 flex text-2xl items-center">
          <IoTrashOutline /> Remove{" "}
        </div>
      </div>

      <hr class="my-3 border-gray-400 sm:mx-auto  lg:my-3" />
    </div>
  );
};

export default CartItem;
