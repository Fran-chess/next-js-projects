import Link from "next/link";
import { RiFontSansSerif } from "react-icons/ri";

import ActiveLink from "../active-link/ActiveLink";

const navItems = [
  { path: "/about", text: "About" },
  { path: "/contact", text: "Contact" },
  { path: "/icono", text: "Icono" },
];

const Navigation = () => {
  return (
    <nav className="bg-neutral-900">
      <ul className="flex gap-10 justify-center items-center  text-lg">
        <Link href={"/"} className="ml-3 p-0.5 text-5xl">
          <RiFontSansSerif />
        </Link>

        <div className="flex flex-1"></div>

        {navItems.map((navItems) => (
          <ActiveLink key={navItems.path} {...navItems} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
