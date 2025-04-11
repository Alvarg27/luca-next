import React, { useRef, useState } from "react";
import useWindowDimensions from "hooks/useWindowDimensions";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import CarrouselArrow from "components/Carrousel/CarrouselArrow";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { Autoplay } from "swiper";
import SliderItemNoTextVertical from "./SliderItemNoTextVertical";
import { FaDownload } from "react-icons/fa";

const CardSliderNoTextVertical = ({ items }) => {
  const { width } = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  // Calculate responsive slidesPerView based on screen width
  const getSlidesPerView = () => {
    if (width > 1280) return 3.2;      // xl screens
    if (width > 1024) return 3;        // lg screens
    if (width > 768) return 2.2;       // md screens
    if (width > 640) return 1.8;       // sm screens
    return 1.2;                        // xs screens
  };

  const handleDownload = (pdfPath, fileName) => {
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="mx-auto relative overflow-hidden w-full">
      <CarrouselArrow
        swiperRef={swiperRef}
        onClick={() => swiperRef.current?.slidePrev()}
        className="left-2 -mt-10 ml-2 z-10"
        side="left"
        itemsLength={items.length}
        activeIndex={activeIndex}
        slidesPerView={getSlidesPerView()}
      >
        <IoChevronBack />
      </CarrouselArrow>
      <CarrouselArrow
        swiperRef={swiperRef}
        onClick={() => swiperRef.current?.slideNext()}
        className="right-2 -mt-10 mr-2 z-10"
        side="right"
        itemsLength={items.length}
        activeIndex={activeIndex}
        slidesPerView={getSlidesPerView()}
      >
        <IoChevronForward />
      </CarrouselArrow>
      <Swiper
        spaceBetween={20}
        slidesPerView={getSlidesPerView()}
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
        className="bg-gray-100 w-full relative lg:rounded-2xl px-2"
      >
        {items.map((item, i) => (
          <SwiperSlide key={i} className="w-full h-full relative py-4">
            <SliderItemNoTextVertical item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 py-6 bg-gray-100 px-4">
        <button 
          onClick={() => handleDownload('PDF/CATALOGO TEXTILES LUCA.pdf', 'Catálogo_Textiles_LUCA.pdf')}
          className="flex items-center gap-2 px-6 py-3 bg-teal-500 text-white font-medium rounded-lg hover:bg-teal-600 transition-colors duration-300 w-full md:w-auto"
        >
          <FaDownload /> Descargar catálogo prendas
        </button>
        
        <button 
          onClick={() => handleDownload('PDF/CATALOGO ARTICULOS.pdf', 'Catálogo_Artículos_LUCA.pdf')}
          className="flex items-center gap-2 px-6 py-3 bg-teal-500 text-white font-medium rounded-lg hover:bg-teal-600 transition-colors duration-300 w-full md:w-auto"
        >
          <FaDownload /> Descargar catálogo artículos
        </button>
      </div>
    </div>
  );
};

export default CardSliderNoTextVertical;