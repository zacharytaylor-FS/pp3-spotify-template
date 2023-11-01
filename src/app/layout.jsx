import '../styles/globals.css';
import { Providers } from './providers';
import { Inter } from 'next/font/google';
import Nav from '../ui/navigation/NavBar';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'Create Next App',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${inter.variable} min-h-screen`}>
      <body>
        <Providers>
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
