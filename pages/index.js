import Circles from "../components/Circles";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";

import Navigation from "../components/Navigation";
import useWindowDimensions from "../hooks/useWindowDimensions";

export default function Home() {
  const { height } = useWindowDimensions();
  return (
    <div className="relative w-full min-h-screen">
      <Header />
      <div
        style={{ height, transition: "0.5s" }}
        className="bg-gray-100 top-0 relative flex flex-col justify-center overflow-hidden"
      >
        <Circles />
        <Navigation />
        <p className="left-1/2 mb-4 -translate-x-1/2 absolute bottom-0 text-gray-500 z-[2]">
          Powered <b>tectify</b>
        </p>
      </div>
      <div
        style={{ height, transition: "0.5s" }}
        className="bg-black top-0 relative  flex flex-col justify-center overflow-hidden z-[2] items-center"
      >
        <p></p>
        <InfoCard />
      </div>
    </div>
  );
}
