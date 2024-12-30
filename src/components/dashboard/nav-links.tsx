"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import {
  RiCandleLine,
  RiDashboardLine,
  RiMoneyDollarCircleLine,
} from "react-icons/ri";

const links = [
  { name: "Dashboard", href: "/dashboard", icon: RiDashboardLine },
  {
    name: "Products",
    href: "/dashboard/products",
    icon: RiCandleLine,
  },
  { name: "Sales", href: "/dashboard/sales", icon: RiMoneyDollarCircleLine },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            href={link.href}
            key={link.name}
            className={clsx(
              "bg-secondary-purple p-2 h-16 w-16 rounded flex gap-2 items-center justify-center text-center font-semibold shadow-md md:h-20 md:w-36 lg:w-full lg:justify-start",
              {
                "bg-white border-b-4 border-secondary-purple":
                  pathname === link.href,
              }
            )}>
            <link.icon
              className={clsx("text-2xl text-gray-50", {
                "text-main-purple": pathname === link.href,
              })}
            />
            <p
              className={clsx("hidden md:block  text-gray-50 h-[24px]", {
                "text-main-purple": pathname === link.href,
              })}>
              {link.name}
            </p>
          </Link>
        );
      })}
    </>
  );
}
