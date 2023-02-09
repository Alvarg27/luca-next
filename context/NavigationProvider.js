import usePageOffset from "@/hooks/usePageOffset";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { useRouter } from "next/router";
import { createContext, useEffect, useRef, useState } from "react";

const NavigationContext = createContext({});

export const NavigationProvider = ({ children }) => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const homeRef = useRef();
  const aboutRef = useRef();
  const clientsRef = useRef();
  const servicesRef = useRef();
  const { width } = useWindowDimensions();
  const items = [
    {
      route: "/",
      ref: homeRef,
      title: "Inicio",
    },
    {
      route: "/",
      ref: aboutRef,
      offset: -150,
      title: "Nosotros",
    },
    {
      route: "/",
      ref: clientsRef,
      title: "Clientes",
    },
    {
      route: "/",
      ref: servicesRef,
      title: "Servicios",
    },
  ];
  useEffect(() => {
    if (width > 1024) {
      setDropdownIsOpen(false);
    }
  }, [width]);
  return (
    <NavigationContext.Provider
      value={{
        homeRef,
        aboutRef,
        clientsRef,
        servicesRef,
        items,
        dropdownIsOpen,
        setDropdownIsOpen,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContext;
