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
      <p className="text-sm text-center w-[80%] font-alga">
        En LUCA nos encargamos de que cada experiencia que se le brinda al
        cliente sea de la más alta calidad ofrenciendole una amplia gama de
        opciones para que encuentre las más adecuada a sus necesidades
      </p>

      <div className="flex flex-wrap w-full justify-center mt-4 max-w-[400px]">
        {list.map((service, i) => (
          <ServiceCard key={i} index={i} service={service} />
        ))}
      </div>
    </>
  );
};

export default Services;
