import React from "react";

const RemixIcon = ({ name, className, style }) => {
  if (name === "RiFocus2Line") {
    const { RiFocus2Line } = require("react-icons/ri");
    return <RiFocus2Line className={`${className}`} style={style} />;
  }
  if (name === "RiEyeLine") {
    const { RiEyeLine } = require("react-icons/ri");
    return <RiEyeLine className={`${className}`} style={style} />;
  }
  if (name === "RiVipDiamondLine") {
    const { RiVipDiamondLine } = require("react-icons/ri");
    return <RiVipDiamondLine className={`${className}`} style={style} />;
  }
};

export default RemixIcon;
