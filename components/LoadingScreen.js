import Image from "next/image";
import React, { useEffect, useState } from "react";
import usePageOffset from "../hooks/usePageOffset";
import useWindowDimensions from "../hooks/useWindowDimensions";

const LoadingScreen = () => {
  const [transition, setTransition] = useState(false);
  const { height } = useWindowDimensions();
  useEffect(() => {
    setTimeout(() => {
      setTransition(true);
    }, [1500]);
  }, []);
  return (
    <>
      <div
        style={{ height }}
        className={`w-full flex items-center justify-center fixed top-0 left-0 overflow-hidden z-[50] bg-[#DDD8CD] delay-150 touch-none duration-150 ${
          transition ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="animate-pulse">
          <div className="flex items-center">
            <p
              className={`text-3xl font-monument duration-300 transition ${
                transition ? "-translate-x-[400%]" : ""
              }`}
            >
              LU
            </p>
            <div
              className={`w-[12px] h-[12px] bg-teal-500 rounded-full mb-[10px] ml-[3px] transition duration-300  ${
                transition
                  ? "scale-[800%] -translate-x-[7px] translate-y-[13px]"
                  : ""
              }`}
            />
          </div>
          <div
            className={`flex items-center -mt-5 transition duration-300 ${
              transition ? "translate-x-[200%]" : ""
            }`}
          >
            <p className="text-3xl font-monument opacity-0 select-none">LU</p>
            <p className="text-3xl font-monument ">CA</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingScreen;
