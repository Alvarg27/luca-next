import services from "@/data/services";
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

  return (
    <section className="w-full max-w-[1200px] mx-auto mt-24 mb-10">
      <div className="text-center mb-10">
        <h2 className="font-semibold md:text-4xl text-3xl font-monument">
          We make{" "}
          <b className="text-teal-500 font-alga text-5xl">experiences</b>{" "}
          {`you'll never forget`}
        </h2>
        <p className="font-alga text-xl text-gray-600 my-4">
          Nos dedicamos a crear experiencias inolvidables para empresas.
          Brindando a nuestros clientes las mejores opciones para satisfacer sus
          necesidades en viajes, eventos, conferencias y más. Con el objetivo de
          llevarlos al siguiente nivel.
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
