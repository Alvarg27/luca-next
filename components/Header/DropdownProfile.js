import React from 'react';
import Link from 'next/link';

const DropdownProfile = () => {
  return (
    <div className="flex flex-col absolute right-[-1rem] top-[3.8rem]">
      <ul className="flex flex-col items-left justify-left">
        <Link href="/Experiences" passHref>
          <li className="mx-1 text-base hover:bg-black hover:dark:bg-teal-500  hover:bg-opacity-10 px-4 flex items-center justify-center h-[50px] rounded-lg cursor-pointer">
            <p>Experiences</p>
          </li>
        </Link>
        <Link href="/EventPlanning" passHref>
          <li className="mx-1 text-base hover:bg-black hover:dark:bg-teal-500  hover:bg-opacity-10 px-4 flex items-center justify-center h-[50px] rounded-lg cursor-pointer">
            <p>Event Planning</p>
          </li>
        </Link>
        <Link href="/Contact" passHref>
          <li className="mx-1 text-base hover:bg-black hover:dark:bg-teal-500  hover:bg-opacity-10 px-4 flex items-center justify-center h-[50px] rounded-lg cursor-pointer">
            <p>Promocionales</p>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default DropdownProfile;
