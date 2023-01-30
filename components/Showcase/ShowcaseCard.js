import trimString from "@/helpers/trimString";
import usePageOffset from "@/hooks/usePageOffset";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { RiArrowRightLine } from "react-icons/ri";

function isEven(n) {
  return n % 2 == 0;
}

function isOdd(n) {
  return Math.abs(n % 2) == 1;
}

const ShowcaseCard = ({ item, colIndex, index, maxLength, length }) => {
  const router = useRouter();
  const { offsetY } = usePageOffset();
  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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
        onClick={() => router.push(`/${item.permalink}?prevscroll=${offsetY}`)}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        style={{ height: handleHeight(), transition: "0.3s" }}
        className="  rounded-2xl shadow-xl relative bg-gray-100 overflow-hidden cursor-pointer"
      >
        <div className="bg-gradient-to-t h-3/4 w-full from-black via-black opacity-70  absolute bottom-0 z-[2] rounded-2xl " />
        {item?.files?.length >= 1 && (
          <Image
            onLoadingComplete={() => setImageIsLoaded(true)}
            fill
            src={item?.files[0]}
            className={`object-cover rounded-2xl transition duration-300 relative z-[1] ${
              isHovered ? "md:scale-110" : ""
            } ${imageIsLoaded ? "opacity-100" : "opacity-0"}`}
          />
        )}
        <div className="bg-gray-200 w-full h-full absolute rounded-2xl animate-pulse" />
        <div className=" absolute h-full flex flex-col justify-end z-[3] p-6  w-full">
          <p className="font-medium text-lg text-white font-monument">
            {item.title}
          </p>
          <p className=" text-gray-300 font-alga">
            {trimString(item.description, 50)}
          </p>
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
