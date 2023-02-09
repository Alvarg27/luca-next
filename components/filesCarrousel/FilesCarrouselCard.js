import useWindowDimensions from "hooks/useWindowDimensions";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const FileCarrouselCard = ({ item, loaded, setLoaded, index }) => {
  const { width } = useWindowDimensions();

  const handleImageSize = () => {
    if (width > 1280) {
      return "2xl";
    }
    if (width > 1024) {
      return "xl";
    }
    return "lg";
  };

  return (
    <>
      <Image
        className={`w-full object-cover h-full relative z-[2] transition duration-1000 ${
          loaded ? "opacity-100" : " blur-md opacity-0"
        }`}
        width={1500}
        height={1500}
        priority={index === 0}
        src={item}
        onLoadingComplete={() => setLoaded(true)}
        onLoad={() => setLoaded(true)}
        alt=""
      />
    </>
  );
};

export default FileCarrouselCard;
