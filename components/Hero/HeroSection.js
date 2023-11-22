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
      <div className="max-w-[1200px] w-[95%] relative z-[1] flex-col md:flex-row flex md:mt-[0px]  -mt-[60px] pt-32 md:pt-12">
        <div className="lg:w-[40%] w-full lg:pr-4 flex items-center md:h-[500px] h-[300px] justify-center">
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <h2 className="text-3xl lg:text-3xl xl:text-5xl font-medium font-monument">
              Transformando eventos en{' '}
              <b className="font-alga text-[40px] lg:text-[65px] text-teal-500">
                experiencias
              </b>
            </h2>
            <p className="my-4 font-alga text-xl text-gray-600">
              Somos una agencia que se dedica a experiencias de
              primera clase con empresas multinacionales.
            </p>
            <Button
              onClick={() => router.push('/contacto')}
              className="bg-black text-white"
            >
              Ponte en contacto
            </Button>
          </div>
        </div>
        <div className="flex w-full md:items-end lg:px-24 flex-col justify-center">
            <Form />
        </div>
      </div>
      <Circles />
    </section>
  );
};

export default HeroSection;
