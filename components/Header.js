import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-full h-[90px] flex justify-center items-center absolute z-[2]">
      <Image
        src="/lucalogo.webp"
        height={100}
        width={100}
        className="object-contain h-[45px]"
      />
    </div>
  );
};

export default Header;
