import Link from "next/link"
import { locales, type Locale } from "@/i18n/config"

export function LanguageSwitcher({
  currentLocale,
  currentPath = "",
}: {
  currentLocale: Locale
  currentPath?: string
}) {
  return (
    <div className="flex gap-2">
      {locales.map((locale) => (
        <Link
          key={locale}
          href={`/${locale}${currentPath}`}
          className={`px-3 py-1 rounded-md text-sm font-bold transition-colors ${
            locale === currentLocale
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  )
}
