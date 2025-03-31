import Circles from '@/components/commons/Circles';
import React from 'react';
import GiftShowcaseSection from '@/components/Showcase/GiftsShowcaseSection';

const Gifts = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full">
        <Circles />
      </div>
      <div className="md:pt-[100px] pt-[100px] mx-auto w-[95%] max-w-[1200px] relative overflow-hidden">
        <GiftShowcaseSection />
      </div>
    </>
  );
};

export default Gifts;
