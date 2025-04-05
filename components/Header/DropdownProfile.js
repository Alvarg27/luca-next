import React from 'react';
import Link from 'next/link';

const DropdownProfile = () => {
  return (
    <div className="flex flex-col absolute left-[-1rem] top-[3rem]">
      {/* Invisible bridge to prevent dropdown from disappearing when moving cursor */}
      <div className="h-[0.8rem] w-full" />
      <ul className="flex flex-col items-center justify-center min-w-[160px]">
        <Link href="/Experiences" passHref>
          <li className="w-full text-base hover:bg-black hover:dark:bg-teal-500 hover:bg-opacity-10 px-4 flex items-center justify-center h-[50px] rounded-lg cursor-pointer">
            <p>Experiences</p>
          </li>
        </Link>
        <Link href="/EventPlanning" passHref>
          <li className="w-full text-base hover:bg-black hover:dark:bg-teal-500 hover:bg-opacity-10 px-4 flex items-center justify-center h-[50px] rounded-lg cursor-pointer">
            <p>Event Planning</p>
          </li>
        </Link>
        <Link href="/Gifts" passHref>
          <li className="w-full text-base hover:bg-black hover:dark:bg-teal-500 hover:bg-opacity-10 px-4 flex items-center justify-center h-[50px] rounded-lg cursor-pointer">
            <p>Regalos</p>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default DropdownProfile;