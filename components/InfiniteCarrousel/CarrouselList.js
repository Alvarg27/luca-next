import React, { forwardRef } from "react";
import IncentiveCard from "../Incentives/IncentiveCard";

const CarrouselList = forwardRef(({ className, style, items, alt }, ref) => {
  return (
    <div ref={ref} className={`flex relative ${className}`} style={style}>
      {items.map((_, i) => (
        <IncentiveCard key={i} index={i} alt={alt} />
      ))}
    </div>
  );
});
CarrouselList.displayName = "CarrouselList";

export default CarrouselList;
