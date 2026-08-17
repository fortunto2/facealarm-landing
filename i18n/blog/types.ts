import type { Locale } from "../config"

export interface Article {
  slug: string
  title: string
  description: string
  /** Shown in the listing. */
  excerpt: string
  date: string
  /** Section heading and paragraphs. HTML is allowed in paragraphs for links. */
  body: {
    heading?: string
    paragraphs: string[]
    /** Rendered after the paragraphs. Kept structured rather than as HTML inside a paragraph, since a table nested in a <p> is invalid markup and browsers unnest it. */
    table?: { head: string[]; rows: string[][]; note?: string }
  }[]
  /** The question the piece exists to answer, for the FAQ schema. */
  faq: { q: string; a: string }[]
}

/** The words around the articles, which used to be English regardless of the locale. */
export interface BlogChrome {
  indexTitle: string
  indexLede: string
  indexMetaTitle: string
  indexMetaDescription: string
  read: string
  allArticles: string
  questions: string
  ctaTitle: string
  ctaBody: string
  ctaButton: string
  ctaSecondary: string
  nav: string
}
