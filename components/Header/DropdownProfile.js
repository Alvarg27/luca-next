import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const DropdownProfile = () => {
  const router = useRouter();

  const handlePromotionalsClick = (e) => {
    e.preventDefault();
    if (router.pathname !== '/') {
      router.push('/').then(() => {
        setTimeout(() => {
          const element = document.getElementById('promotionals');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 300);
      });
    } else {
      const element = document.getElementById('promotionals');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="flex flex-col absolute left-[-1rem] top-[3rem]">
      {/* Invisible bridge to prevent dropdown from disappearing when moving cursor */}
      <div className="h-[0.8rem] w-full" />
      <ul className="flex flex-col items-center justify-center min-w-[160px]">
        <li className="w-full">
          <Link
            href="/Experiences"
            className="block w-full text-base hover:bg-teal-500 px-4 flex items-center justify-center h-[50px] rounded-lg cursor-pointer"
          >
            Experiences
          </Link>
        </li>
        <li className="w-full">
          <Link
            href="/EventPlanning"
            className="block w-full text-base hover:bg-teal-500 px-4 flex items-center justify-center h-[50px] rounded-lg cursor-pointer"
          >
            Event Planning
          </Link>
        </li>
        <li className="w-full">
          <Link
            href="/Gifts"
            className="block w-full text-base hover:bg-teal-500 px-4 flex items-center justify-center h-[50px] rounded-lg cursor-pointer"
          >
            Kits
          </Link>
        </li>
        <li
          onClick={handlePromotionalsClick}
          className="w-full text-base hover:bg-teal-500 px-4 flex items-center justify-center h-[50px] rounded-lg cursor-pointer"
        >
          Promocionales
        </li>
      </ul>
    </div>
  );
};

export default DropdownProfile;
