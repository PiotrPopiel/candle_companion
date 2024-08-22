"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import UserPanel from "./UserPanel";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full h-20 bg-gray-50 flex justify-end shadow-lg items-center fixed z-10 border-b">
      <Link
        href="/"
        className="absolute left-6 md:left-[50%] md:translate-x-[-50%]">
        <Image src="/logo_black.svg" alt="logo" width={200} height={80} />
      </Link>
      <div className="md:hidden px-10 ">
        {!isOpen ? (
          <button onClick={toggleOpen}>
            <RxHamburgerMenu className="text-4xl cursor-pointer" />
          </button>
        ) : (
          <>
            <button onClick={toggleOpen}>
              <RxCross2 className="text-4xl cursor-pointer" />
            </button>
            <div className="absolute flex flex-col items-center justify-evenly bg-gray-50 right-0 top-20 w-full h-[60vh] p-10">
              <UserPanel />
            </div>
          </>
        )}
      </div>
      <div className="hidden md:flex gap-10 items-center px-16">
        <UserPanel />
      </div>
    </div>
  );
}
