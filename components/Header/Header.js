import usePageOffset from '@/hooks/usePageOffset';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import useNavigation from '@/hooks/useNavigation';
import { useRouter } from 'next/router';
import React from 'react';
import LucaLogo from '../commons/LucaLogo';
import NavigationItem from './NavigationItem';
import DropdownProfile from './DropdownProfile';

const Header = () => {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const { offsetY } = usePageOffset();
  const [openProfile, setOpenProfile] = React.useState(false);
  const { homeRef, aboutRef, clientsRef } = useNavigation();

  // Custom navigation items in the correct order
  const navigationItems = [
    {
      route: "/",
      ref: homeRef,
      title: "Inicio",
    },
    // Servicios will be handled separately in the JSX
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

  return (
    <div className={`w-full h-[70px] fixed top-0 z-50 `}>
      <div className="flex justify-between max-w-[1200px] w-[90%] h-full items-center mx-auto relative">
        <LucaLogo />
        {width > 1024 && (
          <div className="flex items-center">
            {/* Inicio */}
            <NavigationItem item={navigationItems[0]} />
            
            {/* Servicios with dropdown */}
            <div
              onMouseOver={() => setOpenProfile(true)}
              onMouseOut={() => setOpenProfile(false)}
              className="relative"
            >
              <p className="mx-1 text-lg hover:bg-black hover:dark:bg-white hover:bg-opacity-10 px-4 flex items-center justify-center h-[50px] rounded-lg cursor-pointer">
                Servicios
              </p>
              {openProfile && <DropdownProfile />}
            </div>
            
            {/* Nosotros */}
            <NavigationItem item={navigationItems[1]} />
            
            {/* Clientes */}
            <NavigationItem item={navigationItems[2]} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;