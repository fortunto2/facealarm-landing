import type { MetadataRoute } from "next"
import { locales } from "@/i18n/config"
import { articlesByLocale } from "@/i18n/blog"

const baseUrl = "https://face-alarm.com"

const pages = [
  { path: "", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/photo-guide", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/privacy-policy", changeFrequency: "yearly" as const, priority: 0.3 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  /**
   * The blog exists in English only, so its entries are built from the article list rather than
   * from the locale list, and they carry no hreflang alternates: pointing /ru/ at an English
   * article would promise a translation that does not exist.
   */
  const blog: MetadataRoute.Sitemap = locales.flatMap((locale) => {
    const articles = articlesByLocale[locale]
    if (articles.length === 0) return []

    return [
      { url: `${baseUrl}/${locale}/blog`, lastModified, changeFrequency: "weekly" as const, priority: 0.7 },
      ...articles.map((article) => ({
        url: `${baseUrl}/${locale}/blog/${article.slug}`,
        lastModified: new Date(article.date),
        changeFrequency: "monthly" as const,
        priority: 0.6,
      })),
    ]
  })

  const main = pages.flatMap((page) =>
    locales.map((locale) => {
      const languages: Record<string, string> = {}
      for (const l of locales) {
        languages[l] = `${baseUrl}/${l}${page.path}`
      }

      return {
        url: `${baseUrl}/${locale}${page.path}`,
        lastModified,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: { languages },
      }
    })
  )

  return [...main, ...blog]
}
