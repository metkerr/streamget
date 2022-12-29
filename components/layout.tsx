import Head from "next/head";
import Footer from "./footer";
import Navbar from "./navbar";
interface Props {
  children?: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const siteTitle = "Streamget, spotify streaming widget";
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{siteTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Streamget, the esiest way to create and customize your spotify music into your stream."
        />
        <meta property="og:image" content={"../public/preview.png"} />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="mb-20">
        <Navbar />
      </header>
      <main className="mb-4">{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
