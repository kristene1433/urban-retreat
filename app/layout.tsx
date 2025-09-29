import type { Metadata } from 'next'
import { Montserrat, Roboto } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700'],
})

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['300', '400', '500', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://urbanretreat.com'), // Replace with your actual domain
  title: 'Urban Retreat - Your Perfect City Escape',
  description: 'Experience luxury and comfort in the heart of the city. Modern vacation rental with premium amenities and stunning city views.',
  keywords: 'vacation rental, urban retreat, city accommodation, luxury stay, modern apartment',
  authors: [{ name: 'Urban Retreat' }],
  openGraph: {
    title: 'Urban Retreat - Your Perfect City Escape',
    description: 'Experience luxury and comfort in the heart of the city.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/images/hero-city.jpg',
        width: 1200,
        height: 630,
        alt: 'Urban Retreat - Luxury City Accommodation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Urban Retreat - Your Perfect City Escape',
    description: 'Experience luxury and comfort in the heart of the city.',
    images: ['/images/hero-city.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${roboto.variable}`}>
      <body className="font-roboto antialiased">
        {children}
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: '#f59e0b',
                secondary: '#fff',
              },
            },
          }}
        />
      </body>
    </html>
  )
}
