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
    <div className="flex flex-wrap justify-center mt-20 relative z-[11]">
      {lista.map((item, i) => (
        <NavigationCard
          key={i}
          label={item}
          selected={selected}
          setSelected={setSelected}
        />
      ))}
    </div>
  );
};

export default Navigation;
