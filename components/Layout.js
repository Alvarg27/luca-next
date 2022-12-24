import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-100 h-screen  overflow-hidden fixed">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
