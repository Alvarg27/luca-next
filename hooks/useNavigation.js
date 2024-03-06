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
    items,
    dropdownIsOpen,
    setDropdownIsOpen,
  };
};

export default useNavigation;
