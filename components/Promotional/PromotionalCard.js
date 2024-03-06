import React, { useState } from 'react';
import { RiArrowRightLine, RiBookOpenLine } from 'react-icons/ri';
import Image from 'next/image';

const PromotionalCard = ({ label, src, pdf }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageIsLoaded, setImageIsLoaded] = useState(false);

  const handleDownload = () => {
    const anchor = document.createElement('a');
    anchor.href = pdf;
    anchor.download = pdf;
    anchor.click();
  };

  return (
    <div className="w-full h-full md:px-2 px-0">
      <div
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        onClick={handleDownload}
        className="bg-white rounded-2xl shadow-sm"
      >
        <div className="md:h-[540px] h-[250px] relative">
          <div className="bg-gray-200 h-full w-full rounded-t-2xl absolute"></div>
          <Image
            fill
            src={src}
            className={`rounded-t-2xl object-cover absolute z-[1] transition duration-300${
              imageIsLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoadingComplete={() => setImageIsLoaded(true)}
          />
        </div>
        <div className="py-4 h-auto">
          <p className="font-monument text-center">{label}</p>
          <div
            className={`text-blue-500 flex items-center text-center justify-center ${
              isHovered ? 'underline' : ''
            }`}
          >
            <p className="mr-1 items-center text-center">
              Descargar catálogo
            </p>
            <RiArrowRightLine />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionalCard;
