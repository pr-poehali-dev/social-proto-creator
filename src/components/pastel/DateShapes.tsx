
import React from "react";

const DateShapes = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="h-32 w-32 star-shape bg-pastel-beige flex flex-col justify-center items-center mx-auto">
        <span className="text-2xl font-bold text-white">05</span>
        <span className="text-sm text-white">line</span>
      </div>
      
      <div className="h-32 w-32 rounded-full bg-white flex flex-col justify-center items-center mx-auto shadow-md">
        <span className="text-2xl font-bold text-gray-400">27</span>
        <span className="text-sm text-gray-400">julio</span>
      </div>
    </div>
  );
};

export default DateShapes;
