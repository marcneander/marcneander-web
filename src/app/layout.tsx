import { Nav } from "@/components/Nav"
import "./globals.css"
import type { Metadata } from "next"
import { Rubik } from "next/font/google"

const rubik = Rubik({ subsets: ["latin"], weight: ["400", "700"] })

export const metadata: Metadata = {
  title: {
    default: "unknown / Marc Neander",
    template: "%s / Marc Neander",
  },
  icons: [
    {
      rel: "apple-touch-icon",
      type: "image/png",
      sizes: "180x180",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
  ],
  manifest: "/site.webmanifest",
  description:
    "Freelancing Full Stack Engineer based in Stockholm. I make sure applications are accessible, performant, SEO optimized and user friendly.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  )
}
