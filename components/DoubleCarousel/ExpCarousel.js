import React from 'react';
import CardSliderNoText from '@/components/CardSlider/CardSliderNoText';
import Link from 'next/link';

const ExpCarousel = () => {
  const items = [
    {
      file: '/CarrouselExp/IMG_9510.webp',
    },
    {
      file: '/CarrouselExp/IMG_8476.webp',
    },
    {
      file: '/CarrouselExp/IMG_4111.webp',
    },
    {
      file: '/CarrouselExp/IMG_4098.webp',
    },
    {
      file: '/CarrouselExp/IMG_1518.webp',
    },
  ];
  return (
    <section className="my-20 w-[90%] mx-auto md:max-w-[45%] max-w-[100%]">
      <div className="text-center mb-10 px-4">
        <h2 className="font-semibold md:text-4xl text-3xl font-monument">
          EXPERIENCES
        </h2>
        <div className="flex justify-center items-center">
          <p className="font-alga md:text-xl text-gray-600 my-6 md:w-[900px]">
            En LUCA, nos especializamos en generar experiencias que
            dejen huella, adaptamos cada experiencia según tus
            preferencias y necesidades, asegurando que cada detalle se
            alinee perfectamente con tu marca para alcanzar tus
            objetivos corporativos.
          </p>
        </div>
      </div>
      <CardSliderNoText items={items} />
      <div className="flex items-center justify-center p-10">
        <Link
          href="/Experiences"
          passHref
          className="bg-teal-500 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Conoce Más
        </Link>
      </div>
    </section>
  );
};

export default ExpCarousel;
