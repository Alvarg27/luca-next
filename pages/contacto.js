import Circles from '@/components/commons/Circles';
import React from 'react';

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
        <div className='py-32 items-center text-center'>
          <h3 className="font-monument md:text-4xl text-3xl text-teal-500">
            Hemos recibido tu mensaje con éxito!
          </h3>
          <p className="font-monument md:text-xl text-lg text-black">
            A la brevedad nos pondremos en contacto contigo.
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
