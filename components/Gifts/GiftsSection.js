import React from 'react';
import CardSlider from '../CardSlider/CardSlider';
import gifts from '@/data/gifts'; // Adjust import path as needed

const GiftsSection = () => {
  return (
    <section className="my-28 w-[90%] mx-auto max-w-[1200px]">
      <div className="text-center mb-10 px-4">
        <h2 className="font-semibold md:text-4xl text-3xl font-monument">
          Kits Corporativos
        </h2>
        <div className="flex justify-center items-center">
          <p className="font-alga md:text-xl text-gray-600 my-6 md:w-[900px]">
          Destaca con elegantes kits personalizados que reflejen aprecio y admiración, compartiendo más que un regalo, una experiencia inolvidable para todas aquellas personas que te rodean.
          </p>
        </div>
      </div>
      <CardSlider items={gifts} />
    </section>
  );
};

export default GiftsSection;