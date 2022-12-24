import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-100 h-screen max-h-screen overflow-hidden">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
