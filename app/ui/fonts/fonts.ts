import { Inter, Lusitana } from 'next/font/google';
import localFont from 'next/font/local';

const inter = Inter({ subsets: ['latin'] });

const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const aspergit = localFont({ src: './aspergit/Aspergit.otf' });
const futura = localFont({ src: './futura/Futura Light font.ttf' });

export { inter, aspergit, lusitana, futura };
