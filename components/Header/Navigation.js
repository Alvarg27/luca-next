import useNavigation from "@/hooks/useNavigation";
import React from "react";
import NavigationItem from "./NavigationItem";

const Navigation = ({ className }) => {
  const { items } = useNavigation();
  return (
    <div className={`flex ${className}`}>
      {items.map((item, i) => (
        <NavigationItem key={i} item={item} />
      ))}
    </div>
  );
};

export default Navigation;
