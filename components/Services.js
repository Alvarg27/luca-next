import React from "react";
import ServiceCard from "./ServiceCard";

const list = [
  { label: "Desayunos y comidas" },
  { label: "Taller de parrillada" },
  { label: "Coffe break" },
  { label: "Cata de vinos" },
  { label: "Comidas en restaurantes" },
  { label: "Promocionales" },
  { label: "Souvenirs personalizados" },
  { label: "Tarjetas de regalo" },
  { label: "Conferencias" },
  { label: "Recorridos turísticos" },
  { label: "Viajes empresariales" },
  { label: "Actividades de integralabel" },
];
const Services = () => {
  return (
    <>
      <p className="text-3xl font-monument">Servicios</p>
      <div className="flex flex-wrap w-full justify-center mt-4">
        {list.map((service, i) => (
          <ServiceCard key={i} index={i} service={service} />
        ))}
      </div>
    </>
  );
};

export default Services;
