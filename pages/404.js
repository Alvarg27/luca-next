import Button from "components/commons/Button";
import { useRouter } from "next/router";
import React from "react";

const NotFoundPage = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center w-full h-full mt-[120px]">
      <div className="flex flex-col items-center justify-center">
        <p className="font-bold text-8xl text-gray-300">404</p>
        <p className="text-gray-500">Pagina no encontrada</p>
        <Button
          onClick={() => router.push("/")}
          className="bg-black text-white !w-[160px] mt-4"
        >
          Ir al inicio
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
