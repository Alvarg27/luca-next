import React from 'react';
import Link from 'next/link';

const DropdownProfile = () => {
  return (
    <div className="flex flex-col absolute right-[-1rem] top-[3.8rem]">
      <ul className="flex flex-col items-left justify-left">
        <li className="mx-1 text-base hover:bg-black hover:dark:bg-teal-500  hover:bg-opacity-10 px-4 flex items-center justify-center h-[50px] rounded-lg cursor-pointer">
          <Link href="/Experiences" passHref>
            <p>Experiences</p>
          </Link>
        </li>
        <li className="mx-1 text-base hover:bg-black hover:dark:bg-teal-500  hover:bg-opacity-10 px-4 flex items-center justify-center h-[50px] rounded-lg cursor-pointer">
          <Link href="/EventPlanning" passHref>
            <p>Event Planning</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DropdownProfile;
