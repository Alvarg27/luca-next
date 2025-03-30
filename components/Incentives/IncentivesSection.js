import React from 'react';
import InfiniteCarrousel from '../InfiniteCarrousel/InfiniteCarrousel';
import IncentiveCard from './IncentiveCard';

const IncentivesSection = () => {
  const cards1 = Array.from({ length: 9 });
  const cards2 = Array.from({ length: 10 });
  return (
    <div className="my-20">
      <div className="text-center mb-4 px-4">
        <h2 className="font-semibold md:text-4xl text-3xl font-monument">
          INCENTIVOS
        </h2>
        <div className="flex justify-center items-center">
          <p className="font-alga md:text-xl text-gray-600 my-6 md:w-[900px]">
          Motiva a tu equipo reconociendo su esfuerzo con tarjetas personalizables de Si Vale, Amazon, Uber, Spotify, Apple y más, puedes personalizar y adaptar tus incentivos al monto que desees.
          </p>
        </div>
      </div>
      <InfiniteCarrousel items={cards1} />
      <InfiniteCarrousel items={cards2} slow={true} alt />
    </div>
  );
};

export default IncentivesSection;
