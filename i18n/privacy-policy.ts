import type { Locale } from "./config"

const translations = {
  ru: {
    title: "Политика конфиденциальности",
    lastUpdated: "Последнее обновление: 22 августа 2026",
    sections: {
      overview: {
        title: "Обзор",
        content:
          'FaceAlarm ("мы", "наше" или "приложение") — это приложение будильник с селфи. Ваша конфиденциальность важна для нас. Эта политика объясняет, как мы обрабатываем ваши данные.',
      },
      dataCollection: {
        title: "Сбор данных",
        subtitle: "Мы не собираем персональных данных.",
        content: "FaceAlarm разработан с учетом конфиденциальности как основного принципа:",
        list: [
          "Не требуется регистрация или создание аккаунта",
          "Нет облачного хранилища или синхронизации",
          "Нет рекламы, рекламных идентификаторов и отслеживания между приложениями",
          "Ваши фотографии и все личные данные не покидают устройство",
          "Наружу уходит только анонимная статистика использования, описанная ниже",
        ],
      },
      analytics: {
        title: "Анонимная статистика",
        content:
          "Чтобы понимать, пользуются ли приложением, мы считаем два события: запуск приложения и факт съёмки селфи — с пометкой, сделано оно по будильнику или вручную.",
        subtitle: "Что уходит и что не уходит:",
        list: [
          "Уходит: название события, версия приложения, платформа и случайный идентификатор установки",
          "Идентификатор создаётся при первом запуске, хранится в настройках приложения и исчезает вместе с приложением при удалении",
          "Это не IDFA и не идентификатор поставщика: он не связывает вас с другими нашими приложениями и не используется для отслеживания",
          "Не уходит: сами фотографии, данные о лице, время съёмки, содержимое галереи, местоположение, контакты",
          "События приходят на наш собственный сервер analytics.superduperai.co и не передаются третьим лицам",
          "Если сети нет, событие просто теряется — повторных попыток не будет",
        ],
      },
      faceDetection: {
        title: "Распознавание лиц и данные о лице",
        content:
          "FaceAlarm использует фреймворк Apple Vision для определения наличия лица в видоискателе камеры. Это необходимо для проверки того, что пользователь сделал правильное селфи, прежде чем будильник можно будет отключить.",
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
        permissionHeader: "Разрешение",
        purposeHeader: "Цель",
        footer:
          "Эти разрешения используются исключительно для основного функционала приложения и никогда не используются для сбора данных.",
      },
      thirdParty: {
        title: "Сторонние сервисы",
        content: "FaceAlarm не использует стороннюю аналитику, рекламу и брокеров данных. Единственный сетевой адрес — наш собственный сервер для анонимного счётчика, описанного выше.",
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
      operator: {
        title: "Оператор приложения",
        content: "FaceAlarm разработан и поддерживается:",
        names: "Алина Салаватова и Рустам Салаватов",
        email: "Email: info@superduperai.co",
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
    lastUpdated: "Last Updated: August 22, 2026",
    sections: {
      overview: {
        title: "Overview",
        content:
          'FaceAlarm ("we", "our" or "app") is a selfie alarm application. Your privacy matters to us. This policy explains how we handle your data.',
      },
      dataCollection: {
        title: "Data Collection",
        subtitle: "We do not collect personal data.",
        content: "FaceAlarm is built with privacy as a core principle:",
        list: [
          "No registration or account creation required",
          "No cloud storage or synchronization",
          "No advertising, no advertising identifiers, no cross-app tracking",
          "Your photos and everything personal stay on your device",
          "The only thing that leaves it is the anonymous usage count described below",
        ],
      },
      analytics: {
        title: "Anonymous Usage Count",
        content:
          "To know whether the app is used at all, we count two things: that the app was opened, and that a selfie was taken — with a note of whether the alarm or the person started it.",
        subtitle: "What is sent, and what is not:",
        list: [
          "Sent: the event name, the app version, the platform and a random install identifier",
          "The identifier is created on first launch, kept in the app's own settings, and disappears with the app when you delete it",
          "It is not the IDFA and not the vendor identifier: it does not join you across our other apps and is not used for tracking",
          "Not sent: the photos themselves, face data, capture times, gallery contents, location, contacts",
          "Events reach our own server at analytics.superduperai.co and are not shared with third parties",
          "If the network is unavailable the event is simply lost — nothing is retried",
        ],
      },
      faceDetection: {
        title: "Face Detection and Face Data",
        content:
          "FaceAlarm uses Apple's Vision framework to detect whether a face is present in the camera viewfinder. This is required to verify that the user has taken a proper selfie before the alarm can be dismissed.",
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
        permissionHeader: "Permission",
        purposeHeader: "Purpose",
        footer:
          "These permissions serve only the app's core functionality and are never used for data collection.",
      },
      thirdParty: {
        title: "Third-Party Services",
        content: "FaceAlarm does not integrate with third-party analytics, advertising or data brokers. The only network destination is our own server, for the anonymous count described above.",
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
      operator: {
        title: "App Operator",
        content: "FaceAlarm is developed and maintained by:",
        names: "Alina Salavatova and Rustam Salavatov",
        email: "Email: info@superduperai.co",
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
    lastUpdated: "Son güncelleme: 22 Ağustos 2026",
    sections: {
      overview: {
        title: "Genel Bakış",
        content:
          'FaceAlarm ("biz", "bizim" veya "uygulama") bir selfie alarm uygulamasıdır. Gizliliğiniz bizim için önemlidir. Bu politika verilerinizi nasıl işlediğimizi açıklar.',
      },
      dataCollection: {
        title: "Veri Toplama",
        subtitle: "Kişisel veri toplamıyoruz.",
        content: "FaceAlarm, gizlilik temel ilke olarak tasarlanmıştır:",
        list: [
          "Kayıt veya hesap oluşturma gerekmez",
          "Bulut depolama veya senkronizasyon yok",
          "Analitik veya takip yok",
          "Veriler cihazınızdan asla ayrılmaz",
          "Tamamen çevrimdışı çalışma",
        ],
      },
      analytics: {
        title: "Anonim Kullanım Sayacı",
        content:
          "Uygulamanın gerçekten kullanılıp kullanılmadığını bilmek için iki şeyi sayıyoruz: uygulamanın açılması ve bir selfie çekilmesi — alarmla mı yoksa kendi isteğinizle mi çekildiği notuyla.",
        subtitle: "Gönderilenler ve gönderilmeyenler:",
        list: [
          "Gönderilir: olayın adı, uygulama sürümü, platform ve rastgele bir kurulum kimliği",
          "Bu kimlik ilk açılışta oluşturulur, uygulamanın kendi ayarlarında tutulur ve uygulamayı sildiğinizde onunla birlikte kaybolur",
          "IDFA değildir, sağlayıcı kimliği de değildir: sizi diğer uygulamalarımızla ilişkilendirmez ve takip için kullanılmaz",
          "Gönderilmez: fotoğrafların kendisi, yüz verisi, çekim zamanları, galeri içeriği, konum, kişiler",
          "Olaylar kendi sunucumuza (analytics.superduperai.co) ulaşır ve üçüncü taraflarla paylaşılmaz",
          "Ağ yoksa olay kaybolur — yeniden denenmez",
        ],
      },
      faceDetection: {
        title: "Yüz Algılama ve Yüz Verileri",
        content:
          "FaceAlarm, kamera vizöründe bir yüzün bulunup bulunmadığını tespit etmek için Apple'ın Vision çerçevesini kullanır. Bu, alarm kapatılmadan önce kullanıcının düzgün bir selfie çektiğini doğrulamak için gereklidir.",
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
        permissionHeader: "İzin",
        purposeHeader: "Amaç",
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
      operator: {
        title: "Uygulama Operatörü",
        content: "FaceAlarm şu kişiler tarafından geliştirilmiş ve sürdürülmektedir:",
        names: "Alina Salavatova ve Rustam Salavatov",
        email: "E-posta: info@superduperai.co",
      },
      contact: {
        title: "Bize Ulaşın",
        content: "Bu Gizlilik Politikası hakkında sorularınız için:",
        email: "E-posta:",
      },
    },
    backToHome: "Ana Sayfaya Dön",
  },
} as const

export function getPrivacyPolicyTranslations(locale: Locale) {
  return translations[locale]
}
