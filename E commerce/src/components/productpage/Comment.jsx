import React from "react";
import { FaStar } from "react-icons/fa";

const Comment = () => {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-6 pt-6">
        <div className="flex flex-row items-center text-yellow-500">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      </div>
      <p className="font-bold">
        Amazing products i love the quality and texture and the colour
      </p>
      <p className="text-xs text-gray-500">16-07-2024 by John Doe</p>

      <div className="h-[0.5px] w-full bg-gray-300 my-12" />
    </div>
  );
};

export default Comment;
