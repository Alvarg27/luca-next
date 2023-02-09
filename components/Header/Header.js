import usePageOffset from "@/hooks/usePageOffset";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { useRouter } from "next/router";
import React from "react";
import Button from "../commons/Button";
import LucaLogo from "../commons/LucaLogo";
import Navigation from "./Navigation";

const Header = () => {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const { offsetY } = usePageOffset();
  return (
    <div className={`w-full h-[70px] fixed top-0 z-50 `}>
      <div className="flex justify-between max-w-[1200px] w-[90%] h-full items-center mx-auto relative">
        <LucaLogo />
        {width > 1024 && (
          <div className="flex items-center ">
            <Navigation className="mr-6" />
            <Button
              onClick={() => router.push("/contacto")}
              className="bg-black text-white "
            >
              Ponerte en contacto
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
