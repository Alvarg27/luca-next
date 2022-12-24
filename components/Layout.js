import React, { useState } from "react";
import { RiMenu2Fill, RiMenuFill } from "react-icons/ri";
import Header from "./Header";
import Menu from "./Menu";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="fixed z-[20] w-[50px] h-[50px] bg-white bg-opacity-50 backdrop-blur-md rounded-full flex justify-center items-center mt-4 ml-4 shadow-md"
      >
        <RiMenuFill className="text-2xl" />
      </div>
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
      {children}
    </>
  );
};

export default Layout;
