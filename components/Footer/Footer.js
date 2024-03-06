import Link from "next/link";
import React from "react";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiMailFill,
  RiPhoneFill,
  RiWhatsappFill,
} from "react-icons/ri";
import LucaLogo from "../commons/LucaLogo";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <section className="bg-neutral-800 md:rounded-none relative">
      <div className="w-[90%] ] max-w-[1200px] md:h-[250px]  mx-auto flex-col flex justify-between">
        <div className="mt-8">
          <div className="flex w-full justify-between pb-4">
            <LucaLogo color="text-stone-100" />
            <div className="flex items-center text-stone-100">
              <p className="text-xl font-alga mr-4">Follow us!</p>
              <div className="flex text-xl text-stone-100">
                <Link
                  target="_blank"
                  href="https://www.instagram.com/luca.experiences"
                >
                  <RiInstagramFill className="cursor-pointer mx-2" />
                </Link>
                <Link target="_blank" href="mailto:egarom@lucaexperiences.com">
                  <RiMailFill className="cursor-pointer mx-2" />
                </Link>
                <Link
                  target="_blank"
                  href="https://api.whatsapp.com/send/?phone=5578530972"
                >
                  <RiWhatsappFill className="cursor-pointer mx-2" />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] bg-stone-500" />
          <div className="flex md:flex-row flex-col items-center text-center md:text-left  justify-between md:items-start my-4">
            <p className="text-stone-400 text-xl font-monument w-[400px]">
              We make{" "}
              <b className="font-alga text-2xl text-teal-500 ">experiences</b>{" "}
              you’ll never forget
            </p>
            <div>
              <div className="flex items-center text-stone-100 md:mt-1 mt-4">
                <RiPhoneFill className="cursor-pointer mx-2 text-stone-400" />
                <p className="text-stone-400">+52 1 55 7853 0972</p>
              </div>
              <div className="flex items-center text-stone-100 md:mt-1 mt-4">
                <RiMailFill className="cursor-pointer mx-2 text-stone-400" />
                <p className="text-stone-400">lcastro@lucaexperiences.com</p>
              </div>
              <div className="flex items-center text-stone-100 md:mt-1 mt-4">
                <RiMailFill className="cursor-pointer mx-2 text-stone-400" />
                <p className="text-stone-400">egarom@lucaexperiences.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-4">
          <p className="text-stone-300 text-sm">
            © {year} Luca Experiences | Powered by <b>tectify</b>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
