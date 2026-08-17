import { Button } from "@/components/ui/button"
import { Sparkles, Camera, Shield } from "lucide-react"
import Image from "next/image"
import { notFound } from "next/navigation"
import { isValidLocale, type Locale } from "@/i18n/config"
import { getLandingTranslations } from "@/i18n/landing"
import { LanguageSwitcher } from "@/components/LanguageSwitcher"
import { HowItWorksCarousel } from "@/components/HowItWorksCarousel"
import { articlesByLocale } from "@/i18n/blog"

export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isValidLocale(locale)) notFound()
  const t = getLandingTranslations(locale as Locale)

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/40 backdrop-blur-sm fixed top-0 w-full z-50 bg-background/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/images/facealarm-logo.png" alt="FaceAlarm" width={32} height={32} className="rounded-lg" />
            <span className="font-bold text-xl">FaceAlarm</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild className="hidden md:inline-flex">
              <a href={`/${locale}/photo-guide`}>{t.nav.photoGuide}</a>
            </Button>
            <LanguageSwitcher currentLocale={locale} />
            <Button size="lg" className="font-bold" asChild>
              <a href="#download">{t.nav.download}</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-[fade-in-up_1s_ease-out_both]">
            <div className="inline-block mb-6 px-4 py-2 bg-accent/50 rounded-full">
              <span className="text-sm font-bold text-accent-foreground flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                {t.hero.badge}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-balance leading-[0.95]">
              {t.hero.title1}{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-chart-1 to-chart-2">
                {t.hero.title2}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-6">
              <a
                href="https://play.google.com/store/apps/details?id=com.facealarm.app"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt={t.hero.googlePlay}
                  height="80"
                  className="h-[60px] w-auto"
                />
              </a>
              <a
                href="https://apps.apple.com/app/id6758454962"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt={t.hero.appStore}
                  height="80"
                  className="h-[60px] w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-16 text-balance">{t.howItWorks.title}</h2>
          <HowItWorksCarousel slides={t.howItWorks.slides} />
        </div>
      </section>

      {/* Photo Tips */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-black mb-4 text-balance">{t.photoTips.title}</h2>
            <p className="text-xl text-muted-foreground">{t.photoTips.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {t.photoTips.tips.map((tip, index) => (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-card transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-chart-3/20 flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-6 h-6 text-chart-3" />
                </div>
                <p className="font-medium leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button size="lg" variant="outline" asChild className="font-bold bg-transparent">
              <a href={`/${locale}/photo-guide`}>{t.photoTips.learnMore}</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-16 text-balance">{t.perfectFor.title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {t.perfectFor.items.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-card/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-card transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-full bg-chart-2/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Sparkles className="w-4 h-4 text-chart-2" />
                </div>
                <p className="text-lg font-medium leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-chart-1/20 mb-8">
            <Shield className="w-10 h-10 text-chart-1" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-balance">{t.privacy.title}</h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            {t.privacy.description}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-4" id="download">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-balance leading-tight">
            {t.cta.title}{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-chart-4 to-chart-5">
              {t.cta.subtitle}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">{t.cta.description}</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://play.google.com/store/apps/details?id=com.facealarm.app"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt={t.cta.googlePlay}
                height="80"
                className="h-[70px] w-auto"
              />
            </a>
            <a
              href="https://apps.apple.com/app/id6758454962"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt={t.cta.appStore}
                height="80"
                className="h-[70px] w-auto"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Image src="/images/facealarm-logo.png" alt="FaceAlarm" width={32} height={32} className="rounded-lg" />
              <span className="font-bold text-xl">FaceAlarm</span>
            </div>
            <div className="flex gap-8 text-sm text-muted-foreground">
              {articlesByLocale[locale].length > 0 && (
                <a href={`/${locale}/blog`} className="hover:text-foreground transition-colors font-medium">
                  Blog
                </a>
              )}
              <a href={`/${locale}/privacy-policy`} className="hover:text-foreground transition-colors font-medium">
                {t.footer.privacy}
              </a>
              <a href="mailto:info@superduperai.co" className="hover:text-foreground transition-colors font-medium">
                {t.footer.support}
              </a>
            </div>
          </div>
          <div className="text-center mt-8 text-sm text-muted-foreground">{t.footer.copyright}</div>
        </div>
      </footer>
    </div>
  )
}
