import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="container m-auto border border-red-800 ">
        <h1 className="text-2xl">Hola mundo</h1>
        <Link href={"/about"}>
          <span>About</span>
        </Link>
      </main>
    </>
  );
}
