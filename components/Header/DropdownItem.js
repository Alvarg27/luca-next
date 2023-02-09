import useNavigation from "@/hooks/useNavigation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const DropdownItem = ({ item, index }) => {
  const [show, setShow] = useState();
  const [spring, setSpring] = useState();
  const { dropdownIsOpen, setDropdownIsOpen } = useNavigation();
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

  useEffect(() => {
    if (dropdownIsOpen) {
      setTimeout(() => {
        setShow(true);
      }, 50 + 50 * index);
    }

    if (!dropdownIsOpen) {
      setShow(false);
    }
  }, [dropdownIsOpen]);

  return (
    <div
      style={{
        opacity: show ? 1 : 0,
        transition: "0.2s",
      }}
      onClick={() => {
        handleClick();
        setDropdownIsOpen(false);
      }}
      className="mx-1 flex items-center  h-[50px] rounded-lg cursor-pointer text-xl font-monument font-medium"
    >
      <p
        style={{
          transform: `translateY(${show ? 0 : 5}px)`,
          transition: "0.3s",
        }}
      >
        {item.title}
      </p>
    </div>
  );
};

export default DropdownItem;
