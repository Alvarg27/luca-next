import Image from "next/image";
import React, { useState } from "react";
import { RiArrowRightLine } from "react-icons/ri";
import { useRouter } from "next/router";

const SliderItem = ({ item }) => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  const router = useRouter();

  // Only add onClick and cursor-pointer if permalink exists
  const handleItemClick = () => {
    if (item.permalink) {
      router.push(`/gifts/${item.permalink}`);
    }
  };

  return (
    <div 
      className={`w-full md:px-2 px-0 ${item.permalink ? 'cursor-pointer' : ''}`}
      onClick={handleItemClick}
    >
      <div className="bg-white rounded-2xl shadow-sm">
        <div className="h-[200px] relative">
          <div className="bg-gray-200 h-full w-full rounded-t-2xl absolute"></div>
          <Image
            fill
            src={item.file}
            className={`rounded-t-2xl object-cover absolute z-[1] transition duration-300 ${
              imageIsLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoadingComplete={() => setImageIsLoaded(true)}
            alt={item.title}
          /> 
        </div>
        <div className="px-4 pt-4 pb-10 h-auto md:h-[80px]">
          <p className="text-teal-500 font-alga">Regalos</p>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-0">
            <p className="font-monument">{item.title}</p>
            {item.permalink && (
              <button className="text-blue-500 cursor-pointer text-right md:text-left flex items-center">
                Ver más <RiArrowRightLine className="ml-1" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderItem;