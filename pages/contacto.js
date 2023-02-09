import Circles from "@/components/commons/Circles";
import Link from "next/link";
import React from "react";
import { RiInstagramFill, RiMailFill, RiWhatsappFill } from "react-icons/ri";

const ContactPage = () => {
  return (
    <div className="md:pt-[100px] pt-[70px] mx-auto w-[95%] max-w-[1200px]">
      <Circles />
      <p className="font-monument text-xl text-teal-500">Get in touch</p>
      <p className="font-monument text-4xl">lcastro@lucaexperiences.com</p>
      <p className="font-monument text-4xl">729 686 3028</p>

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
  );
};

export default ContactPage;
