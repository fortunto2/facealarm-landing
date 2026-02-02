"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

type Language = "ru" | "en" | "tr"

const translations = {
  ru: {
    title: "Политика конфиденциальности",
    lastUpdated: "Последнее обновление: 2 февраля 2026",
    sections: {
      overview: {
        title: "Обзор",
        content:
          'FaceAlarm ("мы", "наше" или "приложение") — это приложение будильник с селфи. Ваша конфиденциальность важна для нас. Эта политика объясняет, как мы обрабатываем ваши данные.',
      },
      dataCollection: {
        title: "Сбор данных",
        subtitle: "Мы не собираем никаких персональных данных.",
        content: "FaceAlarm разработан с учетом конфиденциальности как основного принципа:",
        list: [
          "Не требуется регистрация или создание аккаунта",
          "Нет облачного хранилища или синхронизации",
          "Нет аналитики или отслеживания",
          "Данные не покидают ваше устройство",
          "Полностью офлайн работа",
        ],
      },
      faceDetection: {
        title: "Распознавание лиц и данные о лице",
        content: "FaceAlarm использует фреймворк Apple Vision для определения наличия лица в видоискателе камеры. Это необходимо для проверки того, что пользователь сделал правильное селфи, прежде чем будильник можно будет отключить.",
        subtitle: "Как работает распознавание лиц:",
        list: [
          "Приложение определяет только наличие и положение лица в кадре камеры (ограничивающий прямоугольник)",
          "Никакие геометрические данные лица, ориентиры, выражения или биометрические идентификаторы не собираются, не анализируются и не сохраняются",
          "Распознавание или идентификация лиц не выполняется",
          "Вся обработка распознавания лиц происходит полностью на устройстве с использованием встроенного фреймворка Apple Vision",
          "Результаты распознавания лиц существуют только в памяти во время активной сессии камеры и удаляются сразу после закрытия камеры",
          "Данные распознавания лиц никогда не сохраняются на диск, не загружаются на серверы и не передаются третьим лицам",
          "Срок хранения: ноль — данные о лице не сохраняются ни в какой форме",
        ],
      },
      photos: {
        title: "Фотографии и хранение",
        content: "Все фотографии, сделанные с помощью FaceAlarm, хранятся исключительно на вашем устройстве:",
        list: [
          "Фотографии сохраняются либо в галерею вашего устройства, либо в приватное хранилище приложения (в зависимости от ваших настроек)",
          "Фотографии никогда не загружаются на серверы",
          "Фотографии никогда не передаются третьим лицам",
          "Фотографии используются только для отображения в приложении",
        ],
      },
      permissions: {
        title: "Разрешения",
        content: "Приложение запрашивает следующие разрешения:",
        table: [
          { permission: "Камера", purpose: "Для создания селфи при отключении будильника" },
          { permission: "Галерея", purpose: "Для сохранения и отображения ваших селфи" },
          { permission: "Уведомления", purpose: "Для срабатывания будильника" },
        ],
        footer:
          "Эти разрешения используются исключительно для основного функционала приложения и никогда не используются для сбора данных.",
      },
      thirdParty: {
        title: "Сторонние сервисы",
        content: "FaceAlarm не интегрируется со сторонними сервисами, которые собирают данные пользователей.",
      },
      dataRetention: {
        title: "Хранение данных",
        content: "Поскольку все данные хранятся локально на вашем устройстве:",
        list: [
          "Вы имеете полный контроль над своими фотографиями",
          "Удаление приложения удаляет все связанные с приложением данные (если хранятся в хранилище приложения)",
          "Фотографии, сохраненные в вашей галерее, остаются до тех пор, пока вы не удалите их вручную",
        ],
      },
      children: {
        title: "Конфиденциальность детей",
        content: "FaceAlarm не собирает намеренно информацию от детей младше 13 лет.",
      },
      changes: {
        title: "Изменения в политике",
        content:
          "Мы можем время от времени обновлять эту Политику конфиденциальности. Любые изменения будут опубликованы на этой странице с обновленной датой редакции.",
      },
      contact: {
        title: "Свяжитесь с нами",
        content: "Если у вас есть вопросы по этой Политике конфиденциальности:",
        email: "Email:",
      },
    },
    backToHome: "Вернуться на главную",
  },
  en: {
    title: "Privacy Policy",
    lastUpdated: "Last Updated: February 2, 2026",
    sections: {
      overview: {
        title: "Overview",
        content:
          'FaceAlarm ("we", "our" or "app") is a selfie alarm application. Your privacy matters to us. This policy explains how we handle your data.',
      },
      dataCollection: {
        title: "Data Collection",
        subtitle: "We do not collect any personal data.",
        content: "FaceAlarm is built with privacy as a core principle:",
        list: [
          "No registration or account creation required",
          "No cloud storage or synchronization",
          "No analytics or tracking",
          "Data never leaves your device",
          "Fully offline operation",
        ],
      },
      faceDetection: {
        title: "Face Detection and Face Data",
        content: "FaceAlarm uses Apple's Vision framework to detect whether a face is present in the camera viewfinder. This is required to verify that the user has taken a proper selfie before the alarm can be dismissed.",
        subtitle: "How face detection works:",
        list: [
          "The app detects only the presence and position of a face in the camera frame (bounding box)",
          "No facial geometry, landmarks, expressions, or biometric identifiers are collected, analyzed, or stored",
          "No facial recognition or identification is performed",
          "All face detection processing happens entirely on-device using Apple's built-in Vision framework",
          "Face detection results exist only in memory during the active camera session and are discarded immediately when the camera closes",
          "Face detection data is never saved to disk, never uploaded to any server, and never shared with any third party",
          "Retention period: zero — face data is not persisted in any form",
        ],
      },
      photos: {
        title: "Photos and Storage",
        content: "All photos taken with FaceAlarm are stored exclusively on your device:",
        list: [
          "Photos save either to your device gallery or the app's private storage (based on your settings)",
          "Photos are never uploaded to servers",
          "Photos are never shared with third parties",
          "Photos are only used for display within the app",
        ],
      },
      permissions: {
        title: "Permissions",
        content: "The app requests these permissions:",
        table: [
          { permission: "Camera", purpose: "To take selfies when dismissing the alarm" },
          { permission: "Photo Library", purpose: "To save and display your selfies" },
          { permission: "Notifications", purpose: "To deliver alarm alerts" },
        ],
        footer: "These permissions serve only the app's core functionality and are never used for data collection.",
      },
      thirdParty: {
        title: "Third-Party Services",
        content: "FaceAlarm does not integrate with third-party services that collect user data.",
      },
      dataRetention: {
        title: "Data Storage",
        content: "Since all data is stored locally on your device:",
        list: [
          "You maintain full control over your photos",
          "Uninstalling the app removes associated data (if stored in app storage)",
          "Photos saved to your gallery remain until you manually delete them",
        ],
      },
      children: {
        title: "Children's Privacy",
        content: "FaceAlarm does not intentionally collect information from children under 13.",
      },
      changes: {
        title: "Policy Changes",
        content:
          "We may update this Privacy Policy periodically. Any changes will be posted here with an updated revision date.",
      },
      contact: {
        title: "Contact Us",
        content: "For questions about this Privacy Policy:",
        email: "Email:",
      },
    },
    backToHome: "Back to Home",
  },
  tr: {
    title: "Gizlilik Politikası",
    lastUpdated: "Son güncelleme: 2 Şubat 2026",
    sections: {
      overview: {
        title: "Genel Bakış",
        content:
          'FaceAlarm ("biz", "bizim" veya "uygulama") bir selfie alarm uygulamasıdır. Gizliliğiniz bizim için önemlidir. Bu politika verilerinizi nasıl işlediğimizi açıklar.',
      },
      dataCollection: {
        title: "Veri Toplama",
        subtitle: "Hiçbir kişisel veri toplamıyoruz.",
        content: "FaceAlarm, gizlilik temel ilke olarak tasarlanmıştır:",
        list: [
          "Kayıt veya hesap oluşturma gerekmez",
          "Bulut depolama veya senkronizasyon yok",
          "Analitik veya takip yok",
          "Veriler cihazınızdan asla ayrılmaz",
          "Tamamen çevrimdışı çalışma",
        ],
      },
      faceDetection: {
        title: "Yüz Algılama ve Yüz Verileri",
        content: "FaceAlarm, kamera vizöründe bir yüzün bulunup bulunmadığını tespit etmek için Apple'ın Vision çerçevesini kullanır. Bu, alarm kapatılmadan önce kullanıcının düzgün bir selfie çektiğini doğrulamak için gereklidir.",
        subtitle: "Yüz algılama nasıl çalışır:",
        list: [
          "Uygulama yalnızca kamera karesinde bir yüzün varlığını ve konumunu algılar (sınırlayıcı kutu)",
          "Hiçbir yüz geometrisi, işaret noktası, ifade veya biyometrik tanımlayıcı toplanmaz, analiz edilmez veya saklanmaz",
          "Hiçbir yüz tanıma veya kimlik belirleme işlemi yapılmaz",
          "Tüm yüz algılama işlemleri, Apple'ın yerleşik Vision çerçevesi kullanılarak tamamen cihaz üzerinde gerçekleşir",
          "Yüz algılama sonuçları yalnızca aktif kamera oturumu sırasında bellekte bulunur ve kamera kapandığında hemen silinir",
          "Yüz algılama verileri asla diske kaydedilmez, sunuculara yüklenmez ve üçüncü taraflarla paylaşılmaz",
          "Saklama süresi: sıfır — yüz verileri hiçbir biçimde saklanmaz",
        ],
      },
      photos: {
        title: "Fotoğraflar ve Depolama",
        content: "FaceAlarm ile çekilen tüm fotoğraflar yalnızca cihazınızda saklanır:",
        list: [
          "Fotoğraflar, ayarlarınıza göre cihaz galerinize veya uygulamanın özel depolama alanına kaydedilir",
          "Fotoğraflar asla sunuculara yüklenmez",
          "Fotoğraflar asla üçüncü taraflarla paylaşılmaz",
          "Fotoğraflar yalnızca uygulama içinde görüntüleme için kullanılır",
        ],
      },
      permissions: {
        title: "İzinler",
        content: "Uygulama şu izinleri talep eder:",
        table: [
          { permission: "Kamera", purpose: "Alarmı kapatırken selfie çekmek için" },
          { permission: "Fotoğraf Kütüphanesi", purpose: "Selfie'lerinizi kaydetmek ve görüntülemek için" },
          { permission: "Bildirimler", purpose: "Alarm uyarılarını iletmek için" },
        ],
        footer:
          "Bu izinler yalnızca uygulamanın temel işlevselliği için kullanılır ve asla veri toplama için kullanılmaz.",
      },
      thirdParty: {
        title: "Üçüncü Taraf Hizmetleri",
        content: "FaceAlarm, kullanıcı verilerini toplayan üçüncü taraf hizmetleriyle entegre değildir.",
      },
      dataRetention: {
        title: "Veri Depolama",
        content: "Tüm veriler cihazınızda yerel olarak saklandığından:",
        list: [
          "Fotoğraflarınız üzerinde tam kontrolü korursunuz",
          "Uygulamayı kaldırmak ilişkili verileri siler (uygulama depolamasında saklanıyorsa)",
          "Galerinize kaydedilen fotoğraflar, siz manuel olarak silene kadar kalır",
        ],
      },
      children: {
        title: "Çocukların Gizliliği",
        content: "FaceAlarm, 13 yaş altındaki çocuklardan kasıtlı olarak bilgi toplamaz.",
      },
      changes: {
        title: "Politika Değişiklikleri",
        content:
          "Bu Gizlilik Politikasını periyodik olarak güncelleyebiliriz. Herhangi bir değişiklik, güncellenmiş bir revizyon tarihi ile burada yayınlanacaktır.",
      },
      contact: {
        title: "Bize Ulaşın",
        content: "Bu Gizlilik Politikası hakkında sorularınız için:",
        email: "E-posta:",
      },
    },
    backToHome: "Ana Sayfaya Dön",
  },
}

