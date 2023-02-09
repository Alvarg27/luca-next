import Image from "next/image";
import React, { useState } from "react";

const SliderItem = ({ item }) => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  return (
    <div className="w-full md:px-2 px-0">
      <div className="bg-white rounded-2xl shadow-sm">
        <div className="h-[200px] relative">
          <div className="bg-gray-200 h-full w-full rounded-t-2xl animate-pulse absolute"></div>
          <Image
            fill
            src={item.file}
            className={`rounded-t-2xl object-cover relative transition duration-300 ${
              imageIsLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoadingComplete={() => setImageIsLoaded(true)}
          />
        </div>
        <div className="px-4 pt-4 pb-10">
          <p className="font-monument">{item.title}</p>
        </div>
      </div>
    </div>
  );
};

export default SliderItem;
