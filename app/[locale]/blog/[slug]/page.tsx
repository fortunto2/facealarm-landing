import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { isValidLocale, locales, type Locale } from "@/i18n/config"
import { articlesByLocale } from "@/i18n/blog"
import { APP_STORE_URL } from "@/i18n/app"

const baseUrl = "https://face-alarm.com"

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    articlesByLocale[locale].map((article) => ({ locale, slug: article.slug })),
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  if (!isValidLocale(locale)) return {}

  const article = articlesByLocale[locale as Locale].find((a) => a.slug === slug)
  if (!article) return {}

  const url = `${baseUrl}/${locale}/blog/${slug}`
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description: article.description,
      url,
      type: "article",
      publishedTime: article.date,
    },
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  if (!isValidLocale(locale)) notFound()

  const article = articlesByLocale[locale as Locale].find((a) => a.slug === slug)
  if (!article) notFound()

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: article.title,
        description: article.description,
        datePublished: article.date,
        author: { "@type": "Organization", name: "SuperDuperAi" },
        mainEntityOfPage: `${baseUrl}/${locale}/blog/${slug}`,
      },
      {
        "@type": "FAQPage",
        mainEntity: article.faq.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Link href={`/${locale}/blog`} className="text-sm text-muted-foreground hover:text-foreground">
        ← All articles
      </Link>

      <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">{article.title}</h1>

      <div className="mt-10 space-y-8">
        {article.body.map((section, i) => (
          <section key={i}>
            {section.heading && (
              <h2 className="mb-3 text-xl font-semibold tracking-tight">{section.heading}</h2>
            )}
            {section.paragraphs.map((p, j) => (
              <p
                key={j}
                className="mb-4 leading-relaxed text-muted-foreground [&_a]:text-primary [&_a]:underline"
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}
          </section>
        ))}
      </div>

      <section className="mt-16 border-t border-border pt-10">
        <h2 className="mb-6 text-xl font-semibold tracking-tight">Questions</h2>
        {article.faq.map(({ q, a }) => (
          <div key={q} className="mb-6">
            <h3 className="mb-2 font-medium">{q}</h3>
            <p className="leading-relaxed text-muted-foreground">{a}</p>
          </div>
        ))}
      </section>

      <section className="mt-16 rounded-2xl border border-border bg-card p-8">
        <h2 className="text-xl font-semibold tracking-tight">Test it on your own face</h2>
        <p className="mt-3 text-muted-foreground">
          A daily alarm, a selfie lined up with yesterday&apos;s, and a timelapse at the end of the
          month. Free, no account, photos stay on your phone.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <a
            href={APP_STORE_URL}
            className="inline-block rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground"
          >
            Download on the App Store
          </a>
          <Link href={`/${locale}`} className="text-sm text-muted-foreground hover:text-foreground">
            or read how it works
          </Link>
        </div>
      </section>
    </main>
  )
}