export default function PrivacyPolicyPage() {
  const [lang, setLang] = useState<Language>("ru")

  useEffect(() => {
    // Detect browser language
    const browserLang = navigator.language.toLowerCase()
    if (browserLang.startsWith("en")) {
      setLang("en")
    } else if (browserLang.startsWith("tr")) {
      setLang("tr")
    } else {
      setLang("ru")
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
          <div className="flex items-center gap-4">
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
        </div>
      </nav>

      {/* Content */}
      <main className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link href="/" className="inline-flex items-center text-primary hover:underline mb-8 font-medium">
            ← {t.backToHome}
          </Link>

          <h1 className="text-4xl md:text-5xl font-black mb-4">{t.title}</h1>
          <p className="text-muted-foreground mb-12">{t.lastUpdated}</p>

          <div className="prose prose-lg max-w-none space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-3xl font-bold mb-4">{t.sections.overview.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{t.sections.overview.content}</p>
            </section>

            {/* Data Collection */}
            <section>
              <h2 className="text-3xl font-bold mb-4">{t.sections.dataCollection.title}</h2>
              <p className="text-xl font-bold mb-4">{t.sections.dataCollection.subtitle}</p>
              <p className="text-muted-foreground leading-relaxed mb-4">{t.sections.dataCollection.content}</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {t.sections.dataCollection.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            {/* Face Detection and Face Data */}
            <section>
              <h2 className="text-3xl font-bold mb-4">{t.sections.faceDetection.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{t.sections.faceDetection.content}</p>
              <p className="text-xl font-bold mb-4">{t.sections.faceDetection.subtitle}</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {t.sections.faceDetection.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            {/* Photos and Storage */}
            <section>
              <h2 className="text-3xl font-bold mb-4">{t.sections.photos.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{t.sections.photos.content}</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {t.sections.photos.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            {/* Permissions */}
            <section>
              <h2 className="text-3xl font-bold mb-4">{t.sections.permissions.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{t.sections.permissions.content}</p>
              <div className="border border-border rounded-lg overflow-hidden mb-4">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="text-left p-4 font-bold">
                        {lang === "ru" ? "Разрешение" : lang === "en" ? "Permission" : "İzin"}
                      </th>
                      <th className="text-left p-4 font-bold">
                        {lang === "ru" ? "Цель" : lang === "en" ? "Purpose" : "Amaç"}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {t.sections.permissions.table.map((row, index) => (
                      <tr key={index} className="border-t border-border">
                        <td className="p-4">{row.permission}</td>
                        <td className="p-4 text-muted-foreground">{row.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground leading-relaxed">{t.sections.permissions.footer}</p>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="text-3xl font-bold mb-4">{t.sections.thirdParty.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{t.sections.thirdParty.content}</p>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-3xl font-bold mb-4">{t.sections.dataRetention.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{t.sections.dataRetention.content}</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {t.sections.dataRetention.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-3xl font-bold mb-4">{t.sections.children.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{t.sections.children.content}</p>
            </section>

            {/* Changes to This Policy */}
            <section>
              <h2 className="text-3xl font-bold mb-4">{t.sections.changes.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{t.sections.changes.content}</p>
            </section>

            {/* Contact Us */}
            <section>
              <h2 className="text-3xl font-bold mb-4">{t.sections.contact.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{t.sections.contact.content}</p>
              <p className="font-bold">
                {t.sections.contact.email}{" "}
                <a href="mailto:info@superduperai.co" className="text-primary hover:underline">
                  info@superduperai.co
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
