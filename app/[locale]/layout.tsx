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

/*
 * Titles lead with "alarm clock", which is what people actually type and what the app actually is.
 *
 * Search Console, 16 months: 78 impressions for "face alarm" at position 5.9 — first page — and
 * zero clicks. Autocomplete says the query behind it is "face alarm clock". The title said
 * "Face Yoga Tracker" and never used the word clock, so everyone who searched for an alarm saw a
 * tracker and scrolled past. The app schedules a real wake-up alarm with sound, snooze and
 * weekdays; face yoga is what it is *for*, not what it *is*.
 */
const metaByLocale: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "Face Alarm Clock — wake up, take a selfie, track your face yoga",
    description:
      "A free alarm clock you switch off with a selfie. It wakes you at the time you set, lines up each photo with the last one, and turns weeks of them into a timelapse of your face yoga progress. Works offline, no account, no subscription.",
  },
  ru: {
    title: "Будильник с селфи — просыпайтесь и снимайте прогресс фейс-йоги",
    description:
      "Бесплатный будильник, который выключается селфи. Будит в заданное время, совмещает каждый снимок с предыдущим и собирает из них таймлапс прогресса фейс-йоги. Работает офлайн, без аккаунта и подписки.",
  },
  tr: {
    title: "Selfie Alarmı — uyanın, selfie çekin, yüz yogası ilerlemenizi izleyin",
    description:
      "Selfie ile kapattığınız ücretsiz alarm saati. Kurduğunuz saatte uyandırır, her fotoğrafı bir öncekiyle hizalar ve haftaların karelerini yüz yogası ilerlemenizin zaman atlamalı videosuna dönüştürür. Çevrimdışı çalışır, hesap ve abonelik yok.",
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
