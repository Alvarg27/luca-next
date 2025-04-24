import NavigationContext from '@/context/NavigationProvider';
import { useContext } from 'react';

const useNavigation = () => {
  const {
    homeRef,
    itemsMobileNav,
    aboutRef,
    clientsRef,
    servicesRef,
    experiencesRef,
    eventRef,
    promotionalRef,
    items,
    dropdownIsOpen,
    setDropdownIsOpen,
  } = useContext(NavigationContext);
  return {
    itemsMobileNav,
    experiencesRef,
    eventRef,
    homeRef,
    aboutRef,
    clientsRef,
    servicesRef,
    promotionalRef,
    items,
    dropdownIsOpen,
    setDropdownIsOpen,
  };
};

export default useNavigation;
