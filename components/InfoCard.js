import React from "react";

const InfoCard = () => {
  return (
    <div className="w-[90%] text-lg">
      <div className="w-full bg-teal-400 rounded-2xl p-8 my-2">
        <p className="text-xl font-monument">Missión</p>
        <p className="font-alga">
          Nuestra misión en LUCA es brindarle a nuestros clientes un servicio
          excepcional <b>mediante:</b>
        </p>
      </div>
      <div>
        <div className="flex">
          <div className="mr-1 flex-1 bg-[#DDD8CD] rounded-2xl p-4 h-[120px]  flex flex-col justiDDD8CD">
            <p className="font-alga">La mejor calidad en nuestros productos.</p>
          </div>
          <div
            className="ml-1 flex-1 bg-[#DDD8CD]
           rounded-2xl p-4 h-[120px]  flex flex-col justiDDD8CD"
          >
            <p className="font-alga">Desarrollando ideas innovadoras.</p>
          </div>
        </div>
        <div className="mt-2 flex-1 bg-[#DDD8CD] rounded-2xl p-4 h-[120px] flex flex-col justiDDD8CD">
          <p className="font-alga">La mejor calidad en nuestros productos.</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
