import React from "react";
import RemixIcon from "../commons/RemixIcon";

const BusinessInformationCard = ({ item, className }) => {
  return (
    <div className={`w-full md:w-1/2  lg:w-1/2  ${className}`}>
      <div
        className={` w-full h-[300px] md:h-[390px] lg:h-[350px] shadow-xl rounded-2xl p-8 bg-neutral-800`}
      >
        <div className="bg-teal-100 text-teal-500  text-3xl rounded-full flex justify-center items-center h-[50px] w-[50px] bg-opacity-10">
          <RemixIcon name={item.icon} />
        </div>

        <h2 className="text-2xl font-medium my-2 font-monument text-stone-100">
          {item.label}
        </h2>
        <p className="text-gray-400 my-2 font-alga">{item.description}</p>
      </div>
    </div>
  );
};

export default BusinessInformationCard;
