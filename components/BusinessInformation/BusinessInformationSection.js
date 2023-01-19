import React, { useState } from "react";
import BusinessInformationCard from "./BusinessInformationCard";

const BusinessInformationSection = () => {
  const [selected, setSelected] = useState();
  return (
    <section className=" w-[95%] my-24 flex flex-col lg:flex-row md:flex-row justify-center items-center px-1 max-w-[1200px] m-auto relative">
      <BusinessInformationCard
        className="md:pr-2 md:mb-0 mb-6"
        item={{
          _id: "01",
          icon: "RiFocus2Line",
          label: "Misión",
          description:
            "Nuestra misión en LUCA es brindar servicios excepcionales a nuestros clientes mediante la oferta de productos de la mejor calidad, optimizando el tiempo para ser más eficientes en la realización y entrega, desarrollando ideas innovadoras, y creando experiencias memorables a través del merchandising y la organización de eventos que cumplan y superen las expectativas de nuestros clientes.",
        }}
      />
      <BusinessInformationCard
        className="md:pl-2"
        item={{
          _id: "02",
          icon: "RiEyeLine",
          label: "Visión",
          description:
            "En Luca, nuestra visión se centra en la creación constante de nuevas ideas y la innovación mediante el uso de todos los recursos disponibles, combinado con nuestra trayectoria y experiencias únicas. Nuestro objetivo es fortalecer nuestra presencia nacional e internacional, aprendiendo y enriqueciéndonos con proyectos globales. Además, nos esforzamos por perfeccionar las áreas de la empresa para brindar un servicio completo y de calidad para cualquier tipo de cliente, generando empatía con empresas, sociedades, fundaciones, entre otros",
        }}
      />
    </section>
  );
};

export default BusinessInformationSection;
