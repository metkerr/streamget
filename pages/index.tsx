import Homepage from "../components/homepage";
import Layout from "../components/layout";
import SpotifyWebApi from "spotify-web-api-node";

export const getServerSideProps = async (context: any) => {
  const code = context.query.code;
  const credentials = {
    redirectUri: process.env.NEXT_PUBLIC_REDIRECT_URI,
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  };
  if (!code) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  const spotifyApi = new SpotifyWebApi(credentials);
  try {
    const access = await spotifyApi.authorizationCodeGrant(code);
    return { props: { data: access.body } };
  } catch {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
};

export default function Home(props: any) {
  return (
    <Layout>
      <Homepage accessToken="x" />
    </Layout>
  );
}
