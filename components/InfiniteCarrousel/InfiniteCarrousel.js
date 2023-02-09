import useWindowDimensions from "@/hooks/useWindowDimensions";
import React, { createRef, useEffect, useRef, useState } from "react";
import CarrouselList from "./CarrouselList";

const InfiniteCarrousel = ({ items, slow, alt }) => {
  const carrouselListRef = useRef(null);

  return (
    <div className="flex relative items-center h-[90px]">
      <div className="flex ">
        <CarrouselList
          ref={carrouselListRef}
          items={items}
          alt={alt}
          className="animate-slide"
        />
        <CarrouselList
          ref={carrouselListRef}
          items={items}
          alt={alt}
          className="animate-slide"
        />
        <CarrouselList
          ref={carrouselListRef}
          items={items}
          alt={alt}
          className="animate-slide"
        />
      </div>
    </div>
  );
};

export default InfiniteCarrousel;
