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
              Luca es una agencia 360° que va de lo digital a lo real,
              realizando las campañas digitales mas creativas y con
              mayor impacto, hasta las mejores experiencias en tus
              eventos empresariales y sociales. Somos expertos en
              prestar atención en cada detalle haciendo que cada
              experiencia sea única e inolvidable para ti, tus
              invitados y colaboradores.
            </p>
            <p className="font-alga md:text-xl text-gray-600 my-4">
              Asimismo, entendemos la importancia de crear vínculos
              que perduren con las personas que te rodean; es por eso
              que ofrecemos una amplia variedad de productos
              promocionales de excelente calidad que reforzaran la
              presencia de tu marca, así como también, creamos
              experiencias a través de kits ejecutivos los cuales
              dejaran huella en quien los reciba.
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
