import Image from "next/image";
import React, { useState } from "react";

const IncentiveCard = ({ index, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className="h-[80px] mx-2 min-w-[129px] max-w-[129px] relative">
      <Image
        fill
        onLoadingComplete={() => setIsLoaded(true)}
        src={`https://cdn.tectify.io/luca-web/tarjetas/${
          alt ? 15 + index + 1 : index + 1
        }.webp`}
        className={`elative object-cover rounded-xl transition duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default IncentiveCard;
