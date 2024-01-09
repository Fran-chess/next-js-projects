import Navigation from "@/components/navigation/Navigation";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function SectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
