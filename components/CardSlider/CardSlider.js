import React, { useRef, useState } from "react";
import useWindowDimensions from "hooks/useWindowDimensions";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import CarrouselArrow from "components/Carrousel/CarrouselArrow";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import PaginationDot from "components/Carrousel/PaginationDot";
import { Autoplay } from "swiper";
import SliderItem from "./SliderItem";

const CardSlider = ({ items }) => {
  const { width } = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <div className=" mx-auto lg:rounded-2xl  relative overflow-hidden w-full">
      <CarrouselArrow
        swiperRef={swiperRef}
        onClick={() => swiperRef.current?.slidePrev()}
        className="left-2 -mt-10 ml-2"
        side="left"
        itemsLength={items.length}
        activeIndex={activeIndex}
        slidesPerView={3}
      >
        <IoChevronBack />
      </CarrouselArrow>
      <CarrouselArrow
        swiperRef={swiperRef}
        onClick={() => swiperRef.current?.slideNext()}
        className="right-2 -mt-10 mr-2"
        side="right"
        itemsLength={items.length}
        activeIndex={activeIndex}
        slidesPerView={3}
      >
        <IoChevronForward />
      </CarrouselArrow>
      <Swiper
        spaceBetween={10}
        slidesPerView={width > 768 ? (width > 1024 ? 3 : 2) : 1.5}
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        pagination={{
          clickable: false,
        }}
        className="bg-gray-100 w-full h-full relative lg:rounded-2xl"
      >
        {items.map((item, i) => (
          <SwiperSlide key={i} className="w-full h-full relative">
            <SliderItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlider;
