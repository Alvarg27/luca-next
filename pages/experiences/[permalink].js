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
import { FaDollarSign, FaMoneyBillWaveAlt } from "react-icons/fa";
import FilesCarrousel from "@/components/filesCarrousel/FliesCarrousel";
import Form from "@/components/Form/Form";

const ServicePage = () => {
  const router = useRouter();
  const [service, setService] = useState();

  useEffect(() => {
    if (!router?.query?.permalink) {
      return;
    }
    if (service) {
      return;
    }
    const result = services.find((x) => x.permalink === router.query.permalink);
    if (!result) {
      console.log("not found PERMALINK");
      router.push("/404");
    }
    setService(result);
  }, [router.query]);

  return (
    <div className="pt-[70px] mx-auto mb-10 relative w-full">
      <div className=" max-w-[1200px] mx-auto w-full rounded-2xl relative ">
        {service && service?.files?.length >= 1 ? (
          <FilesCarrousel files={service.files} />
        ) : (
          <div className="w-full h-full rounded-2xl bg-gray-200 animate-pulse" />
        )}

        <div
          onClick={() => router.push(`/Experiences`)}
          className="z-[3]  h-[40px] px-2 cursor-pointer rounded-full absolute top-2 left-2 text-sm flex items-center justify-center shadow-md text-gray-500 bg-gray-200"
        >
          <RiArrowLeftLine />
          <p>Volver</p>
        </div>
      </div>
      <div className="w-[95%] max-w-[1200px] mx-auto mt-8">
        <div className="w-full flex flex-col">
          <div className="w-full  md:px-6 flex flex-col justify-center">
            <p className="text-4xl font-monument">{service?.title}</p>
            <div className="mt-4">
              <p className="font-alga text-gray-500 text-xl">
                {service?.description}
              </p>
            </div>
            <div className=" rounded-2xl  p-6 mt-8 flex lg:flex-row flex-col justify-around">
              <div className="">
                <div className="flex items-center my-2 ">
                  <div className="bg-teal-100 text-teal-500  text-3xl rounded-full flex justify-center items-center h-[50px] w-[50px] bg-opacity-60">
                    <FaDollarSign />
                  </div>
                  <p className="font-alga ml-2 text-gray-600">
                    {service?.price}
                  </p>
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
                  <p className="font-alga ml-2 text-gray-600">
                    {service?.people}
                  </p>
                </div>
              </div>

              <div>
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
                  <div className="flex flex-wrap">
                    {service?.cities.map((x, i) => (
                      <p key={i} className="font-alga ml-2 text-gray-600">
                        {x}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:mx-72" >
            <Form/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
