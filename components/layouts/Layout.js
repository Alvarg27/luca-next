import Head from "next/head";
import React from "react";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Luca experiences</title>
        <meta
          name="description"
          content="Experience brands from a new point of view"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/lucalogo.webp" />
      </Head>
      <Header />
      {children}
    </>
  );
};

export default Layout;
