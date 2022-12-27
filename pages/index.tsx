import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Streamget</title>
        <meta name="description" content="Spotify widget for streamer app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Spotify streamer widget</h1>
      </main>
    </>
  );
}
