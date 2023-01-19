import Image from "next/image";
import React from "react";
import aboutImage from "../../public/about.webp";

const AboutSection = () => {
  return (
    <section className="w-[95%] max-w-[1200px] mx-auto  mt-32  lg:mt-8 lg:mb-8 flex relative flex-col md:flex-row  from-stone-100 bg-gradient-to-t via-stone-100">
      <Image
        src={aboutImage}
        className="md:h-[400px] h-[250px] object-cover w-full md:w-1/3 rounded-2xl shadow-xl relative"
      />
      <div className="w-full md:w-2/3  flex items-center relative lg:mt-0 mt-10">
        <div className="md:pl-10 md:text-left text-center">
          <h2 className="font-semibold md:text-4xl text-3xl font-monument">
            We make{" "}
            <b className="text-teal-500 font-alga text-5xl">experiences</b>{" "}
            {`you'll never forget`}
          </h2>
          <p className="font-alga text-xl text-gray-600 my-4">
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
