"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, Zap, Camera, Video, Calendar, Share2, Eye, Shield, ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState, useCallback } from "react"
import Image from "next/image"

type Language = "ru" | "en" | "tr"

const translations = {
  ru: {
    nav: {
      download: "Скачать",
      photoGuide: "Как делать фото",
    },
    hero: {
      badge: "Ранний доступ — бесплатно",
      title1: "FaceAlarm: ",
      title2: "Face Yoga Tracker",
      description: "Трекер прогресса по фейс-йоге. Просыпайтесь, делайте селфи, смотрите на трансформацию.",
      downloadFree: "Скачать бесплатно",
      watchDemo: "Посмотреть демо",
      googlePlay: "Доступно в Google Play",
      appStore: "Скоро в App Store",
    },
    photoTips: {
      title: "Советы по фотографированию",
      subtitle: "Для точного отслеживания прогресса",
      tips: [
        "Фотографируйтесь при одинаковом освещении",
        "Держите фон нейтральным",
        "Без макияжа, волосы собраны",
        "Расслабьте мышцы лица",
      ],
      learnMore: "Подробное руководство",
    },
    features: {
      title: "Возможности",
      items: [
        {
          title: "Распознавание лица",
          description: "Только реальные селфи — никаких хитростей.",
        },
        {
          title: "Ghost-наложение",
          description: "Идеальное выравнивание с предыдущими фото.",
        },
        {
          title: "Отслеживание серий",
          description: "Создайте ежедневную привычку и не прерывайте её.",
        },
        {
          title: "Календарь-галерея",
          description: "Просматривайте фото по датам.",
        },
        {
          title: "Таймлапс",
          description: "Смотрите трансформацию за секунды.",
        },
        {
          title: "Шеринг прогресса",
          description: "Экспортируйте с водяным знаком.",
        },
      ],
    },
    perfectFor: {
      title: "Идеально для",
      items: [
        "Фейс-йоги и лицевых упражнений",
        "Отслеживания гуаша и массажа лица",
        "Результатов ухода за кожей",
        "Любого, кто отслеживает изменения лица",
      ],
    },
    howItWorks: {
      title: "Как это работает",
      slides: [
        {
          image: "/images/facealarm-3.webp",
          title: "Ежедневное напоминание",
          description: "Установите будильник на нужное время. Выберите дни недели. Будильник не выключится, пока вы не сделаете селфи.",
        },
        {
          image: "/images/facealarm-5.webp",
          title: "AI выравнивание лица",
          description: "Умный овал помогает расположить лицо в одной и той же позиции каждый раз. Направляющие линии обеспечивают идеальное выравнивание.",
        },
        {
          image: "/images/facealarm-2.webp",
          title: "Идеальные фото каждый раз",
          description: "Встроенный гайд по съёмке: освещение, фон, положение волос, выражение лица, угол камеры. Никаких догадок.",
        },
        {
          image: "/images/facealarm-1.webp",
          title: "Смотрите трансформацию",
          description: "Галерея всех ваших фото с возможностью сравнения. Выбирайте любые два фото для сравнения бок о бок.",
        },
        {
          image: "/images/facealarm-4.webp",
          title: "Сравнение бок о бок",
          description: "Сравнивайте любые два фото рядом с точным выравниванием по глазам. Видите даже малейшие изменения.",
        },
        {
          image: "/images/facealarm-6.webp",
          title: "100% бесплатно и приватно",
          description: "Фото никогда не покидают ваш телефон. AI работает локально. Работает полностью оффлайн. Без регистрации.",
        },
      ],
    },
    privacy: {
      title: "100% приватно",
      description: "Без аккаунтов. Без облака. Без сбора данных. Все фото остаются на вашем устройстве. Всегда.",
    },
    cta: {
      title: "Получите ранний доступ",
      subtitle: "бесплатно",
      description: "Присоединяйтесь к раннему запуску. AI-функции и платная версия появятся позже.",
      download: "Скачать FaceAlarm",
      googlePlay: "Доступно в Google Play",
      appStore: "Скоро в App Store",
    },
    footer: {
      privacy: "Политика конфиденциальности",
      terms: "Условия использования",
      support: "Поддержка",
      copyright: "© 2025 FaceAlarm. Все права защищены.",
    },
  },
  en: {
    nav: {
      download: "Download",
      photoGuide: "Photo Guide",
    },
    hero: {
      badge: "Early Access — Free",
      title1: "FaceAlarm: ",
      title2: "Face Yoga Tracker",
      description: "Face yoga progress tracker. Wake up, take a selfie, see your transformation.",
      downloadFree: "Download Free",
      watchDemo: "Watch Demo",
      googlePlay: "Get it on Google Play",
      appStore: "Coming soon to App Store",
    },
    photoTips: {
      title: "Photo Tips",
      subtitle: "For accurate progress tracking",
      tips: ["Use consistent lighting", "Keep background neutral", "No makeup, hair tied back", "Relax facial muscles"],
      learnMore: "Full Guide",
    },
    features: {
      title: "Features",
      items: [
        {
          title: "Face detection",
          description: "Ensures real selfies only — no cheating.",
        },
        {
          title: "Ghost overlay",
          description: "Align perfectly with previous photos.",
        },
        {
          title: "Streak tracking",
          description: "Build your daily habit and keep it going.",
        },
        {
          title: "Calendar gallery",
          description: "Browse your photos by date.",
        },
        {
          title: "Timelapse",
          description: "Watch your transformation in seconds.",
        },
        {
          title: "Share progress",
          description: "Export with watermark.",
        },
      ],
    },
    perfectFor: {
      title: "Perfect for",
      items: [
        "Face yoga & facial exercises",
        "Gua sha & face massage tracking",
        "Skincare routine results",
        "Anyone tracking facial changes",
      ],
    },
    howItWorks: {
      title: "How it works",
      slides: [
        {
          image: "/images/facealarm-3.webp",
          title: "Daily reminder you can't ignore",
          description: "Set your alarm for the perfect time. Choose which days of the week. The alarm won't turn off until you take a selfie.",
        },
        {
          image: "/images/facealarm-5.webp",
          title: "AI keeps your face aligned",
          description: "Smart oval guides help you position your face the same way every time. Crosshair lines ensure perfect alignment.",
        },
        {
          image: "/images/facealarm-2.webp",
          title: "Perfect photos every time",
          description: "Built-in photo guide: lighting, background, hair position, facial expression, camera angle. No guesswork.",
        },
        {
          image: "/images/facealarm-1.webp",
          title: "Watch your transformation unfold",
          description: "Gallery of all your photos with comparison mode. Select any two photos to compare side by side.",
        },
        {
          image: "/images/facealarm-4.webp",
          title: "See the difference side by side",
          description: "Compare any two photos with precise eye-level alignment. Notice even the smallest changes.",
        },
        {
          image: "/images/facealarm-6.webp",
          title: "100% free and private",
          description: "Photos never leave your phone. AI works locally. Works completely offline. No sign-up required.",
        },
      ],
    },
    privacy: {
      title: "100% Private",
      description: "No accounts. No cloud. No data collection. All photos stay on your device. Always.",
    },
    cta: {
      title: "Get Early Access",
      subtitle: "Free",
      description: "Join the early launch. AI features and paid version coming later.",
      download: "Download FaceAlarm",
      googlePlay: "Get it on Google Play",
      appStore: "Coming soon to App Store",
    },
    footer: {
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      support: "Support",
      copyright: "© 2025 FaceAlarm. All rights reserved.",
    },
  },
  tr: {
    nav: {
      download: "İndir",
      photoGuide: "Fotoğraf Rehberi",
    },
    hero: {
      badge: "Erken Erişim — Ücretsiz",
      title1: "FaceAlarm: ",
      title2: "Yüz Yogası Takipçisi",
      description: "Yüz yogası ilerleme takipçisi. Uyanın, selfie çekin, dönüşümünüzü görün.",
      downloadFree: "Ücretsiz İndir",
      watchDemo: "Demo İzle",
      googlePlay: "Google Play'de edinin",
      appStore: "App Store'da yakında",
    },
    photoTips: {
      title: "Fotoğraf İpuçları",
      subtitle: "Doğru ilerleme takibi için",
      tips: ["Tutarlı ışık kullanın", "Arka planı nötr tutun", "Makyajsız, saçlar toplı", "Yüz kaslarını rahatlatın"],
      learnMore: "Tam Rehber",
    },
    features: {
      title: "Özellikler",
      items: [
        {
          title: "Yüz algılama",
          description: "Sadece gerçek selfie'ler — hile yok.",
        },
        {
          title: "Hayalet katman",
          description: "Önceki fotoğraflarla mükemmel hizalama.",
        },
        {
          title: "Seri takibi",
          description: "Günlük alışkanlığınızı oluşturun ve sürdürün.",
        },
        {
          title: "Takvim galerisi",
          description: "Fotoğraflarınızı tarihe göre inceleyin.",
        },
        {
          title: "Zaman atlamalı",
          description: "Dönüşümünüzü saniyeler içinde izleyin.",
        },
        {
          title: "İlerleme paylaşımı",
          description: "Filigranla dışa aktarın.",
        },
      ],
    },
    perfectFor: {
      title: "İdeal kullanım",
      items: [
        "Yüz yogası ve yüz egzersizleri",
        "Gua sha ve yüz masajı takibi",
        "Cilt bakımı sonuçları",
        "Yüz değişikliklerini takip eden herkes",
      ],
    },
    howItWorks: {
      title: "Nasıl çalışır",
      slides: [
        {
          image: "/images/facealarm-3.webp",
          title: "Göz ardı edemeyeceğiniz hatırlatıcı",
          description: "Alarmınızı istediğiniz saate kurun. Haftanın günlerini seçin. Selfie çekene kadar alarm kapanmaz.",
        },
        {
          image: "/images/facealarm-5.webp",
          title: "AI yüzünüzü hizalı tutar",
          description: "Akıllı oval kılavuz yüzünüzü her seferinde aynı şekilde konumlandırmanıza yardımcı olur. Çapraz çizgiler mükemmel hizalama sağlar.",
        },
        {
          image: "/images/facealarm-2.webp",
          title: "Her seferinde mükemmel fotoğraflar",
          description: "Dahili fotoğraf rehberi: aydınlatma, arka plan, saç pozisyonu, yüz ifadesi, kamera açısı. Tahmin yok.",
        },
        {
          image: "/images/facealarm-1.webp",
          title: "Dönüşümünüzü izleyin",
          description: "Karşılaştırma modlu tüm fotoğraflarınızın galerisi. Yan yana karşılaştırmak için herhangi iki fotoğraf seçin.",
        },
        {
          image: "/images/facealarm-4.webp",
          title: "Farkı yan yana görün",
          description: "Göz hizası ile herhangi iki fotoğrafı karşılaştırın. En küçük değişiklikleri bile fark edin.",
        },
        {
          image: "/images/facealarm-6.webp",
          title: "100% ücretsiz ve gizli",
          description: "Fotoğraflar telefonunuzdan asla çıkmaz. AI yerel çalışır. Tamamen çevrimdışı çalışır. Kayıt gerekmez.",
        },
      ],
    },
    privacy: {
      title: "100% Özel",
      description: "Hesap yok. Bulut yok. Veri toplama yok. Tüm fotoğraflar cihazınızda kalır. Her zaman.",
    },
    cta: {
      title: "Erken Erişim Alın",
      subtitle: "Ücretsiz",
      description: "Erken lansmanına katılın. AI özellikleri ve ücretli sürüm daha sonra gelecek.",
      download: "FaceAlarm İndir",
      googlePlay: "Google Play'de edinin",
      appStore: "App Store'da yakında",
    },
    footer: {
      privacy: "Gizlilik Politikası",
      terms: "Kullanım Koşulları",
      support: "Destek",
      copyright: "© 2025 FaceAlarm. Tüm hakları saklıdır.",
    },
  },
}

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [lang, setLang] = useState<Language>("en")
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    setIsVisible(true)

    // Detect browser language
    const browserLang = navigator.language.toLowerCase()
    if (browserLang.startsWith("ru")) {
      setLang("ru")
    } else if (browserLang.startsWith("tr")) {
      setLang("tr")
    } else {
      setLang("en") // Default to English
    }
  }, [])

  const t = translations[lang]
  const totalSlides = t.howItWorks.slides.length

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }, [totalSlides])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }, [totalSlides])

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
              <a href="/photo-guide">{t.nav.photoGuide}</a>
            </Button>
            <div className="flex gap-2">
              <button
                onClick={() => setLang("ru")}
                className={`px-3 py-1 rounded-md text-sm font-bold transition-colors ${
                  lang === "ru" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                RU
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1 rounded-md text-sm font-bold transition-colors ${
                  lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("tr")}
                className={`px-3 py-1 rounded-md text-sm font-bold transition-colors ${
                  lang === "tr" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                TR
              </button>
            </div>
            <Button size="lg" className="font-bold" asChild>
              <a href="#download">{t.nav.download}</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div
            className={`text-center transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
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
              <div className="relative">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt={t.hero.appStore}
                  height="80"
                  className="h-[60px] w-auto opacity-50 grayscale"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-bold">
                    {lang === "ru" ? "Скоро" : lang === "tr" ? "Yakında" : "Coming Soon"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Horizontal Gallery on Desktop */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-16 text-balance">{t.howItWorks.title}</h2>
          
          {/* Desktop: Images in full-width row, text centered below */}
          <div className="hidden xl:block">
            {/* Images row - full width */}
            <div className="flex justify-center gap-4 mb-12">
              {t.howItWorks.slides.map((slide, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`aspect-[9/19] flex-1 max-w-[180px] rounded-xl overflow-hidden transition-all duration-300 ${
                    index === currentSlide 
                      ? "ring-4 ring-primary scale-105 shadow-xl" 
                      : "opacity-50 hover:opacity-80"
                  }`}
                >
                  <Image
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    width={390}
                    height={844}
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>
            
            {/* Description centered below */}
            <div className="flex justify-center">
              <div className="relative min-h-[200px] w-[40%] text-center">
                {t.howItWorks.slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-500 ${
                      index === currentSlide ? "opacity-100 relative" : "opacity-0 absolute inset-0 pointer-events-none"
                    }`}
                  >
                    <div className="text-8xl font-black text-chart-2/20 mb-2">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-3xl font-black mb-4 text-balance">{slide.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{slide.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile/Tablet: Slider */}
          <div className="xl:hidden">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              {/* Phone Image Slider */}
              <div className="flex-shrink-0 w-full max-w-xs lg:max-w-sm relative">
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-background shadow-lg hover:bg-muted flex items-center justify-center transition-colors"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-background shadow-lg hover:bg-muted flex items-center justify-center transition-colors"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                <div 
                  className="relative aspect-[9/19] overflow-hidden cursor-pointer" 
                  onClick={nextSlide}
                >
                  {t.howItWorks.slides.map((slide, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-500 ${
                        index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-95"
                      }`}
                    >
                      <Image
                        src={slide.image || "/placeholder.svg"}
                        alt={slide.title}
                        width={390}
                        height={844}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
                
                {/* Dots */}
                <div className="flex justify-center gap-2 mt-6">
                  {t.howItWorks.slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        index === currentSlide ? "bg-primary w-8" : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2.5"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Feature Description */}
              <div className="flex-1">
                <div className="relative min-h-[240px]">
                  {t.howItWorks.slides.map((slide, index) => (
                    <div
                      key={index}
                      className={`transition-all duration-500 ${
                        index === currentSlide ? "opacity-100 relative" : "opacity-0 absolute inset-0 pointer-events-none"
                      }`}
                    >
                      <div className="text-8xl font-black text-chart-2/20 mb-2">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <h3 className="text-3xl md:text-4xl font-black mb-4 text-balance">{slide.title}</h3>
                      <p className="text-xl text-muted-foreground leading-relaxed">{slide.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
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
              <a href="/photo-guide">{t.photoTips.learnMore}</a>
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
            <div className="relative">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt={t.cta.appStore}
                height="80"
                className="h-[70px] w-auto opacity-50 grayscale"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-muted text-muted-foreground px-4 py-2 rounded-full text-sm font-bold">
                  {lang === "ru" ? "Скоро" : lang === "tr" ? "Yakında" : "Coming Soon"}
                </span>
              </div>
            </div>
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
              <a href="/privacy-policy" className="hover:text-foreground transition-colors font-medium">
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
