import type { Article } from "./types"

/**
 * Türkçe yazılar — çeviri değil, uyarlama.
 *
 * Türkçede aynı şey için "yüz yogası", "yüz egzersizleri" ve "yüz jimnastiği" birlikte aranıyor,
 * bu yüzden eş anlamlılar metinde yan yana duruyor. Slug'lar İngilizce sürümle aynı bırakıldı:
 * slug sıralamada zayıf bir sinyal, aynı küme ise eşleme tablosu olmadan çalışan hreflang veriyor.
 */
export const TR: Article[] = [
  {
    slug: "does-face-yoga-work",
    title: "Yüz yogası gerçekten işe yarıyor mu? Araştırmalar ne diyor ve kendinizde nasıl ölçersiniz",
    description:
      "Kanıtlara dürüst bir bakış: bir şey bulan tek küçük çalışma, hiçbir şey kanıtlamayan bir yığın öncesi ve sonrası fotoğrafı, ve yüz egzersizlerini 30 günde kendi yüzünüzde ölçmenin yolu.",
    excerpt:
      "Küçük bir çalışma ölçülebilir bir fark buldu. İnternette gördüğünüzün çoğu hiçbir şey kanıtlamıyor. Kendi yüzünüzde ne olduğunu şöyle anlarsınız.",
    date: "2026-08-17",
    body: [
      {
        paragraphs: [
          "Yüz yogasını araştırdığınızda iki kesin görüş arasında kalıyorsunuz. Bir yanda keskinleşmiş çene hatlarıyla öncesi ve sonrası fotoğrafları ve bunu yirmi haftalık egzersizin yaptığı iddiası. Öte yanda cildin kas tonusu yüzünden sarkmadığını, onu çalıştırarak da toparlayamayacağınızı söyleyen dermatologlar.",
          "İki taraf da asıl meselenin yanından geçiyor: yüz egzersizleri <em>sizin</em> yüzünüzde bir şey yapıyor mu? Bu sorunun cevabını kendiniz alabilirsiniz ve yaklaşık bir ay sürer.",
        ],
      },
      {
        heading: "Elimizdeki kanıt aslında ne kadar",
        paragraphs: [
          "En çok atıf yapılan çalışma Northwestern Üniversitesi'nden, 2018'de JAMA Dermatology'de yayımlandı. Orta yaşlı on altı kadın sekiz hafta boyunca her gün 30 dakika yüz egzersizi yaptı, sonra on iki hafta daha gün aşırı devam etti. Fotoğrafları hangisinin önce hangisinin sonra olduğunu bilmeden değerlendiren dermatologlar, katılımcıların sonunda yaklaşık üç yaş genç göründüğüne karar verdi. Fark çoğunlukla elmacık ve yanak bölgesindeydi.",
          "On altı kişi, kontrol grubu yok, ve bitiren herkes ne yaptığını ve niçin yaptığını biliyordu. Bu bir ipucu, kanıt değil, ve yazarlar da bunu böyle yazdı. Daha büyük hiçbir çalışma sonucu tekrarlamadı.",
          "Dürüst özet şu: makul bir mekanizma var, olumlu sonuç veren tek küçük çalışma var, ve hiçbir yöne güçlü kanıt yok. Tam da kendinizde denemenin bir görüş daha okumaktan değerli olduğu durum.",
        ],
      },
      {
        heading: "Gördüğünüz öncesi ve sonrası fotoğrafları niçin hiçbir şey kanıtlamıyor",
        paragraphs: [
          "Herhangi bir yüz yogası reklamındaki fotoğraf çiftine yakından bakın, genelde şunlardan en az ikisini bulursunuz: farklı ışık, farklı kamera açısı, farklı ifade, birinde makyaj diğerinde makyajsızlık, ve arada birkaç aylık sıradan kilo değişimi.",
          "Bunlardan herhangi biri çene hattını yirmi haftalık egzersizden daha çok oynatır. Fotoğraflar tam olarak yalan değil, sadece üzerlerine yüklenen iddiayı taşıyamıyorlar.",
          "Kendi yüzünüzü aynada değerlendirmenin kusuru da bu. Onu her gün görüyorsunuz, değişim yavaş, ve geçen ayın hatırası bir fotoğraf değil.",
        ],
      },
      {
        heading: "Kendinizde doğru şekilde nasıl ölçülür",
        paragraphs: [
          "Yöntem araştırmacıların kullandığının laboratuvarsız hali: zaman dışında her şeyi sabit tutmak. Aynı saat, aynı ışık, aynı açı, aynı ifade, makyajsız, saçlar toplu. Sonra otuz gün boyunca günde bir fotoğraf ve ilk ile sonuncuyu yan yana koymak.",
          "Elle yapıldığında en zor kısım açıyı sabit tutmak ve çoğu denemeyi bozan da bu. <a href=\"/tr\">FaceAlarm</a> tam bunun için var: her gün aynı saatte alarm kuruyor, dünkü fotoğrafı kameranın üzerine yarı saydam gösteriyor ki bugünkü hizalansın, ve ayı hızlandırılmış videoya çeviriyor. Ücretsiz, hesap gerekmiyor, fotoğraflar telefonda kalıyor.",
          "Sonunda başkasının pazarlaması yerine kendi cevabınız olacak. Cevap olumsuz da olabilir. Bunu bir yıllık abonelik ödemesinden sonra değil, otuz gün sonra öğrenmek yine değerli.",
        ],
      },
    ],
    faq: [
      {
        q: "Yüz yogasının bilimsel kanıtı var mı?",
        a: "Tek küçük çalışma: on altı kadın, yirmi hafta günlük yüz egzersizi, JAMA Dermatology, 2018. Fotoğrafları kör yöntemle değerlendiren dermatologlar katılımcıların yaklaşık üç yaş genç göründüğüne karar verdi. Kontrol grubu yoktu ve daha büyük bir çalışma sonucu tekrarlamadı, dolayısıyla bunu yerleşmiş bir gerçek değil, denemek için bir gerekçe sayın.",
      },
      {
        q: "Sonuç ne kadar sürede görünür?",
        a: "Bir şey bulan çalışma yirmi hafta sürdü, ilk değerlendirme sekizinci haftadaydı. Kendiniz ölçüyorsanız, herhangi bir hareket olup olmadığını görmek için otuz gün yeterli. Bir ay düzenli çekilmiş fotoğraf, altı ay düzensiz çekilmişten çok daha bilgilendirici.",
      },
      {
        q: "Yüz egzersizleri durumu kötüleştirebilir mi?",
        a: "Genelde aynı cildi tekrar tekrar kırıştırmaktan, özellikle göz çevresinde, endişe edilir. Bu yüzden çoğu rehber cildi germek yerine parmaklarla desteklemeyi söyler. Dolgu veya botoks yaptıysanız, başlamadan önce uygulayan kişiye sorun.",
      },
      {
        q: "Yüz yogası uygulamasına para vermek gerekir mi?",
        a: "Sizde işe yarayıp yaramadığını öğrenmek için hayır. Ücretli uygulamalar egzersiz programını satıyor, egzersizlerin kendisi YouTube'da ücretsiz. Değerli olan kendi yüzünüzün düzenli kaydı ve bunun için abonelik gerekmiyor.",
      },
    ],
  },
  {
    slug: "face-yoga-before-after-1-month",
    title: "Yüz yogası bir ay öncesi ve sonrası: gerçekten ne değişir, ne değişmez",
    description:
      "Bir aylık yüz yogasının gerçekçi olarak ne gösterdiği, çoğu öncesi ve sonrası fotoğrafının neden işe yaramadığı ve anlamlı bir çift nasıl çekilir.",
    excerpt:
      "İki fotoğraf karşılaştırılabilirse, otuz gün hareket olup olmadığını görmek için yeterli. Genelde karşılaştırılabilir değiller, nedeni de şu.",
    date: "2026-08-17",
    body: [
      {
        paragraphs: [
          "Bir ay, çoğu kişinin devam edip etmeyeceğine karar vermek için verdiği süre. Makul bir süre ve aynı zamanda karşılaştırmanın birkaç şekilde birden bozulması için tam yeterli.",
        ],
      },
      {
        heading: "Bir ayda makul olarak ne değişebilir",
        paragraphs: [
          "Kas, çalışmaya ciltten daha hızlı yanıt verir. Dört haftada bir şey kayacaksa, bu genelde kasların tonu belli edecek kadar büyük olduğu yanak ve çene bölgesinde olur, ve gergin cilt olarak değil, biraz daha belirgin hat olarak görünür.",
          "Hızlı değişen ikinci şey şişkinlik ve genelde sebebi egzersizler bile değil. Masaj sıvıyı hareket ettirir, ama uyku, tuz ve alkol de ettirir. Birinin ilk haftada yüz yogasının işe yaradığına karar vermesinin en yaygın nedeni budur.",
        ],
      },
      {
        heading: "Bir ayda ne değişmez",
        paragraphs: [
          "Cilt gevşekliği kolajen ve elastin meselesi ve ikisi de bu sürede yeniden yapılanmıyor. Derin kıvrımlar, güneş hasarı ve hacim kaybı kas sorunu değil, dolayısıyla altındaki kası çalıştırmak onlara dokunmuyor.",
          "Hedefiniz bunlardan biriyse, bir aylık yüz yogası başarısızlık gibi görünecek. Kötü yaptığınız için değil, yanlış şeyi ölçtüğünüz için.",
        ],
      },
      {
        heading: "İki fotoğrafı karşılaştırılabilir yapmak",
        paragraphs: [
          "Yüzünüz olmayan her şey aynı olmalı, yoksa sinyali boğar. Aynı oda, aynı saat, aynı ışık kaynağı, makyajsız, saçlar toplu, nötr ifade, ve kamera aynı yükseklik ve mesafede.",
          "İnsanların yanlış yaptığı şey açı. Çenenizi iki derece indirin, çene hattınız bir aylık egzersizin başaracağından daha çok keskinleşir. Çoğu programı satan hile de tam olarak bu.",
          "Güvenilir çözüm, sonrakini çekerken öncekini görmek. <a href=\"/tr\">FaceAlarm</a> dünkü kareyi yarı saydam bindiriyor ki onunla hizalanabilin, her gün aynı saatte hatırlatıyor ve seriyi hızlandırılmış videoya çeviriyor. Hareket zaten bir çift fotoğraftan dürüst: gerçek değişim düzenli ilerler, kayıran bir açı ise tek tuhaf kare olarak dışarı fırlar.",
        ],
      },
    ],
    faq: [
      {
        q: "Yüz yogası sonucunu görmek için bir ay yeterli mi?",
        a: "Hareket olup olmadığını görmek için yeterli, cilt sıkılığına karar vermek için değil. İlk değişebilecek şey yanak ve çene çevresindeki kas tonu. Kolajen dört haftada yeniden yapılanmaz.",
      },
      {
        q: "Fotoğraflarım günden güne neden bu kadar farklı görünüyor?",
        a: "Neredeyse her zaman yüzünüz değil, ışık, açı ve ifade yüzünden. İki derecelik çene eğimi bir aylık egzersizden ağır gelir, bu yüzden açıyı eşleştirmek egzersizin kusursuz olmasından daha önemli.",
      },
      {
        q: "İlerleme fotoğraflarını ne sıklıkla çekmeliyim?",
        a: "Her gün, aynı saatte. Yavaş bir değişim için aşırı geliyor, ama eğilimi okunur yapan da bu: tek kötü kare otuz karenin içinde kaybolur, haftalık çekimde ise tuhaf bir açı elinizdeki kanıtın dörtte biri olur.",
      },
    ],
  },
  {
    slug: "free-face-yoga-app-no-subscription",
    title: "Aboneliksiz ücretsiz yüz yogası uygulaması: aslında neye para vermeniz gerekir",
    description:
      "Yüz yogası uygulamaları egzersiz programı için ücret alıyor. Egzersizler YouTube'da ücretsiz. Gerçekten zor olan, karşılaştırılabilir bir fotoğraf kaydı tutmak ve bunun için de abonelik gerekmiyor.",
    excerpt:
      "\"Yüz yogası uygulaması aboneliği nasıl iptal edilir\", o uygulamaların isteyeceğinden daha sık aranıyor. Neye para vermeye değer, neye değmez.",
    date: "2026-08-17",
    body: [
      {
        paragraphs: [
          "Google'a bir yüz yogası uygulaması yazın, önerdiği sorular her şeyi anlatıyor: ne kadar ve nasıl iptal ederim. İnsanlar üye oluyor, aylık ödüyor, sonra çıkışı arıyor.",
          "Bunu ayrıştırmaya değer, çünkü ücret alınan şey zor olan şey değil.",
        ],
      },
      {
        heading: "Kıt olan egzersizler değil",
        paragraphs: [
          "Yüz egzersizi rutinleri yıllardır ücretsiz erişilebilir durumda, YouTube'da ve bunları yaygınlaştıran uzmanların kendilerinden. Ücretli uygulama bunları gün sayacı ve biraz anlatımla bir programa paketliyor, bu gerçek bir emek, ama özel bir bilgi değil.",
          "Ücretli bir programı bıraktığınızda egzersizleri genelde kaybetmiyorsunuz. Hatırlatmayı ve kaydı kaybediyorsunuz.",
        ],
      },
      {
        heading: "Zor olan kısım kanıt",
        paragraphs: [
          "Yüz yogasının bir şey göstermesi haftalar alıyor ve değişim aynanın göremeyeceği kadar yavaş. Geriye fotoğraflar kalıyor ve fotoğraflar ancak karşılaştırılabilir olduklarında işe yarıyor: aynı ışık, aynı açı, aynı ifade, ve canınız istemediği günlerde de çekilmiş olmak.",
          "İnsanların gerçekten başarısız olduğu yer burası ve bütün işi karara bağlanabilir kılan da bu. Karşılaştırılabilir bir kayıt olmadan, üç ay sonra tahmin yürütüyorsunuz.",
        ],
      },
      {
        heading: "Ücretsiz bir araç ne yapmalı",
        paragraphs: [
          "Sabit bir saatte hatırlatmalı, çünkü her gün aynı saat, açıdan sonraki en büyük değişkenlik kaynağını ortadan kaldırıyor. Sonrakini çekerken önceki fotoğrafı göstermeli ki açı eşleşsin. Seriyi sırayla tutup hızlandırılmış videoya çevirmeli. İşin tamamı bu.",
          "<a href=\"/tr\">FaceAlarm</a> bunları yapıyor, başka bir şey yapmıyor. Abonelik yok, hesap yok, fotoğraflar cihazda kalıyor ve hiçbir yere yüklenmiyor. Günlük yüz fotoğrafları için bu, bir özellikten çok asıl mesele.",
          "İstediğiniz ücretsiz rutinle birlikte kullanın. Bir ay sonra bir şey görürseniz devam edin ve eğitim için ödeme yapmayı düşünün. Bir şey görmezseniz, otuz selfie fiyatına öğrenmiş olursunuz.",
        ],
      },
    ],
    faq: [
      {
        q: "Gerçekten ücretsiz bir yüz yogası uygulaması var mı?",
        a: "Takip için evet, bu uygulama abonelik ve hesap olmadan ücretsiz. Rehberli egzersiz programları için çoğu uygulama aylık ücret alıyor, gerçi rutinlerin kendisi YouTube'da yaygın biçimde ücretsiz.",
      },
      {
        q: "Yüz yogası uygulamaları neden abonelik alıyor?",
        a: "Programı satıyorlar: sıralı egzersizler, anlatım, gün sayacı. Bu meşru bir emek, ama yüz yogasının sizde işe yarayıp yaramadığına karar veren kısım değil. Ona karşılaştırılabilir bir fotoğraf kaydı karar veriyor ve onun bir şeye mal olması gerekmiyor.",
      },
      {
        q: "İlerleme fotoğraflarım bir yere yükleniyor mu?",
        a: "Bu uygulamada hayır. Fotoğraflar cihazda saklanıyor, hesap yok, internetsiz çalışıyor. Henüz giyinmeden çekilen günlük yüz fotoğrafları için bu bir ek değil, temel gereklilik.",
      },
    ],
  },
  {
    slug: "best-face-yoga-apps-compared",
    title: "Yüz yogası uygulamaları karşılaştırması: hangileri öğretir, hangisi ölçer",
    description:
      "Luvly, FaceYogi, FaceLuv ve FaceAlarm yan yana. Yüz yogası uygulamalarının neredeyse tamamı abonelikle egzersiz programı satıyor. Biri yalnızca fotoğraf kaydını tutuyor ve ikisi birbiriyle yarışmıyor.",
    excerpt:
      "Dört uygulama, ve işe yarayan ayrım daha iyi ile daha kötü arasında değil. Neredeyse hepsi aylık ücretle egzersiz öğretiyor. Egzersizlerin işe yarayıp yaramadığına karar vermek başka bir iş.",
    date: "2026-08-17",
    body: [
      {
        paragraphs: [
          "Bir yüz yogası uygulaması aradığınızda sonuçlar birbirinin yerine geçebilir görünüyor: benzer ekran görüntüleri, benzer vaatler, benzer aylık fiyat. Onları kaliteye göre sıralamak büyük ölçüde tahmin ve bulacağınız her sıralama listesi, listedeki uygulamalardan biri tarafından yazılmış.",
          "Çizilecek daha yararlı bir çizgi var. Bu uygulamaların neredeyse tamamı öğretim satıyor, biri ise hiçbir şey satmıyor çünkü yalnızca kaydı tutuyor. Hangisine ihtiyacınız olduğu, eksiğinizin rutinler mi kanıt mı olduğuna bağlı.",
        ],
      },
      {
        heading: "Doğrulanabilir sayılarla dört uygulama",
        paragraphs: [
          "Aşağıdaki puanlar ve değerlendirme sayıları, Apple'ın ABD mağazasına ait genel lookup API'sinden 17 Ağustos 2026'da alındı. Kaç kişinin bir şeyi kullandığını ve ne hissettiğini söylüyorlar, yüz yogasının işe yarayıp yaramadığı hakkında hiçbir şey söylemiyorlar.",
        ],
        table: {
          head: ["Uygulama", "Puan", "Değerlendirme", "Ne satıyor", "İlerleme fotoğrafı"],
          rows: [
            ["Luvly (Gismart)", "4.6", "19.917", "Egzersiz programı, içerik tarayıcı, beslenme", "Hizalama yok"],
            ["FaceYogi (Lollitech)", "4.8", "16.355", "Egzersiz ve masaj programı", "Hizalama yok"],
            ["FaceLuv (TEQUILAB)", "4.8", "264", "Egzersiz programı", "Hizalama yok"],
            ["FaceAlarm", "5.0", "1", "Hiçbir şey, ücretsiz", "Alarm, bindirme, hızlandırılmış video"],
          ],
          note: "FaceAlarm'ın tek değerlendirmesi var çünkü kısa süre önce yayınlandı. Tek yoruma dayanan beş yıldız ortalaması bir karşılaştırma değil ve onu karşılaştırma gibi sunmak, tam olarak bu yazının karşı çıktığı şey olurdu.",
        },
      },
      {
        heading: "Abonelik neyi satın alıyor",
        paragraphs: [
          "Ücretli uygulamalar, uygulamaya ve plana göre ayda yaklaşık 7 ile 30 dolar arasında ücret alıyor, Ağustos 2026'daki genel sayfalarına bakılırsa. Fiyatlar sık değişiyor ve ülkeye göre farklılaşıyor, dolayısıyla bu yazı dahil hiçbir yazıya değil, App Store'a bakın.",
          "Karşılığında sıralı rutinler, videolu anlatım, gün sayacı ve Luvly örneğinde içerik tarayıcı ile beslenme planı gibi yan özellikler alıyorsunuz. Bu gerçek bir ürün emeği ve hangi egzersizleri yapacağınıza dair fikriniz yoksa, bir ayını satın almak makul.",
          "Bunların hiçbirinin çözmediği şey, egzersizlerin yüzünüze bir şey yapıp yapmadığı. Gün sayacı devamlılığı ölçer, sonucu ölçmez.",
        ],
      },
      {
        heading: "Fotoğraf kaydı neden hep atlanıyor",
        paragraphs: [
          "Yüz yogası aynanın göremeyeceği kadar yavaş değiştiriyor, geriye fotoğraflar kalıyor. Fotoğraflar ancak karşılaştırılabilir olduklarında işe yarıyor ve karşılaştırılabilirliği bozan şey açı: iki derecelik çene eğimi çene hattını bir aylık egzersizden fazla oynatıyor. Reklamlardakiler dahil çoğu öncesi ve sonrası çiftinin neden çok az şey kanıtladığı da bu.",
          "Buradaki her uygulama bir selfie saklayabiliyor. Soru, bir sonrakini aynı konumdan çekmenize bir şeyin yardım edip etmediği ve boşluk tam burada. Dünkü kareyle bugünkünü banyoda, kahveden önce, gözünüzle otuz gün üst üste hizalamak insanların sürdürebildiği bir şey değil.",
          "<a href=\"/tr\">FaceAlarm</a> yalnızca bu işi yapıyor: sabit saatte alarm, kameranın üzerinde yarı saydam dünkü kare, ve hızlandırılmış videoya dönüşen bir ay. Ücretsiz, hesapsız, fotoğraflar telefonda kalıyor ve yüklenmiyor.",
        ],
      },
      {
        heading: "Peki hangisi",
        paragraphs: [
          "Yüzünüzle ne yapacağınızı bilmiyorsanız, puanı iyi herhangi bir programın bir ayını alın ya da YouTube'daki ücretsiz rutinleri kullanın, egzersizler aynı.",
          "Haftalardır yapıyor ve işe yarayıp yaramadığını anlayamıyorsanız, hiçbir program buna cevap vermeyecek. Karşılaştırılabilir bir günlük fotoğraf verecek ve otuz gün sonra cevap bir pazarlama iddiası değil, sizin olacak. İkisini birlikte yürütmek mantıklı olan ve bu uygulamanın size satacak egzersiz içeriği bulunmamasının nedeni de bu.",
        ],
      },
    ],
    faq: [
      {
        q: "En iyi yüz yogası uygulaması hangisi?",
        a: "Neyin eksik olduğuna bağlı. Egzersiz öğrenmek için Luvly ve FaceYogi gibi puanı iyi ücretli programlar makul, aynı rutinler YouTube'da ücretsiz de var. Egzersizlerin yüzünüzü değiştirip değiştirmediğini öğrenmek için programa değil, karşılaştırılabilir günlük fotoğraf kaydına ihtiyacınız var ve bu ayrı bir araç.",
      },
      {
        q: "Luvly'nin ücretsiz alternatifi var mı?",
        a: "Egzersizler için yüz yogasını yaygınlaştıran uzmanların YouTube videoları ücretsiz. Takip için FaceAlarm ücretsiz: abonelik ve hesap yok. İkisi de ücretli bir uygulamanın sağladığı yapıyı ve anlatımı karşılamıyor.",
      },
      {
        q: "Yüz yogası uygulamaları ilerlemeyi fotoğrafla takip ediyor mu?",
        a: "Çoğu selfie kaydetmenize izin veriyor, ama zor kısım kaydetmek değil. Dünkü açıyı eşleştirmenize yardım eden bir şey olmadan ortaya çıkan çift, esas olarak kamerayı nasıl tuttuğunuzu kaydediyor. Bu yüzden bu kadar çok öncesi ve sonrası karşılaştırması okunamıyor.",
      },
      {
        q: "Egzersiz uygulamasıyla takip uygulamasını birlikte kullanabilir miyim?",
        a: "Amaçlanan düzen bu. İstediğiniz programı izleyin, ücretli ya da ücretsiz, ve fotoğraf kaydını ayrı tutun ki kararı size rutini satan şirket vermesin.",
      },
    ],
  },
]
