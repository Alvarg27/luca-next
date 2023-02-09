import NavigationContext from "@/context/NavigationProvider";
import { useContext } from "react";

const useNavigation = () => {
  const {
    homeRef,

    aboutRef,
    clientsRef,
    servicesRef,
    items,
    dropdownIsOpen,
    setDropdownIsOpen,
  } = useContext(NavigationContext);
  return {
    homeRef,
    aboutRef,
    clientsRef,
    servicesRef,
    items,
    dropdownIsOpen,
    setDropdownIsOpen,
  };
};

export default useNavigation;
