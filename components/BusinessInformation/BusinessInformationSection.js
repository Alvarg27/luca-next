import React, { useState } from "react";
import BusinessInformationCard from "./BusinessInformationCard";

const BusinessInformationSection = () => {
  const [selected, setSelected] = useState();
  return (
    <section className=" w-[95%] mt-20 flex flex-col lg:flex-row md:flex-row justify-center items-center px-1 max-w-[1200px] m-auto relative">
      <BusinessInformationCard
        className="md:pr-2 md:mb-0 mb-6"
        item={{
          _id: "01",
          icon: "RiFocus2Line",
          label: "Misión",
          description:
            "Buscamos la integración del equipo de trabajo mediante experiencias de primera clase en las cuales se podrá disfrutar de momentos inigualables. Asimismo estamos comprometidos a escuchar las necesidades de nuestros clientes y proporcionarles las mejores opciones para que alcancen sus objetivos de acuerdo a sus necesidades. A través de productos promocionales y regalos corporativos buscamos que tengas la mejor opción para hacer sentir especial a tus cliente",
        }}
      />
      <BusinessInformationCard
        className="md:pl-2"
        item={{
          _id: "02",
          icon: "RiEyeLine",
          label: "Visión",
          description:
            "Con la creación constante de nuevas ideas e innovación en experiencias unicas para tu equipo de trabajo, cumpliremos nuestro objetivo de fortalecer nuestra presencia nacional e internacional para seguir brindando el mejor servicio a nuestros clientes. Además fortaleceremos cada area de la empresa para brindar un servicio completo y de calidad.",
        }}
      />
    </section>
  );
};

export default BusinessInformationSection;
