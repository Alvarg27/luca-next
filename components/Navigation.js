import React, { useState } from "react";
import NavigationCard from "./NavigationCard";

const Navigation = () => {
  const [selected, setSelected] = useState("Inicio");
  //JAVASCRIPT
  const lista = [
    "Inicio",
    "Contacto",
    "Eventos",
    "Experiencias",
    "Lucas es",
    "Redes sociales",
    "Misión/visión",
  ];

  return (
    <div className="flex flex-wrap justify-center my-20">
      {lista.map((viñeta) => (
        <NavigationCard
          label={viñeta}
          selected={selected}
          setSelected={setSelected}
        />
      ))}
    </div>
  );
};

export default Navigation;
