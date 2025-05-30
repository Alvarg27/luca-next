import React from 'react';
import PromotionalCard from './PromotionalCard';
import CardSliderNoText from '../CardSlider/CardSliderNoText';
import CardSliderNoTextVertical from '../CardSliderVertical/CardSliderNoTextVertical';
import useNavigation from "@/hooks/useNavigation";
import { useRouter } from 'next/router';

const items = [
  {
    imageUrl: '/CarrouselPromotional/foto2.jpg',
  },
  {
    imageUrl: '/CarrouselPromotional/foto3.jpg',
  },
  {
    imageUrl: '/CarrouselPromotional/foto4.jpg',
  },
  {
    imageUrl: '/CarrouselPromotional/foto5.jpg',
  },
  {
    imageUrl: '/CarrouselPromotional/foto1.jpg'
  },
];

const PromotionalSection = () => {
  const router = useRouter();
  const { promotionalRef } = useNavigation();
  console.log("promotionalRef.current", promotionalRef.current);

  return (
    <section ref={promotionalRef} id="promotionals" >
    <div className="w-[90%] max-w-[1200px] mx-auto my-10">
      <div className="text-center mb-4 px-4">
        <h2 className="font-semibold md:text-4xl text-3xl font-monument">
          Artículos Promocionales
        </h2>
        <div className="flex justify-center items-center">
          <p className="font-alga md:text-xl text-gray-600 my-6 md:w-[900px]">
          Destaca tu marca con artículos personalizados de la más alta calidad. En Luca ofrecemos productos personalizados para fortalecer la presencia identidad y posicionamiento de tu marca con clientes, socios y colaboradores.
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:px-24 px-4 gap-12">
        <CardSliderNoTextVertical items={items} />
      </div>
    </div>
    </section>
  );
};

export default PromotionalSection;
