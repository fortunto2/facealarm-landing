"use client"

import { Button } from "@/components/ui/button"
import { Camera, Eye, User, AlertCircle, CheckCircle2 } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

type Language = "ru" | "en" | "tr"

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
      {
        title: "Нейтральный фон",
        description: "Задний фон должен быть максимально нейтральным.",
      },
      {
        title: "Без макияжа",
        description: "Фото выполняется без макияжа.",
      },
      {
        title: "Собранные волосы",
        description: "Волосы должны быть собраны.",
      },
      {
        title: "Открытое декольте",
        description: "Зона декольте открыта.",
      },
      {
        title: "Расслабленные мышцы",
        description:
          "Мышцы всего тела и лица должны быть максимально расслаблены, в своём естественном положении (не улыбаемся на фото).",
      },
      {
        title: "Уровень глаз",
        description: "Фотообъектив должен быть расположен на уровне глаз.",
      },
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
      {
        title: "Neutral background",
        description: "The background should be as neutral as possible.",
      },
      {
        title: "No makeup",
        description: "Photos should be taken without makeup.",
      },
      {
        title: "Hair tied back",
        description: "Hair should be pulled back.",
      },
      {
        title: "Open neckline",
        description: "The décolletage area should be visible.",
      },
      {
        title: "Relaxed muscles",
        description:
          "All body and facial muscles should be fully relaxed in their natural position (no smiling in photos).",
      },
      {
        title: "Eye level",
        description: "The camera lens should be positioned at eye level.",
      },
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
      {
        title: "Nötr arka plan",
        description: "Arka plan mümkün olduğunca nötr olmalıdır.",
      },
      {
        title: "Makyajsız",
        description: "Fotoğraflar makyajsız çekilmelidir.",
      },
      {
        title: "Saçlar toplanmış",
        description: "Saçlar arkada toplanmalıdır.",
      },
      {
        title: "Açık dekolte",
        description: "Dekolte bölgesi görünür olmalıdır.",
      },
      {
        title: "Rahat kaslar",
        description: "Tüm vücut ve yüz kasları doğal pozisyonlarında tamamen rahat olmalıdır (fotoğraflarda gülmeyin).",
      },
      {
        title: "Göz seviyesi",
        description: "Kamera lensi göz hizasında konumlandırılmalıdır.",
      },
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
}

export default function PhotoGuidePage() {
  const [lang, setLang] = useState<Language>("en")

  useEffect(() => {
    // Detect browser language
    const browserLang = navigator.language.toLowerCase()
    if (browserLang.startsWith("ru")) {
      setLang("ru")
    } else if (browserLang.startsWith("tr")) {
      setLang("tr")
    } else {
      setLang("en")
    }
  }, [])

  const t = translations[lang]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/40 backdrop-blur-sm fixed top-0 w-full z-50 bg-background/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/facealarm-logo.png" alt="FaceAlarm" width={32} height={32} className="rounded-lg" />
            <span className="font-bold text-xl">FaceAlarm</span>
          </Link>
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
        </div>
      </nav>

      <main className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-chart-2/20 mb-6">
              <Camera className="w-8 h-8 text-chart-2" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4 text-balance">{t.title}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">{t.subtitle}</p>
          </div>

          {/* Before Photo Section */}
          <section className="mb-16">
            <div className="bg-chart-1/10 rounded-2xl p-8 mb-8">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Camera className="w-8 h-8 text-chart-1" />
                {t.beforeTitle}
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">{t.beforeDescription}</p>
            </div>
          </section>

          {/* How To Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-10 text-balance">{t.howToTitle}</h2>
            <div className="space-y-6">
              {t.tips.map((tip, index) => (
                <div key={index} className="bg-card/50 backdrop-blur-sm rounded-xl p-6 hover:bg-card transition-colors">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-chart-2/20 flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-chart-2" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{tip.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{tip.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Important Notice */}
          <section className="mb-16">
            <div className="bg-chart-4/10 border-2 border-chart-4/30 rounded-2xl p-8">
              <div className="flex gap-4">
                <AlertCircle className="w-8 h-8 text-chart-4 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-3">{t.importantTitle}</h3>
                  <p className="text-lg leading-relaxed">{t.importantText}</p>
                </div>
              </div>
            </div>
          </section>

          {/* After Photo Section */}
          <section className="mb-16">
            <div className="bg-chart-5/10 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Camera className="w-8 h-8 text-chart-5" />
                {t.afterTitle}
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">{t.afterDescription}</p>
            </div>
          </section>

          {/* Analysis Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-10 text-balance">{t.analysisTitle}</h2>

            <div className="space-y-8">
              {/* Static Analysis */}
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Eye className="w-7 h-7 text-chart-1" />
                  {t.staticAnalysis}
                </h3>
                <ul className="space-y-3">
                  {t.staticItems.map((item, index) => (
                    <li key={index} className="flex gap-3 items-start">
                      <span className="text-chart-2 font-bold flex-shrink-0 mt-1">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dynamic Analysis */}
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <User className="w-7 h-7 text-chart-3" />
                  {t.dynamicAnalysis}
                </h3>
                <ul className="space-y-3">
                  {t.dynamicItems.map((item, index) => (
                    <li key={index} className="flex gap-3 items-start">
                      <span className="text-chart-2 font-bold flex-shrink-0 mt-1">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Back Button */}
          <div className="text-center">
            <Button size="lg" asChild className="font-bold">
              <Link href="/">{t.backHome}</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
