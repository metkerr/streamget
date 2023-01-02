import NextAuth from "next-auth/next";
import SpotifyProvider from "next-auth/providers/spotify";

export default NextAuth({
  providers: [
    SpotifyProvider({
      authorization: {
        url: "https://accounts.spotify.com/authorize",
        params: {
          scope: "user-read-private user-read-email user-read-playback-state",
        },
      },
      clientId: process.env.CLIENT_ID!,
      clientSecret: process.env.CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      // Send properties to the client, like an access_token and user id from a provider.
      //@ts-ignore
      session.accessToken = token.accessToken;
      //@ts-ignore
      session.user.id = token.id;

      return session;
    },
  },
});
