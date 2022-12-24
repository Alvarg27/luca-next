import React from "react";
import ServiceImage from "./ServiceImage";

const ExperienceCard = () => {
  const experience = {
    images: ["/top-golf/1.webp", "/top-golf/2.webp", "/top-golf/3.webp"],
  };
  return (
    <div className="w-full flex flex-col">
      <p className="text-white font-monument text-2xl w-[90%] mx-auto">
        Experiencias
      </p>
      <div className="my-8 flex overflow-auto">
        {experience.images.map((image, i) => (
          <ServiceImage key={i} image={image} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
