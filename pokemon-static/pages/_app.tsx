import { NextUIProvider } from "@nextui-org/react";
import { useEffect } from "react";
import useDarkMode from "use-dark-mode";
import type { AppProps } from "next/app";
import "@/styles/globals.css";


export default function App({ Component, pageProps }: AppProps) {
  const darkMode = useDarkMode(false);

  useEffect(() => {
    if (darkMode.value) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode.value]);

  return (
    <NextUIProvider>
      <Component {...pageProps} darkMode={darkMode} />
    </NextUIProvider>
  );
}
