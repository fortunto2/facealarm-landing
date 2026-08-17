import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { isValidLocale, locales, type Locale } from "@/i18n/config"
import { articlesByLocale } from "@/i18n/blog"

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

  const title = "Face yoga: what the evidence says, and how to check on yourself"
  const description =
    "Straight answers on whether face yoga works, what a month of it realistically changes, and why the photo record matters more than the programme."

  return {
    title,
    description,
    alternates: { canonical: `${baseUrl}/${locale}/blog` },
    openGraph: { title, description, url: `${baseUrl}/${locale}/blog`, type: "website" },
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
  if (articles.length === 0) notFound()

  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <Link href={`/${locale}`} className="text-sm text-muted-foreground hover:text-foreground">
        ← FaceAlarm
      </Link>

      <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
        Face yoga, without the sales pitch
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Whether it works, what a month of it changes, and why nobody should be charging you a
        subscription to find out.
      </p>

      <div className="mt-14 space-y-10">
        {articles.map((article) => (
          <article key={article.slug} className="border-t border-border pt-8">
            <Link href={`/${locale}/blog/${article.slug}`} className="group">
              <h2 className="text-2xl font-semibold tracking-tight group-hover:text-primary">
                {article.title}
              </h2>
              <p className="mt-3 text-muted-foreground">{article.excerpt}</p>
              <span className="mt-4 inline-block text-sm text-primary">Read →</span>
            </Link>
          </article>
        ))}
      </div>
    </main>
  )
}
