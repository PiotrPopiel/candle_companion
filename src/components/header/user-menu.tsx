"use client";

import { useEffect, useRef } from "react";
import SignOutButton from "../sign-out-button";
import Link from "next/link";

type nameProps = {
  name: string;
  closeMenu: () => void;
};

export default function UserMenu({ name, closeMenu }: nameProps) {
  const divUserMenu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (divUserMenu.current) {
        if (!divUserMenu.current.contains(event.target as Node)) {
          closeMenu();
        }
      }
    };

    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, [closeMenu]);

  return (
    <div
      ref={divUserMenu}
      className="absolute top-16 right-5  w-[80vw] bg-gray-50 rounded shadow-md border flex flex-col gap-10 p-3 items-center md:right-16 md:top-16  md:w-[220px] ">
      <div className=" h-[100%] gap-20 p-3 flex flex-col justify-between items-center md:gap-8">
        <div className="flex flex-col gap-14 text-xl md:text-base md:gap-10 items-center py-2">
          <p className="md:hidden text-2xl py-4  mb-5">
            Hello <b className="text-main-purple">{name}</b> !
          </p>
          <Link
            onClick={closeMenu}
            href="/dashboard"
            className="font-bold cursor-pointer hover:text-gray-700 ">
            Dashboard
          </Link>
        </div>

        <SignOutButton />
      </div>
    </div>
  );
}
