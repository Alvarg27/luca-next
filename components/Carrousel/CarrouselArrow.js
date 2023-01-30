import { useSpring, animated } from "@react-spring/web";
import useWindowDimensions from "hooks/useWindowDimensions";
import React, { useEffect, useState } from "react";

const CarrouselArrow = ({
  onClick,
  className,
  children,
  swiperRef,
  activeIndex,
  itemsLength,
  side,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { width } = useWindowDimensions();
  const [{ x, scale, opacity }, api] = useSpring(() => ({
    x: side === "left" ? -20 : 20,
    scale: 0.98,
    opacity: 0,
  }));

  useEffect(() => {
    if (
      (width > 1024 && side === "left" && activeIndex >= 1) ||
      (width > 1024 && side === "right" && activeIndex < itemsLength - 1)
    ) {
      api.start({
        x: 0,
        scale: 1,
        opacity: 1,
        immediate: false,
        config: { tension: 280, friction: 18 },
      });
      return;
    }

    api.start({
      x: side === "left" ? -20 : 20,
      scale: 0.98,
      opacity: 0,
      immediate: false,
      config: { tension: 280, friction: 18 },
    });
  }, [width, activeIndex]);

  const handleSelect = () => {
    api.start({
      scale: 1.2,
      immediate: false,
      config: { tension: 280, friction: 18 },
      delay: 0,
    });
    api.start({
      scale: 1,
      immediate: false,
      config: { tension: 280, friction: 18 },
      delay: 50,
    });

    onClick();
  };

  useEffect(() => {
    if (!isHovered) {
      api.start({
        scale: 1,
        immediate: false,
        config: { tension: 280, friction: 18 },
        delay: 50,
      });
      return;
    }
    api.start({
      scale: 1.05,
      immediate: false,
      config: { tension: 280, friction: 18 },
      delay: 0,
    });
  }, [isHovered]);

  return (
    <animated.button
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      style={{ x, scale, opacity }}
      onClick={handleSelect}
      className={`shadow-md bg-white dark:bg-black dark:bg-opacity-50 bg-opacity-75 text-blue-500 absolute top-1/2 -translate-y-1/2 w-[40px] h-[40px] z-[10] rounded-full flex items-center justify-center backdrop-blur-md ${className} cursor-pointer`}
    >
      {children}
    </animated.button>
  );
};

export default CarrouselArrow;
