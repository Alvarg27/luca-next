import React from 'react';
import Link from 'next/link';
import CardSliderNoText from '@/components/CardSlider/CardSliderNoText';

const EvntCarousel = () => {
  const items = [
    {
      file: '/CarrouselEventP/img6481.jpg',
    },
    {
      file: '/CarrouselEventP/img0991.jpg',
    },
    {
      file: '/CarrouselEventP/img0992.jpg',
    },
    {
      file: '/CarrouselEventP/img6391.jpg',
    },
    {
      file: '/CarrouselEventP/img6491.jpg',
    },
  ];
  return (
    <section className="md:my-20 mt-0 mb-6 w-[90%] mx-auto max-w-[100%] md:max-w-[45%]">
      <div className="text-center mb-6 md:mb-10 px-4">
        <h2 className="font-semibold md:text-4xl text-3xl font-monument">
          EVENT PLANNING
        </h2>
        <div className="flex justify-center items-center">
          <p className="font-alga md:text-xl text-gray-600 my-4 md:my-6 md:w-[900px]">
          Cada empresa es única, y así tratamos cada proyecto. Nuestro equipo garantiza un servicio excepcional, desde la planificación hasta la ejecución, asegurando una experiencia impecable.
          </p>
        </div>
      </div>
      <CardSliderNoText items={items} />
      <div className="flex items-center justify-center p-4 md:p-10">
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