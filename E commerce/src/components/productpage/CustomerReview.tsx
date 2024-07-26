import React from "react";
import { FaStar } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Comment from "./Comment";

const CustomerReview = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-between pb-4">
        <p className="font-extrabold text-2xl">Customer Review</p>
        <MdOutlineKeyboardArrowDown />
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-12">
        <div>
          <div className="bg-pink-100 p-4 flex flex-row gap-6 items-center rounded-md">
            <h1 className="text-6xl">4.6</h1>
            <div>
              <p>Average rating</p>
              <p className="flex flex-row text-yellow-500 items-center">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar /> <span className="text-black ml-1">(5 Reviews)</span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6 pt-4">
            <div className="flex flex-row items-center text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div
                className="bg-yellow-500 h-full"
                style={{ width: `70%` }}
              ></div>
            </div>
          </div>
          <div className="flex items-center gap-6 pt-6">
            <div className="flex flex-row items-center text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar className="text-white" />
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div
                className="bg-yellow-500 h-full"
                style={{ width: `70%` }}
              ></div>
            </div>
          </div>
          <div className="flex items-center gap-6 pt-6">
            <div className="flex flex-row items-center text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar className="text-white" />
              <FaStar className="text-white" />
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div
                className="bg-yellow-500 h-full"
                style={{ width: `70%` }}
              ></div>
            </div>
          </div>
          <div className="flex items-center gap-6 pt-6">
            <div className="flex flex-row items-center text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar className="text-white" />
              <FaStar className="text-white" />
              <FaStar className="text-white" />
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div
                className="bg-yellow-500 h-full"
                style={{ width: `70%` }}
              ></div>
            </div>
          </div>
          <div className="flex items-center gap-6 pt-6">
            <div className="flex flex-row items-center text-yellow-500">
              <FaStar />
              <FaStar className="text-white" />
              <FaStar className="text-white" />
              <FaStar className="text-white" />
              <FaStar className="text-white" />
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div
                className="bg-yellow-500 h-full"
                style={{ width: `70%` }}
              ></div>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <p className="text-2xl font-extrabold">Comment from Customers</p>
          {/* Comment */}

          <Comment />
          <Comment />
          <Comment />
          <div className="pt-6">
            <p className="font-extrabold text-2xl">
              Give your Feedback on this product
            </p>

            <div className="flex items-center gap-6 pt-6">
              <p>Rate this Product</p>
              <div className="flex flex-row items-center text-yellow-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-5 pt-12"
            >
              <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
                <div>
                  <label className="font-medium">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="font-medium">Comments</label>
                <textarea
                  required
                  className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                ></textarea>
              </div>
              <button className="w-full px-4 py-2 text-white font-medium bg-[#782495] hover:bg-purple-500 rounded-lg duration-150">
                Submit Review
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
