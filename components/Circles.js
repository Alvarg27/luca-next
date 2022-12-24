import React from "react";

import LargeCircle from "./LargeCircle";
import MediumCircle from "./MediumCircle";
import SmallCircle from "./SmallCircle";
const Circles = () => {
  return (
    <div className="absolute w-full h-full animate-spin-slow top-0 z-[1] transition duration-300">
      <div className="absolute h-[100px] w-[100px] bg-teal-400 rounded-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition duration-300 z-[2]"></div>
      <div className="absolute h-[120px] w-[120px] bg-teal-400 rounded-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition duration-300 bg-opacity-40 blur-md animate-pulse"></div>
      <SmallCircle className="w-[130%] lg:w-[60%] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition duration-300" />
      <MediumCircle className="w-[185%] lg:w-[100%] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition duration-300" />
      <LargeCircle className="w-[200%]  lg:w-[105%] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition duration-300" />
    </div>
  );
};

export default Circles;
