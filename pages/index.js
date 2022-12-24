import { useEffect, useState } from "react";
import Circles from "../components/Circles";
import Header from "../components/Header";
import InfoCard from "../components/Mision";

import Navigation from "../components/Navigation";
import ServiceCard from "../components/Experience";
import Services from "../components/Services";
import Vision from "../components/Vision";
import useWindowDimensions from "../hooks/useWindowDimensions";

export default function Home() {
  const { height } = useWindowDimensions();
  const [startHeight, setStartHeight] = useState();

  useEffect(() => {
    if (!height) {
      return;
    }
    if (startHeight) {
      return;
    }
    setStartHeight(height);
  }, [height]);
  return (
    <>
      {startHeight && (
        <div className="relative w-full min-h-screen">
          <Header />
          <div
            style={{ height: startHeight }}
            className="bg-[#DDD8CD] top-0 relative flex flex-col justify-center overflow-hidden"
          >
            <Circles />
            <Navigation />
            <p className="left-1/2 mb-4 -translate-x-1/2 absolute bottom-0 text-gray-500 z-[2]">
              Powered <b>tectify</b>
            </p>
          </div>
          <div className="bg-black top-0 relative  flex flex-col justify-center overflow-hidden z-[2] items-center">
            <div className="h-[50px] w-full" />
            <InfoCard />
            <div className="h-[100px] w-full" />
            <Vision />
            <div className="h-[50px] w-full" />
            <div className="bg-[#DDD8CD] w-full relative h-screen flex flex-col justify-center  z-[2] items-center">
              <Services />
            </div>
            <div className="h-[50px] w-full" />
            <ServiceCard />
            <div className="h-[100px] w-full" />
          </div>
        </div>
      )}
    </>
  );
}
