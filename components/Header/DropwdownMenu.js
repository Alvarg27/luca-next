import useNavigation from '@/hooks/useNavigation';
import usePageOffset from '@/hooks/usePageOffset';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import { Dialog, Transition } from '@headlessui/react';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import Button from '../commons/Button';
import MenuIcon from '../commons/MenuIcon';
import DropdownItem from './DropdownItem';
import DropdownProfile from './DropdownProfile';
import Link from 'next/link';

export default function DropdownMenu() {
  const [showButton, setShowButton] = useState(false);
  const [show, setShow] = useState(false);
  const router = useRouter();
  const { dropdownIsOpen, setDropdownIsOpen } = useNavigation();
  const { height, width } = useWindowDimensions();
  const { itemsMobileNav } = useNavigation();
  const { offsetY } = usePageOffset();

  useEffect(() => {
    setDropdownIsOpen(false);
  }, [offsetY]);

  useEffect(() => {
    if (dropdownIsOpen) {
      setShow(true);
      setTimeout(() => {
        setShowButton(true);
      }, 50 + itemsMobileNav.length * 50);
    }

    if (!dropdownIsOpen) {
      setTimeout(() => {
        setShow(false);
      }, 300);
      setShowButton(false);
    }
  }, [dropdownIsOpen]);

  return (
    <div
      style={{
        transition: '0.3s',
      }}
      className={`w-full fixed top-0 z-[50] flex-col flex px-4 touch-none overflow-hidden ${
        show ? 'flex' : 'hidden'
      }`}
    >
      <div className={`flex flex-col mt-[70px]`}>
        {itemsMobileNav.map((itemsMobileNav, i) => (
          <DropdownItem key={i} item={itemsMobileNav} index={i} />
        ))}
      </div>
    </div>
  );
}
