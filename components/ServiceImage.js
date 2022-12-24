import Image from "next/image";
import React, { useState } from "react";
import { RiStarFill } from "react-icons/ri";

const ServiceImage = ({ image }) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="min-w-[200px] h-[200px] relative rounded-2xl m-2">
      <div className="absolute bg-opacity-50 backdrop-blur-lg shadow-md bottom-2 left-2 z-[3] bg-white rounded-full px-2 py-2 my-1 flex items-center">
        <span className="bg-amber-100 text-amber-500 h-[25px] w-[25px] rounded-full flex mr-2">
          <RiStarFill className="m-auto" />
        </span>

        <p className="flex-1 font-medium">Top Golf</p>
      </div>
      <div className="w-full h-full absolute  bg-neutral-900  animate-pulse rounded-2xl z-[1]"></div>
      <Image
        width={200}
        height={200}
        src={image}
        className={`w-[200px] h-[200px] object-cover rounded-2xl relative transition duration-1000 z-[2] ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  );
};

export default ServiceImage;
