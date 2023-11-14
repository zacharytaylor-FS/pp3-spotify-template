import { NextAuthOptions } from "next-auth";
import GitHubProvider from 'next-auth/providers/github'
import SpotifyProvider from 'next-auth/providers/spotify'
export const options = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        // SpotifyProvider({
        //     clientId: process.env.SPOTIFY_CLIENT_ID,
        //     clientSecret: process.env.SPOTIFY_CLIENT_SECRET
        // }),  
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: {
                    label: 'Username',
                    type: 'text',
                    placeholder: 'your-cool-username'
                },
                password: {
                    label: 'Password',
                    type: 'password',
                    placeholder: 'your-awesome-password'
                },
            },
            async authorize(credentials) {
                // This is where you need to retrieve user data to verify credentials
                const user = {id: '42', name: 'Dave', password: 'nextauth'}

                if(credentials?.username === user.name && credentials?.password === user.password) {
                    return user
                } else {
                    return null
                }
            }
        })
    ],
    
}