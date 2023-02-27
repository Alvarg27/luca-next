import React from "react";
import RemixIcon from "../commons/RemixIcon";

const BusinessInformationCard = ({ item, className }) => {
  return (
    <div className={`w-full md:w-1/2  lg:w-1/2  ${className}`}>
      <div
        className={` w-full  md:h-[450px] lg:h-[350px] px-8 flex justify-center flex-col items-center`}
      >
        <div className="bg-teal-100 text-teal-500  text-3xl rounded-full flex justify-center items-center h-[50px] w-[50px] bg-opacity-60">
          <RemixIcon name={item.icon} />
        </div>

        <h2 className="text-2xl font-medium my-2 font-monument text-center">
          {item.label}
        </h2>
        <p className="text-gray-600 my-2 font-alga text-center">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default BusinessInformationCard;
