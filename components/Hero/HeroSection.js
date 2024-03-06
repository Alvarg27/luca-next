import Image from 'next/image';
import React, { useRef, useState } from 'react';
import Button from '../commons/Button';
import heroImage from '../../public/hero.webp';
import Circles from '../commons/Circles';
import { useRouter } from 'next/router';
import Form from '../Form/Form';

const HeroSection = () => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  const { homeRef } = useRef();
  const router = useRouter();
  return (
    <section
      ref={homeRef}
      className="min-h-screen w-full flex justify-center items-center relative"
    >
      <div className="max-w-[1200px] w-[90%] relative z-[1] flex md:flex-row flex-col md:mt-[0px] -mt-[60px] pt-32 md:py-24">
        <div className="w-full md:w-2/3 lg:pr-4 flex items-center md:h-[700px] h-[550px] justify-center">
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <h2 className="text-3xl lg:text-3xl xl:text-5xl font-medium font-monument">
              Transformando eventos en{' '}
              <b className="font-alga text-[40px] lg:text-[65px] text-teal-500">
                experiencias
              </b>
            </h2>
            <p className="font-alga md:text-xl text-gray-600 my-4">
              En Luca somos una agencia comprometida a crear
              experiencias únicas en tus eventos empresariales y
              sociales garantizando la atención a cada detalle, nos
              distinguimos por ofrecer cursos, incentivos y talleres
              que fortalecerán el trabajo en equipo y la unión del
              mismo.
            </p>
            <p className="font-alga md:text-xl text-gray-600 my-4">
              Valoramos la importancia de crear y reforzar vínculos
              que perduren con las personas que te rodean, es por eso,
              que ofrecemos artículos promocionales de la más alta
              calidad para fortalecer la presencia que tu marca
              necesita.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex items-center justify-center">
          <Form />
        </div>
      </div>
      <Circles />
    </section>
  );
};

export default HeroSection;
