import type { Locale } from "./config"

const translations = {
  ru: {
    title: "Как правильно делать фото",
    subtitle: "Для точного отслеживания прогресса важно делать фото в одинаковых условиях",
    beforeTitle: "Фото ДО",
    beforeDescription:
      "Для того, чтобы вы смогли оценить результаты выполнения упражнений, вам необходимо сделать фотографии 'до' и 'после'.",
    howToTitle: "Правила фотографирования",
    tips: [
      {
        title: "Одинаковое освещение",
        description:
          "Фото 'до' и 'после' делаем при одинаковом освещении, желательно при дневном свете, в одно и то же время, встав напротив окна.",
      },
      { title: "Нейтральный фон", description: "Задний фон должен быть максимально нейтральным." },
      { title: "Без макияжа", description: "Фото выполняется без макияжа." },
      { title: "Собранные волосы", description: "Волосы должны быть собраны." },
      { title: "Открытое декольте", description: "Зона декольте открыта." },
      {
        title: "Расслабленные мышцы",
        description:
          "Мышцы всего тела и лица должны быть максимально расслаблены, в своём естественном положении (не улыбаемся на фото).",
      },
      { title: "Уровень глаз", description: "Фотообъектив должен быть расположен на уровне глаз." },
      {
        title: "Расстояние 1+ метр",
        description: "Расстояние от вас до фотоаппарата должно быть не менее 1 метра.",
      },
      {
        title: "Несколько ракурсов",
        description: "Необходимо сделать несколько фото: в анфас, в профиль (справа и слева), со стороны спины.",
      },
      {
        title: "Фото в полный рост",
        description:
          "Также сделайте фото в полный рост (в купальнике, либо в нижнем белье): в анфас, в профиль (справа и слева), со стороны спины.",
      },
    ],
    importantTitle: "Важно!",
    importantText:
      "Не делайте фото с близкого расстояния, лучше немного отойти и потом подрезать фото до нужного размера.",
    afterTitle: "Фото ПОСЛЕ",
    afterDescription:
      "Фото 'до' и 'после' делаем при одинаковом освещении. При создании коллажа из фото 'до' и 'после' важно учитывать, чтобы пропорции лица и тела на фотографиях совпадали: должен совпадать уровень плеч, размер головы должен быть равным.",
    analysisTitle: "Анализ и диагностика возрастных изменений",
    staticAnalysis: "В статике:",
    dynamicAnalysis: "В динамике:",
    staticItems: [
      "симметрия/асимметрия лица (прописываем все заметные асимметричные зоны)",
      "выраженность носогубных складок (не выражены, слабо выражены, резко выражены)",
      "выраженность межбровных морщин (не выражены, слабо выражены, резко выражены)",
      "выраженность продольных морщин на лбу (не выражены, слабо выражены, резко выражены)",
      "выраженность отечности в области глаз (не выражены, слабо выражены, резко выражены)",
      "выраженность застоя лимфы в области глаз (темные круги) (не выражены, слабо выражены, резко выражены)",
      "выраженность малярных мешков (суфов) (не выражены, слабо выражены, резко выражены)",
      "выраженность морщин в области глаз (не выражены, слабо выражены, резко выражены)",
      "выраженность опущения нижнего края щек (брыли) (не выражены, слабо выражены, резко выражены)",
      "выраженность деформации овала лица (наличие 'второго подбородка') (не выражены, слабо выражены, резко выражены)",
      "состояние осанки (прямая осанка, сутулая осанка)",
    ],
    dynamicItems: [
      "в улыбке",
      "нахмурив брови",
      "подняв брови вверх",
      "Анализируем глубину кожных складок, симметрию, время фиксации после расслабления мышц.",
    ],
    backHome: "Вернуться на главную",
  },
  en: {
    title: "How to Take Perfect Progress Photos",
    subtitle: "For accurate progress tracking, it's important to take photos under consistent conditions",
    beforeTitle: "BEFORE Photo",
    beforeDescription: "To evaluate the results of your exercises, you need to take 'before' and 'after' photos.",
    howToTitle: "Photo Guidelines",
    tips: [
      {
        title: "Same lighting",
        description:
          "Take 'before' and 'after' photos with the same lighting, preferably natural daylight, at the same time, facing a window.",
      },
      { title: "Neutral background", description: "The background should be as neutral as possible." },
      { title: "No makeup", description: "Photos should be taken without makeup." },
      { title: "Hair tied back", description: "Hair should be pulled back." },
      { title: "Open neckline", description: "The décolletage area should be visible." },
      {
        title: "Relaxed muscles",
        description:
          "All body and facial muscles should be fully relaxed in their natural position (no smiling in photos).",
      },
      { title: "Eye level", description: "The camera lens should be positioned at eye level." },
      {
        title: "Distance 1+ meter",
        description: "The distance from you to the camera should be at least 1 meter.",
      },
      {
        title: "Multiple angles",
        description: "You need to take several photos: front view, profile (right and left), from behind.",
      },
      {
        title: "Full body photos",
        description:
          "Also take full body photos (in a swimsuit or underwear): front view, profile (right and left), from behind.",
      },
    ],
    importantTitle: "Important!",
    importantText:
      "Don't take photos from close range, it's better to step back and then crop the photo to the desired size.",
    afterTitle: "AFTER Photo",
    afterDescription:
      "'Before' and 'after' photos should be taken with the same lighting. When creating a collage from 'before' and 'after' photos, it's important to ensure that the proportions of the face and body match: shoulder level and head size should be equal.",
    analysisTitle: "Analysis and Diagnosis of Age-Related Changes",
    staticAnalysis: "Static:",
    dynamicAnalysis: "Dynamic:",
    staticItems: [
      "facial symmetry/asymmetry (note all visible asymmetric areas)",
      "prominence of nasolabial folds (not prominent, slightly prominent, highly prominent)",
      "prominence of glabellar wrinkles (not prominent, slightly prominent, highly prominent)",
      "prominence of forehead wrinkles (not prominent, slightly prominent, highly prominent)",
      "prominence of eye puffiness (not prominent, slightly prominent, highly prominent)",
      "prominence of lymphatic stasis around eyes (dark circles) (not prominent, slightly prominent, highly prominent)",
      "prominence of malar bags (festoons) (not prominent, slightly prominent, highly prominent)",
      "prominence of eye wrinkles (not prominent, slightly prominent, highly prominent)",
      "prominence of lower cheek sagging (jowls) (not prominent, slightly prominent, highly prominent)",
      "prominence of facial oval deformation ('double chin' presence) (not prominent, slightly prominent, highly prominent)",
      "posture condition (straight posture, slouched posture)",
    ],
    dynamicItems: [
      "when smiling",
      "when frowning",
      "when raising eyebrows",
      "Analyze depth of skin folds, symmetry, fixation time after muscle relaxation.",
    ],
    backHome: "Back to Home",
  },
  tr: {
    title: "Mükemmel İlerleme Fotoğrafları Nasıl Çekilir",
    subtitle: "Doğru ilerleme takibi için fotoğrafları tutarlı koşullarda çekmek önemlidir",
    beforeTitle: "ÖNCE Fotoğrafı",
    beforeDescription:
      "Egzersizlerinizin sonuçlarını değerlendirmek için 'önce' ve 'sonra' fotoğrafları çekmeniz gerekir.",
    howToTitle: "Fotoğraf Kuralları",
    tips: [
      {
        title: "Aynı ışık",
        description:
          "'Önce' ve 'sonra' fotoğraflarını aynı ışıkta, tercihen doğal gün ışığında, aynı saatte, pencereye bakarak çekin.",
      },
      { title: "Nötr arka plan", description: "Arka plan mümkün olduğunca nötr olmalıdır." },
      { title: "Makyajsız", description: "Fotoğraflar makyajsız çekilmelidir." },
      { title: "Saçlar toplanmış", description: "Saçlar arkada toplanmalıdır." },
      { title: "Açık dekolte", description: "Dekolte bölgesi görünür olmalıdır." },
      {
        title: "Rahat kaslar",
        description:
          "Tüm vücut ve yüz kasları doğal pozisyonlarında tamamen rahat olmalıdır (fotoğraflarda gülmeyin).",
      },
      { title: "Göz seviyesi", description: "Kamera lensi göz hizasında konumlandırılmalıdır." },
      {
        title: "1+ metre mesafe",
        description: "Sizden kameraya olan mesafe en az 1 metre olmalıdır.",
      },
      {
        title: "Birden fazla açı",
        description: "Birkaç fotoğraf çekmeniz gerekir: ön görünüm, profil (sağ ve sol), arkadan.",
      },
      {
        title: "Tam vücut fotoğrafları",
        description:
          "Ayrıca tam vücut fotoğrafları çekin (mayoda veya iç çamaşırında): ön görünüm, profil (sağ ve sol), arkadan.",
      },
    ],
    importantTitle: "Önemli!",
    importantText:
      "Yakın mesafeden fotoğraf çekmeyin, geri adım atıp daha sonra fotoğrafı istediğiniz boyuta kırpmak daha iyidir.",
    afterTitle: "SONRA Fotoğrafı",
    afterDescription:
      "'Önce' ve 'sonra' fotoğrafları aynı ışıkta çekilmelidir. 'Önce' ve 'sonra' fotoğraflarından kolaj oluştururken, yüz ve vücut oranlarının eşleştiğinden emin olmak önemlidir: omuz seviyesi ve baş boyutu eşit olmalıdır.",
    analysisTitle: "Yaşa Bağlı Değişikliklerin Analizi ve Teşhisi",
    staticAnalysis: "Statik:",
    dynamicAnalysis: "Dinamik:",
    staticItems: [
      "yüz simetrisi/asimetrisi (tüm görünür asimetrik alanları not edin)",
      "nazolabiyal kıvrımların belirginliği (belirgin değil, hafif belirgin, çok belirgin)",
      "kaş arası kırışıklıkların belirginliği (belirgin değil, hafif belirgin, çok belirgin)",
      "alın kırışıklıklarının belirginliği (belirgin değil, hafif belirgin, çok belirgin)",
      "göz şişliğinin belirginliği (belirgin değil, hafif belirgin, çok belirgin)",
      "göz çevresinde lenfatik durgunluğun belirginliği (koyu halkalar) (belirgin değil, hafif belirgin, çok belirgin)",
      "malar torbaların belirginliği (festoons) (belirgin değil, hafif belirgin, çok belirgin)",
      "göz kırışıklıklarının belirginliği (belirgin değil, hafif belirgin, çok belirgin)",
      "alt yanak sarkmalarının belirginliği (çene sarkmasi) (belirgin değil, hafif belirgin, çok belirgin)",
      "yüz oval deformasyonunun belirginliği ('çift çene' varlığı) (belirgin değil, hafif belirgin, çok belirgin)",
      "duruş durumu (dik duruş, kamburlaşmış duruş)",
    ],
    dynamicItems: [
      "gülümserken",
      "kaş çatarken",
      "kaşları yukarı kaldırırken",
      "Cilt kıvrımlarının derinliğini, simetriyi, kas gevşemesinden sonra sabitleme süresini analiz edin.",
    ],
    backHome: "Ana Sayfaya Dön",
  },
} as const

export function getPhotoGuideTranslations(locale: Locale) {
  return translations[locale]
}
