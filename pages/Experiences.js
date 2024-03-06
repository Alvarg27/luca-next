import Circles from '@/components/commons/Circles';
import React from 'react';
import ShowcaseSection from '@/components/Showcase/ShowcaseSection';

const Experiences = () => {
  return (
    <>
      <div
        style={{
          maxHeight: document.documentElement.clientHeight,
          minHeight: document.documentElement.clientHeight,
        }}
        className="fixed top-0 left-0 w-full "
      >
        <Circles />
      </div>
      <div className="md:pt-[100px] pt-[100px] mx-auto w-[95%] max-w-[1200px] relative overflow-hidden">
        <ShowcaseSection />
      </div>
    </>
  );
};

export default Experiences;
