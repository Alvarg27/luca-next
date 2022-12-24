import { useContext, useEffect, useState } from "react";

import PageOffsetContext from "../context/PageOffsetProvider";

const usePageOffset = () => {
  const { offsetY, setOffsetY, prevOffset, setPrevOffset } =
    useContext(PageOffsetContext);

  return {
    offsetY,
    setOffsetY,
    prevOffset,
    setPrevOffset,
  };
};

export default usePageOffset;
