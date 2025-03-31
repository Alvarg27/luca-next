import { useRouter } from 'next/router';
import Image from 'next/image';
import React, { useState } from 'react';
import { RiArrowRightLine, RiGiftLine } from 'react-icons/ri';
import trimString from '@/helpers/trimString';
import usePageOffset from '@/hooks/usePageOffset';

const GiftShowcaseCard = ({ gift, columnIndex, itemIndex, totalItems }) => {
  const router = useRouter();
  const { offsetY } = usePageOffset();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const calculateHeight = () => {
    const baseHeight = 400; // Base height in pixels
    const heightVariation = columnIndex % 2 === 0 ? 1.2 : 0.8;
    return baseHeight * heightVariation;
  };

  const handleNavigation = () => {
    router.push(`/gifts/${gift.permalink}?prevscroll=${offsetY}`);
  };

  return (
    <div className="w-full p-2">
      <div
        onClick={handleNavigation}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          height: `${calculateHeight()}px`,
          transition: 'transform 0.3s ease, opacity 0.3s ease'
        }}
        className="relative rounded-xl overflow-hidden shadow-lg bg-gray-100 cursor-pointer group"
      >
        {/* Image Container */}
        <div className="relative w-full h-full">
          {gift.file ? (
            <Image
              fill
              src={gift.file.startsWith('/') ? gift.file : gift.file}
              alt={gift.title}
              className={`object-cover transition-transform duration-300 ${
                isHovered ? 'scale-105' : 'scale-100'
              }`}
              onLoadingComplete={() => setIsLoaded(true)}
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <RiGiftLine className="text-4xl text-gray-400" />
            </div>
          )}
        </div>

        {/* Overlay Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <h3 className="text-white font-monument text-lg mb-2">
            {trimString(gift.title, 30)}
          </h3>
          
          {/* Characteristics List */}
          <ul className="space-y-1 mb-3">
            {gift.characteristics?.slice(0, 2).map((char, index) => (
              <li 
                key={index}
                className="text-gray-300 font-alga text-sm flex items-center"
              >
                <span className="mr-1">•</span>
                {trimString(char, 40)}
              </li>
            ))}
          </ul>

          {/* Options Badges */}
          {gift.options && (
            <div className="flex flex-wrap gap-2 mt-2">
              {Object.entries(gift.options).map(([key, values]) => (
                values.map((value, idx) => (
                  <span
                    key={`${key}-${idx}`}
                    className="px-2 py-1 text-xs bg-blue-600/30 rounded-full text-blue-100"
                  >
                    {trimString(value, 20)}
                  </span>
                ))
              ))}
            </div>
          )}

          {/* CTA Button */}
          <button className="mt-3 flex items-center text-blue-400 hover:text-blue-300 transition-colors">
            <span className="">Ver más</span>
            <RiArrowRightLine className="ml-1" />
          </button>
        </div>

        {/* Loading State */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
      </div>
    </div>
  );
};

export default GiftShowcaseCard;
