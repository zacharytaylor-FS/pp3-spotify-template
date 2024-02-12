
import { auth } from '../../auth';
import ArtistCard from '../ui/card/Artist';
import SongCard from '../ui/card/Song';
import Nav from '../ui/navigation/NavBar';

const Home = async () => {
  const session = await auth()

  const accessToken = session.accessToken
  console.log(accessToken)
  const apiUrl = `https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V`


    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    const data = await response.json();

    console.log(data)
  
  return (
    <main>
      <Nav/>
      <article className='flex flex-col h-screen w-[100%]'>
        <div className=' flex flex-1 h-[100%]'>
          <div className='p-6 w-[100%]'>
          {JSON.stringify(data)}
          <hr/>
          {JSON.stringify(session)}
          <ArtistCard/>
          <SongCard/>
        </div>
        </div>
      </article>
    </main>
  );
};

export default Home;
