import NavLinks from "./NavLinks";

export default function Sidenav() {
  return (
    <nav className="w-full flex gap-2 lg:h-full lg:flex-col lg:w-[450px] lg:gap-6">
      <NavLinks />
    </nav>
  );
}
