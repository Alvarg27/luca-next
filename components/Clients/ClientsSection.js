import React from "react";
import ClientsCard from "./ClientsCard";

const ClientsSection = () => {
  const clients = [
    {
      image: "/dell.webp",
    },
    {
      image: "/f1.webp",
    },
    {
      image: "/cisco.webp",
    },
    {
      image: "/alestra.webp",
    },
    {
      image: "/solarwinds.webp",
    },
    {
      image: "/ruckus.webp",
    },
    {
      image: "/purestorage.webp",
    },
    {
      image: "/grupo-dice.webp",
    },
    {
      image: "/fortinet.webp",
    },
    {
      image: "/tenable.webp",
    },
    {
      image: "/netapp.webp",
    },
  ];

  const handleChunks = () => {
    const sqrt = Math.sqrt(clients.length);
    const perChunk = Math.round(sqrt);

    const result = clients.reduce((resultArray, item, index) => {
      const chunkIndex = Math.floor(index / perChunk);

      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = []; // start a new chunk
      }

      resultArray[chunkIndex].push(item);

      return resultArray;
    }, []);

    return result;
  };

  return (
    <section className="w-[95%] max-w-[1200px] mx-auto flex flex-col lg:flex-row mt-20 relative ">
      <div className="lg:w-1/2 w-full flex items-center relative ">
        <div className="lg:w-2/3 lg:mx-0 mx-auto lg:text-left text-center mb-8 lg:mb-0">
          <h2 className="md:text-4xl text-3xl font-semibold font-monument">
            Nuestros{" "}
            <b className="font-alga text-teal-500  md:text-[48px] text-[40px]">
              clientes
            </b>
            .
          </h2>
          <p className="my-4 text-gray-500 font-alga">
            En Luca, nos esforzamos por brindar el mejor servicio posible a
            nuestros clientes. Estamos comprometidos a escuchar sus necesidades
            y a proporcionarles opciones personalizadas para alcanzar sus
            objetivos.
          </p>
        </div>
      </div>
      <div className="flex w-full lg:w-1/2 flex-wrap mx-auto relative ">
        <div className="flex flex-wrap mx-auto lg:mx-0 relative ">
          {handleChunks().map((column, colIndex) => (
            <div
              className="flex flex-col justify-center items-end"
              key={colIndex}
            >
              {column.map((client, i) => (
                <ClientsCard
                  key={i}
                  client={client}
                  index={i}
                  colIndex={colIndex}
                />
              ))}
              {colIndex + 1 === handleChunks().length && (
                <p className="font-bold w-full md:text-5xl text-4xl text-center my-6 text-gray-500">
                  10+
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
