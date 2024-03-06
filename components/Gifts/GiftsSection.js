import React from 'react';
import CardSlider from '../CardSlider/CardSlider';

const GiftsSection = () => {
  const items = [
    {
      title: 'Kit de ginebra',
      file: 'https://cdn.tectify.io/luca-web/gifts/kitginebra.webp',
    },
    {
      title: 'Kit de mezcal',
      file: '/Gifts/mezcal.webp',
    },
    {
      title: 'Kit de tequila',
      file: '/Gifts/Tequila3.webp',
    },
    {
      title: 'Kit de vino',
      file: '/Gifts/Vino.webp',
    },
    {
      title: 'Kit de whiskey',
      file: '/Gifts/IMG_5968 (2).jpg',
    },
    {
      title: 'Kit de gin',
      file: '/Gifts/gin.webp',
    },
    {
      title: 'Kit de licor',
      file: '/Gifts/licor.webp',
    },
  ];
  return (
    <section className="my-28 w-[90%] mx-auto max-w-[1200px]">
      <div className="text-center mb-10 px-4">
        <h2 className="font-semibold md:text-4xl text-3xl font-monument">
          Regalos Corporativos
        </h2>
        <div className="flex justify-center items-center">
          <p className="font-alga md:text-xl text-gray-600 my-6 md:w-[900px]">
            Destaca en cualquier ocasión especial, con elegantes Kits
            que transmiten el aprecio y la dedicación que tu empresa o
            tu persona tiene hacia aquellos que la rodean, haz de cada
            regalo una experiencia inolvidable personalizándolo de
            acuerdo a la experiencia que quieras brindarle a tus
            clientes, socios, empleados o amigos.
          </p>
        </div>
      </div>
      <CardSlider items={items} />
    </section>
  );
};

export default GiftsSection;
