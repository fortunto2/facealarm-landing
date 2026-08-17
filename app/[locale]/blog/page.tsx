import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { isValidLocale, locales, type Locale } from "@/i18n/config"
import { articlesByLocale, blogChrome } from "@/i18n/blog"

const baseUrl = "https://face-alarm.com"

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

  const chrome = blogChrome[locale as Locale]
  const languages: Record<string, string> = {}
  for (const l of locales) {
    if (articlesByLocale[l].length > 0) languages[l] = `${baseUrl}/${l}/blog`
  }
  if (languages.en) languages["x-default"] = languages.en

  return {
    title: chrome.indexMetaTitle,
    description: chrome.indexMetaDescription,
    alternates: { canonical: `${baseUrl}/${locale}/blog`, languages },
    openGraph: {
      title: chrome.indexMetaTitle,
      description: chrome.indexMetaDescription,
      url: `${baseUrl}/${locale}/blog`,
      type: "website",
      locale,
    },
  }
}

export default async function BlogIndex({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isValidLocale(locale)) notFound()

  const articles = articlesByLocale[locale as Locale]
  // A locale with no articles has no listing rather than an empty page.
  if (articles.length === 0) notFound()

  const chrome = blogChrome[locale as Locale]

  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <Link href={`/${locale}`} className="text-sm text-muted-foreground hover:text-foreground">
        ← FaceAlarm
      </Link>

      <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">{chrome.indexTitle}</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{chrome.indexLede}</p>

      <div className="mt-14 space-y-10">
        {articles.map((article) => (
          <article key={article.slug} className="border-t border-border pt-8">
            <Link href={`/${locale}/blog/${article.slug}`} className="group">
              <h2 className="text-2xl font-semibold tracking-tight group-hover:text-primary">
                {article.title}
              </h2>
              <p className="mt-3 text-muted-foreground">{article.excerpt}</p>
              <span className="mt-4 inline-block text-sm text-primary">{chrome.read} →</span>
            </Link>
          </article>
        ))}
      </div>
    </main>
  )
}
