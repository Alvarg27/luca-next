import useNavigation from "@/hooks/useNavigation";
import Image from "next/image";
import React, { useState } from "react";
import aboutImage from "../../public/about.webp";

const AboutSection = () => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  const { aboutRef } = useNavigation();
  return (
    <section
      ref={aboutRef}
      className="w-[95%] max-w-[1200px] mx-auto  mt-0  lg:mt-8 lg:mb-8 flex relative flex-col md:flex-row  from-stone-100 bg-gradient-to-t via-stone-100"
    >
      <Image
        onLoadingComplete={() => setImageIsLoaded(true)}
        src={aboutImage}
        className={`md:h-[400px] h-[250px] object-cover w-full md:w-1/3 rounded-2xl relative shadow-xl  transition duration-300 z-[1] ${
          imageIsLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
      <div className="md:h-[400px] h-[250px] absolute object-cover w-full md:w-1/3 rounded-2xl animate-pulse bg-gray-200" />
      <div className="w-full md:w-2/3  flex items-center relative lg:mt-0 mt-10">
        <div className="md:pl-10 md:text-left text-center">
          <h2 className="font-semibold md:text-4xl text-3xl font-monument">
            We make{" "}
            <b className="text-teal-500 font-alga  md:text-[48px] text-[40px]">
              experiences
            </b>{" "}
            {`you'll never forget`}
          </h2>
          <p className="font-alga md:text-xl text-gray-600 my-4">
            Nos dedicamos a crear experiencias inolvidables para empresas.
            Brindando a nuestros clientes las mejores opciones para satisfacer
            sus necesidades en viajes, eventos, conferencias y más. Con el
            objetivo de llevarlos al siguiente nivel.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
