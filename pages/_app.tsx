import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${poppins.className} container mx-auto px-10 xl:px-5`}>
      <Component {...pageProps} />
    </div>
  );
}
