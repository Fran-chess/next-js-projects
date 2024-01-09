import { redirect } from "next/navigation";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return redirect("/main");
}
