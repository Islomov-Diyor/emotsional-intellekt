// ====================================================
// DATA.JS - Barcha ma'lumotlar bazasi
// Raqamli Emotsional Intelektni Rivojlantirish platformasi
// ====================================================

// ==================== MA'RUZALAR ====================
// Foydalanuvchi/Admin tomonidan erkin kiritiladigan ma'ruzalar
const lecturesData = [];

// ==================== AMALIY TOPSHIRIQLAR ====================
// Foydalanuvchi/Admin tomonidan erkin kiritiladigan amaliy topshiriqlar
const practicalsData = [];

// ==================== TESTLAR ====================
// Foydalanuvchi/Admin tomonidan erkin kiritiladigan test savollari
const testsData = [];

// ==================== SIMULYATSIYALAR ====================
const simulationsData = [
    {
        id: 1,
        title: "Hissiyotlarni aniqlash simulyatsiyasi",
        icon: "😊",
        skill: "Emotsional idrok",
        desc: "Turli yuz ifodalari va xabarlardan hissiyotlarni aniqlang. Har bir bosqichda to'g'ri javobni tanlang.",
        difficulty: "easy",
        scenarios: [
            {
                text: "Sinfdoshingiz imtihon natijasini ko'rib, ko'zlari porlab, tabassumi kengaydi va 'Yessss!' deb yubordi. U qanday hissiyotni boshdan kechirmoqda?",
                options: [
                    { text: "Qayg'u — yomon natija oldi", score: 0, feedback: "Noto'g'ri. Ko'zlarning porlashi va tabassum ijobiy hissiyot belgisidir." },
                    { text: "Quvonch — yaxshi natija oldi", score: 10, feedback: "To'g'ri! Porloq ko'zlar, keng tabassum va hayajonli undov — bu quvonch belgilari." },
                    { text: "G'azab — adolatsiz baho oldi", score: 0, feedback: "Noto'g'ri. G'azab belgilari butunlay boshqacha — qosh chimirish, lab siqish." },
                    { text: "Qo'rquv — natijadan qo'rqyapti", score: 2, feedback: "Noto'g'ri. Qo'rquv ko'zlari kattaloq, lablari titragan bo'lardi." }
                ]
            },
            {
                text: "Do'stingiz telefonga qarab, qo'llari titradi, yuziga qon yugurdi va tezda xonadan chiqib ketdi. U qanday hissiyotni boshdan kechirmoqda?",
                options: [
                    { text: "Quvonch — yaxshi xabar oldi", score: 0, feedback: "Noto'g'ri. Quvonch boshqacha namoyon bo'ladi." },
                    { text: "Tinchlik — hamma narsa yaxshi", score: 0, feedback: "Noto'g'ri. Tinch odam xonadan tezda chiqib ketmaydi." },
                    { text: "G'azab yoki tashvish — yoqimsiz xabar oldi", score: 10, feedback: "To'g'ri! Qo'llarning titrashi, yuzga qon yugurishi va tezda chiqish — g'azab yoki kuchli tashvish belgilari." },
                    { text: "Zerikish — qiziq narsa yo'q", score: 0, feedback: "Noto'g'ri. Zerikkan odam bunday reaktsiya bermaydi." }
                ]
            },
            {
                text: "Telegram guruhida kimdir yozdi: 'Ha mayli, o'zing bilasan... 🙂'. Bu xabardagi hissiyot qanday?",
                options: [
                    { text: "Chin dildan rozi bo'lish", score: 2, feedback: "Ehtimol, lekin '...' va kontekstga qarang. Ko'pincha bu passiv-agressiv ifoda." },
                    { text: "Ranjish yoki passiv-agressiya", score: 10, feedback: "To'g'ri! '...', 'o'zing bilasan' va 🙂 emoji birgalikda ko'pincha ranjish yoki norozilikni bildiradi." },
                    { text: "Quvonch va xursandchilik", score: 0, feedback: "Noto'g'ri. Bu xabar ohangida xursandchilik yo'q." },
                    { text: "Hayrat va qiziqish", score: 0, feedback: "Noto'g'ri. Xabarda hayrat belgisi yo'q." }
                ]
            }
        ]
    },
    {
        id: 2,
        title: "Stress va hissiyotlarni boshqarish",
        icon: "😤",
        skill: "O'zini boshqarish",
        desc: "Stressli vaziyatlarda to'g'ri qaror qabul qilishni mashq qiling.",
        difficulty: "medium",
        scenarios: [
            {
                text: "Imtihonda past baho oldingiz va o'qituvchi barcha oldida: 'Siz yetarlicha tayyorlanmadingiz' dedi. Hozir nimani his qilyapsiz va nima qilasiz?",
                options: [
                    { text: "O'qituvchiga qo'pol javob qaytaraman va auditoriyadan chiqib ketaman", score: 1, feedback: "Bu impulsiv reaktsiya vaziyatni yanada yomonlashtiradi. G'azab tushunarlI, lekin nazorat muhim." },
                    { text: "Ichimda g'azab his qilsam-da, chuqur nafas olaman va darsdan keyin o'qituvchi bilan gaplashaman", score: 10, feedback: "A'lo! Hissiyotni tan olib, lekin nazorat qilib, muammoni konstruktiv hal qilish — bu yuqori EI belgisi." },
                    { text: "Hech narsa demayman, lekin ichimda g'azab saqlab, butun kun yomon kayfiyatda bo'laman", score: 3, feedback: "Hissiyotlarni ichida saqlash sog'lom emas. Ulani ifoda etishning sog'lom yo'lini topish kerak." },
                    { text: "Guruhdoshlarga shikoyat qilaman va o'qituvchini ayblayaman", score: 2, feedback: "Bu muammoni hal qilmaydi. Boshqalarni ayblash o'rniga o'z reaktsiyangizni boshqaring." }
                ]
            },
            {
                text: "Muhim loyiha topshirish muddati ertaga, lekin siz hali yarmini ham tugatmadingiz. Stress juda yuqori. Nima qilasiz?",
                options: [
                    { text: "Panikaga tushaman va hech narsa qila olmayman", score: 1, feedback: "Panika sizni to'xtatib qo'yadi. Avval nafas oling, keyin reja tuzing." },
                    { text: "Chuqur nafas olaman, qolgan ishlarni ustuvorlik bo'yicha taqsimlayman va bosqichma-bosqich bajaman", score: 10, feedback: "Ajoyib! Stressni boshqarib, aniq reja tuzish — emotsional ziyraklik belgisi." },
                    { text: "Boshqalarga ko'chiraman yoki bahona topaman", score: 2, feedback: "Bu muammoni hal qilmaydi va ishonchni yo'qotishga olib keladi." },
                    { text: "Tungi 4 gacha ishlayman, sog'liqqa e'tibor bermayman", score: 4, feedback: "Mehnatsevarlik yaxshi, lekin o'z-o'ziga g'amxo'rlik ham muhim. Muvozanat toping." }
                ]
            },
            {
                text: "Ijtimoiy tarmoqda do'stlaringiz sayohatda ekanligini ko'rdingiz, siz esa uyda yolg'iz o'tiribsiz. FOMO (yo'qotib qo'yish qo'rquvi) kuchaydi. Nima qilasiz?",
                options: [
                    { text: "Ko'proq ijtimoiy tarmoqlarni ko'rib, yanada yomon his qilaman", score: 1, feedback: "Bu FOMO ni kuchaytiradi. Ijtimoiy tarmoqlar faqat hayotning eng yaxshi lahzalarini ko'rsatadi." },
                    { text: "Telefonni qo'yaman, hozirgi lahzadan zavq olishga harakat qilaman va o'zim uchun yoqimli narsa qilaman", score: 10, feedback: "Zo'r! FOMO ni boshqarishning eng yaxshi usuli — hozirgi lahzaga e'tibor qaratish va raqamli detoks." },
                    { text: "Do'stlarimga hasad qilaman va ularga yozaman", score: 2, feedback: "Hasad tabiiy hissiyot, lekin uni nazorat qilish kerak. Boshqalar bilan taqqoslash sog'lom emas." },
                    { text: "Men ham tezda sayohat rejalashtirishga kirishaman", score: 5, feedback: "Sayohat yaxshi, lekin impulsiv qaror bo'lmasin. Avval hissiyotingizni boshqaring." }
                ]
            }
        ]
    },
    {
        id: 3,
        title: "Empatiya va hamdardlik",
        icon: "🤝",
        skill: "Empatik muloqot",
        desc: "Virtual suhbatdoshning muammolarini tushunib, eng maqbul javobni tanlang.",
        difficulty: "medium",
        scenarios: [
            {
                text: "Do'stingiz sizga yozadi: 'Oilamda katta muammo bor, hech kimga ayta olmayman. Juda yomon his qilyapman...' Qanday javob berasiz?",
                options: [
                    { text: "'Hamma narsani ko'tarib yurma, hayot davom etadi, unut!' deb yozaman", score: 2, feedback: "Bu hissiyotlarni inkor qilish. Odam o'z dardini aytganda, 'unut' deyish empatik emas." },
                    { text: "'Tushunaman, bu juda qiyin. Gaplashmoqchi bo'lsang, men shu yerdaman. Doim qo'llab-quvvatlayman' deb yozaman", score: 10, feedback: "Ajoyib empatik javob! Hissiyotni tan oldingiz, tinglashga tayyorligingizni bildirdingiz, bosim o'tkazmedingiz." },
                    { text: "'Nima bo'ldi? Batafsil aytib ber!' deb yozaman", score: 5, feedback: "Qiziqish yaxshi, lekin bosim o'tkazish emas. Odam tayyor bo'lganda o'zi gapiradi." },
                    { text: "Ko'rmagan bo'laman, javob bermayman", score: 0, feedback: "Qiyin paytda e'tiborsizlik eng yomon munosabat. Oddiy 'Seni eshityapman' ham muhim." }
                ]
            },
            {
                text: "Sinfdoshingiz yig'lab sizga keldi: 'Ota-onam ajrashyapti, men nima qilishimni bilmayman...' Siz nima deysiz?",
                options: [
                    { text: "'Xavotir olma, hamma narsa yaxshi bo'ladi!' deb ko'nglini ko'taraman", score: 4, feedback: "Yaxshi niyat, lekin hissiyotlarni inkor qilish. Hozir u ko'ngil ko'tarish emas, tushunish kutmoqda." },
                    { text: "Uning oldida jim o'tiraman, so'rasam eshitishga tayyorman ekanligimni aytaman", score: 10, feedback: "Eng empatik javob. Ba'zan so'zlar kerak emas — borligingiz va tinglashga tayyorligingiz eng muhim." },
                    { text: "'Meningham shunday bo'lgan, tushunaman' deb o'z tajribamni aytaman", score: 5, feedback: "Tushunish yaxshi, lekin hozir uning hissiyotlariga diqqat qarating, o'z tajribangizga emas." },
                    { text: "'Bu oddiy narsa, ko'p oilalarda shunday bo'ladi' deb aytaman", score: 1, feedback: "Bu minimizatsiya qilish — uning hissiyotlarini kamsitish. Har bir kishi uchun bu individual tajriba." }
                ]
            },
            {
                text: "Online darsda kamera yoqilganida sinfdoshingizning ko'zlari qizargan, u tez-tez yutinib qo'ymoqda va ovozi titragan. Boshqa hech kim e'tibor bermayapti. Siz nima qilasiz?",
                options: [
                    { text: "Hech narsa qilmayman, ehtimol allergiya", score: 2, feedback: "Ehtimol shunday, lekin empatik odam tekshirib ko'radi." },
                    { text: "Darsdan keyin shaxsiy xabar yozaman: 'Salom, bugun yaxshimisan? Biror narsa bezovta qilyaptimi?' deb so'rayman", score: 10, feedback: "Zo'r! Shaxsiy va muloyimlik bilan so'rash — eng to'g'ri yondashuv. Hammaning oldida emas, shaxsiy xabarda." },
                    { text: "Dars chatiga 'Sening ko'zing nima bo'ldi?' deb yozaman", score: 1, feedback: "Ommaviy chatda bu noqulay. Shaxsiy murojaat qilish yaxshiroq." },
                    { text: "O'qituvchiga darsni to'xtatishni aytaman", score: 3, feedback: "Haddan tashqari reaktsiya. Shaxsiy va ehtiyotkor yondashuv yaxshiroq." }
                ]
            }
        ]
    },
    {
        id: 4,
        title: "Nizoli vaziyatni hal qilish",
        icon: "⚖️",
        skill: "Konfliktni boshqarish",
        desc: "Ikki shaxs o'rtasidagi nizoli vaziyatni tinchlantirish va murosa topishni mashq qiling.",
        difficulty: "hard",
        scenarios: [
            {
                text: "Guruhli loyihada sizning sherigingiz hech narsa qilmayapti. Siz barcha ishni yolg'iz bajaryapsiz. G'azabingiz keldi. Nima qilasiz?",
                options: [
                    { text: "Sherikka baqiraman: 'Sen hech narsa qilmayapsan!'", score: 1, feedback: "Baqirish muammoni hal qilmaydi, munosabatni buzadi. G'azabingiz tushunarlI, lekin boshqacharoq ifoda eting." },
                    { text: "Xotirjam gaplashaman: 'Men loyihada ko'proq yukni ko'tarayotganimni sezib turibman. Ishlarni qanday bo'lib olsak yaxshi bo'ladi?'", score: 10, feedback: "Ajoyib! 'Men' xabari ishlatdingiz, ayblamasdan muammoni aytdingiz va hal qilish taklifini berdingiz." },
                    { text: "O'qituvchiga shikoyat qilaman", score: 4, feedback: "Ba'zan kerak bo'lishi mumkin, lekin avval sherik bilan bevosita gaplashish yaxshiroq." },
                    { text: "Hech narsa demayman va hamma ishni yolg'iz qilaman", score: 2, feedback: "Bu g'azab va ranjishni ichida to'playdi. Muammoni hal qilish uchun muloqot kerak." }
                ]
            },
            {
                text: "Telegramdagi kurs guruhida ikki talaba qattiq tortishuv boshladi va bir-birini haqorat qilmoqda. Siz guruh admin emassiz. Nima qilasiz?",
                options: [
                    { text: "Tomoshabinlik qilaman va kuzataman", score: 1, feedback: "Passivlik vaziyatni yomonlashtirishi mumkin. Siz ham jamoaning bir qismisiz." },
                    { text: "Men ham kirib biror tomonni qo'llab-quvvatlayman", score: 0, feedback: "Bu nizoni yanada kuchaytiradi. Betaraf va konstruktiv bo'ling." },
                    { text: "Guruhda yozaman: 'Do'stlar, fikr almashish yaxshi, lekin hurmatli muloqot qilaylik. Shaxsiy haqorat hech kimga foyda bermaydi'", score: 10, feedback: "Zo'r! Tinchlantiruvchi, konstruktiv va hurmatli yondashuv. Siz jamoaviy muloqot madaniyatini himoya qildingiz." },
                    { text: "Adminga yozib xabar beraman", score: 6, feedback: "Yaxshi qadam, lekin o'zingiz ham tinchlantiruvchi rol o'ynashingiz mumkin." }
                ]
            },
            {
                text: "Yaqin do'stingiz sizga aytdi: 'Sen oxirgi paytlarda menga e'tibor bermayapsan, hamma narsani o'ylab qolayapsan.' Siz haqiqatan ham band bo'lgansiz. Nima qilasiz?",
                options: [
                    { text: "'Sen ham band bo'lsang, meni tushunarding!' deb javob qaytaraman", score: 2, feedback: "Bu mudofaa pozitsiyasi. Do'stingiz hissiyotlarini bildiryapti — avval tinglang." },
                    { text: "'Tushunaman, sen to'g'ri aytasan. Men haqiqatan band edim, lekin senga e'tibor bermasligim kerak emas edi. Vaqt ajrataman' deb aytaman", score: 10, feedback: "Ajoyib! Hissiyotini tan oldingiz, o'z xatongizni bo'yniga oldingiz va hal qilish yo'lini taklif qildingiz." },
                    { text: "Mavzuni o'zgartiraman va hazil qilaman", score: 3, feedback: "Do'stingizning hissiyotlarini e'tiborsiz qoldirish munosabatga zarar beradi." },
                    { text: "'Haddan oshirma, shunchaki band edim' deb aytaman", score: 1, feedback: "Bu do'stingizning hissiyotlarini minimizatsiya qilish. Empatik emas." }
                ]
            }
        ]
    },
    {
        id: 5,
        title: "Ijtimoiy tarmoqlardagi emotsional munosabat",
        icon: "📱",
        skill: "Raqamli EI",
        desc: "Ijtimoiy tarmoqlarda tanqidiy va qo'pol xabarlarga to'g'ri munosabat bildiring.",
        difficulty: "medium",
        scenarios: [
            {
                text: "Guruhdoshingiz Telegram guruhida siz tayyorlagan taqdimotni keskin tanqid qildi: 'Bu taqdimot juda yomon, hech narsa tushunilmayapti!' Qanday yo'l tutasiz?",
                options: [
                    { text: "Unga ham qo'pol javob qaytaraman va janjal qilaman", score: 0, feedback: "Bu vaziyatni yanada yomonlashtiradi. Emotsional reaktsiya boshqalar oldida obro'yingizga zarar beradi." },
                    { text: "Avval hissiyotimni boshqarib, so'ng xotirjam so'rayman: 'Qaysi qismi tushunarsiz bo'ldi? Yaxshilashim uchun aniqroq fikr bildirsang minnatdor bo'laman'", score: 10, feedback: "Ajoyib! G'azabni boshqardingiz, konstruktiv qayta aloqa so'radingiz va professional qoldingiz." },
                    { text: "Guruhdan chiqib ketaman va boshqa hech narsa yozmayman", score: 2, feedback: "Qochish muammoni hal qilmaydi. Professional muloqot muhim." },
                    { text: "Ko'rmagan bo'lib, e'tibor bermayman", score: 4, feedback: "Ba'zan e'tibor bermaslik to'g'ri, lekin bu holda konstruktiv javob berish yaxshiroq." }
                ]
            },
            {
                text: "Instagramda siz juda ko'p vaqt sarflab tayyorlagan rasmingizga kimdir yozdi: 'Bu nima bo'ldi? 😂🤣' Nima qilasiz?",
                options: [
                    { text: "G'azablanaman va ularning profilida ham salbiy izoh qoldiraman", score: 0, feedback: "O'ch olish hech qachon yaxshi strategiya emas. Bu sizni ham shu darajaga tushiradi." },
                    { text: "Hissiyotimni boshqaraman, izohni shunchaki o'qib, qo'yaman yoki muloyimlik bilan javob beraman", score: 10, feedback: "Ajoyib EI! Har bir izohga reaktsiya berish shart emas. O'zingizga ishonch eng muhim." },
                    { text: "Rasmni o'chirib tashlayman va boshqa hech qachon rasm qo'ymayman", score: 2, feedback: "Bir salbiy izoh uchun o'z ijodingizdan voz kechish o'zingizga zarar beradi." },
                    { text: "Do'stlarimni chaqiraman like bosishga", score: 3, feedback: "Sun'iy qo'llab-quvvatlash o'zingizga ishonch o'rniga tashqi tasdiqlashga bog'liq qiladi." }
                ]
            },
            {
                text: "WhatsApp guruhida kimdir siyosiy mavzuda bahsli post yubordi. Guruh a'zolari ikki guruhga bo'linib janjal boshlandi. Siz nima qilasiz?",
                options: [
                    { text: "Men ham kirib, o'z fikrimi agressiv qilib yozaman", score: 0, feedback: "Bu olovga yoqilg'i qo'shadi." },
                    { text: "Xotirjam yozaman: 'Turli fikrlar bo'lishi tabiiy, lekin bir-birimizni hurmat qilaylik. Bu guruh [maqsad] uchun' deb eslataman", score: 10, feedback: "Ajoyib! Fikr erkinligini hurmat qilib, guruhning asosiy maqsadini eslatdingiz." },
                    { text: "Guruhni tark etaman", score: 3, feedback: "Ba'zan to'g'ri qaror bo'lishi mumkin, lekin avval konstruktiv yondashuv sinab ko'ring." },
                    { text: "Hamma xabarlarni screenshotlab, boshqa guruhda tarqataman", score: 0, feedback: "Bu ishonchni buzish va muammoni kuchaytirish. Hech qachon shaxsiy suhbatlarni tarqatmang." }
                ]
            }
        ]
    },
    {
        id: 6,
        title: "Sun'iy intelekt bilan emotsional dialog",
        icon: "🤖",
        skill: "Emotsional ifodalash",
        desc: "Virtual suhbatdosh bilan muloqotda emotsional javoblar sifatini baholang.",
        difficulty: "easy",
        scenarios: [
            {
                text: "Virtual suhbatdosh sizdan so'raydi: 'Bugun qanday his qilyapsiz?' Siz: 'Yaxshi emasman, ishlar yomon ketayapti.' Virtual suhbatdosh javob berdi: 'Tushunaman. Nima bezovta qilayotganini aytib bersangiz, birga hal qilishga harakat qilamiz.' Bu javob qanday?",
                options: [
                    { text: "Ajoyib empatik javob — hissiyotni tan oldi va yordam taklif qildi", score: 10, feedback: "To'g'ri! Bu javobda empatiya, tasdiqlash va yordam taklifi bor — barcha empatik muloqot elementlari." },
                    { text: "Yomon javob — faqat maslahat berdi", score: 0, feedback: "Aslida bu javobda maslahat emas, balki hissiyotni tan olish va qo'llab-quvvatlash bor." },
                    { text: "O'rtacha — ammo hissiyotni chuqurroq so'rashi kerak edi", score: 5, feedback: "Yaxshi nuqta, lekin bu javob asosiy empatik elementlarni o'z ichiga olgan." },
                    { text: "Yomon — juda rasmiy va sovuq", score: 0, feedback: "Noto'g'ri. Bu javob yetarlicha issiq va qo'llab-quvvatlovchi." }
                ]
            },
            {
                text: "Siz chatbotga yozdingiz: 'Imtihondan o'ta olmasam nima bo'ladi?' Chatbot javob berdi: 'Ko'p talabalar birinchi marta o'ta olmaydi — bu normal. Qaysi fandan qiyinchilik bor? Birga tayyorlanamiz.' Bu javob qanday?",
                options: [
                    { text: "Juda yaxshi — normalashtirdi, qo'llab-quvvatladi va aniq yordam taklif qildi", score: 10, feedback: "To'g'ri! Bu javob 3 ta muhim elementni o'z ichiga olgan: normalashtirish, qo'llab-quvvatlash va aniq harakat." },
                    { text: "Yomon — qo'rquvni jiddiy qabul qilmadi", score: 2, feedback: "Aslida, normalashtirish — bu qo'rquvni jiddiy qabul qilmaslik emas, stress kamaytirishdir." },
                    { text: "O'rtacha — faqat faktlarni aytdi", score: 3, feedback: "Bu javob faqat faktlardan iborat emas, emotsional qo'llab-quvvatlash ham bor." },
                    { text: "Juda yaxshi, lekin hissiyot haqida ko'proq so'rashi kerak edi", score: 6, feedback: "Yaxshi fikr, lekin berilgan javob allaqachon samarali." }
                ]
            },
            {
                text: "Do'stingiz bilan yozishmada siz 'OK' deb javob berdingiz. Do'stingiz: 'Nima bo'ldi? G'azablandinmi?' Siz aslida g'azablangan emassiz. Nima qilasiz?",
                options: [
                    { text: "'Yo'q, shunchaki band edim 😊 Hamma narsa yaxshi!' deb tushuntiraman", score: 10, feedback: "Ajoyib! Raqamli muhitda qisqa javoblar noto'g'ri tushunilishi mumkin. Tushuntirish va emoji qo'shish muammoni hal qiladi." },
                    { text: "'OK dedim-ku, nima muammo?!' deb yozaman", score: 1, feedback: "Bu javob do'stingizni yanada tashvishlantiradi. Muloqotda ohangga e'tibor bering." },
                    { text: "Javob bermayman", score: 0, feedback: "Javob bermaslik noto'g'ri tushunchani kuchaytiradi." },
                    { text: "'Ha, g'azablandim' deb yolg'on aytaman", score: 0, feedback: "Yolg'on munosabatga zarar beradi. Ochiq va samimiy bo'ling." }
                ]
            }
        ]
    },
    {
        id: 7,
        title: "Bosim ostida qaror qabul qilish",
        icon: "⏰",
        skill: "Emotsional moslashuvchanlik",
        desc: "Vaqt cheklovi va murakkab vazifalar ostida hissiy reaksiyangizni boshqaring.",
        difficulty: "hard",
        scenarios: [
            {
                text: "Bir vaqtning o'zida: 1) Ertaga muhim taqdimot, 2) Do'stingiz jiddiy muammosi bilan keldi, 3) Oiladan zudlik bilan chaqirishyapti. Nima qilasiz?",
                options: [
                    { text: "Panikaga tushaman va hech biriga e'tibor bera olmayman", score: 1, feedback: "Panika tabiiy, lekin uni boshqarish mumkin. Nafas oling va ustuvorlik belgilang." },
                    { text: "5 soniya nafas olaman, ustuvorlikni belgilayman: oila (zudlik), do'st (qisqacha qo'llab-quvvatlash + keyinroq), taqdimot (reja tuzish)", score: 10, feedback: "Zo'r! Bosim ostida hissiyotni boshqarish va ustuvorlikni to'g'ri belgilash — yuqori EI belgisi." },
                    { text: "Faqat taqdimotga e'tibor beraman, boshqalarga keyin aytaman", score: 4, feedback: "Taqdimot muhim, lekin zudlik bilan chaqirishni e'tiborsiz qoldirish xavfli bo'lishi mumkin." },
                    { text: "Hamma narsani bir vaqtda qilishga harakat qilaman", score: 3, feedback: "Ko'p vazifani bir vaqtda qilish sifatni pasaytiradi. Ustuvorlik belgilash yaxshiroq." }
                ]
            },
            {
                text: "Onlayn imtihonda internet uzildi, 5 daqiqa vaqt yo'qotdingiz. Qaytganingizda 10 daqiqa qoldi, 5 ta savol javobsiz. Qanday his qilyapsiz va nima qilasiz?",
                options: [
                    { text: "Yig'layman va hamma narsani tashlab qo'yaman", score: 0, feedback: "Stress tushunarli, lekin har bir daqiqa qadr. Hissiyotni boshqaring va imkoningiz boricha bajaring." },
                    { text: "Chuqur nafas olaman, eng oson savollarga birinchi javob beraman, qolganiga bilganim bo'yicha javob yozaman", score: 10, feedback: "Ajoyib! Bosim ostida xotirjam qolib, strategik fikrlash — bu emotsional moslashuvchanlik." },
                    { text: "O'qituvchiga xabar yozaman va shikoyat qilaman", score: 4, feedback: "O'qituvchiga xabar berish to'g'ri, lekin avval imkoningiz boricha bajaring." },
                    { text: "Tasodifiy javoblarni tanlayma qilib yozaman", score: 3, feedback: "Tez harakat yaxshi, lekin fikr yuritib javob berish yaxshiroq natija beradi." }
                ]
            },
            {
                text: "Ish joyida (yoki amaliyotda) rahbaringiz sizga yangi va murakkab vazifa berdi, muddati ertaga. Siz buni hech qachon qilmagan edingiz. O'zingizga ishonch past. Nima qilasiz?",
                options: [
                    { text: "'Men buni qila olmayman' deb rad etaman", score: 2, feedback: "O'zingizga ishonmaslik tushunarlI, lekin yangi imkoniyatlardan qochmaslik kerak." },
                    { text: "Qo'rquvimni tan olaman, vazifani kichik qismlarga bo'laman, bilmaganim joyini so'rab o'rganaman", score: 10, feedback: "Ajoyib! Qo'rquvni tan olib, lekin harakat qilish — emotsional jasurlik. Yordam so'rash kuchlilik belgisi." },
                    { text: "Hech kimga aytmay, yolg'iz harakat qilaman", score: 4, feedback: "Mustaqillik yaxshi, lekin yordam so'rash zaiflik emas, aql-idroklilik." },
                    { text: "Boshqasiga yuklashga harakat qilaman", score: 1, feedback: "Mas'uliyatdan qochish professional rivojlanishga to'sqinlik qiladi." }
                ]
            }
        ]
    },
    {
        id: 8,
        title: "Pedagogik emotsional vaziyatlar",
        icon: "👨‍🏫",
        skill: "Pedagogik empatiya",
        desc: "O'qituvchi sifatida emotsional vaziyatlarga pedagogik jihatdan to'g'ri javob bering.",
        difficulty: "hard",
        scenarios: [
            {
                text: "Darsda o'quvchi to'satdan yig'lab yubordi. Boshqa o'quvchilar kulib yuborishdi. Siz o'qituvchi sifatida nima qilasiz?",
                options: [
                    { text: "'Yig'lama, hech narsa bo'lgani yo'q' deb davom etaman", score: 1, feedback: "Hissiyotlarni inkor qilish o'quvchi uchun yanada og'ir. U tushunilishni xohlaydi." },
                    { text: "Sinfga: 'Har kimning qiyin paytlari bo'ladi, hurmat qilaylik' deyman. O'quvchiga shaxsiy murojaat qilaman va xavfsiz muhit yarataman", score: 10, feedback: "Mukammal pedagogik yondashuv! Sinfga empatiya darsi berdingiz va o'quvchiga individual e'tibor qaratdingiz." },
                    { text: "O'quvchini sinfdan chiqarib yuboraman", score: 3, feedback: "Bu o'quvchini istisno qilish. Yaxshisi, xavfsiz joy taklif qiling, majburlamang." },
                    { text: "Darsni to'xtataman va hamma bilan bu haqda gaplashaman", score: 5, feedback: "Yaxshi niyat, lekin yig'layotgan o'quvchini hammaning oldida muhokama qilish noqulay bo'lishi mumkin." }
                ]
            },
            {
                text: "O'quvchi sizga aytdi: 'Men matematikadan hech narsani tushunmayman, men ahmoqman.' Siz nima deysiz?",
                options: [
                    { text: "'Ko'proq mashq qilsang tushunasan' deb aytaman", score: 4, feedback: "Maslahat yaxshi, lekin avval hissiyotni qadrash kerak." },
                    { text: "'Sen ahmoq emassan. Hamma har xil tezlikda o'rganadi. Keling, birga qaysi qismi qiyin ekanini aniqlaymiz va bosqichma-bosqich o'rganamiz'", score: 10, feedback: "Mukammal! O'z-o'ziga nisbatan salbiy fikirni to'g'riladingiz, normalashtirdingiz va aniq yordam taklif qildingiz." },
                    { text: "'Ha, matematika qiyin fan' deb rozi bo'laman", score: 2, feedback: "Bu o'quvchining 'men ahmoqman' degan fikrini tasdiqlaydi. Salbiy fikirni to'g'rilash kerak." },
                    { text: "'Shunchaki ko'proq o'qi' deb aytaman", score: 3, feedback: "Juda umumiy maslahat. O'quvchiga emotsional qo'llab-quvvatlash kerak." }
                ]
            },
            {
                text: "Ikki o'quvchi darsda janjallashdi. Biri ikkinchisini urdI. Sinf bezovta. Siz nima qilasiz?",
                options: [
                    { text: "Ikkalasini ham direktorga yuboraman", score: 4, feedback: "Intizom kerak, lekin avval vaziyatni tinchlantirish va tushunish muhimroq." },
                    { text: "Xotirjam ovozda: 'To'xtang. Ikkalangiz ham burchaklarga o'tiring. Sinfga: Dars davom etadi. Keyin alohida gaplashaman' deb aytaman", score: 10, feedback: "Professional va emotsional jihatdan ziyrak yondashuv. Vaziyatni tinchlantirdingiz, sinf tartibini saqladingiz va individual gaplashuv rejaladingiz." },
                    { text: "Baqiraman: 'Hoziroq to'xtanglar!'", score: 2, feedback: "Baqirish qo'shimcha stress yaratadi. Xotirjam, lekin qat'iy ovoz samaraliroq." },
                    { text: "Hech narsa qilmayman, ular o'zlari tinchlanadi", score: 0, feedback: "O'qituvchi sifatida xavfsiz muhit yaratish sizning mas'uliyatingiz. E'tiborsizlik xavfli." }
                ]
            }
        ]
    }
];

