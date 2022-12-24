import { useSpring, animated } from "@react-spring/web";
import React, { useEffect, useRef, useState } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";

const NavigationCard = ({
  label,
  selected,
  setSelected,
  index,
  animationDelay,
}) => {
  const { height } = useWindowDimensions();
  const [isHovered, setIsHovered] = useState(false);
  const isSelected = selected === label;
  const cardRef = useRef(null);

  const delay = animationDelay ? animated : 0;

  const [{ y, scale, opacity }, api] = useSpring(() => ({
    y: 20,
    scale: 0.98,
    opacity: 1,
  }));

  useEffect(() => {
    api.start({
      y: 0,
      scale: 1,
      immediate: false,
      config: { tension: 280, friction: 18 },
      delay: delay + index * 50,
    });

    return () => {
      api.start({
        y: -20,
        scale: 0.98,
        immediate: false,
        config: { tension: 280, friction: 18 },
        delay: 0,
      });
    };
  }, [label]);

  return (
    <animated.div
      style={{ y, scale }}
      ref={cardRef}
      onClick={() => {
        setSelected(label);
        window.scrollTo({
          top: height * index,
          behavior: "smooth",
        });
      }}
      className={` rounded-full px-6 py-2 inline-flex m-1 shadow-md  cursor-pointer relative overflow-hidden transition-colors duration-300 ${
        isSelected
          ? " text-white bg-black"
          : " bg-white bg-opacity-70 backdrop-blur-md"
      }`}
    >
      <p className="relative"> {label}</p>
    </animated.div>
  );
};

export default NavigationCard;
