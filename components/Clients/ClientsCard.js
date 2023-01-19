import useWindowDimensions from "@/hooks/useWindowDimensions";
import Image from "next/image";
import React from "react";

const ClientsCard = ({ client, index, colIndex }) => {
  const { width } = useWindowDimensions();

  const handleSize = () => {
    if (width > 768) {
      if (colIndex === 0 && index === 0) {
        return 200;
      }
      return 120;
    }

    if (colIndex === 0 && index === 0) {
      return 100;
    }
    return 60;
  };

  return (
    <div
      style={{
        maxWidth: "100%",
        height: handleSize(),
        width: handleSize(),
      }}
      className={`relative  shadow-xl  m-1 rounded-2xl bg-white ${
        colIndex === 0 && index === 0 ? "p-5" : "p-3"
      }`}
    >
      <div className="relative h-full w-full">
        <Image fill src={client.image} className="object-contain" />
      </div>
    </div>
  );
};

export default ClientsCard;
