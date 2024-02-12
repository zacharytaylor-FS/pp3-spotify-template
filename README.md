<p align="center"><img src="./public/Spotify_Green.png" alt="Logo" width="300" height="300"></p>
<h1 align="center"> Nextjs 14 Spotify Clone</h1>

<!-- ## Project Overview -->

This web app will use allow a user to login with a Spotify account. Hit[Spotify API](https://developer.spotify.com/documentation/web-api) and dipslay latest artrist, albums, and top tracks. Spotify Clone **fullstack app in JavaScript with [Next.js](https://nextjs.org/)** using [React](https://reactjs.org/) (frontend), [Next.js API routes](https://nextjs.org/docs/api-routes/introduction) and [Prisma Client](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client) (backend).

# Features

- [x] Authentication/Singup using Spotify.
- [x] Get user's playlists.
- [x] Get user's top artists.
- [x] Get user's top tracks.
- [x] Get user's recently played tracks.
- [x] Get user's saved tracks.
- [x] Responsive design.
- [x] Dark mode.
- [x] Search for tracks, artists, albums and playlists.
- [x] Real time sync with Spotify client.
- [x] Play/Pause/Next/Previous track.
- [x] Shuffle/Repeat track.
- [x] Playlists/Albums/Artists/Tracks page.
- [x] [YouTube](https://www.youtube.com/watch?v=tQGSlapQ2dk) demo.

## Tech Stack

**Client:** React, Next, TailwindCSS, Prisma

**Server:** Node, Express

# Getting Started

To see a working example

Clone repository:

    git clone git@github.com:zacharytaylor-FS/pp3-spotify-template.git

Change into the project:

    cd pp3-spotify-template

To install the project, run the following command:

    npm install

Sync prisma with Schema and generate models

    npx prisma db push

To get up and running...

    npm run dev

# Features

- Browse Spotify using and API
- Search for your favorite artists, albums, and songs
- View artists, album, and song details
- Check out artists, album, and song callobrations

# Links

The links to the project are as follows: 

- [http://localhost:3000](http://localhost:3000) - Link to the frontend (Nuxt.js) application. This is the primary user interface of the Spotify application
- [http://localhost:3001](http://localhost:3001) - Link to the backend (Express) API.
- [http://localhost:3001/spotify/v1](http://localhost:3001/spotify/v1) - Link to the Spotify API middleware. 
- [http://localhost:3001/spotify/v1/status](http://localhost:3001/spotify/v1/status) - Endpoint to check the status of our application's JWT. Returns true if a valid JWT exists. False otherwise.
- [http://localhost:3001/spotify/v1/login](http://localhost:3001/spotify/v1/login) - Endpoint request a new JWT from Spotify using the authentication workflow
- [http://localhost:3001/spotify/v1/search](http://localhost:3001/spotify/v1/search) - Endpoint for a general/global search to Spotify. Returns JSON of all results. 
