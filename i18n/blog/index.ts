import type { Locale } from "../config"
import type { Article } from "./types"
import { EN } from "./en"
import { RU } from "./ru"
import { TR } from "./tr"

export type { Article, BlogChrome } from "./types"
export { blogChrome } from "./chrome"

/**
 * Every locale carries the full set, written in that language rather than machine-translated.
 *
 * The blog started English-only, with /ru/ and /tr/ returning 404, because serving English prose
 * under translated navigation is worse than serving nothing. That reasoning holds; it just stopped
 * applying once the articles existed in all three.
 */
export const articlesByLocale: Record<Locale, Article[]> = { en: EN, ru: RU, tr: TR }

/** Locales that have this article, for hreflang. All three, unless a piece is written for one market. */
export function localesWith(slug: string): Locale[] {
  return (Object.keys(articlesByLocale) as Locale[]).filter((l) =>
    articlesByLocale[l].some((a) => a.slug === slug),
  )
}
