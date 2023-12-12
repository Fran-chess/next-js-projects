import Head from "next/head";
import { FC, ReactNode } from "react";
import Navigation from "../ui/Navigation";


interface LayoutProps {
    children: ReactNode;
    title?: string; 
  }

export const Layout: FC<LayoutProps> = ({children, title}) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokémon app'}</title>
        <meta name="author" content="Francisco Leonardo" />
        <meta name="description" content={`Información sobre el pokémon ${title}`} />
        <meta name="keywords" content={`${title}, pokémon, pokédex`} />
      </Head>

     <Navigation /> 
    <main className="container m-auto mt-2.5 ">
        {children}
    </main>

    </>
  );
};
