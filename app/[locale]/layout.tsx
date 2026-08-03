import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import { notFound } from "next/navigation"
import { locales, isValidLocale, type Locale } from "@/i18n/config"
import "../globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

const baseUrl = "https://face-alarm.com"

const metaByLocale: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "FaceAlarm: Face Yoga Tracker — Daily Selfie Alarm for Progress Tracking",
    description:
      "Free face yoga progress tracker app. Set an alarm, take a daily selfie, track your transformation with AI alignment. 100% private, works offline. No subscriptions.",
  },
  ru: {
    title: "FaceAlarm: Трекер фейс-йоги — будильник с селфи для отслеживания прогресса",
    description:
      "Бесплатный трекер прогресса по фейс-йоге. Ставьте будильник, делайте ежедневные селфи, отслеживайте трансформацию с AI-выравниванием. 100% приватно, работает офлайн.",
  },
  tr: {
    title: "FaceAlarm: Yüz Yogası Takipçisi — İlerleme Takibi İçin Günlük Selfie Alarmı",
    description:
      "Ücretsiz yüz yogası ilerleme takibi uygulaması. Alarm kurun, günlük selfie çekin, AI hizalama ile dönüşümünüzü takip edin. %100 gizli, çevrimdışı çalışır.",
  },
}

const ogLocaleMap: Record<Locale, string> = {
  en: "en_US",
  ru: "ru_RU",
  tr: "tr_TR",
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isValidLocale(locale)) return {}
  const meta = metaByLocale[locale]

  const languages: Record<string, string> = {}
  for (const l of locales) {
    languages[l] = `${baseUrl}/${l}`
  }

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: meta.title,
      template: `%s | FaceAlarm`,
    },
    description: meta.description,
    keywords: [
      "face yoga tracker",
      "face yoga app",
      "selfie alarm",
      "face tracking app",
      "facial exercise tracker",
      "gua sha tracker",
      "face transformation",
      "фейс йога",
      "трекер фейс йоги",
      "будильник с селфи",
      "yüz yogası",
    ],
    authors: [{ name: "FaceAlarm" }],
    creator: "FaceAlarm",
    publisher: "FaceAlarm",
    icons: {
      icon: [
        { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
        { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
        { url: "/icon.svg", type: "image/svg+xml" },
      ],
      apple: "/apple-icon.png",
    },
    manifest: "/manifest.json",
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
      url: `${baseUrl}/${locale}`,
      siteName: "FaceAlarm",
      locale: ogLocaleMap[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocaleMap[l]),
      images: [
        {
          url: `${baseUrl}/images/og-image.png`,
          width: 1200,
          height: 630,
          alt: "FaceAlarm — Face Yoga Tracker: AI-Powered Progress Tracking",
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [`${baseUrl}/images/og-image.png`],
    },
    appleWebApp: {
      capable: true,
      title: "FaceAlarm",
      statusBarStyle: "black-translucent",
    },
    category: "health",
  }
}

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      url: baseUrl,
      name: "FaceAlarm",
      description:
        "Face Yoga Tracker - AI-Powered Progress Tracking. Wake up, take a selfie, see your transformation.",
      publisher: { "@id": `${baseUrl}/#organization` },
      inLanguage: ["en", "ru", "tr"],
    },
    {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: "FaceAlarm",
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/images/facealarm-logo.png`,
        width: 1024,
        height: 1024,
      },
      sameAs: [
        "https://apps.apple.com/app/id6758454962",
        "https://play.google.com/store/apps/details?id=com.facealarm.app",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        email: "info@superduperai.co",
        contactType: "customer support",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${baseUrl}/#app`,
      name: "FaceAlarm",
      alternateName: "FaceAlarm: Face Yoga Tracker",
      description:
        "Face yoga progress tracker. Set an alarm, take a daily selfie, track your transformation with AI alignment. 100% private, works offline.",
      url: baseUrl,
      applicationCategory: "HealthApplication",
      operatingSystem: "iOS, Android",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      installUrl: [
        "https://apps.apple.com/app/id6758454962",
        "https://play.google.com/store/apps/details?id=com.facealarm.app",
      ],
      screenshot: `${baseUrl}/images/facealarm-1.webp`,
      image: `${baseUrl}/images/og-image.png`,
      featureList:
        "Face detection, Ghost overlay, Streak tracking, Calendar gallery, Timelapse, Progress sharing",
      author: { "@id": `${baseUrl}/#organization` },
      aggregateRating: undefined,
    },
  ],
}
// Remove undefined values from serialization
const jsonLdClean = JSON.parse(JSON.stringify(jsonLdGraph))

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isValidLocale(locale)) notFound()

  return (
    <html lang={locale}>
      <head>
        {locales.map((l) => (
          <link key={l} rel="alternate" hrefLang={l} href={`${baseUrl}/${l}`} />
        ))}
        <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/en`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdClean) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {/*
          Our own counter. No cookie and no client-side id at all — the anonymous id is
          derived at the edge and rotates daily — so it adds nothing to the consent question.
          It exists so this landing and the iOS app of the same product are counted together.
          https://github.com/fortunto2/superduper-analytics
        */}
        {process.env.NODE_ENV === "production" && (
          <Script
            src="https://analytics.superduperai.co/sda.js"
            data-source="facealarm"
            strategy="afterInteractive"
          />
        )}
        <Analytics />
      </body>
    </html>
  )
}
