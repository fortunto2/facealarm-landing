import Link from "next/link"
import Image from "next/image"
import { APP_STORE_URL } from "@/i18n/app"
import { blogChrome } from "@/i18n/blog"
import type { Locale } from "@/i18n/config"

/**
 * The site header, for pages people arrive at directly.
 *
 * A blog post is usually someone's first page rather than their second: they come from search,
 * having never seen the landing page. Until now the only way back was a small "← FaceAlarm" link,
 * which is fine as a breadcrumb and useless as navigation — no logo, no way to install the thing
 * the article is about.
 */
export function BlogHeader({ locale }: { locale: Locale }) {
  const chrome = blogChrome[locale]

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-3">
        <Link href={`/${locale}`} className="flex items-center gap-2.5">
          <Image
            src="/images/facealarm-logo.png"
            alt="FaceAlarm"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="text-lg font-bold">FaceAlarm</span>
        </Link>

        <nav className="flex items-center gap-5 text-sm">
          <Link href={`/${locale}/blog`} className="text-muted-foreground hover:text-foreground">
            {chrome.nav}
          </Link>
          <a
            href={APP_STORE_URL}
            className="rounded-full bg-primary px-4 py-2 font-medium text-primary-foreground"
          >
            {chrome.ctaButton}
          </a>
        </nav>
      </div>
    </header>
  )
}
