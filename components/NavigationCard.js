import React, { useRef, useState } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";

const NavigationCard = ({ label, selected, setSelected, index }) => {
  const { height } = useWindowDimensions();
  const [isHovered, setIsHovered] = useState(false);
  const isSelected = selected === label;
  const cardRef = useRef(null);
  return (
    <div
      ref={cardRef}
      onClick={() => {
        setSelected(label);
        window.scrollTo({
          top: height * index,
          behavior: "smooth",
        });
      }}
      className={` rounded-full px-6 py-2 inline-flex m-1 shadow-md  cursor-pointer relative overflow-hidden transition duration-300 ${
        isSelected
          ? " text-white bg-black"
          : " bg-white bg-opacity-70 backdrop-blur-md"
      }`}
    >
      <p className="relative"> {label}</p>
    </div>
  );
};

export default NavigationCard;
