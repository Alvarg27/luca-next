import Head from "next/head";
import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <div className="w-full max-w-full overflow-hidden ">
      <Head>
        <title>Luca experiences</title>
        <meta
          name="description"
          content="Experience brands from a new point of view"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/luca-icon.png" />
      </Head>
      <Header />
      <div className=" min-h-screen flex flex-col justify-between">
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
