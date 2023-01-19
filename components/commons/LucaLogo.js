import React from "react";

const LucaLogo = () => {
  return (
    <div>
      <div className="flex items-center">
        <p className={`text-3xl font-monument duration-300 transition `}>LU</p>
        <div
          className={`w-[12px] h-[12px] bg-teal-500 rounded-full mb-[10px] ml-[3px] transition duration-300`}
        />
      </div>
      <div className={`flex items-center -mt-5 transition duration-300 `}>
        <p className="text-3xl font-monument opacity-0 select-none">LU</p>
        <p className="text-3xl font-monument ">CA</p>
      </div>
    </div>
  );
};

export default LucaLogo;
