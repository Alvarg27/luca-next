import Image from "next/image";
import React, { useState } from "react";

const ServiceImage = ({ image }) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="min-w-[200px] h-[200px] relative rounded-2xl m-2">
      <div className="w-full h-full absolute bg-neutral-900  animate-pulse rounded-2xl z-[1]"></div>
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
