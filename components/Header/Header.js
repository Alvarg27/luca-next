import usePageOffset from "@/hooks/usePageOffset";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import React from "react";
import Button from "../commons/Button";
import LucaLogo from "../commons/LucaLogo";
import MenuIcon from "../commons/MenuIcon";

const Header = () => {
  const { width } = useWindowDimensions();
  const { offsetY } = usePageOffset();
  return (
    <div className={`w-full h-[70px] fixed top-0 z-50 `}>
      <div
        style={{ height: offsetY > 35 ? 70 : 0, transition: "0.2s" }}
        className={`absolute top-0 w-full ${
          offsetY > 35 ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      />
      <div className="flex justify-between max-w-[1200px] w-[95%] h-full items-center mx-auto relative">
        <LucaLogo />
        {width > 1024 && (
          <div className="flex items-center">
            <nav className="flex h-full items-center mr-4">
              <p className="mx-2 font-medium">Inicio</p>
              <p className="mx-2 font-medium">Nosotros</p>
              <p className="mx-2 font-medium">Servicios</p>
              <p className="mx-2 font-medium">Clientes</p>
            </nav>
            <Button className="bg-black text-white !h-[45px]">
              Ponte en Contacto
            </Button>
          </div>
        )}
        {width <= 1024 && <MenuIcon />}
      </div>
    </div>
  );
};

export default Header;
