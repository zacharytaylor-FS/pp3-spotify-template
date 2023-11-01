import Link from 'next/link';
import SpotifyToken from '../ui/SpotifyIcon';
import Card from '../ui/ArtistCard';
import NavLinks from '../ui/navigation/NavLinks';


const Home = (props) => {
  return (
    <div className='flex flex-col h-screen mx-auto'>
      <div className='flex p-2'>
        {/* <h1 className="text-3xl font-bold text-[var(--spotify-green)] mr-3">Spotify</h1> */}
        <Link href='/' className='text-slate-400'>
          Home Page content
        </Link>
      </div>
      <div>
        <NavLinks />
        <Card />
      </div>
    </div>
  );
};

export default Home;
