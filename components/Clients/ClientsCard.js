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
      return 120;
    }
    return 80;
  };

  return (
    <div
      style={{
        maxWidth: "100%",
        height: handleSize(),
        width: handleSize(),
      }}
      className="relative md:p-6 p-4 shadow-xl  m-1 rounded-2xl bg-white"
    >
      <div className="relative h-full w-full">
        <Image fill src={client.image} className="object-contain" />
      </div>
    </div>
  );
};

export default ClientsCard;
