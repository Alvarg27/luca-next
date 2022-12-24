import React, { useEffect, useState } from "react";
import NavigationCard from "./NavigationCard";

const Navigation = () => {
  const [selected, setSelected] = useState("Inicio");
  //JAVASCRIPT
  const lista = [
    "Inicio",
    "Misión",
    "Visión",
    "Experiencias",
    "Lucas es",
    "Redes sociales",
  ];

  return (
    <div className="flex flex-wrap justify-center absolute bottom-[10%] z-[11] ">
      {lista.map((item, i) => (
        <NavigationCard
          key={i}
          index={i}
          label={item}
          selected={selected}
          setSelected={setSelected}
        />
      ))}
    </div>
  );
};

export default Navigation;
