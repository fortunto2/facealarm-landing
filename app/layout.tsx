import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FaceAlarm: Face Yoga Tracker - AI-Powered Progress Tracking",
  description:
    "Face yoga progress tracker. Wake up, take a selfie, see your transformation. 100% private. No subscriptions.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      ru: "/",
      tr: "/",
    },
  },
  openGraph: {
    title: "FaceAlarm: Face Yoga Tracker",
    description: "Face yoga progress tracker. Wake up, take a selfie, see your transformation.",
    type: "website",
    locale: "en_US",
    alternateLocale: ["ru_RU", "tr_TR"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="alternate" hrefLang="en" href="/" />
        <link rel="alternate" hrefLang="ru" href="/" />
        <link rel="alternate" hrefLang="tr" href="/" />
        <link rel="alternate" hrefLang="x-default" href="/" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
