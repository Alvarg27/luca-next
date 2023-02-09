import React, { useRef, useState } from "react";
import useWindowDimensions from "hooks/useWindowDimensions";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import FileCarrouselCard from "./FilesCarrouselCard";
import CarrouselArrow from "components/Carrousel/CarrouselArrow";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import PaginationDot from "components/Carrousel/PaginationDot";
import { Autoplay } from "swiper";

const FilesCarrousel = ({ files }) => {
  const [loaded, setLoaded] = useState(false);
  const { width } = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <div className="h-full w-full lg:rounded-2xl relative overflow-hidden">
      <CarrouselArrow
        swiperRef={swiperRef}
        onClick={() => swiperRef.current?.slidePrev()}
        className="left-2"
        side="left"
        itemsLength={files.length}
        activeIndex={activeIndex}
      >
        <IoChevronBack />
      </CarrouselArrow>
      <CarrouselArrow
        swiperRef={swiperRef}
        onClick={() => swiperRef.current?.slideNext()}
        className="right-2"
        side="right"
        itemsLength={files.length}
        activeIndex={activeIndex}
      >
        <IoChevronForward />
      </CarrouselArrow>
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        pagination={{
          clickable: false,
        }}
        className="bg-gray-100 w-full h-full  lg:rounded-2xl overflow-hidden"
      >
        {files.map((item, i) => (
          <SwiperSlide key={i} className="w-full h-full relative">
            <FileCarrouselCard
              item={item}
              index={i}
              height={500}
              loaded={loaded}
              setLoaded={setLoaded}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {files?.length > 1 && (
        <div className="absolute z-10 left-1/2 -translate-x-1/2 flex bottom-8 lg:bottom-4">
          {files.map((_, i) => (
            <PaginationDot key={i} activeIndex={activeIndex} index={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FilesCarrousel;
