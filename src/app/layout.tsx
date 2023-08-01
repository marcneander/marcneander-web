import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Marc Neander - Full Stack Engineer',
    template: '%s | Marc Neander',
  },
  description: 'Freelancing Full Stack Engineer based in Stockholm. I make sure applications are accessible, performant, SEO optimized and user friendly.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
