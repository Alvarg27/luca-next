import { Dialog, Transition } from "@headlessui/react";
import { useSpring, animated, config } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { useRouter } from "next/router";
import { Fragment, useEffect, useRef, useState } from "react";

import useWindowDimensions from "../hooks/useWindowDimensions";

const Menu = ({ isOpen, setIsOpen }) => {
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
            className="fixed inset-0 bg-black bg-opacity-30 "
          />
        </Transition.Child>

        <div className="fixed min-h-[209px]  w-full -bottom-[50px] ">
          <Dialog.Panel className="h-full w-full absolute">
            <animated.div
              className="h-full w-full rounded-t-2xl  bg-white bg-opacity-70 backdrop-blur-xl text-left shadow-xl  flex flex-col relative pb-[50px] touch-none"
              style={{ y }}
            >
              <div {...bind()} className="text-blue-500">
                <p className="text-center font-medium text-lg py-3 border-b-[1px] border-gray-400">
                  Inicio
                </p>
                <p className="text-center font-medium text-lg py-3 border-b-[1px] border-gray-400">
                  Misión
                </p>
                <p className="text-center font-medium text-lg py-3 border-b-[1px] border-gray-400">
                  Visión
                </p>
              </div>
            </animated.div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Menu;
