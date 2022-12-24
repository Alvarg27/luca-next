import Inicio from "../components/Inicio";
import Navegation from "../components/Navigation";

export default function Home() {
  return (
    <>
      <Inicio />
      <Navegation />
      <p className="left-1/2 mb-4 -translate-x-1/2 fixed  bottom-0 text-gray-500 z-[1]">
        Powered <b>tectify</b>
      </p>
    </>
  );
}
