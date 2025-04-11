import gifts from '@/data/gifts';
import useNavigation from '@/hooks/useNavigation';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import React from 'react';
import GiftShowcaseCard from './GiftShowcaseCard';

const GiftShowcaseSection = () => {
  const { width } = useWindowDimensions();
  const { servicesRef } = useNavigation();

  const calculateColumnWidth = () => {
    if (width <= 768) return '50%';
    if (width <= 1024) return '33.33%';
    return gifts.length >= 4 ? '25%' : `${100 / gifts.length}%`;
  };

  const generateColumns = () => {
    const columnCount = width <= 768 ? 2 : width <= 1024 ? 3 : 4;
    const columns = Array.from({ length: columnCount }, () => []);
    
    gifts.forEach((gift, index) => {
      columns[index % columnCount].push(gift);
    });

    return columns;
  };

  return (
    <section ref={servicesRef} className="w-full max-w-[1200px] mx-auto mb-10">
      <div className="text-center mb-10 px-4">
        <h2 className="font-semibold md:text-4xl text-3xl font-monument">
          KITS CORPORATIVOS
        </h2>
        <p className="font-alga md:text-xl text-gray-600 my-6">
        Destaca en ocasiones especiales con Kits elegantes que expresan aprecio y dedicación, convirtiendo cada regalo en una experiencia personalizada para clientes, socios, empleados o amigos.
        </p>
      </div>
      
      <div className="flex w-full gap-2">
        {generateColumns().map((column, colIndex) => (
          <div 
            key={colIndex}
            className="flex-1"
            style={{
              minWidth: calculateColumnWidth(),
              maxWidth: calculateColumnWidth()
            }}
          >
            {column.map((gift, index) => (
              <GiftShowcaseCard 
                key={gift.permalink}
                gift={gift}
                columnIndex={colIndex}
                itemIndex={index}
                totalItems={column.length}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default GiftShowcaseSection;
