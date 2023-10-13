import Providers from '@/lib/Providers'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavbarBar from '@/components/ui/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ari-Techs',
  description: 'Created by ari-techs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <html lang="en">
      <body className={inter.className}>
        <NavbarBar />
        {children}
        </body>
    </html>
    </Providers>
  )
}
