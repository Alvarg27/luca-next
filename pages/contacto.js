import Circles from "@/components/commons/Circles";
import Link from "next/link";
import React from "react";
import { RiInstagramFill, RiMailFill, RiWhatsappFill } from "react-icons/ri";

const ContactPage = () => {
  return (
    <>
      <div
        style={{
          maxHeight: document.documentElement.clientHeight,
          minHeight: document.documentElement.clientHeight,
        }}
        className="fixed top-0 left-0 w-full "
      >
        <Circles />
      </div>
      <div className="md:pt-[100px] pt-[100px] mx-auto w-[95%] max-w-[1200px] relative overflow-hidden">
        <p className="font-monument md:text-xl text-4xl text-teal-500">
          Get in touch
        </p>
        <p className="font-monument md:text-4xl text-sm">
          lucaexperiences@gmail.com
        </p>
        <p className="font-monument md:text-4xl text-lg"> 442 127 1294</p>

        <div className="flex items-center mt-20">
          <p className="text-xl font-alga mr-4">Follow us!</p>
          <div className="flex text-xl text-black ">
            <Link
              target="_blank"
              href="https://www.instagram.com/luca.experiences"
            >
              <RiInstagramFill className="cursor-pointer mx-2" />
            </Link>
            <Link target="_blank" href="mailto:lcastro@lucaexperiences.com">
              <RiMailFill className="cursor-pointer mx-2" />
            </Link>
            <Link
              target="_blank"
              href="https://api.whatsapp.com/send/?phone=527296863028"
            >
              <RiWhatsappFill className="cursor-pointer mx-2" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
