import React, { useState } from "react";
import { RiArrowRightLine, RiBookOpenLine } from "react-icons/ri";

const PromotionalCard = ({ url, label }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="md:w-1/3 w-full py-2 md:py-0 md:px-2">
      <div
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        onClick={() => window.open(url, "_blank")}
        className="border-[2px] transition duration-300 hover:bg-stone-200 border-stone-300 rounded-2xl px-4 py-10 cursor-pointer"
      >
        <div className="bg-teal-100 text-teal-500  text-3xl rounded-full flex justify-center items-center h-[50px] w-[50px] bg-opacity-60">
          <RiBookOpenLine />
        </div>
        <p className="font-monument mt-4">{label}</p>
        <div
          className={`text-blue-500 flex items-center ${
            isHovered ? "underline" : ""
          }`}
        >
          <p className="mr-1">Ver catálogo</p>
          <RiArrowRightLine />
        </div>
      </div>
    </div>
  );
};

export default PromotionalCard;
