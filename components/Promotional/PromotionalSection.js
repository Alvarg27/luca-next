import React from 'react';
import PromotionalCard from './PromotionalCard';

const PromotionalSection = () => {
  return (
    <div className="w-[90%] max-w-[1200px] mx-auto my-10">
      <div className="text-center mb-4 px-4">
        <h2 className="font-semibold md:text-4xl text-3xl font-monument">
          Artículos Promocionales
        </h2>
        <div className="flex justify-center items-center">
          <p className="font-alga md:text-xl text-gray-600 my-6 md:w-[900px]">
            Destaca y marca diferencia ante tu competencia con
            artículos promocionales personalizados de la más alta
            calidad. Es esencial fortalecer constantemente la
            presencia de tu marca con clientes, socios y
            trabajadores.; Es por eso que en Luca ofrecemos una amplia
            gama de productos adaptados y diseñados a tus necesidades
            para elevar el posicionamiento de tu marca y reflejar su
            identidad única.
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:px-24 px-4 gap-12">
        <PromotionalCard pdf="PDF/CATALOGO ARTICULOS.pdf" src="articulosPromocionales.jpg" label="Artículos promocional Luca" />
        <PromotionalCard pdf="PDF/CATALOGO TEXTILES LUCA.pdf" src="fotoTextiles.jpeg" label="Textiles promocional Luca" />
      </div>
    </div>
  );
};

export default PromotionalSection;
