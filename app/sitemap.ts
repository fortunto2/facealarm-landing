import type { MetadataRoute } from "next"
import { locales } from "@/i18n/config"
import { articlesByLocale, localesWith } from "@/i18n/blog"

const baseUrl = "https://face-alarm.com"

const pages = [
  { path: "", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/photo-guide", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/privacy-policy", changeFrequency: "yearly" as const, priority: 0.3 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  /**
   * Blog entries come from the article list rather than the locale list, and each one's hreflang
   * names only the locales that actually carry that piece. A translation is claimed where it was
   * written and nowhere else, so adding an article in one language cannot silently promise three.
   */
  const blog: MetadataRoute.Sitemap = locales.flatMap((locale) => {
    const articles = articlesByLocale[locale]
    if (articles.length === 0) return []

    const listing: Record<string, string> = {}
    for (const l of locales) {
      if (articlesByLocale[l].length > 0) listing[l] = `${baseUrl}/${l}/blog`
    }

    return [
      {
        url: `${baseUrl}/${locale}/blog`,
        lastModified,
        changeFrequency: "weekly" as const,
        priority: 0.7,
        alternates: { languages: listing },
      },
      ...articles.map((article) => {
        const languages: Record<string, string> = {}
        for (const l of localesWith(article.slug)) {
          languages[l] = `${baseUrl}/${l}/blog/${article.slug}`
        }
        return {
          url: `${baseUrl}/${locale}/blog/${article.slug}`,
          lastModified: new Date(article.date),
          changeFrequency: "monthly" as const,
          priority: 0.6,
          alternates: { languages },
        }
      }),
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
