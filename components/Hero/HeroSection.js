import Image from "next/image";
import React, { useState } from "react";
import Button from "../commons/Button";
import heroImage from "../../public/hero.webp";
import Circles from "../commons/Circles";

const HeroSection = () => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  return (
    <section className="min-h-screen w-full flex justify-center items-center  relative ">
      <div className="max-w-[1200px] w-[95%] relative z-[1] flex-col md:flex-row flex md:mt-[0px]  mt-[120px]">
        <div className="md:w-1/2 w-full pr-4 flex items-center md:h-[500px]">
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <h2 className="text-5xl lg:text-6xl font-medium font-monument">
              Experience brands from a new point of{" "}
              <b className="font-alga text-[65px] lg:text-[80px] text-teal-500">
                view
              </b>
            </h2>
            <p className="my-4 font-alga text-xl text-gray-600">
              Somos una agencia que se dedica a experiencias de primera clase
              con empresas multinacionales.
            </p>
            <Button className="bg-black text-white">Ponte en contacto</Button>
          </div>
        </div>
        <div className="md:w-1/2 w-full z-[0] relative">
          <div className="w-[220px]  bg-white absolute z-[2] rounded-2xl left-1/2 -translate-x-1/2 -bottom-10 md:translate-x-0  md:bottom-20 md:-left-8 shadow-xl  bg-opacity-75 backdrop-blur-lg p-4">
            <div className="flex items-center my-2">
              <p className="text-3xl font-bold mr-2">20+</p>
              <p className="leading-[18px]">Clientes internacionales</p>
            </div>
            <div className="flex items-center my-2">
              <p className="text-3xl font-bold mr-2">100+</p>
              <p className="leading-[18px]">Experiencias creadas</p>
            </div>
          </div>
          <div className="md:h-[500px] w-full overflow-hidden rounded-2xl my-10">
            <Image
              onLoadingComplete={() => setImageIsLoaded(true)}
              src={heroImage}
              className={`h-full w-full rounded-2xl shadow-xl relative object-cover overflow-hidden lg:hover:scale-110 transition duration-500 bg-gray-100 ${
                imageIsLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </div>
      </div>
      <Circles />
    </section>
  );
};

export default HeroSection;
