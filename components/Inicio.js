import React from "react";
import LargeCircle from "./LargeCircle";
import MediumCircle from "./MediumCircle";

import SmallCircle from "./SmallCircle";

const Inicio = () => {
  return (
    <div className="flex justify-center relative mt-[200px]">
      <div className="h-[100px] w-[100px] bg-teal-400 rounded-full "></div>
      <div className="absolute w-full h-full animate-spin-slow">
        <SmallCircle className="w-[130%] lg:w-[60%] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" />
        <MediumCircle className="w-[185%] lg:w-[100%] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" />
        <LargeCircle className="w-[200%]  lg:w-[105%] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
};

export default Inicio;
