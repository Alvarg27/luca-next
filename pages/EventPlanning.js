import Circles from '@/components/commons/Circles';
import React from 'react';
import ShowcaseCardEvent from '@/components/Showcase/ShowcaseCardEvent';
import eventPlanning from '@/data/eventPlanning';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import useNavigation from '@/hooks/useNavigation';

const EventPlanning = () => {
  const { width } = useWindowDimensions();

  const handleColumnWidth = () => {
    if (width > 768 && width <= 1024) {
      return 100 / 3 + '%';
    }
    if (width > 1024) {
      if (eventPlanning.length === 3) {
        return 100 / 3 + '%';
      }
      return '25%';
    }
    return '50%';
  };

  const handleColumns = () => {
    let columnsNum = 2;
    if (width > 768) {
      columnsNum = 3;
    }
    if (width > 1024) {
      columnsNum = 4;
    }
    let rowsNum = eventPlanning.length / columnsNum;
    if (rowsNum < 1) {
      rowsNum = 1;
    }
    rowsNum = Math.round(rowsNum);
    let rows = [];
    for (let i = 0; i < eventPlanning.length; i += columnsNum) {
      const chunk = eventPlanning.slice(i, i + columnsNum);
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

  const { eventRef } = useNavigation();

  return (
    <section
      ref={eventRef}
      className="w-full max-w-[1200px] mx-auto mb-10"
    >
      <div
        style={{
          maxHeight: document.documentElement.clientHeight,
          minHeight: document.documentElement.clientHeight,
        }}
        className="fixed top-0 left-0 w-full "
      >
        <Circles />
      </div>
      <div className="md:pt-[100px] pt-[100px] mx-auto w-[95%] max-w-[1200px] relative overflow-hidden px-6">
        <div className="text-center mb-10 px-4">
          <h2 className="font-semibold md:text-4xl text-3xl font-monument">
            EVENT PLANNING
          </h2>
        </div>
        <p className="font-alga md:text-xl text-gray-600 my-6 md:px-10 py-10">
          Sabemos que cada empresa es única, y así tratamos a cada
          proyecto es por eso que nuestro equipo está comprometido a
          brindarte un servicio excepcional desde la planificación
          hasta la ejecución, asegurando que tu experiencia sea
          impecable en todos los aspectos. Somos una agencia
          integradora de servicios, dedicada a solucionar, crear,
          planear y coordinar desde pequeñas reuniones como coffee
          breaks o desayunos hasta grandes eventos como lo son
          ponencias/conferencias o grandes eventos sociales, adaptamos
          nuestras soluciones para satisfacer tus necesidades
          específicas. Deja tu evento en nuestras manos coordinaremos
          todos los detalles
        </p>
      </div>
      <div className="flex w-full pb-24">
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
                <ShowcaseCardEvent
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

export default EventPlanning;
