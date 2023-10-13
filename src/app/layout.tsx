// components/layouts/root-layout.tsx
import Providers from '@/lib/Providers';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Layout } from 'antd';
import Navbar from '@/components/ui/navbar';

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
          <Layout className="layout">
            {/* Include the Navbar component */}
            <Navbar />
            {/* Render the children */}
            {children}
          </Layout>
        </body>
      </html>
    </Providers>
  );
}
