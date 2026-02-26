import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { isValidLocale, locales, type Locale } from "@/i18n/config"
import { getPrivacyPolicyTranslations } from "@/i18n/privacy-policy"
import { LanguageSwitcher } from "@/components/LanguageSwitcher"

const baseUrl = "https://face-alarm.com"

const metaByLocale: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "Privacy Policy",
    description: "FaceAlarm privacy policy. 100% offline, no data collection, no cloud storage.",
  },
  ru: {
    title: "Политика конфиденциальности",
    description: "Политика конфиденциальности FaceAlarm. 100% офлайн, без сбора данных, без облачного хранилища.",
  },
  tr: {
    title: "Gizlilik Politikası",
    description: "FaceAlarm gizlilik politikası. %100 çevrimdışı, veri toplama yok, bulut depolama yok.",
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
    languages[l] = `${baseUrl}/${l}/privacy-policy`
  }

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `${baseUrl}/${locale}/privacy-policy`,
      languages,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${baseUrl}/${locale}/privacy-policy`,
    },
  }
}

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isValidLocale(locale)) notFound()
  const t = getPrivacyPolicyTranslations(locale as Locale)

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/40 backdrop-blur-sm fixed top-0 w-full z-50 bg-background/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <Image src="/images/facealarm-logo.png" alt="FaceAlarm" width={32} height={32} className="rounded-lg" />
            <span className="font-bold text-xl">FaceAlarm</span>
          </Link>
          <LanguageSwitcher currentLocale={locale as Locale} currentPath="/privacy-policy" />
        </div>
      </nav>

      <main className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center text-primary hover:underline mb-8 font-medium"
          >
            ← {t.backToHome}
          </Link>

          <h1 className="text-4xl md:text-5xl font-black mb-4">{t.title}</h1>
          <p className="text-muted-foreground mb-12">{t.lastUpdated}</p>

          <div className="prose prose-lg max-w-none space-y-12">
            <section>
              <h2 className="text-3xl font-bold mb-4">{t.sections.overview.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{t.sections.overview.content}</p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">{t.sections.dataCollection.title}</h2>
              <p className="text-xl font-bold mb-4">{t.sections.dataCollection.subtitle}</p>
              <p className="text-muted-foreground leading-relaxed mb-4">{t.sections.dataCollection.content}</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {t.sections.dataCollection.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">{t.sections.faceDetection.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{t.sections.faceDetection.content}</p>
              <p className="text-xl font-bold mb-4">{t.sections.faceDetection.subtitle}</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {t.sections.faceDetection.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">{t.sections.photos.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{t.sections.photos.content}</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {t.sections.photos.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">{t.sections.permissions.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{t.sections.permissions.content}</p>
              <div className="border border-border rounded-lg overflow-hidden mb-4">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="text-left p-4 font-bold">{t.sections.permissions.permissionHeader}</th>
                      <th className="text-left p-4 font-bold">{t.sections.permissions.purposeHeader}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {t.sections.permissions.table.map((row, index) => (
                      <tr key={index} className="border-t border-border">
                        <td className="p-4">{row.permission}</td>
                        <td className="p-4 text-muted-foreground">{row.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground leading-relaxed">{t.sections.permissions.footer}</p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">{t.sections.thirdParty.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{t.sections.thirdParty.content}</p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">{t.sections.dataRetention.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{t.sections.dataRetention.content}</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {t.sections.dataRetention.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">{t.sections.children.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{t.sections.children.content}</p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">{t.sections.changes.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{t.sections.changes.content}</p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">{t.sections.operator.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">{t.sections.operator.content}</p>
              <p className="font-bold mb-2">{t.sections.operator.names}</p>
              <p className="text-muted-foreground">{t.sections.operator.email}</p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">{t.sections.contact.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{t.sections.contact.content}</p>
              <p className="font-bold">
                {t.sections.contact.email}{" "}
                <a href="mailto:info@superduperai.co" className="text-primary hover:underline">
                  info@superduperai.co
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
