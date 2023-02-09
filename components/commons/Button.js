import React, { useState } from "react";

const Button = ({ children, className, style, onClick }) => {
  const [isHovered, setIsHovered] = useState();
  return (
    <button
      onClick={onClick}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      style={style}
      className={`h-[50px] flex items-center justify-center rounded-lg px-4 shadow-md relative ${className}`}
    >
      <div
        style={{ height: isHovered ? 50 : 0, transition: "0.15s" }}
        className="bg-teal-500 absolute bottom-0 w-full rounded-lg"
      />
      <div className="flex items-center justify-center relative">
        {children}
      </div>
    </button>
  );
};

export default Button;
