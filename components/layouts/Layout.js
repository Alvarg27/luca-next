import useNavigation from '@/hooks/useNavigation';
import usePageOffset from '@/hooks/usePageOffset';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import Head from 'next/head';
import React, { useEffect } from 'react';
import MenuIcon from '../commons/MenuIcon';
import Footer from '../Footer/Footer';
import DropdownMenu from '../Header/DropwdownMenu';
import Header from '../Header/Header';
import WhatsAppButton from '../WhatsappButton/WhatsappButton';

const Layout = ({ children }) => {
  const { offsetY } = usePageOffset();
  const { width, height } = useWindowDimensions();
  const { dropdownIsOpen } = useNavigation();

  return (
    <div className="w-full max-w-full overflow-hidden ">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-5BDSG7S7');`,
          }}
        />
        <title>Luca experiences</title>
        <meta
          name="description"
          content="Experience brands from a new point of view"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="/luca-icon.png" />
      </Head>
      {width <= 1024 && (
        <MenuIcon className="!fixed right-[5%] mt-[20px] z-[100]" />
      )}
      <DropdownMenu />
      <div
        style={{
          height: dropdownIsOpen ? height : offsetY > 70 ? 70 : 0,
          transition: '0.3s',
        }}
        className={`fixed top-0 w-full z-[20] bg-gradient-to-t from-white to-stone-100 ${
          offsetY > 70 || dropdownIsOpen ? ' shadow-lg' : ''
        }`}
      />

      <Header />
      <body>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-5BDSG7S7"
          height="0"
          width="0"
        ></iframe>
        <div className=" min-h-screen flex flex-col justify-between">
          {children}
          <Footer />
        </div>
      </body>
      <div>
        <WhatsAppButton />
      </div>
    </div>
  );
};

export default Layout;
