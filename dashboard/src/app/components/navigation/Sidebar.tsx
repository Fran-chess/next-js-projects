import Image from "next/image";
import Link from "next/link";
import { RiFontSansSerif, RiSubtractFill } from "react-icons/ri";
import ActiveLink from "../effect-link/ActiveLink";

const menuItems = [
  {
    path: "/",
    title: "Dashboard",
    text: "View your dashboard",
  },
  {
    path: "/counter",
    title: "New Counter",
    text: "Create a new counter",
  },
];
const Sidebar = () => {
  return (
    <nav className="bg-zinc-950 py-3 px-6 text-white w-96 h-screen">
      <Link href={"/"}>
        <div className="text-6xl -ml-2.5">
        <RiFontSansSerif />

        </div>
      </Link>
      <p className="text-sm mt-2">
        Manage your actions and activities
      </p>
      <div id="profile" className="py-10">
        <p className="text-slate-500">Welcome back,</p>
        <Link href="#" className="inline-flex space-x-2 items-center">
          <Image
            className="rounded-full w-8 h-8"
            src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
            alt="User avatar"
            width={50}
            height={50}
          />
          <span className="text-sm md:text-base font-bold">Ander Herrera</span>
        </Link>
      </div>
      <ul>
        <li className="flex flex-col gap-5">
          {menuItems.map((item) => (
            <ActiveLink key={item.path} {...item} />
          ))}
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
