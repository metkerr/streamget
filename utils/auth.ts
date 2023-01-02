import SpotifyWebApi from "spotify-web-api-node";

export default async function Auth(code: any) {
  const credentials = {
    redirectUri: process.env.NEXT_PUBLIC_REDIRECT_URI,
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  };
  try {
    const spotifyApi = new SpotifyWebApi(credentials);
    const res = await spotifyApi.authorizationCodeGrant(code);

    const { access_token, expires_in, refresh_token } = res.body;
    // return access_token;
  } catch {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return { sap: "x" };
}
