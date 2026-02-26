import type { MetadataRoute } from "next"
import { locales } from "@/i18n/config"

const baseUrl = "https://face-alarm.com"

const pages = [
  { path: "", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/photo-guide", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/privacy-policy", changeFrequency: "yearly" as const, priority: 0.3 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return pages.flatMap((page) =>
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
}
