import Link from "next/link";

export default function NavLinks() {
  return (
    <>
      <Link
        href="/calculator"
        className="font-semibold text-3xl md:text-lg text-gray-900 hover:text-gray-600">
        Calculator
      </Link>
      <button className="bg-[#5f448c] w-full rounded font-semibold text-gray-50 hover:bg-[#7a649f] hover:scale-110 focus:scale-110 active:scale-105 transition  flex items-center justify-center">
        <p className="text-2xl md:text-lg py-2 px-4">Sign Up</p>
      </button>
    </>
  );
}
