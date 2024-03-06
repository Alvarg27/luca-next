import React from 'react';
import InfiniteCarrousel from '../InfiniteCarrousel/InfiniteCarrousel';
import IncentiveCard from './IncentiveCard';

const IncentivesSection = () => {
  const cards1 = Array.from({ length: 9 });
  const cards2 = Array.from({ length: 10 });
  return (
    <div className="pb-20">
      <div className="text-center mb-4 px-4">
        <h2 className="font-semibold md:text-4xl text-3xl font-monument">
          INCENTIVOS
        </h2>
        <div className="flex justify-center items-center">
          <p className="font-alga md:text-xl text-gray-600 my-6 md:w-[900px]">
            Impulsa y fortalece el rendimiento y la motivación de tu
            equipo de trabajo con nuestras tarjetas de incentivos. Es
            fundamental reconocer y recompensar el esfuerzo y el
            compromiso de tus colaboradores una vez alcanzados los
            objetivos establecidos, por lo que ofrecemos una amplia
            variedad de incentivos como: Si Vale, Amazon, Uber,
            UberEats, Spotify, Apple y más, puedes personalizar y
            adaptar tus incentivos al monto que desees
          </p>
        </div>
      </div>
      <div className="py-10">
        <InfiniteCarrousel items={cards1} />
        <InfiniteCarrousel items={cards2} slow={true} alt />
      </div>
    </div>
  );
};

export default IncentivesSection;
