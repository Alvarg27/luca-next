import useNavigation from "@/hooks/useNavigation";
import React, { useState } from "react";

const MenuIcon = ({ className }) => {
  const { dropdownIsOpen, setDropdownIsOpen } = useNavigation();
  const isOpen = dropdownIsOpen;
  return (
    <div
      onClick={() => setDropdownIsOpen((prev) => !prev)}
      className={`w-[30px] h-[30px] flex flex-col justify-between cursor-pointer  ${
        isOpen ? "py-0" : "py-[2px]"
      } ${className}`}
    >
      <div
        className={` h-[4px] bg-black rounded-sm transition duration-300  ${
          isOpen ? "rotate-45 -translate-x-[0px] translate-y-[13px]" : ""
        }`}
      />
      <div
        className={` h-[4px] bg-black rounded-sm transition duration-300 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        className={` h-[4px] bg-black rounded-sm transition duration-300  ${
          isOpen ? "-rotate-45 -translate-x-[0px] -translate-y-[13px]" : ""
        }`}
      />
    </div>
  );
};

export default MenuIcon;
