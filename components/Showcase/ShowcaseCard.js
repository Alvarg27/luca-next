import trimString from "@/helpers/trimString";
import Image from "next/image";
import React, { useState } from "react";
import { RiArrowRightLine } from "react-icons/ri";

function isEven(n) {
  return n % 2 == 0;
}

function isOdd(n) {
  return Math.abs(n % 2) == 1;
}

const ShowcaseCard = ({ item, colIndex, index, maxLength, length }) => {
  const handleHeight = () => {
    let colHeight = maxLength * 300;

    let height = colHeight / length;
    let heightIndex = index;
    if (isOdd(colIndex)) {
      heightIndex = index + 1;
    }
    if (
      isEven(heightIndex) ||
      (index + 1 === length && length < maxLength && isOdd(colIndex))
    ) {
      height = height + 100;
    } else {
      height = height;
    }
    if (
      index + 1 === length &&
      length === maxLength &&
      isEven(colIndex) &&
      isOdd(maxLength)
    ) {
      height = height - 100;
    }
    if (index + 1 === length && length < maxLength) {
      height = height + 8;
    }

    return height;
  };

  return (
    <div className="w-full p-1">
      <div
        style={{ height: handleHeight(), transition: "0.3s" }}
        className="  rounded-2xl shadow-xl relative bg-gray-100 overflow-hidden"
      >
        <div className="bg-gradient-to-t h-3/4 w-full from-black via-black opacity-70  absolute bottom-0 z-[1] rounded-2xl" />
        <Image fill src={item.image} className="object-cover rounded-2xl" />

        <div className=" absolute h-full flex flex-col justify-end z-[3] p-6  w-full">
          <p className="font-medium text-2xl text-white">{item.title}</p>
          <p className=" text-gray-300">{trimString(item.description, 50)}</p>
          <button className="flex items-center text-blue-500 mt-1 hover:underline">
            <p className="-mt-[1px]">Ver más</p>
            <RiArrowRightLine />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseCard;
