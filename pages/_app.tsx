import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "@next/font/google";
import { useRouter } from "next/router";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <div
      className={`${poppins.className} ${
        router.pathname !== "/widget" && "container mx-auto px-10 xl:px-5"
      }`}
    >
      <Component {...pageProps} />
    </div>
  );
}
