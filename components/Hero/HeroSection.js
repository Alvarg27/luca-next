import Image from 'next/image';
import React, { useRef, useState } from 'react';
import Button from '../commons/Button';
import heroImage from '../../public/hero.webp';
import Circles from '../commons/Circles';
import { useRouter } from 'next/router';
import Form from '../Form/Form';
import useNavigation from "@/hooks/useNavigation";

const HeroSection = () => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  const router = useRouter();
  const { aboutRef } = useNavigation();
  return (
    <section
      ref={aboutRef}
      className="min-h-screen w-full flex justify-center items-center relative"
    >
      <div className="max-w-[1200px] w-[90%] relative z-[1] flex md:flex-row flex-col md:mt-[0px] -mt-[60px] pt-32 md:py-24">
        <div className="w-full md:w-3/4 lg:pr-4 flex items-center md:h-[700px] h-[550px] justify-center">
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <h2 className="text-3xl lg:text-3xl xl:text-5xl font-medium font-monument">
              Transformamos eventos en{' '}
              <b className="font-alga text-[40px] lg:text-[65px] text-teal-500">
                experiencias
              </b>
            </h2>
            <p className="font-alga md:text-xl text-gray-600 my-4">
            En Luca, creamos experiencias únicas en eventos empresariales y sociales, cuidando cada detalle. Ofrecemos desde organización de eventos hasta cursos y talleres para fortalecer el trabajo en equipo.
            </p>
            <p className="font-alga md:text-xl text-gray-600 my-4">
            Además, proporcionamos artículos promocionales de alta calidad para reforzar la presencia de tu marca y los vínculos con tu entorno.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/4 flex items-center justify-center">
          <Form />
        </div>
      </div>
      <Circles />
    </section>
  );
};

export default HeroSection;
