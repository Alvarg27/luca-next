import React from "react";

const ServiceCard = ({ service, index }) => {
  let style = "";
  const arr1 = [0, 3, 6, 9];
  const arr2 = [1, 4, 7, 10];
  const arr3 = [2, 5, 8, 11];
  if (arr1.some((x) => x === index)) {
    style = "bg-neutral-900 text-[#DDD8CD]";
  }
  if (arr2.some((x) => x === index)) {
    style = " bg-teal-500";
  }
  if (arr3.some((x) => x === index)) {
    style = "bg-white bg-opacity-50";
  }
  return (
    <p
      className={`px-4 m-1 py-2 rounded-full flex items-center  font-medium shadow-md text-sm ${style}`}
    >
      {service.label}
    </p>
  );
};

export default ServiceCard;
