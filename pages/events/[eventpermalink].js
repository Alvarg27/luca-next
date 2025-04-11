import events from '@/data/eventPlanning';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import {
  RiArrowLeftLine,
  RiMap2Fill,
  RiMapPin2Fill,
  RiTeamFill,
  RiTimeFill,
} from 'react-icons/ri';
import { FaDollarSign, FaMoneyBillWaveAlt } from 'react-icons/fa';
import FilesCarrousel from '@/components/filesCarrousel/FliesCarrousel';
import Form from "@/components/Form/Form";

const EventPage = () => {
  const router = useRouter();
  const [event, setEvent] = useState();

  useEffect(() => {
    if (!router?.query?.eventpermalink) {
      return;
    }
    if (event) {
      return;
    }
    const result = events.find(
      (x) => x.eventpermalink === router.query.eventpermalink
    );
    if (!result) {
      console.log('not found');
      router.push('/404');
    }
    setEvent(result);
  }, [router.query]);
  return (
    <div className="pt-[70px] mx-auto mb-10 relative w-full">
      <div className=" max-w-[1200px] mx-auto w-full rounded-2xl relative ">
        {event && event?.files?.length >= 1 ? (
          <FilesCarrousel files={event.files} />
        ) : (
          <div className="w-full h-full rounded-2xl bg-gray-200 animate-pulse" />
        )}

        <div
          onClick={() =>
            router.push(`/EventPlanning`)
          }
          className="z-[3]  h-[40px] px-2 cursor-pointer rounded-full absolute top-2 left-2 text-sm flex items-center justify-center shadow-md text-gray-500 bg-gray-200"
        >
          <RiArrowLeftLine />
          <p>Volver</p>
        </div>
      </div>
      <div className="w-[95%] max-w-[1200px] mx-auto mt-8">
        <div className="w-full flex flex-col">
          <div className="w-full  md:px-6 py-10 flex flex-col justify-center">
            <p className="text-4xl font-monument">{event?.title}</p>
            <div className="mt-4">
              <p className="text-2xl font-monument">Descripción</p>
              <p className="font-alga text-gray-500 text-xl">
                {event?.description}
              </p>
              <div className="lg:mx-72 mt-24" >
            <Form/>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