// ==================== GLOSSARIY ====================
const glossaryData = [
    { term: "Affektiv hisoblash", definition: "Hissiyotlarni aniqlash, taqlid qilish va ularga javob beradigan kompyuter tizimlari sohasi. Rosalind Picard tomonidan 1997-yilda asoslangan." },
    { term: "Assertiv muloqot", definition: "O'z fikr va hissiyotlarini ochiq va to'g'ri ifodalash, shu bilan birga boshqalarning huquqlarini hurmat qilish uslubi." },
    { term: "Affekt", definition: "Qisqa muddatli, kuchli emotsional reaktsiya bo'lib, odatda tashqi ta'sirga javoban yuzaga keladi." },
    { term: "Barqarorlik", definition: "Emotsional muvozanatni saqlash va tashqi ta'sirlarga bardosh berish qobiliyati." },
    { term: "Burnout", definition: "Uzoq muddatli stress va haddan tashqari ish yukidan kelib chiqadigan jismoniy va emotsional holsizlik holati." },
    { term: "Chatbot", definition: "Foydalanuvchilar bilan matnli yoki ovozli suhbat o'tkazadigan sun'iy intelekt dasturi." },
    { term: "Compassion fatigue", definition: "Haddan tashqari empatiya ko'rsatishdan kelib chiqadigan emotsional charchoq holati, ko'pincha tibbiyot va ijtimoiy xizmat sohasida uchraydi." },
    { term: "Distress", definition: "Salbiy stress — haddan tashqari bosim va talab natijasida yuzaga keladigan zararli stress turi." },
    { term: "Display rules", definition: "Madaniyatda qabul qilingan, hissiyotlarni qachon, qayerda va qanday ko'rsatish mumkinligi haqidagi yozilmagan qoidalar." },
    { term: "Empatiya", definition: "Boshqa odamning hissiyotlarini tushunish, his qilish va ularga mos munosabatda bo'lish qobiliyati. Kognitiv, emotsional va hamdardlik empatiyasiga bo'linadi." },
    { term: "Emotsional intelekt", definition: "O'z hissiyotlaringizni va boshqalarning hissiyotlarini anglash, tushunish, boshqarish va samarali foydalanish qobiliyati (Daniel Goleman)." },
    { term: "Emotsional idrok", definition: "O'z va boshqalarning hissiyotlarini to'g'ri aniqlash va farqlash qobiliyati." },
    { term: "Emotsional kundalik", definition: "Har kuni o'z hissiyotlarini qayd qilib, naqshlarni aniqlash va o'zini anglashni rivojlantirish uchun ishlatiladigan daftar yoki raqamli vosita." },
    { term: "Emotsional lug'at", definition: "Hissiyotlarni aniq va nozik ifodalash uchun qo'llaniladigan so'zlar to'plami. Boyroq emotsional lug'at — yuqoriroq EI belgisi." },
    { term: "Eustress", definition: "Ijobiy stress — motivatsiya beruvchi, rivojlanishga undovchi foydali stress turi." },
    { term: "FACS", definition: "Facial Action Coding System — yuz muskullari harakatlarini kodlash tizimi, Paul Ekman tomonidan ishlab chiqilgan." },
    { term: "Faol tinglash", definition: "To'liq diqqat bilan eshitish, tushunganingizni tasdiqlash va suhbatdoshga o'zini eshitilgan his qildirish ko'nikmasi." },
    { term: "FOMO", definition: "Fear of Missing Out — ijtimoiy tarmoqlarda boshqalarning hayotini ko'rib, o'zining biror narsani yo'qotib qo'yayotgandek his qilish qo'rquvi." },
    { term: "G'azab", definition: "Adolatsizlik, to'siq yoki tahdidga javoban yuzaga keladigan kuchli salbiy hissiyot." },
    { term: "Gamifikatsiya", definition: "O'yin elementlarini (ball, darajalar, mukofotlar) o'yin bo'lmagan kontekstda, jumladan ta'limda qo'llash usuli." },
    { term: "Hayrat", definition: "Kutilmagan hodisa yoki axborotga javoban yuzaga keladigan qisqa muddatli hissiyot." },
    { term: "Hissiyot", definition: "Tashqi va ichki ta'sirlarga javoban yuzaga keladigan murakkab psixologik holat; yuz ifodalari, tana tili va fiziologik o'zgarishlar bilan namoyon bo'ladi." },
    { term: "Impulsivlik", definition: "O'ylamasdan, hissiyot ta'sirida tezda harakat qilish tendensiyasi." },
    { term: "Ichki motivatsiya", definition: "Tashqi mukofotlarsiz, o'z qiziqishi va ehtiyojlari tufayli biror faoliyatni amalga oshirish istagi." },
    { term: "Kiberbulling", definition: "Raqamli vositalar (ijtimoiy tarmoqlar, messenjerlar) orqali boshqa shaxsni qasddan va takroran kamsitish, qo'rqitish yoki haqorat qilish." },
    { term: "Kognitiv qayta baholash", definition: "Stressli vaziyatga boshqa nuqtai nazardan qarab, uni kamroq stressli deb baholash strategiyasi." },
    { term: "Liderlik", definition: "Boshqalarni ilhomlantirish, yo'naltirish va birgalikda maqsadga erishishga olib borish qobiliyati." },
    { term: "Meditatsiya", definition: "Diqqatni jamlash, hissiyotlarni kuzatish va ichki tinchlikka erishish uchun ishlatiladigan amaliyot." },
    { term: "Mindfulness", definition: "Hozirgi lahzaga to'liq diqqat qaratish va hissiyotlarni baholamasdan kuzatish amaliyoti." },
    { term: "Motivatsiya", definition: "Maqsadga erishish uchun harakatga undovchi ichki va tashqi kuchlar. EI ning muhim komponenti." },
    { term: "Nafrat", definition: "Yoqimsiz, jirkanch narsa yoki vaziyatga javoban yuzaga keladigan salbiy hissiyot." },
    { term: "Noverbal muloqot", definition: "So'zsiz muloqot — yuz ifodalari, tana tili, imo-ishoralar, ovoz ohangi va tembri orqali ma'lumot almashish." },
    { term: "O'zini anglash", definition: "O'z hissiyotlarini, kuchli va zaif tomonlarini, qadriyatlarini va boshqalarga ta'sirini tushunish qobiliyati." },
    { term: "O'zini boshqarish", definition: "Hissiyotlarni nazorat qilish, impulsiv harakatlarga yo'l qo'ymaslik va o'zgaruvchan sharoitlarga moslashish qobiliyati." },
    { term: "Passiv-agressiya", definition: "G'azab yoki norozilikni ochiq aytish o'rniga, bilvosita usullar (kinoya, jim qolish, 'yaxshi') orqali ifodalash uslubi." },
    { term: "Perspektiva almashish", definition: "O'zini boshqa odamning o'rniga qo'yib, uning ko'zi bilan vaziyatni ko'rish qobiliyati." },
    { term: "Prosodiya", definition: "Nutq ohangi, tembri, tezligi va kuchi — ovoz orqali hissiyotlarni ifodalashning muhim vositasi." },
    { term: "Psixologik xavfsizlik", definition: "Xato qilishdan qo'rqmaslik, fikr bildirishga ochiq va jazolanmaslik kafolatiga ega muhit." },
    { term: "Qo'rquv", definition: "Xavf-xatar yoki tahdidga javoban yuzaga keladigan himoya hissiyoti, organizmni 'kur yoki qoch' reaktsiyasiga tayyorlaydi." },
    { term: "Quvonch", definition: "Ijobiy hodisa, muvaffaqiyat yoki ehtiyojning qondirilishiga javoban yuzaga keladigan ijobiy hissiyot." },
    { term: "Raqamli detoks", definition: "Raqamli qurilmalar va ijtimoiy tarmoqlardan ma'lum muddatga vaqtincha uzoqlashish amaliyoti." },
    { term: "Raqamli emotsional intelekt", definition: "Raqamli muhitda (ijtimoiy tarmoqlar, messenjerlar, onlayn) hissiyotlarni anglash, ifodalash va boshqarish qobiliyati." },
    { term: "Raqamli fuqarolik", definition: "Raqamli muhitda mas'uliyatli, hurmatli va etik xulq-atvor normalari." },
    { term: "Refleksiya", definition: "O'z fikrlari, hissiyotlari va harakatlari ustida chuqur o'ylash va tahlil qilish jarayoni." },
    { term: "Resilience", definition: "Emotsional bardoshlilik — qiyinchiliklar, stress va muvaffaqiyatsizliklardan so'ng tiklana olish qobiliyati." },
    { term: "Sentiment tahlili", definition: "Matndan (xabarlar, izohlar, postlar) emotsional ohangni (ijobiy, salbiy, neytral) aniqlash texnologiyasi." },
    { term: "Stress", definition: "Tashqi bosim va talablarga organizmning jismoniy va psixologik reaktsiyasi." },
    { term: "Self-awareness", definition: "O'zini anglash — o'z hissiyotlari, kuchli va zaif tomonlari, qadriyatlari va boshqalarga ta'sirini tushunish." },
    { term: "Trigger", definition: "Ma'lum bir hissiyotni (ko'pincha salbiy) keltiradigan vaziyat, hodisa yoki stimul." },
    { term: "TEIQue", definition: "Trait Emotional Intelligence Questionnaire — xususiyatga asoslangan emotsional intelektni o'lchash vositasi." },
    { term: "Virtual empatiya", definition: "Raqamli muhitda (chat, video, ijtimoiy tarmoq) boshqalarning hissiyotlarini sezish va ularga mos munosabatda bo'lish qobiliyati." }
];

