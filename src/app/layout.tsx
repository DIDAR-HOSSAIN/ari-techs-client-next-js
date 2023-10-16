
import Providers from '@/lib/Providers';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/ui/navbar';
import Search from '@/components/ui/search';
import Services from '@/components/ui/Card';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ari-Techs',
  description: 'Created by ari-techs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>
         <div>
          <Navbar />
          <Search />
          {children}
         </div>
          
        </body>
      </html>
    </Providers>
  );
}
