import React from "react";
import CardSlider from "../CardSlider/CardSlider";

const GiftsSection = () => {
  const items = [
    {
      title: "Kit de ginebra",
      file: "https://cdn.tectify.io/luca-web/gifts/kitginebra.webp",
    },
    {
      title: "Kit de mezcal",
      file: "https://cdn.tectify.io/luca-web/gifts/kitmezcal.webp",
    },
    {
      title: "Kit de tequila",
      file: "https://cdn.tectify.io/luca-web/gifts/kittequila.webp",
    },
    {
      title: "Kit de vino",
      file: "https://cdn.tectify.io/luca-web/gifts/kitvino.webp",
    },
    {
      title: "Kit de whiskey",
      file: "https://cdn.tectify.io/luca-web/gifts/kitwhisky.webp",
    },
  ];
  return (
    <section className="my-20 w-[90%] mx-auto max-w-[1200px]">
      <div className="text-center mb-10 px-4">
        <h2 className="font-semibold md:text-4xl text-3xl font-monument">
          Regalos Corporativos
        </h2>
        <p className="font-alga md:text-xl text-gray-600 my-2">
          Consiente a tus clientes y colaboradores con distintos regalos
          corporativos para fortalecer tus relaciones laborales.
        </p>
      </div>
      <CardSlider items={items} />
    </section>
  );
};

export default GiftsSection;
