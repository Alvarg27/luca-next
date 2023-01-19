import services from "@/data/services";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  RiArrowLeftLine,
  RiMap2Fill,
  RiMapPin2Fill,
  RiTeamFill,
  RiTimeFill,
} from "react-icons/ri";
import { FaMoneyBillWaveAlt } from "react-icons/fa";

const ServicePage = () => {
  const router = useRouter();
  const [service, setService] = useState();
  const [imageIsLoaded, setImageIsLoaded] = useState(false);

  useEffect(() => {
    if (!router?.query?.permalink) {
      return;
    }
    if (service) {
      return;
    }
    const result = services.find((x) => x.permalink === router.query.permalink);
    if (!result) {
      router.push("/404");
    }
    setService(result);
  }, [router.query]);
  return (
    <div className="pt-[100px] w-[95%] max-w-[1200px] mx-auto mb-10">
      <div className="w-full flex flex-col md:flex-row">
        <div className="h-[300px] md:h-[400px] w-full rounded-2xl relative md:w-1/2 ">
          <Image
            onLoad={() => setImageIsLoaded(true)}
            src={service?.image}
            fill
            className={`object-cover rounded-2xl z-[2] transition duration-300 ${
              imageIsLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
          <div className="w-full h-full rounded-2xl bg-gray-200 animate-pulse" />
          <div
            onClick={() => router.push("/")}
            className="z-[3] w-[45px] h-[45px] cursor-pointer rounded-full absolute top-2 left-2 text-xl flex items-center justify-center shadow-md text-gray-500 bg-gray-200"
          >
            <RiArrowLeftLine />
          </div>
        </div>
        <div className="w-full md:w-1/2 md:px-6 lg:mt-0 mt-6 flex flex-col justify-center">
          <p className="text-4xl font-monument">{service?.title}</p>
          <div>
            <div className="flex items-center my-2">
              <div className="bg-teal-100 text-teal-500  text-3xl rounded-full flex justify-center items-center h-[50px] w-[50px] bg-opacity-60">
                <FaMoneyBillWaveAlt />
              </div>
              <p className="font-alga ml-2 text-gray-600">{service?.price}</p>
            </div>
            <div className="flex items-center my-2">
              <div className="bg-teal-100 text-teal-500  text-3xl rounded-full flex justify-center items-center h-[50px] min-w-[50px] max-w-[50px] bg-opacity-60">
                <RiMap2Fill />
              </div>
              <p className="font-alga ml-2 text-gray-600">
                {service?.location}
              </p>
            </div>
            <div className="flex items-center my-2">
              <div className="bg-teal-100 text-teal-500  text-3xl rounded-full flex justify-center items-center h-[50px] w-[50px] bg-opacity-60">
                <RiTeamFill />
              </div>
              <p className="font-alga ml-2 text-gray-600">{service?.people}</p>
            </div>
            <div className="flex items-center my-2">
              <div className="bg-teal-100 text-teal-500  text-3xl rounded-full flex justify-center items-center h-[50px] w-[50px] bg-opacity-60">
                <RiTimeFill />
              </div>
              <p className="font-alga ml-2 text-gray-600">
                {service?.duration}
              </p>
            </div>
            <div className="flex items-center my-2">
              <div className="bg-teal-100 text-teal-500  text-3xl rounded-full flex justify-center items-center h-[50px] w-[50px] bg-opacity-60">
                <RiMapPin2Fill />
              </div>
              <p className="font-alga ml-2 text-gray-600">{service?.cities}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:mt-10 mt-4">
        <p className="text-2xl font-monument">Descripción</p>
        <p className="font-alga text-gray-500">{service?.description}</p>
      </div>
    </div>
  );
};

export default ServicePage;
