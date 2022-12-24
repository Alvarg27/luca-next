import React, { useRef, useState } from "react";

const NavigationCard = ({ label, selected, setSelected }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isSelected = selected === label;
  const cardRef = useRef(null);
  return (
    <div
      ref={cardRef}
      onClick={() => setSelected(label)}
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
