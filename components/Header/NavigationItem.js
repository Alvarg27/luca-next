import useNavigation from "@/hooks/useNavigation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const NavigationItem = ({ item }) => {
  const [click, setClick] = useState(false);
  const router = useRouter();

  const scrollToItem = (ref, offset) => {
    const y = offset || 0;
    const pos = ref?.current?.offsetTop - 90 + y;
    window.scrollTo({ left: 0, top: pos, behavior: "smooth" });
  };

  const handleClick = () => {
    if (item.route !== router.pathname) {
      router.push(item.route);
      setClick(true);
    } else {
      scrollToItem(item.ref, item?.offset);
    }
  };

  useEffect(() => {
    if (!click) {
      return;
    }
    setClick(false);
    if (!item?.ref?.current) {
      return;
    }

    if (item.route === router.pathname) {
      scrollToItem(item.ref, item?.offset);
    }
  }, [router, item.ref]);

  return (
    <div
      onClick={handleClick}
      className="mx-1 text-lg hover:bg-black hover:dark:bg-white  hover:bg-opacity-10 px-4 flex items-center justify-center h-[50px] rounded-lg cursor-pointer"
    >
      <p>{item.title}</p>
    </div>
  );
};

export default NavigationItem;
