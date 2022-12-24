import React from "react";
import {
  RiAwardLine,
  RiLightbulbLine,
  RiTimeLine,
  RiTimer2Line,
} from "react-icons/ri";
const Mision = () => {
  return (
    <div className="w-[90%] text-lg">
      <div className="w-full bg-teal-400 rounded-2xl p-8 my-2">
        <p className="text-xl font-monument">Misión</p>
        <p className="font-alga">
          Nuestra misión en LUCA es brindarle a nuestros clientes un servicio
          excepcional <b>mediante:</b>
        </p>
      </div>
      <div>
        <div className="flex">
          <div className="mr-1 flex-1 b  bg-neutral-900 text-white rounded-2xl p-4  flex flex-col justify-between">
            <span className="bg-neutral-800 inline-flex rounded-full w-[50px] h-[50px] items-center justify-center">
              <RiAwardLine className="text-2xl" />
            </span>
            <p className="font-alga" mt-4>
              La mejor calidad en nuestros productos.
            </p>
          </div>
          <div
            className="ml-1 flex-1 bg  bg-neutral-900 text-white
           rounded-2xl p-4 flex flex-col justify-between"
          >
            <span className="bg-neutral-800 inline-flex rounded-full w-[50px] h-[50px] items-center justify-center">
              <RiLightbulbLine className="text-2xl" />
            </span>

            <p className="font-alga mt-4">Desarrollando ideas innovadoras.</p>
          </div>
        </div>
        <div className="mt-2 flex-1   bg-neutral-900 text-white rounded-2xl p-4 flex flex-col justify-between">
          <span className="bg-neutral-800 inline-flex rounded-full w-[50px] h-[50px] items-center justify-center">
            <RiTimer2Line className="text-2xl" />
          </span>

          <p className="font-alga mt-4">
            Optimizando tiempo siendo así mas eficientes en el tiempo de
            realización y entrega.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mision;
