import React from "react";

import LargeCircle from "./LargeCircle";
import MediumCircle from "./MediumCircle";
import SmallCircle from "./SmallCircle";
const Circles = () => {
  return (
    <div className="absolute w-full h-full animate-spin-slow top-0 z-[1] transition duration-300">
      <div className="absolute h-[100px] w-[100px] bg-teal-500 rounded-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition duration-300 z-[2]"></div>

      <SmallCircle className="w-[130%] lg:w-[60%] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition duration-300" />
      <MediumCircle className="w-[200%] lg:w-[100%] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition duration-300" />
      <LargeCircle className="w-[210%]  lg:w-[105%] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition duration-300" />
    </div>
  );
};

export default Circles;
