import usePageOffset from '@/hooks/usePageOffset';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import { useRouter } from 'next/router';
import React from 'react';
import Button from '../commons/Button';
import LucaLogo from '../commons/LucaLogo';
import Navigation from './Navigation';
import DropdownProfile from './DropdownProfile';

const Header = () => {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const { offsetY } = usePageOffset();
  const [openProfile, setOpenProfile] = React.useState(false);

  return (
    <div className={`w-full h-[70px] fixed top-0 z-50 `}>
      <div className="flex justify-between max-w-[1200px] w-[90%] h-full items-center mx-auto relative">
        <LucaLogo />
        {width > 1024 && (
          <div className="flex items-center ">
            <Navigation />
            <div
              onMouseOver={() => setOpenProfile(true)}
              onMouseOut={() => setOpenProfile(false)}
            >
              <p className="mx-1 text-lg hover:bg-black hover:dark:bg-white  hover:bg-opacity-10 px-4 flex items-center justify-center h-[50px] rounded-lg cursor-pointer">
                Servicos
              </p>
              {openProfile && <DropdownProfile />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
