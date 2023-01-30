import { useSpring, animated } from "@react-spring/web";
import React, { useEffect } from "react";

const PaginationDot = ({ activeIndex, index }) => {
  const [{ width, opacity }, api] = useSpring(() => ({
    width: activeIndex === index ? 20 : 7,
    opacity: activeIndex === index ? 1 : 0.5,
  }));

  useEffect(() => {
    if (activeIndex === index) {
      api.start({
        width: 20,
        opacity: 1,
        immediate: false,
        config: { tension: 280, friction: 18 },
      });
      return;
    }

    api.start({
      width: 7,
      opacity: 0.5,
      immediate: false,
      config: { tension: 280, friction: 18 },
    });
  }, [activeIndex]);

  return (
    <animated.div
      style={{ width, opacity }}
      className="h-[7px] w-[7px] bg-white shadow-md rounded-full mx-1"
    ></animated.div>
  );
};

export default PaginationDot;
