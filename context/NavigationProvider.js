import useWindowDimensions from "@/hooks/useWindowDimensions";
import { createContext, useEffect, useRef, useState } from "react";

const NavigationContext = createContext({});
export const NavigationProvider = ({ children }) => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const homeRef = useRef();
  const aboutRef = useRef();
  const clientsRef = useRef();
  const servicesRef = useRef();
  const eventRef = useRef();
  const experiencesRef = useRef();
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
      title: "Nosotros",
    },
    {
      route: "/",
      ref: clientsRef,
      title: "Clientes",
    },
  ];  
  const itemsMobileNav = [
    {
      route: "/",
      ref: homeRef,
      title: "Inicio",
    },
    {
      route: "/",
      ref: aboutRef,
      title: "Nosotros",
    },
    {
      route: "/",
      ref: clientsRef,
      title: "Clientes",
    },
    {
      route: "/Experiences",
      ref: experiencesRef,
      title: "Experiences",
    },
    {
      route: "/EventPlanning",
      ref: eventRef,
      title: "Event Planning",
    },
    {
      route: "/Gifts", 
      ref: eventRef, 
      title: "Kits", 
    },
  ]
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
        eventRef,
        items,
        dropdownIsOpen,
        setDropdownIsOpen,
        itemsMobileNav,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContext;