// ====================================================
// RAQAMLI EMOTIONAL INTELLEKTNI (REI) ANIQLASH SO'ROVNOMASI
// 38 ta savol, 10 ta blok, 1-5 ballik shkala
// ====================================================
const reiQuestionnaireData = {
    title: "Talabalarning raqamli emotsional intellektini aniqlash so‘rovnomasi",
    purpose: "Talabalarning raqamli muhit va ijtimoiy tarmoqlarda o‘z emotsiyalarini anglash, boshqarish, boshqa insonlarning emotsiyalarini tushunish hamda konstruktiv raqamli munosabatlarni tashkil etish qobiliyatini aniqlash.",
    instructions: "Har bir fikr sizning raqamli muhitdagi odatiy xatti-harakatingizga qanchalik mos kelishini belgilang: 5 ball “har doim”, 4 ball “ko‘pincha”, 3 ball “ba’zan”, 2 ball “kamdan-kam”, 1 ball “hech qachon”.",
    scale: [
        { value: 5, label: "Har doim" },
        { value: 4, label: "Ko‘pincha" },
        { value: 3, label: "Ba’zan" },
        { value: 2, label: "Kamdan-kam" },
        { value: 1, label: "Hech qachon" }
    ],
    categories: [
        { id: 1, code: "I", name: "Raqamli emotsional o‘zini anglash", icon: "👁️", questionIds: [1, 2, 3, 4] },
        { id: 2, code: "II", name: "Raqamli muhitdagi ijobiy o‘zini baholash", icon: "💎", questionIds: [5, 6, 7, 8] },
        { id: 3, code: "III", name: "Raqamli emotsional o‘zini boshqarish", icon: "🧘", questionIds: [9, 10, 11, 12] },
        { id: 4, code: "IV", name: "Raqamli assertivlik", icon: "🛡️", questionIds: [13, 14, 15, 16] },
        { id: 5, code: "V", name: "Raqamli adaptivlik", icon: "🌊", questionIds: [17, 18, 19, 20] },
        { id: 6, code: "VI", name: "Raqamli mustaqillik", icon: "🧭", questionIds: [21, 22, 23] },
        { id: 7, code: "VII", name: "Raqamli empatiya", icon: "🤝", questionIds: [24, 25, 26, 27] },
        { id: 8, code: "VIII", name: "Raqamli ta’sir va ijobiy yetakchilik", icon: "🌟", questionIds: [28, 29, 30, 31] },
        { id: 9, code: "IX", name: "Boshqalarning rivojlanishini qo‘llab-quvvatlash", icon: "🌱", questionIds: [32, 33, 34] },
        { id: 10, code: "X", name: "Raqamli konfliktlarni boshqarish", icon: "⚖️", questionIds: [35, 36, 37, 38] }
    ],
    questions: [
        { id: 1, categoryId: 1, text: "Ijtimoiy tarmoqlardagi ma’lumotlar mening kayfiyatimga qanday ta’sir qilayotganini anglay olaman." },
        { id: 2, categoryId: 1, text: "Onlayn muloqot vaqtida paydo bo‘layotgan emotsiyalarimni aniqlay olaman." },
        { id: 3, categoryId: 1, text: "Qaysi raqamli kontent menda ijobiy yoki salbiy emotsiya uyg‘otishini bilaman." },
        { id: 4, categoryId: 1, text: "Internetdan uzoq vaqt foydalanish emotsional holatimga qanday ta’sir qilishini sezaman." },
        { id: 5, categoryId: 2, text: "Raqamli muhitda o‘z fikrimni ifodalashda o‘zimga ishonaman." },
        { id: 6, categoryId: 2, text: "Ijtimoiy tarmoqlarda boshqalarning muvaffaqiyatlarini ko‘rish o‘zimni qadrlashimga keskin salbiy ta’sir qilmaydi." },
        { id: 7, categoryId: 2, text: "Internetdagi “layk”, izoh va reaksiyalar mening o‘zimga bergan bahoyimni to‘liq belgilamaydi." },
        { id: 8, categoryId: 2, text: "Raqamli muhitda o‘z kuchli va zaif tomonlarimni to‘g‘ri baholay olaman." },
        { id: 9, categoryId: 3, text: "Internetda meni jahlimni chiqaradigan xabarni ko‘rsam, darhol keskin javob bermayman." },
        { id: 10, categoryId: 3, text: "Onlayn bahs vaqtida emotsiyalarimni nazorat qila olaman." },
        { id: 11, categoryId: 3, text: "Salbiy izoh yoki tanqid olganimda vaziyatni xotirjam baholashga harakat qilaman." },
        { id: 12, categoryId: 3, text: "Raqamli muhitdagi stress mening xatti-harakatlarimni boshqarishiga yo‘l qo‘ymaslikka harakat qilaman." },
        { id: 13, categoryId: 4, text: "Onlayn muloqotda o‘z fikrimni boshqalarni kamsitmasdan ifodalay olaman." },
        { id: 14, categoryId: 4, text: "Noto‘g‘ri yoki haqoratli munosabatga duch kelsam, o‘z pozitsiyamni madaniyatli tarzda himoya qila olaman." },
        { id: 15, categoryId: 4, text: "Raqamli guruhlarda boshqalarning fikriga qo‘shilmasam ham hurmat bilan munosabat bildiraman." },
        { id: 16, categoryId: 4, text: "Internetda kerak bo‘lganda “yo‘q” deyish va shaxsiy chegaralarimni himoya qilishni bilaman." },
        { id: 17, categoryId: 5, text: "Yangi raqamli platforma va muloqot muhitiga tez moslasha olaman." },
        { id: 18, categoryId: 5, text: "Onlayn muloqotdagi kutilmagan vaziyatlarga mos ravishda xatti-harakatimni o‘zgartira olaman." },
        { id: 19, categoryId: 5, text: "Raqamli muhitdagi o‘zgarishlar menda ortiqcha emotsional zo‘riqish yuzaga keltirmasligi uchun moslashishga harakat qilaman." },
        { id: 20, categoryId: 5, text: "Turli raqamli platformalarda muloqot uslubimni vaziyatga moslashtira olaman." },
        { id: 21, categoryId: 6, text: "Internetdagi ommaviy fikrga ergashishdan oldin mustaqil fikrlashga harakat qilaman." },
        { id: 22, categoryId: 6, text: "Ijtimoiy tarmoqlardagi boshqalarning fikri mening qarorlarimni avtomatik ravishda belgilamaydi." },
        { id: 23, categoryId: 6, text: "Onlayn bosim yoki salbiy munosabat bo‘lsa ham asoslangan qarorimni saqlab qola olaman." },
        { id: 24, categoryId: 7, text: "Yozishmalar orqali boshqa insonning emotsional holatini tushunishga harakat qilaman." },
        { id: 25, categoryId: 7, text: "Internetda biror kishining tushkun yoki xafa ekanini sezsam, unga ehtiyotkorlik bilan munosabat bildiraman." },
        { id: 26, categoryId: 7, text: "Izoh yozishdan oldin mening so‘zlarim boshqa insonning his-tuyg‘ulariga qanday ta’sir qilishini o‘ylayman." },
        { id: 27, categoryId: 7, text: "Raqamli muloqotda boshqalarning hissiyotlarini hurmat qilaman." },
        { id: 28, categoryId: 8, text: "Onlayn guruhda ijobiy va hurmatga asoslangan muloqotni qo‘llab-quvvatlashga harakat qilaman." },
        { id: 29, categoryId: 8, text: "Raqamli muhitda boshqalarning konstruktiv faoliyatini rag‘batlantira olaman." },
        { id: 30, categoryId: 8, text: "Guruhdagi salbiy kayfiyatni ijobiy tomonga o‘zgartirishga hissa qo‘sha olaman." },
        { id: 31, categoryId: 8, text: "Raqamli muloqot orqali boshqalarni foydali faoliyatga unday olaman." },
        { id: 32, categoryId: 9, text: "Onlayn muhitda boshqalarga foydali maslahat va konstruktiv fikr bildirishga harakat qilaman." },
        { id: 33, categoryId: 9, text: "Guruhdoshlarimning raqamli faoliyatdagi muvaffaqiyatlarini qo‘llab-quvvatlayman." },
        { id: 34, categoryId: 9, text: "Kimdir raqamli muhitda xatoga yo‘l qo‘ysa, uni kamsitish o‘rniga tushuntirishga harakat qilaman." },
        { id: 35, categoryId: 10, text: "Onlayn bahs yuzaga kelganda muammoni tinch yo‘l bilan hal qilishga harakat qilaman." },
        { id: 36, categoryId: 10, text: "Raqamli muhitdagi kelishmovchilikda ikkala tomonning fikrini tushunishga harakat qilaman." },
        { id: 37, categoryId: 10, text: "Provokatsion xabar yoki izohlarga emotsional tarzda javob berishdan saqlanaman." },
        { id: 38, categoryId: 10, text: "Onlayn konfliktni davom ettirish o‘rniga konstruktiv yechim topishga intilaman." }
    ],
    levels: [
        {
            key: "yuqori",
            title: "Yuqori daraja",
            scoreRange: "145–190 ball",
            reiRange: "76–100%",
            minScore: 145,
            maxScore: 190,
            minPct: 76,
            maxPct: 100,
            color: "var(--success)",
            badgeColor: "#10b981",
            icon: "🌟",
            description: "Siz raqamli muhitda o‘z emotsiyalaringizni yaxshi anglaysiz va boshqara olasiz. Onlayn muloqotda empatiya namoyon qilasiz, boshqalarning hissiy holatini hisobga olasiz, salbiy ta’sir va provokatsiyalarga nisbatan o‘zingizni nazorat qila olasiz. Raqamli konfliktlarni konstruktiv hal qilasiz, o‘z fikringizni madaniyatli va ishonchli ifodalaysiz hamda raqamli muhitda ijobiy munosabatlarni shakllantira olasiz."
        },
        {
            key: "orta",
            title: "O‘rta daraja",
            scoreRange: "97–144 ball",
            reiRange: "51–75%",
            minScore: 97,
            maxScore: 144,
            minPct: 51,
            maxPct: 75,
            color: "var(--warning)",
            badgeColor: "#f59e0b",
            icon: "⚡",
            description: "Siz raqamli muhitdagi o‘z emotsiyalaringizni asosan anglaysiz, biroq ayrim vaziyatlarda ularni boshqarishda qiyinchiliklarga duch kelasiz. Raqamli empatiya va konstruktiv muloqot ko‘nikmalari mavjud, ammo barqaror namoyon bo‘lmaydi. Salbiy izoh, tanqid, bahs yoki stressli vaziyatlarda emotsional reaksiyalaringizni nazorat qilish uchun qo‘shimcha ko‘nikmalarni rivojlantirish talab etiladi."
        },
        {
            key: "past",
            title: "Past daraja",
            scoreRange: "38–96 ball",
            reiRange: "20–50%",
            minScore: 38,
            maxScore: 96,
            minPct: 20,
            maxPct: 50,
            color: "var(--danger)",
            badgeColor: "#ef4444",
            icon: "⚠️",
            description: "Siz raqamli muhitda o‘z emotsional holatingizni anglash va boshqarishda qiyinchiliklarga duch kelasiz. Boshqalarning hissiy holatini tushunish, raqamli empatiya ko‘rsatish va onlayn muloqotni konstruktiv tashkil etish ko‘nikmalari yetarli shakllanmagan. Salbiy axborot, tanqid, provokatsiya yoki konfliktli vaziyatlarda impulsiv emotsional reaksiya bildirish ehtimoli yuqoriroq bo‘lib, raqamli emotsional o‘zingizni boshqarish ko‘nikmalarini rivojlantirish zarur."
        }
    ]
};

