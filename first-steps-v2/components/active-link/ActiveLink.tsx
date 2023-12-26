'use client';

import Link from "next/link";
import style from './ActiveLink.module.css'
import { usePathname } from "next/navigation";
interface Props {
  path: string;
  text: string;
}

const ActiveLink = ({ path, text }: Props) => {
  const pathName = usePathname();
  console.log(pathName)
  return (
    <Link
      className={`${style.link} ${(pathName === path) && style.activeLink}`}
      href={path}
    >
      {text}
    </Link>
  );
};

export default ActiveLink;