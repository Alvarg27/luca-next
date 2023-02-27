import React from "react";
import PromotionalCard from "./PromotionalCard";

const PromotionalSection = () => {
  return (
    <div className="w-[90%] max-w-[1200px] mx-auto my-10">
      <div className="text-center mb-10 px-4">
        <h2 className="font-semibold md:text-4xl text-3xl font-monument">
          Promocionales
        </h2>
        <p className="font-alga md:text-xl text-gray-600 my-2">
          Descubre nuestros catálogos con los mejores artículos promocionales
          para tu empresa.
        </p>
      </div>
      <div className="flex md:flex-row flex-col">
        <PromotionalCard
          label="Artículos promocionales 1"
          url="https://online.flippingbook.com/view/671835397/"
        />
        <PromotionalCard
          label="Catálogo de Yetis"
          url="https://drive.google.com/file/d/1_JUDUSYV6t1pzeP4yg8rz5mqmkImdXe_/view?usp=share_link"
        />
        <PromotionalCard
          label="Artículos promocionales 2"
          url="https://drive.google.com/file/d/1XSSaMXgaoXLhtVqxt942DsVJemCuZapP/view?usp=share_link"
        />
      </div>
    </div>
  );
};

export default PromotionalSection;
