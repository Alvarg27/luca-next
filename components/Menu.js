import { Dialog, Transition } from "@headlessui/react";
import { useSpring, animated, config } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { useRouter } from "next/router";
import { Fragment, useEffect, useRef, useState } from "react";
import { RiCloseLine } from "react-icons/ri";

import useWindowDimensions from "../hooks/useWindowDimensions";
import NavigationCard from "./NavigationCard";

const lista = [
  "Inicio",
  "Misión",
  "Visión",
  "Experiencias",
  "Lucas es",
  "Redes sociales",
];

const Menu = ({ isOpen, setIsOpen }) => {
  const [selected, setSelected] = useState("Inicio");
  const router = useRouter();

  const ref = useRef(null);
  const [cartScroll, setCartScroll] = useState(0);
  const { height } = useWindowDimensions();

  const [{ y }, api] = useSpring(() => ({
    y: isOpen ? "0%" : "100%",
  }));

  const bindScrollable = useDrag(
    ({
      movement: [mx, my],
      velocity: [vx, vy],
      direction: [xDir, yDir],
      distance: [dx, dy],
      down,
      cancel,
    }) => {
      if (cartScroll > 0) {
        return cancel();
      }
      let y = down ? my : 0;

      if (my > height / 2 && !down) {
        setIsOpen(false);
      }

      if (!down && vy > 0.2 && my > 50) {
        setIsOpen(false);
      }
      if (my < 0) {
        return;
      }

      api.start(() => {
        return {
          y: `${(y * 100) / height}%`,
        };
      });
    }
  );

  const bind = useDrag(
    ({
      movement: [mx, my],
      velocity: [vx, vy],
      direction: [xDir, yDir],
      distance: [dx, dy],
      down,
      cancel,
    }) => {
      let y = down ? my : 0;

      if (my > height / 2 && !down) {
        setIsOpen(false);
      }

      if (!down && vy > 0.2 && my > 50) {
        setIsOpen(false);
      }
      if (my < 0) {
        return;
      }

      api.start(() => {
        return {
          y: `${(y * 100) / height}%`,
        };
      });
    }
  );

  useEffect(() => {
    let y = height;
    if (isOpen) {
      y = "0%";
    }
    if (!isOpen) {
      y = "100%";
    }
    api.start(() => {
      return {
        y: y,
        config: {
          tension: 400,
          friction: 30,
        },
      };
    });
  }, [isOpen]);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-[100]"
        onClose={() => {
          return;
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md"
          />
        </Transition.Child>

        <div style={{ height }} className="fixed  w-full -bottom-[50px] ">
          <Dialog.Panel className="h-full w-full absolute">
            <animated.div
              {...bind()}
              className="h-full w-full rounded-t-2xl text-left shadow-xl  flex flex-col justify-between relative touch-none"
              style={{ y }}
            >
              <div className="absolute bottom-[100px] flex flex-col items-center justify-center">
                <div
                  onClick={() => setIsOpen(false)}
                  className="border-[1px] w-[50px] h-[50px] rounded-full flex items-center justify-center text-2xl text-white opacity-75 mb-10 cursor-pointer"
                >
                  <RiCloseLine />
                </div>
                <div className="flex flex-wrap justify-center">
                  {lista.map((item, i) => (
                    <NavigationCard
                      key={i}
                      index={i}
                      label={item}
                      selected={selected}
                      setSelected={setSelected}
                    />
                  ))}
                </div>
              </div>
            </animated.div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Menu;
