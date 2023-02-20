import React from "react";
import InfiniteCarrousel from "../InfiniteCarrousel/InfiniteCarrousel";
import IncentiveCard from "./IncentiveCard";

const IncentivesSection = () => {
  const cards1 = Array.from({ length: 9 });
  const cards2 = Array.from({ length: 10 });
  return (
    <div className="my-20">
      <div className="text-center mb-10 px-4">
        <h2 className="font-semibold md:text-4xl text-3xl font-monument">
          INCENTIVOS
        </h2>
        <p className="font-alga md:text-xl text-gray-600 my-2">
          Tarjetas de regalo para tu equipo.
        </p>
      </div>
      <InfiniteCarrousel items={cards1} />
      <InfiniteCarrousel items={cards2} slow={true} alt />
    </div>
  );
};

export default IncentivesSection;
