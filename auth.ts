import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Spotify from "next-auth/providers/spotify";

export const {
    handlers: { GET, POST },
    auth,
} = NextAuth({
    providers: [
        GitHub({
            clientId: process.env.G
        }), 
        Spotify({
            clientId: process.env.SPOTIFY_CLIENT_ID,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    })],
    callbacks: {
        async jwt({ token, account,user }) {
            console.log(token,account,user)
            // Persist the OAuth access_token to the token right after signin
            if (account) {
              token.accessToken = account.access_token
            }
            return token
          },
        async session({ session, token, user }) {
            console.log({session, token, user})
          // Send properties to the client, like an access_token from a provider.
          session.accessToken = token.accessToken
          return session
        }
      },
    session: { strategy: "jwt"},
    secret: process.env.NEXTAUTH_SECRET
})