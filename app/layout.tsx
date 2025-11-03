import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { GoogleAnalytics } from "@next/third-parties/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Imposter Game Generator - Free Online Party Game",
  description:
    "Free imposter game generator for online and offline play. Generate random words for imposter word games, guess the imposter, and play word imposter games unblocked. No downloads required - start your imposter game free now!",
  keywords: [
    "imposter game generator",
    "imposter words",
    "online imposter game",
    "random word generator",
    "imposter word game online",
    "imposter game free",
    "imposter game unblocked",
    "guess the imposter",
    "word imposter",
    "who is the spy",
    "party game generator",
    "spy game",
  ],
  generator: "v0.app",
  icons: {
    icon: "/imposter-logo.svg",
    shortcut: "/imposter-logo.svg",
    apple: "/imposter-logo.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ? (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        ) : null}
      </body>
    </html>
  )
}
