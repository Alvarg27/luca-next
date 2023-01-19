import useWindowDimensions from "@/hooks/useWindowDimensions";
import React, { useState } from "react";
import ShowcaseCard from "./ShowcaseCard";

const services = [
  {
    title: "Taller de parrillada",
    description:
      "Ofrecemos talleres de parrillada para convertirte en un experto de la cocina a las brasas. Conocerás distintas preparaciones, como distinguir los tipos de cortes, diferentes métodos de cocción, el mejor término para la carne, asimismo degustarás y disfrutarás de un buen rato con tu equipo de trabajo.",
    price: "Medio",
    location:
      "Instalaciones Weber, Grill MX o privadas Ciudad de México Weber- Coyoacán, Zona Esmeralda Grill MX - Lomas de Chapultepec, Polanco.",
    people: "15-45",
    duration: "2-3 Horas",
    cities: ["CDMX", "León", "Monterrey"],
    permalink: "taller-de-parrillada",
    image: "/showcase/taller-de-parrillada.webp",
  },
  {
    title: "Taller de mixología",
    description:
      "Una experiencia refrescante en la cual aprenderás a elaborar cocteles utilizando una amplia variedad de destilados como ron, tequila, mezcal, por nombrar algunos. No solo conocerás las bases de la coctelería, sino tendrás un entendimiento de los utensilios necesarios, la presentación y el juego de sabores dentro de cada bebida al momento de elaborarlas",
    price: "Medio",
    location: "Instalaciones propias o privadas",
    people: "15-45",
    duration: "2-3 Horas",
    cities: ["CDMX", "Guadalajara"],
    permalink: "taller-de-mixologia",
    image: "/showcase/taller-de-mixologia.webp",
  },
  {
    title: "Cata de vinos",
    description:
      "Conocerán el mundo del vino a través de un recorrido sensorial donde explorarán esta milenaria bebida a través del olfato, la vista y el gusto. En esta experiencia podrás aprender y disfrutar sobre el maridaje y los tipos de vino.",
    price: "Medio",
    location: "Restaurantes o instalaciones propias",
    people: "10-55",
    duration: "2-3 Horas",
    cities: ["CDMX", "Monterrey", "Querétaro", "Guadalajara"],
    permalink: "cata-de-vinos",
    image: "/showcase/cata-de-vinos.webp",
  },
  {
    title: "Cenas",
    description:
      "El buen vivir es un arte y por eso ofrecemos cenas en restaurantes selectos para poder brindar la mejor atención a cada cliente, adecuándonos al gusto de cada invitado y a sus necesidades. Crea un momento compartiendo los mejores platillos.",
    price: "Bajo-Alto",
    location:
      "Restaurantes o instalaciones propias CDMX | Cuerno Masaryk, Mochomos, La Mansión, Arango, Sonora Grill, Puerto Madero y Diego Masaryk. MTY | Mochomos, La Torrada, La Buena Barra, y Sonora Prime. GDL | La Tequila",
    people: "A acordar con el cliente",
    duration: "2-3 Horas",
    cities: ["Cualquier ciudad"],
    permalink: "cenas",
    image: "/showcase/cenas.webp",
  },
  {
    title: "Actividades de integración",
    description:
      "Luca Creating Experiences ofrece programas de integración para ayudar a afinar habilidades tales como la comunicación, resolución de problemas y trabajo en equipo. Mejora la sinergia de tus grupos de trabajo con un ambiente de calidad, actividades retadoras y entretenidas.",
    price: "Medio-Alto",
    location: "Instalaciones propias o privadas (A acordar con el cliente)",
    people: "10 adelante",
    duration: "2-6 Horas",
    cities: ["CDMX"],
    permalink: "actividades-de-integracion",
    image: "/showcase/actividades-de-integracion.webp",
  },
  {
    title: "Eventos tipo kermes",
    description:
      "Una experiencia multifacética donde se combina la comida, bebida, postres, snacks con juegos para poner a prueba la destreza, puntería y coordinación de cada participante. Crea una atmósfera de confianza y fortalece la relación de tu equipo de trabajo.",
    price: "Medio",
    location: "Instalaciones propias o privadas con bastante espacio",
    people: "20 en adelante",
    duration: "2-5 Horas",
    cities: ["CDMX"],
    permalink: "eventos-tipo-kermes",
    image: "/showcase/kermes.webp",
  },
  {
    title: "Comidas empresariales",
    description:
      "Rompe la rutina con una amplia variedad de platillos para tus invitados. Sorpréndelos con lo mejor de la comida mexicana, italiana, parrilladas, bufet y menús por tiempo, acomodados al gusto de cada cliente.",
    price: "Bajo - Medio",
    location: "instalaciones propias o privadas",
    people: "25 empresariales",
    duration: "2-5 Horas",
    cities: ["Cualquier ciudad"],
    permalink: "comidas-empresariales",
    image: "/showcase/comida-empresarial.webp",
  },
  {
    title: "Golf",
    description:
      "Aire libre, campos impecables y horas de diversión. Creamos una experiencia única donde cada participante pondrá a prueba sus habilidades en el juego, mientras disfrutan del compañerismo, snacks y bebidas.",
    price: "Alto",
    location: "Bosque Real, Top Golf, Par One",
    people: "15-40",
    duration: "3-6 Horas",
    cities: ["CDMX", "Monterrey", "Querétaro"],
    permalink: "golf",
    image: "/showcase/top-golf.webp",
  },

  {
    title: "Go karts",
    description:
      "Vive la velocidad y adrenalina manejado divertidos go karts. En esta experiencia competirán en la pista y disfrutarán de la emoción del automovilismo, finalizándolo con una convivencia, comidaysnacks.",
    price: "Medio",
    location: "instalaciones propias o privadas",
    people: "10-40",
    duration: "2-3 Horas",
    cities: ["CDMX", "León", "Guadalajara", "Querétaro", "Monterry"],
    permalink: "go-karts",
    image: "/showcase/go-karts.webp",
  },
  {
    title: "Luchas",
    description:
      "Sumérgete en el folklore mexicano visitando la arena de estos grandes guerreros. Disfruta de la lucha libre desde el freedom de la Arena México, y acompáñalo con la variedad de alimentos y bebidas que hay disponibles en el inmueble. Será una experiencia inolvidable.",
    price: "Medio",
    location: "instalaciones propias o privadas",
    people: "5-40",
    duration: "2-3 Horas",
    cities: ["CDMX"],
    permalink: "luchas",
    image: "/showcase/lucha.webp",
  },
  {
    title: "Renta de palcos",
    description:
      "Luca Creating Experiences se encarga de que disfrutes de los más grandes escenarios deportivos con una comodidad de lujo. Vivirás monumentales partidos en palcos creando un momento agradable en compañía de tus invitados.",
    price: "Alto",
    location: "Placos de estadios",
    people: "20-50",
    duration: "Todo el eventos",
    cities: ["USA"],
    permalink: "renta-de-palcos",
    image: "/showcase/palcos.webp",
  },
  {
    title: "Recorrido Tequila",
    description:
      "Recorre la zona de Tequila y aprende sobre el proceso de manufactura de esta bebida. Conocerás campos de agave, fábricas y la verdadera agua de fuego: el Tequila. Después podrás disfrutar platillos típicos de Jalisco, su música y las coloridas costumbres regionales mediante shows nocturnos que harán sentirte más mexicano.",
    price: "Alto",
    location: "Instalaciones privadas",
    people: "10-50",
    duration: "1 día",
    cities: ["Tequila"],
    permalink: "renta-de-palcos",
    image: "/showcase/tequila.webp",
  },
];

