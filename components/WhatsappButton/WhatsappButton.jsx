// WhatsAppButton.js
import { RiWhatsappLine } from 'react-icons/ri';
import React from 'react';
import Link from 'next/link';

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-8 right-8 rounded-full cursor-pointer z-50 shadow-sm shadow-black">
      <Link
        target="_blank"
        href="https://api.whatsapp.com/send/?phone=4421271294"
        className="block p-3 bg-green-500 rounded-full"
      >
        <RiWhatsappLine className="text-white" size={35} />
      </Link>
    </div>
  );
};

export default WhatsAppButton;
