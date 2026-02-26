import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Camera, Eye, User, AlertCircle, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { isValidLocale, locales, type Locale } from "@/i18n/config"
import { getPhotoGuideTranslations } from "@/i18n/photo-guide"
import { LanguageSwitcher } from "@/components/LanguageSwitcher"

const baseUrl = "https://face-alarm.com"

const metaByLocale: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "Photo Guide — How to Take Perfect Face Yoga Progress Photos",
    description:
      "Learn how to take consistent selfies for face yoga progress tracking. Tips on lighting, background, angles, and camera positioning.",
  },
  ru: {
    title: "Руководство по фото — Как правильно делать фото для отслеживания прогресса",
    description:
      "Узнайте, как правильно делать селфи для отслеживания прогресса по фейс-йоге. Советы по освещению, фону, ракурсам и расположению камеры.",
  },
  tr: {
    title: "Fotoğraf Rehberi — Mükemmel İlerleme Fotoğrafları Nasıl Çekilir",
    description:
      "Yüz yogası ilerleme takibi için tutarlı selfie'ler çekmeyi öğrenin. Aydınlatma, arka plan, açılar ve kamera konumu ipuçları.",
  },
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
    languages[l] = `${baseUrl}/${l}/photo-guide`
  }

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `${baseUrl}/${locale}/photo-guide`,
      languages,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${baseUrl}/${locale}/photo-guide`,
    },
  }
}

export default async function PhotoGuidePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isValidLocale(locale)) notFound()
  const t = getPhotoGuideTranslations(locale as Locale)

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/40 backdrop-blur-sm fixed top-0 w-full z-50 bg-background/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <Image src="/images/facealarm-logo.png" alt="FaceAlarm" width={32} height={32} className="rounded-lg" />
            <span className="font-bold text-xl">FaceAlarm</span>
          </Link>
          <LanguageSwitcher currentLocale={locale as Locale} currentPath="/photo-guide" />
        </div>
      </nav>

      <main className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-chart-2/20 mb-6">
              <Camera className="w-8 h-8 text-chart-2" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4 text-balance">{t.title}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">{t.subtitle}</p>
          </div>

          {/* Before Photo Section */}
          <section className="mb-16">
            <div className="bg-chart-1/10 rounded-2xl p-8 mb-8">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Camera className="w-8 h-8 text-chart-1" />
                {t.beforeTitle}
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">{t.beforeDescription}</p>
            </div>
          </section>

          {/* How To Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-10 text-balance">{t.howToTitle}</h2>
            <div className="space-y-6">
              {t.tips.map((tip, index) => (
                <div key={index} className="bg-card/50 backdrop-blur-sm rounded-xl p-6 hover:bg-card transition-colors">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-chart-2/20 flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-chart-2" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{tip.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{tip.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Important Notice */}
          <section className="mb-16">
            <div className="bg-chart-4/10 border-2 border-chart-4/30 rounded-2xl p-8">
              <div className="flex gap-4">
                <AlertCircle className="w-8 h-8 text-chart-4 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-3">{t.importantTitle}</h3>
                  <p className="text-lg leading-relaxed">{t.importantText}</p>
                </div>
              </div>
            </div>
          </section>

          {/* After Photo Section */}
          <section className="mb-16">
            <div className="bg-chart-5/10 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Camera className="w-8 h-8 text-chart-5" />
                {t.afterTitle}
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">{t.afterDescription}</p>
            </div>
          </section>

          {/* Analysis Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-10 text-balance">{t.analysisTitle}</h2>

            <div className="space-y-8">
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Eye className="w-7 h-7 text-chart-1" />
                  {t.staticAnalysis}
                </h3>
                <ul className="space-y-3">
                  {t.staticItems.map((item, index) => (
                    <li key={index} className="flex gap-3 items-start">
                      <span className="text-chart-2 font-bold flex-shrink-0 mt-1">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <User className="w-7 h-7 text-chart-3" />
                  {t.dynamicAnalysis}
                </h3>
                <ul className="space-y-3">
                  {t.dynamicItems.map((item, index) => (
                    <li key={index} className="flex gap-3 items-start">
                      <span className="text-chart-2 font-bold flex-shrink-0 mt-1">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Back Button */}
          <div className="text-center">
            <Button size="lg" asChild className="font-bold">
              <Link href={`/${locale}`}>{t.backHome}</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
