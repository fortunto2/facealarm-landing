import type { Locale } from "./config"

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
      appStore: "Загрузить в App Store",
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
        { title: "Распознавание лица", description: "Только реальные селфи — никаких хитростей." },
        { title: "Ghost-наложение", description: "Идеальное выравнивание с предыдущими фото." },
        { title: "Отслеживание серий", description: "Создайте ежедневную привычку и не прерывайте её." },
        { title: "Календарь-галерея", description: "Просматривайте фото по датам." },
        { title: "Таймлапс", description: "Смотрите трансформацию за секунды." },
        { title: "Шеринг прогресса", description: "Экспортируйте с водяным знаком." },
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
          description:
            "Установите будильник на нужное время. Выберите дни недели. Будильник не выключится, пока вы не сделаете селфи.",
        },
        {
          image: "/images/facealarm-5.webp",
          title: "AI выравнивание лица",
          description:
            "Умный овал помогает расположить лицо в одной и той же позиции каждый раз. Направляющие линии обеспечивают идеальное выравнивание.",
        },
        {
          image: "/images/facealarm-2.webp",
          title: "Идеальные фото каждый раз",
          description:
            "Встроенный гайд по съёмке: освещение, фон, положение волос, выражение лица, угол камеры. Никаких догадок.",
        },
        {
          image: "/images/facealarm-1.webp",
          title: "Смотрите трансформацию",
          description:
            "Галерея всех ваших фото с возможностью сравнения. Выбирайте любые два фото для сравнения бок о бок.",
        },
        {
          image: "/images/facealarm-4.webp",
          title: "Сравнение бок о бок",
          description:
            "Сравнивайте любые два фото рядом с точным выравниванием по глазам. Видите даже малейшие изменения.",
        },
        {
          image: "/images/facealarm-6.webp",
          title: "100% бесплатно и приватно",
          description:
            "Фото никогда не покидают ваш телефон. AI работает локально. Работает полностью оффлайн. Без регистрации.",
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
      appStore: "Загрузить в App Store",
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
      appStore: "Download on the App Store",
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
        { title: "Face detection", description: "Ensures real selfies only — no cheating." },
        { title: "Ghost overlay", description: "Align perfectly with previous photos." },
        { title: "Streak tracking", description: "Build your daily habit and keep it going." },
        { title: "Calendar gallery", description: "Browse your photos by date." },
        { title: "Timelapse", description: "Watch your transformation in seconds." },
        { title: "Share progress", description: "Export with watermark." },
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
          description:
            "Set your alarm for the perfect time. Choose which days of the week. The alarm won't turn off until you take a selfie.",
        },
        {
          image: "/images/facealarm-5.webp",
          title: "AI keeps your face aligned",
          description:
            "Smart oval guides help you position your face the same way every time. Crosshair lines ensure perfect alignment.",
        },
        {
          image: "/images/facealarm-2.webp",
          title: "Perfect photos every time",
          description:
            "Built-in photo guide: lighting, background, hair position, facial expression, camera angle. No guesswork.",
        },
        {
          image: "/images/facealarm-1.webp",
          title: "Watch your transformation unfold",
          description:
            "Gallery of all your photos with comparison mode. Select any two photos to compare side by side.",
        },
        {
          image: "/images/facealarm-4.webp",
          title: "See the difference side by side",
          description:
            "Compare any two photos with precise eye-level alignment. Notice even the smallest changes.",
        },
        {
          image: "/images/facealarm-6.webp",
          title: "100% free and private",
          description:
            "Photos never leave your phone. AI works locally. Works completely offline. No sign-up required.",
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
      appStore: "Download on the App Store",
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
      appStore: "App Store'dan indirin",
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
        { title: "Yüz algılama", description: "Sadece gerçek selfie'ler — hile yok." },
        { title: "Hayalet katman", description: "Önceki fotoğraflarla mükemmel hizalama." },
        { title: "Seri takibi", description: "Günlük alışkanlığınızı oluşturun ve sürdürün." },
        { title: "Takvim galerisi", description: "Fotoğraflarınızı tarihe göre inceleyin." },
        { title: "Zaman atlamalı", description: "Dönüşümünüzü saniyeler içinde izleyin." },
        { title: "İlerleme paylaşımı", description: "Filigranla dışa aktarın." },
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
          description:
            "Alarmınızı istediğiniz saate kurun. Haftanın günlerini seçin. Selfie çekene kadar alarm kapanmaz.",
        },
        {
          image: "/images/facealarm-5.webp",
          title: "AI yüzünüzü hizalı tutar",
          description:
            "Akıllı oval kılavuz yüzünüzü her seferinde aynı şekilde konumlandırmanıza yardımcı olur. Çapraz çizgiler mükemmel hizalama sağlar.",
        },
        {
          image: "/images/facealarm-2.webp",
          title: "Her seferinde mükemmel fotoğraflar",
          description:
            "Dahili fotoğraf rehberi: aydınlatma, arka plan, saç pozisyonu, yüz ifadesi, kamera açısı. Tahmin yok.",
        },
        {
          image: "/images/facealarm-1.webp",
          title: "Dönüşümünüzü izleyin",
          description:
            "Karşılaştırma modlu tüm fotoğraflarınızın galerisi. Yan yana karşılaştırmak için herhangi iki fotoğraf seçin.",
        },
        {
          image: "/images/facealarm-4.webp",
          title: "Farkı yan yana görün",
          description:
            "Göz hizası ile herhangi iki fotoğrafı karşılaştırın. En küçük değişiklikleri bile fark edin.",
        },
        {
          image: "/images/facealarm-6.webp",
          title: "100% ücretsiz ve gizli",
          description:
            "Fotoğraflar telefonunuzdan asla çıkmaz. AI yerel çalışır. Tamamen çevrimdışı çalışır. Kayıt gerekmez.",
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
      appStore: "App Store'dan indirin",
    },
    footer: {
      privacy: "Gizlilik Politikası",
      terms: "Kullanım Koşulları",
      support: "Destek",
      copyright: "© 2025 FaceAlarm. Tüm hakları saklıdır.",
    },
  },
} as const

export type LandingTranslations = (typeof translations)[Locale]

export function getLandingTranslations(locale: Locale) {
  return translations[locale]
}
