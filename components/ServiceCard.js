import React from "react";
import ServiceImage from "./ServiceImage";

const ServiceCard = () => {
  const service = {
    images: ["/top-golf/1.webp", "/top-golf/2.webp", "/top-golf/3.webp"],
  };
  return (
    <div className="w-full flex flex-col">
      <p className="text-white font-monument text-xl w-[90%] mx-auto">
        Top golf
      </p>
      <div className="my-8 flex overflow-auto">
        {service.images.map((image) => (
          <ServiceImage image={image} />
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
