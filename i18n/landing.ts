import type { Locale } from "./config"

const translations = {
  ru: {
    nav: {
      download: "Скачать",
      photoGuide: "Как делать фото",
    },
    hero: {
      badge: "Ранний доступ — бесплатно",
      title1: "Работает ли фейс-йога? ",
      title2: "Проверьте на себе",
      description: "Напоминание каждое утро, селфи с выравниванием по вчерашнему кадру. Через месяц у вас своё «до и после» — не чужое из рекламы. Бесплатно, без подписки.",
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
        { title: "Распознавание лица", description: "Рамка зеленеет, когда лицо в кадре по центру." },
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
    faq: {
      title: "Вопросы",
      items: [
        {
          q: "Можно выключить будильник, не сделав селфи?",
          a: "На Android нельзя. Кнопка «назад» не работает, экран поднимается поверх блокировки, а звук не смолкнет, пока не сделан снимок. На iPhone можно: в уведомлении есть «Отложить» и «Выключить», потому что iOS не даёт держать будильник в залоге под действие. Приложение одно, а разницу задаёт операционная система, а не наше решение.",
        },
        {
          q: "Приложение проверяет, что это моё лицо?",
          a: "Оно проверяет, что лицо есть в кадре и примерно по центру, и подсвечивает рамку зелёным. Оно не опознаёт вас и не отличит лицо от фотографии лица. Смысл распознавания в том, чтобы помочь выстроить кадр, а не контролировать вас.",
        },
        {
          q: "Где хранятся снимки?",
          a: "В вашей собственной медиатеке, в папке или альбоме FaceAlarm. Ничего не загружается в интернет, нет аккаунта и облака, приложение работает офлайн. Удаление приложения снимки не стирает, а «Синхронизировать фото» в настройках находит их снова после переустановки.",
        },
        {
          q: "Это правда бесплатно?",
          a: "Отслеживание бесплатно, без подписки и без аккаунта. На Android и iPhone это и есть всё приложение.",
        },
        {
          q: "Через сколько будет видно результат?",
          a: "Тридцати дней хватает, чтобы понять, есть ли сдвиг. Тонус мышц щёк и челюсти за это время измениться может, плотность кожи — нет: коллаген за четыре недели не перестраивается.",
        },
      ],
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
      badge: "Early Access, Free",
      title1: "Does face yoga work? ",
      title2: "Find out on your own face",
      description: "A daily alarm, and a selfie lined up with yesterday's. After a month you have your own before-and-after instead of somebody else's advert. Free, no subscription.",
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
        { title: "Face detection", description: "The guide turns green when your face is centred." },
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
    faq: {
      title: "Questions",
      items: [
        {
          q: "Can I turn the alarm off without taking the selfie?",
          a: "On Android, no. The back button does nothing, the screen opens over the lock screen, and the sound keeps going until the photo is taken. On iPhone you can: the notification carries Snooze and Dismiss, because iOS does not let an app hold an alarm hostage to an action. Same app, and the difference is the operating system rather than a decision we made.",
        },
        {
          q: "Does it check that it is really my face?",
          a: "It checks that a face is there and roughly centred, and turns the guide green. It does not identify you, and it cannot tell your face from a photo of a face. The point of the detection is to help you line the shot up, not to police it.",
        },
        {
          q: "Where are my photos kept?",
          a: "In your own photo library, in a FaceAlarm folder or album. Nothing is uploaded, there is no account and no cloud, and the app works offline. Deleting the app never deletes the photos, and Sync photos in Settings finds them again after a reinstall.",
        },
        {
          q: "Is it really free?",
          a: "The tracking is free with no subscription and no account. That is the whole app on Android and iPhone.",
        },
        {
          q: "How long before I see anything?",
          a: "Thirty days is enough to see whether anything is moving. Muscle tone around the cheeks and jaw can plausibly change in that time; skin firmness cannot, since collagen does not rebuild in four weeks.",
        },
      ],
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
      title1: "Yüz yogası işe yarıyor mu? ",
      title2: "Kendi yüzünüzde görün",
      description: "Her sabah bir hatırlatma ve dünküyle hizalanmış bir selfie. Bir ay sonra reklamdaki değil, kendi öncesi-sonrası kareniz olur. Ücretsiz, aboneliksiz.",
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
        { title: "Yüz algılama", description: "Yüzünüz ortalandığında kılavuz yeşile döner." },
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
    faq: {
      title: "Sorular",
      items: [
        {
          q: "Selfie çekmeden alarmı kapatabilir miyim?",
          a: "Android'de hayır. Geri tuşu çalışmaz, ekran kilidin üstünde açılır ve fotoğraf çekilene kadar ses susmaz. iPhone'da kapatabilirsiniz: bildirimde Ertele ve Kapat var, çünkü iOS bir alarmı bir eyleme rehin tutmaya izin vermiyor. Uygulama aynı; farkı bizim kararımız değil, işletim sistemi belirliyor.",
        },
        {
          q: "Gerçekten benim yüzüm mü diye kontrol ediyor mu?",
          a: "Karede bir yüz olduğunu ve yaklaşık ortalandığını kontrol eder, kılavuzu yeşile çevirir. Sizi tanımaz ve bir yüzü, bir yüzün fotoğrafından ayırt edemez. Algılamanın amacı kareyi hizalamanıza yardım etmek, sizi denetlemek değil.",
        },
        {
          q: "Fotoğraflarım nerede saklanıyor?",
          a: "Kendi fotoğraf kitaplığınızda, FaceAlarm klasöründe ya da albümünde. Hiçbir şey yüklenmez, hesap ve bulut yoktur, uygulama çevrimdışı çalışır. Uygulamayı silmek fotoğrafları silmez; yeniden kurulumdan sonra Ayarlar'daki «Fotoğrafları eşitle» onları yeniden bulur.",
        },
        {
          q: "Gerçekten ücretsiz mi?",
          a: "Takip ücretsiz, abonelik ve hesap yok. Android ve iPhone'da uygulamanın tamamı bu.",
        },
        {
          q: "Sonucu ne kadar sürede görürüm?",
          a: "Otuz gün, bir şeyin kıpırdayıp kıpırdamadığını görmek için yeterli. Yanak ve çene çevresindeki kas tonu bu sürede değişebilir; cilt sıkılığı değişmez, çünkü kolajen dört haftada yeniden yapılanmaz.",
        },
      ],
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