const ShowcaseSection = () => {
  const { width } = useWindowDimensions();

  const handleColumnWidth = () => {
    if (width > 768 && width <= 1024) {
      return 100 / 3 + "%";
    }
    if (width > 1024) {
      if (services.length === 3) {
        return 100 / 3 + "%";
      }
      return "25%";
    }
    return "50%";
  };

  const handleColumns = () => {
    let columnsNum = 2;
    if (width > 768) {
      columnsNum = 3;
    }
    if (width > 1024) {
      columnsNum = 4;
    }
    let rowsNum = services.length / columnsNum;
    if (rowsNum < 1) {
      rowsNum = 1;
    }
    rowsNum = Math.round(rowsNum);
    let rows = [];
    for (let i = 0; i < services.length; i += columnsNum) {
      const chunk = services.slice(i, i + columnsNum);
      rows.push(chunk);
    }

    let result = [];

    for (let i = 0; i < columnsNum; i++) {
      let chunk = [];
      rows.forEach((row) => {
        row.forEach((item, itemIndex) => {
          if (itemIndex === i) {
            chunk.push(item);
          }
        });
      });
      result.push(chunk);
    }

    return result;
  };

  return (
    <section className="w-full max-w-[1200px] mx-auto my-24">
      <div className="flex w-full">
        {handleColumns().map((column, colIndex) => (
          <div
            key={colIndex}
            style={{
              minWidth: handleColumnWidth(),
              maxWidth: handleColumnWidth(),
            }}
          >
            {column.map((item, i) => {
              const maxLength = Math.max.apply(
                Math,
                handleColumns().map((el) => {
                  return el.length;
                })
              );
              const length = column.length;
              return (
                <ShowcaseCard
                  key={i}
                  item={item}
                  index={i}
                  colIndex={colIndex}
                  maxLength={maxLength}
                  length={length}
                />
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShowcaseSection;
