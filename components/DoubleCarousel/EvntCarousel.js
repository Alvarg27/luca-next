import React from 'react';
import Link from 'next/link';
import CardSliderNoText from '@/components/CardSlider/CardSliderNoText';

const EvntCarousel = () => {
  const items = [
    {
      file: '/CarrouselEventP/IMG_2802.webp',
    },
    {
      file: '/CarrouselEventP/IMG_8068.webp',
    },
    {
      file: '/CarrouselEventP/IMG_2971.webp',
    },
    {
      file: '/CarrouselEventP/IMG_4103.webp',
    },
    {
      file: '/CarrouselEventP/IMG_5285.webp',
    },
  ];
  return (
    <section className="my-20 w-[90%] mx-auto max-w-[100%] md:max-w-[45%]">
      <div className="text-center mb-10 px-4">
        <h2 className="font-semibold md:text-4xl text-3xl font-monument">
          EVENT PLANNING
        </h2>
        <div className="flex justify-center items-center">
          <p className="font-alga md:text-xl text-gray-600 my-6 md:w-[900px]">
            Sabemos que cada empresa es única, y así tratamos a cada
            proyecto es por eso que nuestro equipo está comprometido a
            brindarte un servicio excepcional desde la planificación
            hasta la ejecución, asegurando que tu experiencia sea
            impecable en todos los aspectos.
          </p>
        </div>
      </div>
      <CardSliderNoText items={items} />
      <div className="flex items-center justify-center p-10">
        <Link
          href="/EventPlanning"
          passHref
          className="bg-teal-500 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Conoce Más
        </Link>
      </div>
    </section>
  );
};

export default EvntCarousel;
