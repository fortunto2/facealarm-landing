import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { locales, defaultLocale, isValidLocale } from "./i18n/config"

function getPreferredLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get("accept-language") || ""
  for (const part of acceptLanguage.split(",")) {
    const lang = part.split(";")[0].trim().toLowerCase()
    if (lang.startsWith("ru")) return "ru"
    if (lang.startsWith("tr")) return "tr"
    if (lang.startsWith("en")) return "en"
  }
  return defaultLocale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if pathname already has a valid locale prefix
  const pathnameLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
  if (pathnameLocale) return NextResponse.next()

  // Куда вести — решает Accept-Language, то есть ответ РАЗНЫЙ для разных посетителей.
  // Поэтому оба редиректа ниже временные (307), и это не недоделка.
  //
  // Постоянный редирект здесь был бы ошибкой: браузер и любой общий кэш запомнили бы одну
  // локаль навсегда и отдавали бы её всем. Раньше так и было на втором из них — русский
  // посетитель, однажды открывший /photo-guide, закреплял /ru/photo-guide за этим адресом
  // у себя, а промежуточный кэш мог закрепить его и за чужими.
  if (pathname === "/") {
    const locale = getPreferredLocale(request)
    return NextResponse.redirect(new URL(`/${locale}`, request.url))
  }

  // Redirect old paths without locale prefix (e.g. /photo-guide → /en/photo-guide)
  const knownPaths = ["/photo-guide", "/privacy-policy"]
  if (knownPaths.some((p) => pathname === p || pathname.startsWith(p + "/"))) {
    const locale = getPreferredLocale(request)
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url), 307)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next|api|images|icon|apple-icon|manifest\\.json|favicon|sitemap|robots|.*\\.txt$).*)"],
}
