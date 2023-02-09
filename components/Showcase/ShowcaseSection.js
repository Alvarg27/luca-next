import services from "@/data/services";
import useNavigation from "@/hooks/useNavigation";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import React, { useState } from "react";
import ShowcaseCard from "./ShowcaseCard";

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

  const { servicesRef } = useNavigation();

  return (
    <section
      ref={servicesRef}
      className="w-full max-w-[1200px] mx-auto mt-20 mb-10"
    >
      <div className="text-center mb-10 px-4">
        <h2 className="font-semibold md:text-4xl text-3xl font-monument">
          Experiencias
        </h2>
        <p className="font-alga md:text-xl text-gray-600 my-2">
          En LUCA nos encargamos de que cada experiencia que se le brinda al
          cliente sea de la más alta calidad ofrenciendole una amplia gama de
          opciones para que encuentre las más adecuada a sus necesidades
        </p>
      </div>
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
