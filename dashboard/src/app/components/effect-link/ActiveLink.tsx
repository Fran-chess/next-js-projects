"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "./ActiveLink.module.css";
interface Props {
  path: string;
  title: string;
  text: string;
}

const ActiveLink = ({ path, text, title }: Props) => {
  const pathName = usePathname();
  return (
    <Link
      href={path}
      className={`${style.link} ${pathName === path && style.activeLink}`}
    >
      <div className="flex flex-col">
        <span className="text-lg font-bold">{title}</span>
        <span className="text-sm">{text}</span>
      </div>
    </Link>
  );
};

export default ActiveLink;
