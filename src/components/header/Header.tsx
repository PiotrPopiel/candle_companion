import Image from "next/image";
import Link from "next/link";
import SessionPanel from "./SessionPanel";

export default function Header() {
  return (
    <div className="w-full h-20 bg-gray-50 flex justify-end shadow-lg items-center fixed z-10 border-b">
      <Link
        href="/"
        className="absolute left-6 md:left-[50%] md:translate-x-[-50%]">
        <Image src="/logo_black.svg" alt="logo" width={200} height={80} />
      </Link>

      <div className="flex gap-10 items-center px-4 md:px-8">
        <SessionPanel />
      </div>
    </div>
  );
}
