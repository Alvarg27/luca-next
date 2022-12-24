import { useState } from "react";
import Circles from "../components/Circles";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";

import Navigation from "../components/Navigation";
import useWindowDimensions from "../hooks/useWindowDimensions";

export default function Home() {
  const { height } = useWindowDimensions();
  const [startHeight, setStartHeight] = useState(height);
  return (
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
      <div className="bg-black top-0 h-screen relative  flex flex-col justify-center overflow-hidden z-[2] items-center">
        <InfoCard />
      </div>
    </div>
  );
}
