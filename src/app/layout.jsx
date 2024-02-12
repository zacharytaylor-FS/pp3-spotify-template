import { Inter } from 'next/font/google';
import '../styles/globals.css';
import Footer from '../ui/dashboard/Footer';
import Sidebar from '../ui/navigation/Sidebar';
import { Providers } from './providers';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'Spotify Clone',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${inter.variable} text-slate-300`}>
      <body className='flex flex-col bg-black p-1'>
      <Providers>
        <div className='flex gap-1 flex-1 h-[100%] w-[100%]'>
          <Sidebar/>
          <div className='flex flex-col  w-screen'>
            {children}
          </div> 
        </div>
        <Footer/>
        </Providers>
      </body>
    </html>
  );
}
