// ====================================================
// DATA.JS - Barcha ma'lumotlar bazasi
// Raqamli Emotsional Intelektni Rivojlantirish platformasi
// ====================================================

// ==================== ASOSIY GOOGLE DISK PAPKALARI ====================
const googleDriveFolders = {
    lectures: "https://drive.google.com/drive/folders/16zB1hycaRV8Ghb9airbRVetNWv69dj_0",
    presentations: "https://drive.google.com/drive/folders/1GT9vhfQTuAEPylLRMwDtqCccxH1bq3U5",
    practicals: "https://drive.google.com/drive/folders/1ViV5KR0qPX7wbtClU8lpRAcAjfmgl7DI"
};

// ==================== RASMIY PLATFORMA MATERIALLARI (Google Disk) ====================
const defaultPlatformMaterials = [
    {
        "id": "mat-1",
        "name": "1- BTK ma'ruza.doc",
        "topic": "1-mavzu. Pedagogik konfliktologiya fanining predmeti, maqsad va vazifalari",
        "subject": "Fan: Raqamli emotsional intelekt",
        "category": "lecture",
        "type": "doc",
        "size": 974000,
        "downloadsCount": 55,
        "uploadedAt": "2026-10-25T12:00:00.000Z",
        "isGoogleDrive": true,
        "driveId": "1mz3uC0gxb4jchJYfonQrN4XfYidPB-jC",
        "driveUrl": "https://drive.google.com/file/d/1mz3uC0gxb4jchJYfonQrN4XfYidPB-jC/view?usp=sharing",
        "viewUrl": "https://drive.google.com/file/d/1mz3uC0gxb4jchJYfonQrN4XfYidPB-jC/view?usp=sharing",
        "previewUrl": "https://drive.google.com/file/d/1mz3uC0gxb4jchJYfonQrN4XfYidPB-jC/preview",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1mz3uC0gxb4jchJYfonQrN4XfYidPB-jC",
        "thumbnailUrl": "https://drive.google.com/thumbnail?id=1mz3uC0gxb4jchJYfonQrN4XfYidPB-jC&sz=w800",
        "slotId": 1
    },
    {
        "id": "mat-2",
        "name": "2- BTK ma'ruza.doc",
        "topic": "2-mavzu. Pedagogik muloqot va uning konfliktogen omillari",
        "subject": "Fan: Raqamli emotsional intelekt",
        "category": "lecture",
        "type": "doc",
        "size": 998000,
        "downloadsCount": 58,
        "uploadedAt": "2026-10-25T12:00:00.000Z",
        "isGoogleDrive": true,
        "driveId": "1I1VOq61Yh7URSZcAzeBW1tWPWp44NacJ",
        "driveUrl": "https://drive.google.com/file/d/1I1VOq61Yh7URSZcAzeBW1tWPWp44NacJ/view?usp=sharing",
        "viewUrl": "https://drive.google.com/file/d/1I1VOq61Yh7URSZcAzeBW1tWPWp44NacJ/view?usp=sharing",
        "previewUrl": "https://drive.google.com/file/d/1I1VOq61Yh7URSZcAzeBW1tWPWp44NacJ/preview",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1I1VOq61Yh7URSZcAzeBW1tWPWp44NacJ",
        "thumbnailUrl": "https://drive.google.com/thumbnail?id=1I1VOq61Yh7URSZcAzeBW1tWPWp44NacJ&sz=w800",
        "slotId": 2
    },
    {
        "id": "mat-3",
        "name": "3- BTK ma'ruza.doc",
        "topic": "3-mavzu. Pedagogik konfliktlarning psixologik tuzilishi va dinamikasi",
        "subject": "Fan: Raqamli emotsional intelekt",
        "category": "lecture",
        "type": "doc",
        "size": 1022000,
        "downloadsCount": 61,
        "uploadedAt": "2026-10-25T12:00:00.000Z",
        "isGoogleDrive": true,
        "driveId": "1XCFvFKNBA7UK04UTRvUAkC4eOUooINEi",
        "driveUrl": "https://drive.google.com/file/d/1XCFvFKNBA7UK04UTRvUAkC4eOUooINEi/view?usp=sharing",
        "viewUrl": "https://drive.google.com/file/d/1XCFvFKNBA7UK04UTRvUAkC4eOUooINEi/view?usp=sharing",
        "previewUrl": "https://drive.google.com/file/d/1XCFvFKNBA7UK04UTRvUAkC4eOUooINEi/preview",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1XCFvFKNBA7UK04UTRvUAkC4eOUooINEi",
        "thumbnailUrl": "https://drive.google.com/thumbnail?id=1XCFvFKNBA7UK04UTRvUAkC4eOUooINEi&sz=w800",
        "slotId": 3
    },
    {
        "id": "mat-4",
        "name": "4- BTK -maruza.doc",
        "topic": "4-mavzu. O'quvchilarning yosh davrlari inqirozlari va pedagogik konfliktlar",
        "subject": "Fan: Raqamli emotsional intelekt",
        "category": "lecture",
        "type": "doc",
        "size": 1046000,
        "downloadsCount": 64,
        "uploadedAt": "2026-10-25T12:00:00.000Z",
        "isGoogleDrive": true,
        "driveId": "1aL9qO0p3zPZqEjzc2iyOCbWzMnpX5FtM",
        "driveUrl": "https://drive.google.com/file/d/1aL9qO0p3zPZqEjzc2iyOCbWzMnpX5FtM/view?usp=sharing",
        "viewUrl": "https://drive.google.com/file/d/1aL9qO0p3zPZqEjzc2iyOCbWzMnpX5FtM/view?usp=sharing",
        "previewUrl": "https://drive.google.com/file/d/1aL9qO0p3zPZqEjzc2iyOCbWzMnpX5FtM/preview",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1aL9qO0p3zPZqEjzc2iyOCbWzMnpX5FtM",
        "thumbnailUrl": "https://drive.google.com/thumbnail?id=1aL9qO0p3zPZqEjzc2iyOCbWzMnpX5FtM&sz=w800",
        "slotId": 4
    },
    {
        "id": "mat-5",
        "name": "5- BTK ma'ruza.doc",
        "topic": "5-mavzu. O'qituvchi va o'quvchi o'rtasidagi pedagogik konfliktlar",
        "subject": "Fan: Raqamli emotsional intelekt",
        "category": "lecture",
        "type": "doc",
        "size": 1070000,
        "downloadsCount": 67,
        "uploadedAt": "2026-10-25T12:00:00.000Z",
        "isGoogleDrive": true,
        "driveId": "18Cn18XdsN9HTbrjSGyZUSqlnS00n4gmR",
        "driveUrl": "https://drive.google.com/file/d/18Cn18XdsN9HTbrjSGyZUSqlnS00n4gmR/view?usp=sharing",
        "viewUrl": "https://drive.google.com/file/d/18Cn18XdsN9HTbrjSGyZUSqlnS00n4gmR/view?usp=sharing",
        "previewUrl": "https://drive.google.com/file/d/18Cn18XdsN9HTbrjSGyZUSqlnS00n4gmR/preview",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=18Cn18XdsN9HTbrjSGyZUSqlnS00n4gmR",
        "thumbnailUrl": "https://drive.google.com/thumbnail?id=18Cn18XdsN9HTbrjSGyZUSqlnS00n4gmR&sz=w800",
        "slotId": 5
    },
    {
        "id": "mat-6",
        "name": "6- BTK taqdimot.doc",
        "topic": "6-mavzu. O'quvchi-o'quvchi munosabatlaridagi ziddiyatlar va bulling",
        "subject": "Fan: Raqamli emotsional intelekt",
        "category": "lecture",
        "type": "doc",
        "size": 1094000,
        "downloadsCount": 70,
        "uploadedAt": "2026-10-25T12:00:00.000Z",
        "isGoogleDrive": true,
        "driveId": "1VXS-bnnVo123RRA1I61F_NHHaKzfW1a2",
        "driveUrl": "https://drive.google.com/file/d/1VXS-bnnVo123RRA1I61F_NHHaKzfW1a2/view?usp=sharing",
        "viewUrl": "https://drive.google.com/file/d/1VXS-bnnVo123RRA1I61F_NHHaKzfW1a2/view?usp=sharing",
        "previewUrl": "https://drive.google.com/file/d/1VXS-bnnVo123RRA1I61F_NHHaKzfW1a2/preview",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1VXS-bnnVo123RRA1I61F_NHHaKzfW1a2",
        "thumbnailUrl": "https://drive.google.com/thumbnail?id=1VXS-bnnVo123RRA1I61F_NHHaKzfW1a2&sz=w800",
        "slotId": 6
    },
    {
        "id": "mat-7",
        "name": "7- BTK maruza.doc",
        "topic": "7-mavzu. O'qituvchi va ota-onalar hamkorligidagi konfliktlar",
        "subject": "Fan: Raqamli emotsional intelekt",
        "category": "lecture",
        "type": "doc",
        "size": 1118000,
        "downloadsCount": 73,
        "uploadedAt": "2026-10-25T12:00:00.000Z",
        "isGoogleDrive": true,
        "driveId": "1xgl-_w3_cyvHfylHCPQUM59htiqcJ7zj",
        "driveUrl": "https://drive.google.com/file/d/1xgl-_w3_cyvHfylHCPQUM59htiqcJ7zj/view?usp=sharing",
        "viewUrl": "https://drive.google.com/file/d/1xgl-_w3_cyvHfylHCPQUM59htiqcJ7zj/view?usp=sharing",
        "previewUrl": "https://drive.google.com/file/d/1xgl-_w3_cyvHfylHCPQUM59htiqcJ7zj/preview",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1xgl-_w3_cyvHfylHCPQUM59htiqcJ7zj",
        "thumbnailUrl": "https://drive.google.com/thumbnail?id=1xgl-_w3_cyvHfylHCPQUM59htiqcJ7zj&sz=w800",
        "slotId": 7
    },
    {
        "id": "mat-8",
        "name": "8- BTK ma'ruza.doc",
        "topic": "8-mavzu. Pedagogik konfliktlarni diagnostika qilish metodlari",
        "subject": "Fan: Raqamli emotsional intelekt",
        "category": "lecture",
        "type": "doc",
        "size": 1142000,
        "downloadsCount": 76,
        "uploadedAt": "2026-10-25T12:00:00.000Z",
        "isGoogleDrive": true,
        "driveId": "1iJsU0o5mT0H9EFEdCrzSi0_Scl-XP72L",
        "driveUrl": "https://drive.google.com/file/d/1iJsU0o5mT0H9EFEdCrzSi0_Scl-XP72L/view?usp=sharing",
        "viewUrl": "https://drive.google.com/file/d/1iJsU0o5mT0H9EFEdCrzSi0_Scl-XP72L/view?usp=sharing",
        "previewUrl": "https://drive.google.com/file/d/1iJsU0o5mT0H9EFEdCrzSi0_Scl-XP72L/preview",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1iJsU0o5mT0H9EFEdCrzSi0_Scl-XP72L",
        "thumbnailUrl": "https://drive.google.com/thumbnail?id=1iJsU0o5mT0H9EFEdCrzSi0_Scl-XP72L&sz=w800",
        "slotId": 8
    },
    {
        "id": "mat-9",
        "name": "9- BTK maruza.doc",
        "topic": "9-mavzu. Pedagogik nizolarni konstruktiv hal etish texnologiyalari",
        "subject": "Fan: Raqamli emotsional intelekt",
        "category": "lecture",
        "type": "doc",
        "size": 1166000,
        "downloadsCount": 79,
        "uploadedAt": "2026-10-25T12:00:00.000Z",
        "isGoogleDrive": true,
        "driveId": "1qIm_vWC-6IAznfnSq8aCPFzNv031qjpv",
        "driveUrl": "https://drive.google.com/file/d/1qIm_vWC-6IAznfnSq8aCPFzNv031qjpv/view?usp=sharing",
        "viewUrl": "https://drive.google.com/file/d/1qIm_vWC-6IAznfnSq8aCPFzNv031qjpv/view?usp=sharing",
        "previewUrl": "https://drive.google.com/file/d/1qIm_vWC-6IAznfnSq8aCPFzNv031qjpv/preview",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1qIm_vWC-6IAznfnSq8aCPFzNv031qjpv",
        "thumbnailUrl": "https://drive.google.com/thumbnail?id=1qIm_vWC-6IAznfnSq8aCPFzNv031qjpv&sz=w800",
        "slotId": 9
    },
    {
        "id": "mat-10",
        "name": "10- BTK ma'ruza.doc",
        "topic": "10-mavzu. Ta'lim muassasalarida pedagogik mediatorlik (vositachilik) xizmati",
        "subject": "Fan: Raqamli emotsional intelekt",
        "category": "lecture",
        "type": "doc",
        "size": 1190000,
        "downloadsCount": 82,
        "uploadedAt": "2026-10-25T12:00:00.000Z",
        "isGoogleDrive": true,
        "driveId": "1gGlIARi4T2QV8hZXJq90ck6kKm474MNt",
        "driveUrl": "https://drive.google.com/file/d/1gGlIARi4T2QV8hZXJq90ck6kKm474MNt/view?usp=sharing",
        "viewUrl": "https://drive.google.com/file/d/1gGlIARi4T2QV8hZXJq90ck6kKm474MNt/view?usp=sharing",
        "previewUrl": "https://drive.google.com/file/d/1gGlIARi4T2QV8hZXJq90ck6kKm474MNt/preview",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1gGlIARi4T2QV8hZXJq90ck6kKm474MNt",
        "thumbnailUrl": "https://drive.google.com/thumbnail?id=1gGlIARi4T2QV8hZXJq90ck6kKm474MNt&sz=w800",
        "slotId": 10
    },
    {
        "id": "mat-11",
        "name": "11- BTK maruza.doc",
        "topic": "11-mavzu. Oila va maktab hamkorligida pedagogik nizolarni bartaraf etish",
        "subject": "Fan: Raqamli emotsional intelekt",
        "category": "lecture",
        "type": "doc",
        "size": 1214000,
        "downloadsCount": 85,
        "uploadedAt": "2026-10-25T12:00:00.000Z",
        "isGoogleDrive": true,
        "driveId": "1v7GRp5YPt84j9MWvMFKSAir6NAZbMnXx",
        "driveUrl": "https://drive.google.com/file/d/1v7GRp5YPt84j9MWvMFKSAir6NAZbMnXx/view?usp=sharing",
        "viewUrl": "https://drive.google.com/file/d/1v7GRp5YPt84j9MWvMFKSAir6NAZbMnXx/view?usp=sharing",
        "previewUrl": "https://drive.google.com/file/d/1v7GRp5YPt84j9MWvMFKSAir6NAZbMnXx/preview",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1v7GRp5YPt84j9MWvMFKSAir6NAZbMnXx",
        "thumbnailUrl": "https://drive.google.com/thumbnail?id=1v7GRp5YPt84j9MWvMFKSAir6NAZbMnXx&sz=w800",
        "slotId": 11
    },
    {
        "id": "mat-12",
        "name": "12- BTK ma'ruza.doc",
        "topic": "12-mavzu. Sinf jamoasida sog'lom psixologik iqlimni shakllantirish texnologiyalari",
        "subject": "Fan: Raqamli emotsional intelekt",
        "category": "lecture",
        "type": "doc",
        "size": 1238000,
        "downloadsCount": 88,
        "uploadedAt": "2026-10-25T12:00:00.000Z",
        "isGoogleDrive": true,
        "driveId": "1fP73lD0r1pgk8vZlLzfbQLKcfbEzwV8V",
        "driveUrl": "https://drive.google.com/file/d/1fP73lD0r1pgk8vZlLzfbQLKcfbEzwV8V/view?usp=sharing",
        "viewUrl": "https://drive.google.com/file/d/1fP73lD0r1pgk8vZlLzfbQLKcfbEzwV8V/view?usp=sharing",
        "previewUrl": "https://drive.google.com/file/d/1fP73lD0r1pgk8vZlLzfbQLKcfbEzwV8V/preview",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1fP73lD0r1pgk8vZlLzfbQLKcfbEzwV8V",
        "thumbnailUrl": "https://drive.google.com/thumbnail?id=1fP73lD0r1pgk8vZlLzfbQLKcfbEzwV8V&sz=w800",
        "slotId": 12
    },
    {
        "id": "mat-13",
        "name": "13- BTK maruza.doc",
        "topic": "13-mavzu. O'qituvchining kasbiy kompetensiyasi va konfliktologik madaniyati",
        "subject": "Fan: Raqamli emotsional intelekt",
        "category": "lecture",
        "type": "doc",
        "size": 1262000,
        "downloadsCount": 91,
        "uploadedAt": "2026-10-25T12:00:00.000Z",
        "isGoogleDrive": true,
        "driveId": "1ALyIm5JhkIWE8x1oLXMVSBEQnerLcX0q",
        "driveUrl": "https://drive.google.com/file/d/1ALyIm5JhkIWE8x1oLXMVSBEQnerLcX0q/view?usp=sharing",
        "viewUrl": "https://drive.google.com/file/d/1ALyIm5JhkIWE8x1oLXMVSBEQnerLcX0q/view?usp=sharing",
        "previewUrl": "https://drive.google.com/file/d/1ALyIm5JhkIWE8x1oLXMVSBEQnerLcX0q/preview",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ALyIm5JhkIWE8x1oLXMVSBEQnerLcX0q",
        "thumbnailUrl": "https://drive.google.com/thumbnail?id=1ALyIm5JhkIWE8x1oLXMVSBEQnerLcX0q&sz=w800",
        "slotId": 13
    },
    {
        "id": "mat-14",
        "name": "14- BTK ma'ruza.doc",
        "topic": "14-mavzu. Oiladagi va jamoadagi konfliktlar va ularning yechimlari",
        "subject": "Fan: Raqamli emotsional intelekt",
        "category": "lecture",
        "type": "doc",
        "size": 1286000,
        "downloadsCount": 94,
        "uploadedAt": "2026-10-25T12:00:00.000Z",
        "isGoogleDrive": true,
        "driveId": "1_xodYAm4LDGuz3EjuyzPgHtySNmY32sq",
        "driveUrl": "https://drive.google.com/file/d/1_xodYAm4LDGuz3EjuyzPgHtySNmY32sq/view?usp=sharing",
        "viewUrl": "https://drive.google.com/file/d/1_xodYAm4LDGuz3EjuyzPgHtySNmY32sq/view?usp=sharing",
        "previewUrl": "https://drive.google.com/file/d/1_xodYAm4LDGuz3EjuyzPgHtySNmY32sq/preview",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1_xodYAm4LDGuz3EjuyzPgHtySNmY32sq",
        "thumbnailUrl": "https://drive.google.com/thumbnail?id=1_xodYAm4LDGuz3EjuyzPgHtySNmY32sq&sz=w800",
        "slotId": 14
    },
    {
        "id": "mat-15",
        "name": "15- BTK ma'ruza.doc",
        "topic": "15-mavzu. Boshlang'ich ta'limda pedagogik konfliktlarni bartaraf etishda sinf rahbarining o'rni",
        "subject": "Fan: Raqamli emotsional intelekt",
        "category": "lecture",
        "type": "doc",
        "size": 1310000,
        "downloadsCount": 97,
        "uploadedAt": "2026-10-25T12:00:00.000Z",
        "isGoogleDrive": true,
        "driveId": "1xWoyBanJDzzjczLFSGTgMdEH2vno68Qz",
        "driveUrl": "https://drive.google.com/file/d/1xWoyBanJDzzjczLFSGTgMdEH2vno68Qz/view?usp=sharing",
        "viewUrl": "https://drive.google.com/file/d/1xWoyBanJDzzjczLFSGTgMdEH2vno68Qz/view?usp=sharing",
        "previewUrl": "https://drive.google.com/file/d/1xWoyBanJDzzjczLFSGTgMdEH2vno68Qz/preview",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1xWoyBanJDzzjczLFSGTgMdEH2vno68Qz",
        "thumbnailUrl": "https://drive.google.com/thumbnail?id=1xWoyBanJDzzjczLFSGTgMdEH2vno68Qz&sz=w800",
        "slotId": 15
    },
    {
        "id": "pres-1",
        "name": "BTK 1-taqdimot.pptx",
        "topic": "1-mavzu taqdimoti: Pedagogik konfliktologiya fanining predmeti, maqsad va vazifalari",
        "subject": "Fan: Raqamli emotsional intelekt",
        "category": "presentation",
        "type": "pptx",
        "size": 2515000,
        "downloadsCount": 69,
        "uploadedAt": "2026-10-25T12:00:00.000Z",
        "isGoogleDrive": true,
        "driveId": "1sjcrIizlzFukcsu8MD7-7JTEcZDzQYy3",
        "driveUrl": "https://drive.google.com/file/d/1sjcrIizlzFukcsu8MD7-7JTEcZDzQYy3/view?usp=sharing",
        "viewUrl": "https://drive.google.com/file/d/1sjcrIizlzFukcsu8MD7-7JTEcZDzQYy3/view?usp=sharing",
        "previewUrl": "https://drive.google.com/file/d/1sjcrIizlzFukcsu8MD7-7JTEcZDzQYy3/preview",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1sjcrIizlzFukcsu8MD7-7JTEcZDzQYy3",
        "thumbnailUrl": "https://drive.google.com/thumbnail?id=1sjcrIizlzFukcsu8MD7-7JTEcZDzQYy3&sz=w800",
        "slotId": 1
    },
    {
        "id": "pres-2",
        "name": "BTK-2-taqdimot.pdf",
        "topic": "2-mavzu taqdimoti: Pedagogik muloqot va uning konfliktogen omillari",
        "subject": "Fan: Raqamli emotsional intelekt",
        "category": "presentation",
        "type": "pdf",
        "size": 2580000,
        "downloadsCount": 73,
        "uploadedAt": "2026-10-25T12:00:00.000Z",
        "isGoogleDrive": true,
        "driveId": "1oQhqDulny2VUp2mPlgMW85dYIEkwTRrY",
        "driveUrl": "https://drive.google.com/file/d/1oQhqDulny2VUp2mPlgMW85dYIEkwTRrY/view?usp=sharing",
        "viewUrl": "https://drive.google.com/file/d/1oQhqDulny2VUp2mPlgMW85dYIEkwTRrY/view?usp=sharing",
        "previewUrl": "https://drive.google.com/file/d/1oQhqDulny2VUp2mPlgMW85dYIEkwTRrY/preview",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1oQhqDulny2VUp2mPlgMW85dYIEkwTRrY",
        "thumbnailUrl": "https://drive.google.com/thumbnail?id=1oQhqDulny2VUp2mPlgMW85dYIEkwTRrY&sz=w800",
        "slotId": 2
    },
    {
        "id": "pres-3",
        "name": "BTK-3-taqdimot.ppt",
        "topic": "3-mavzu taqdimoti: Pedagogik konfliktlarning psixologik tuzilishi va dinamikasi",
        "subject": "Fan: Raqamli emotsional intelekt",
        "category": "presentation",
        "type": "ppt",
        "size": 2645000,
        "downloadsCount": 77,
        "uploadedAt": "2026-10-25T12:00:00.000Z",
        "isGoogleDrive": true,
        "driveId": "1G0P1svJvs_4j-DjNnvS3_74_F84BdcRw",
        "driveUrl": "https://drive.google.com/file/d/1G0P1svJvs_4j-DjNnvS3_74_F84BdcRw/view?usp=sharing",
        "viewUrl": "https://drive.google.com/file/d/1G0P1svJvs_4j-DjNnvS3_74_F84BdcRw/view?usp=sharing",
        "previewUrl": "https://drive.google.com/file/d/1G0P1svJvs_4j-DjNnvS3_74_F84BdcRw/preview",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1G0P1svJvs_4j-DjNnvS3_74_F84BdcRw",
        "thumbnailUrl": "https://drive.google.com/thumbnail?id=1G0P1svJvs_4j-DjNnvS3_74_F84BdcRw&sz=w800",
        "slotId": 3
    },
    {
        "id": "pres-4",
        "name": "BTK-4-taqdimot.pptx",
        "topic": "4-mavzu taqdimoti: O'quvchilarning yosh davrlari inqirozlari va pedagogik konfliktlar",
        "subject": "Fan: Raqamli emotsional intelekt",
        "category": "presentation",
        "type": "pptx",
        "size": 2710000,
        "downloadsCount": 81,
        "uploadedAt": "2026-10-25T12:00:00.000Z",
        "isGoogleDrive": true,
        "driveId": "1Svi5QZRbgkq6gUEs_QCa3y6gZ3v-RH7k",
        "driveUrl": "https://drive.google.com/file/d/1Svi5QZRbgkq6gUEs_QCa3y6gZ3v-RH7k/view?usp=sharing",
        "viewUrl": "https://drive.google.com/file/d/1Svi5QZRbgkq6gUEs_QCa3y6gZ3v-RH7k/view?usp=sharing",
        "previewUrl": "https://drive.google.com/file/d/1Svi5QZRbgkq6gUEs_QCa3y6gZ3v-RH7k/preview",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Svi5QZRbgkq6gUEs_QCa3y6gZ3v-RH7k",
        "thumbnailUrl": "https://drive.google.com/thumbnail?id=1Svi5QZRbgkq6gUEs_QCa3y6gZ3v-RH7k&sz=w800",
        "slotId": 4
    },
    {
        "id": "pres-5",
        "name": "BTK-5-taqdimot.ppt",
        "topic": "5-mavzu taqdimoti: O'qituvchi va o'quvchi o'rtasidagi pedagogik konfliktlar",
        "subject": "Fan: Raqamli emotsional intelekt",
        "category": "presentation",
        "type": "ppt",
        "size": 2775000,
        "downloadsCount": 85,
        "uploadedAt": "2026-10-25T12:00:00.000Z",
        "isGoogleDrive": true,
        "driveId": "1_-UZ-u_O2VHK7wstgoFwLMT0zqe_OBKG",
        "driveUrl": "https://drive.google.com/file/d/1_-UZ-u_O2VHK7wstgoFwLMT0zqe_OBKG/view?usp=sharing",
        "viewUrl": "https://drive.google.com/file/d/1_-UZ-u_O2VHK7wstgoFwLMT0zqe_OBKG/view?usp=sharing",
        "previewUrl": "https://drive.google.com/file/d/1_-UZ-u_O2VHK7wstgoFwLMT0zqe_OBKG/preview",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1_-UZ-u_O2VHK7wstgoFwLMT0zqe_OBKG",
        "thumbnailUrl": "https://drive.google.com/thumbnail?id=1_-UZ-u_O2VHK7wstgoFwLMT0zqe_OBKG&sz=w800",
        "slotId": 5
    },
    {
        "id": "pres-6",
        "name": "BTK-6-taqdimot.pptx",
        "topic": "6-mavzu taqdimoti: O'quvchi-o'quvchi munosabatlaridagi ziddiyatlar va bulling",
        "subject": "Fan: Raqamli emotsional intelekt",
        "category": "presentation",
        "type": "pptx",
        "size": 2840000,
        "downloadsCount": 89,
        "uploadedAt": "2026-10-25T12:00:00.000Z",
        "isGoogleDrive": true,
        "driveId": "1kJZFsWgh1unUN-5c19Wl610vmqWLKuNL",
        "driveUrl": "https://drive.google.com/file/d/1kJZFsWgh1unUN-5c19Wl610vmqWLKuNL/view?usp=sharing",
        "viewUrl": "https://drive.google.com/file/d/1kJZFsWgh1unUN-5c19Wl610vmqWLKuNL/view?usp=sharing",
        "previewUrl": "https://drive.google.com/file/d/1kJZFsWgh1unUN-5c19Wl610vmqWLKuNL/preview",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1kJZFsWgh1unUN-5c19Wl610vmqWLKuNL",
        "thumbnailUrl": "https://drive.google.com/thumbnail?id=1kJZFsWgh1unUN-5c19Wl610vmqWLKuNL&sz=w800",
        "slotId": 6
    },
    {
        "id": "pres-7",
        "name": "BTK-7-taqdimot.pptx",
        "topic": "7-mavzu taqdimoti: O'qituvchi va ota-onalar hamkorligidagi konfliktlar",
        "subject": "Fan: Raqamli emotsional intelekt",
        "category": "presentation",
        "type": "pptx",
        "size": 2905000,
        "downloadsCount": 93,
        "uploadedAt": "2026-10-25T12:00:00.000Z",
        "isGoogleDrive": true,
        "driveId": "1OhqGVur7Z4TQo2q6_wDJMilOvbLtkQwR",
        "driveUrl": "https://drive.google.com/file/d/1OhqGVur7Z4TQo2q6_wDJMilOvbLtkQwR/view?usp=sharing",
        "viewUrl": "https://drive.google.com/file/d/1OhqGVur7Z4TQo2q6_wDJMilOvbLtkQwR/view?usp=sharing",
        "previewUrl": "https://drive.google.com/file/d/1OhqGVur7Z4TQo2q6_wDJMilOvbLtkQwR/preview",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1OhqGVur7Z4TQo2q6_wDJMilOvbLtkQwR",
        "thumbnailUrl": "https://drive.google.com/thumbnail?id=1OhqGVur7Z4TQo2q6_wDJMilOvbLtkQwR&sz=w800",
        "slotId": 7
    },
    {
        "id": "pres-8",
        "name": "BTK-8-taqdimot.pptx",
        "topic": "8-mavzu taqdimoti: Pedagogik konfliktlarni diagnostika qilish metodlari",
        "subject": "Fan: Raqamli emotsional intelekt",
        "category": "presentation",
        "type": "pptx",
        "size": 2970000,
        "downloadsCount": 97,
        "uploadedAt": "2026-10-25T12:00:00.000Z",
        "isGoogleDrive": true,
        "driveId": "1RBfcGlVUiPeYMkq-lo1rRn_z4iTIJI63",
        "driveUrl": "https://drive.google.com/file/d/1RBfcGlVUiPeYMkq-lo1rRn_z4iTIJI63/view?usp=sharing",
        "viewUrl": "https://drive.google.com/file/d/1RBfcGlVUiPeYMkq-lo1rRn_z4iTIJI63/view?usp=sharing",
        "previewUrl": "https://drive.google.com/file/d/1RBfcGlVUiPeYMkq-lo1rRn_z4iTIJI63/preview",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1RBfcGlVUiPeYMkq-lo1rRn_z4iTIJI63",
        "thumbnailUrl": "https://drive.google.com/thumbnail?id=1RBfcGlVUiPeYMkq-lo1rRn_z4iTIJI63&sz=w800",
        "slotId": 8
    },
    {
        "id": "pres-9",
        "name": "BTK-9-taqdimot.pptx",
        "topic": "9-mavzu taqdimoti: Pedagogik nizolarni konstruktiv hal etish texnologiyalari",
        "subject": "Fan: Raqamli emotsional intelekt",
        "category": "presentation",
        "type": "pptx",
        "size": 3035000,
        "downloadsCount": 101,
        "uploadedAt": "2026-10-25T12:00:00.000Z",
        "isGoogleDrive": true,
        "driveId": "14RWNQkPTtSQ5OSq26l65urVSZ7j95Nkg",
        "driveUrl": "https://drive.google.com/file/d/14RWNQkPTtSQ5OSq26l65urVSZ7j95Nkg/view?usp=sharing",
        "viewUrl": "https://drive.google.com/file/d/14RWNQkPTtSQ5OSq26l65urVSZ7j95Nkg/view?usp=sharing",
        "previewUrl": "https://drive.google.com/file/d/14RWNQkPTtSQ5OSq26l65urVSZ7j95Nkg/preview",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=14RWNQkPTtSQ5OSq26l65urVSZ7j95Nkg",
        "thumbnailUrl": "https://drive.google.com/thumbnail?id=14RWNQkPTtSQ5OSq26l65urVSZ7j95Nkg&sz=w800",
        "slotId": 9
    },
    {
        "id": "pres-10",
        "name": "BTK-10-taqdimot.pptx",
        "topic": "10-mavzu taqdimoti: Ta'lim muassasalarida pedagogik mediatorlik (vositachilik) xizmati",
        "subject": "Fan: Raqamli emotsional intelekt",
        "category": "presentation",
        "type": "pptx",
        "size": 3100000,
        "downloadsCount": 105,
        "uploadedAt": "2026-10-25T12:00:00.000Z",
        "isGoogleDrive": true,
        "driveId": "1abOmAlxswNhABDzM6Z6LIM8BwsgcuR0S",
        "driveUrl": "https://drive.google.com/file/d/1abOmAlxswNhABDzM6Z6LIM8BwsgcuR0S/view?usp=sharing",
        "viewUrl": "https://drive.google.com/file/d/1abOmAlxswNhABDzM6Z6LIM8BwsgcuR0S/view?usp=sharing",
        "previewUrl": "https://drive.google.com/file/d/1abOmAlxswNhABDzM6Z6LIM8BwsgcuR0S/preview",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1abOmAlxswNhABDzM6Z6LIM8BwsgcuR0S",
        "thumbnailUrl": "https://drive.google.com/thumbnail?id=1abOmAlxswNhABDzM6Z6LIM8BwsgcuR0S&sz=w800",
        "slotId": 10
    },
    {
        "id": "pres-11",
        "name": "BTK-11-taqdimot.pptx",
        "topic": "11-mavzu taqdimoti: Oila va maktab hamkorligida pedagogik nizolarni bartaraf etish",
        "subject": "Fan: Raqamli emotsional intelekt",
        "category": "presentation",
        "type": "pptx",
        "size": 3165000,
        "downloadsCount": 109,
        "uploadedAt": "2026-10-25T12:00:00.000Z",
        "isGoogleDrive": true,
        "driveId": "1gdp0sflsq7loxWBqMo7iM6YvY2qQ09Pr",
        "driveUrl": "https://drive.google.com/file/d/1gdp0sflsq7loxWBqMo7iM6YvY2qQ09Pr/view?usp=sharing",
        "viewUrl": "https://drive.google.com/file/d/1gdp0sflsq7loxWBqMo7iM6YvY2qQ09Pr/view?usp=sharing",
        "previewUrl": "https://drive.google.com/file/d/1gdp0sflsq7loxWBqMo7iM6YvY2qQ09Pr/preview",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1gdp0sflsq7loxWBqMo7iM6YvY2qQ09Pr",
        "thumbnailUrl": "https://drive.google.com/thumbnail?id=1gdp0sflsq7loxWBqMo7iM6YvY2qQ09Pr&sz=w800",
        "slotId": 11
    },
    {
        "id": "pres-12",
        "name": "BTK-12-taqdimot.pptx",
        "topic": "12-mavzu taqdimoti: Sinf jamoasida sog'lom psixologik iqlimni shakllantirish texnologiyalari",
        "subject": "Fan: Raqamli emotsional intelekt",
        "category": "presentation",
        "type": "pptx",
        "size": 3230000,
        "downloadsCount": 113,
        "uploadedAt": "2026-10-25T12:00:00.000Z",
        "isGoogleDrive": true,
        "driveId": "16G8hAIrIIwiMsq9kGTU7IBzfQreZAjOd",
        "driveUrl": "https://drive.google.com/file/d/16G8hAIrIIwiMsq9kGTU7IBzfQreZAjOd/view?usp=sharing",
        "viewUrl": "https://drive.google.com/file/d/16G8hAIrIIwiMsq9kGTU7IBzfQreZAjOd/view?usp=sharing",
        "previewUrl": "https://drive.google.com/file/d/16G8hAIrIIwiMsq9kGTU7IBzfQreZAjOd/preview",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=16G8hAIrIIwiMsq9kGTU7IBzfQreZAjOd",
        "thumbnailUrl": "https://drive.google.com/thumbnail?id=16G8hAIrIIwiMsq9kGTU7IBzfQreZAjOd&sz=w800",
        "slotId": 12
    },
    {
        "id": "pres-13",
        "name": "BTK_13-taqdimo.pptx",
        "topic": "13-mavzu taqdimoti: O'qituvchining kasbiy kompetensiyasi va konfliktologik madaniyati",
        "subject": "Fan: Raqamli emotsional intelekt",
        "category": "presentation",
        "type": "pptx",
        "size": 3295000,
        "downloadsCount": 117,
        "uploadedAt": "2026-10-25T12:00:00.000Z",
        "isGoogleDrive": true,
        "driveId": "1jk2_Ig68SI1zhOH9nf2puFG5UWMJDeXE",
        "driveUrl": "https://drive.google.com/file/d/1jk2_Ig68SI1zhOH9nf2puFG5UWMJDeXE/view?usp=sharing",
        "viewUrl": "https://drive.google.com/file/d/1jk2_Ig68SI1zhOH9nf2puFG5UWMJDeXE/view?usp=sharing",
        "previewUrl": "https://drive.google.com/file/d/1jk2_Ig68SI1zhOH9nf2puFG5UWMJDeXE/preview",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1jk2_Ig68SI1zhOH9nf2puFG5UWMJDeXE",
        "thumbnailUrl": "https://drive.google.com/thumbnail?id=1jk2_Ig68SI1zhOH9nf2puFG5UWMJDeXE&sz=w800",
        "slotId": 13
    },
    {
        "id": "pres-14",
        "name": "BTK-14-taqdimot.pptx",
        "topic": "14-mavzu taqdimoti: Oiladagi va jamoadagi konfliktlar va ularning yechimlari",
        "subject": "Fan: Raqamli emotsional intelekt",
        "category": "presentation",
        "type": "pptx",
        "size": 3360000,
        "downloadsCount": 121,
        "uploadedAt": "2026-10-25T12:00:00.000Z",
        "isGoogleDrive": true,
        "driveId": "1Qee9MpEjY4qXJT-KNdKmVFPWx1KXO834",
        "driveUrl": "https://drive.google.com/file/d/1Qee9MpEjY4qXJT-KNdKmVFPWx1KXO834/view?usp=sharing",
        "viewUrl": "https://drive.google.com/file/d/1Qee9MpEjY4qXJT-KNdKmVFPWx1KXO834/view?usp=sharing",
        "previewUrl": "https://drive.google.com/file/d/1Qee9MpEjY4qXJT-KNdKmVFPWx1KXO834/preview",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Qee9MpEjY4qXJT-KNdKmVFPWx1KXO834",
        "thumbnailUrl": "https://drive.google.com/thumbnail?id=1Qee9MpEjY4qXJT-KNdKmVFPWx1KXO834&sz=w800",
        "slotId": 14
    },
    {
        "id": "prac-1",
        "name": "1- BTK amaliy (4).doc",
        "topic": "1-amaliy mashg'ulot: Pedagogik konfliktologiya fanining predmeti, maqsad va vazifalari",
        "subject": "Fan: Raqamli emotsional intelekt",
        "category": "practical",
        "type": "doc",
        "size": 908000,
        "downloadsCount": 50,
        "uploadedAt": "2026-10-25T12:00:00.000Z",
        "isGoogleDrive": true,
        "driveId": "1LkD0FG7cs90B5KInAye5a9C6UBHMb0MQ",
        "driveUrl": "https://drive.google.com/file/d/1LkD0FG7cs90B5KInAye5a9C6UBHMb0MQ/view?usp=sharing",
        "viewUrl": "https://drive.google.com/file/d/1LkD0FG7cs90B5KInAye5a9C6UBHMb0MQ/view?usp=sharing",
        "previewUrl": "https://drive.google.com/file/d/1LkD0FG7cs90B5KInAye5a9C6UBHMb0MQ/preview",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1LkD0FG7cs90B5KInAye5a9C6UBHMb0MQ",
        "thumbnailUrl": "https://drive.google.com/thumbnail?id=1LkD0FG7cs90B5KInAye5a9C6UBHMb0MQ&sz=w800",
        "slotId": 1
    },
    {
        "id": "prac-2",
        "name": "2- BTK amaliy.doc",
        "topic": "2-amaliy mashg'ulot: Pedagogik muloqot va uning konfliktogen omillari",
        "subject": "Fan: Raqamli emotsional intelekt",
        "category": "practical",
        "type": "doc",
        "size": 926000,
        "downloadsCount": 52,
        "uploadedAt": "2026-10-25T12:00:00.000Z",
        "isGoogleDrive": true,
        "driveId": "1_ab6LzNHsDkoJt6MtOHXNQxSwKjIPRD6",
        "driveUrl": "https://drive.google.com/file/d/1_ab6LzNHsDkoJt6MtOHXNQxSwKjIPRD6/view?usp=sharing",
        "viewUrl": "https://drive.google.com/file/d/1_ab6LzNHsDkoJt6MtOHXNQxSwKjIPRD6/view?usp=sharing",
        "previewUrl": "https://drive.google.com/file/d/1_ab6LzNHsDkoJt6MtOHXNQxSwKjIPRD6/preview",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1_ab6LzNHsDkoJt6MtOHXNQxSwKjIPRD6",
        "thumbnailUrl": "https://drive.google.com/thumbnail?id=1_ab6LzNHsDkoJt6MtOHXNQxSwKjIPRD6&sz=w800",
        "slotId": 2
    },
    {
        "id": "prac-3",
        "name": "3- BTK amaliy.doc",
        "topic": "3-amaliy mashg'ulot: Pedagogik konfliktlarning psixologik tuzilishi va dinamikasi",
        "subject": "Fan: Raqamli emotsional intelekt",
        "category": "practical",
        "type": "doc",
        "size": 944000,
        "downloadsCount": 54,
        "uploadedAt": "2026-10-25T12:00:00.000Z",
        "isGoogleDrive": true,
        "driveId": "14i9eVG5GrGX-zzprFU6j7EmqCHsdmcVd",
        "driveUrl": "https://drive.google.com/file/d/14i9eVG5GrGX-zzprFU6j7EmqCHsdmcVd/view?usp=sharing",
        "viewUrl": "https://drive.google.com/file/d/14i9eVG5GrGX-zzprFU6j7EmqCHsdmcVd/view?usp=sharing",
        "previewUrl": "https://drive.google.com/file/d/14i9eVG5GrGX-zzprFU6j7EmqCHsdmcVd/preview",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=14i9eVG5GrGX-zzprFU6j7EmqCHsdmcVd",
        "thumbnailUrl": "https://drive.google.com/thumbnail?id=14i9eVG5GrGX-zzprFU6j7EmqCHsdmcVd&sz=w800",
        "slotId": 3
    },
    {
        "id": "prac-4",
        "name": "4- BTK amaliy.doc",
        "topic": "4-amaliy mashg'ulot: O'quvchilarning yosh davrlari inqirozlari va pedagogik konfliktlar",
        "subject": "Fan: Raqamli emotsional intelekt",
        "category": "practical",
        "type": "doc",
        "size": 962000,
        "downloadsCount": 56,
        "uploadedAt": "2026-10-25T12:00:00.000Z",
        "isGoogleDrive": true,
        "driveId": "1bYM2nRY7yFdRkbSJbXZ3pHD89_p9bE6h",
        "driveUrl": "https://drive.google.com/file/d/1bYM2nRY7yFdRkbSJbXZ3pHD89_p9bE6h/view?usp=sharing",
        "viewUrl": "https://drive.google.com/file/d/1bYM2nRY7yFdRkbSJbXZ3pHD89_p9bE6h/view?usp=sharing",
        "previewUrl": "https://drive.google.com/file/d/1bYM2nRY7yFdRkbSJbXZ3pHD89_p9bE6h/preview",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1bYM2nRY7yFdRkbSJbXZ3pHD89_p9bE6h",
        "thumbnailUrl": "https://drive.google.com/thumbnail?id=1bYM2nRY7yFdRkbSJbXZ3pHD89_p9bE6h&sz=w800",
        "slotId": 4
    },
    {
        "id": "prac-5",
        "name": "5- BTK amaliy.doc",
        "topic": "5-amaliy mashg'ulot: O'qituvchi va o'quvchi o'rtasidagi pedagogik konfliktlar",
        "subject": "Fan: Raqamli emotsional intelekt",
        "category": "practical",
        "type": "doc",
        "size": 980000,
        "downloadsCount": 58,
        "uploadedAt": "2026-10-25T12:00:00.000Z",
        "isGoogleDrive": true,
        "driveId": "1sOmSTH0tz7YodLIK339_UsMQj4w-sMnQ",
        "driveUrl": "https://drive.google.com/file/d/1sOmSTH0tz7YodLIK339_UsMQj4w-sMnQ/view?usp=sharing",
        "viewUrl": "https://drive.google.com/file/d/1sOmSTH0tz7YodLIK339_UsMQj4w-sMnQ/view?usp=sharing",
        "previewUrl": "https://drive.google.com/file/d/1sOmSTH0tz7YodLIK339_UsMQj4w-sMnQ/preview",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1sOmSTH0tz7YodLIK339_UsMQj4w-sMnQ",
        "thumbnailUrl": "https://drive.google.com/thumbnail?id=1sOmSTH0tz7YodLIK339_UsMQj4w-sMnQ&sz=w800",
        "slotId": 5
    },
    {
        "id": "prac-6",
        "name": "6- BTK amaliy (4).doc",
        "topic": "6-amaliy mashg'ulot: O'quvchi-o'quvchi munosabatlaridagi ziddiyatlar va bulling",
        "subject": "Fan: Raqamli emotsional intelekt",
        "category": "practical",
        "type": "doc",
        "size": 998000,
        "downloadsCount": 60,
        "uploadedAt": "2026-10-25T12:00:00.000Z",
        "isGoogleDrive": true,
        "driveId": "1kipeMVBAR9cUIU8r7vx-y_WgO6dOtTPD",
        "driveUrl": "https://drive.google.com/file/d/1kipeMVBAR9cUIU8r7vx-y_WgO6dOtTPD/view?usp=sharing",
        "viewUrl": "https://drive.google.com/file/d/1kipeMVBAR9cUIU8r7vx-y_WgO6dOtTPD/view?usp=sharing",
        "previewUrl": "https://drive.google.com/file/d/1kipeMVBAR9cUIU8r7vx-y_WgO6dOtTPD/preview",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1kipeMVBAR9cUIU8r7vx-y_WgO6dOtTPD",
        "thumbnailUrl": "https://drive.google.com/thumbnail?id=1kipeMVBAR9cUIU8r7vx-y_WgO6dOtTPD&sz=w800",
        "slotId": 6
    },
    {
        "id": "prac-7",
        "name": "7- BTK amaliy.doc",
        "topic": "7-amaliy mashg'ulot: O'qituvchi va ota-onalar hamkorligidagi konfliktlar",
        "subject": "Fan: Raqamli emotsional intelekt",
        "category": "practical",
        "type": "doc",
        "size": 1016000,
        "downloadsCount": 62,
        "uploadedAt": "2026-10-25T12:00:00.000Z",
        "isGoogleDrive": true,
        "driveId": "1hlsih69xI608nPL7TLoqpglDStaKJ1mR",
        "driveUrl": "https://drive.google.com/file/d/1hlsih69xI608nPL7TLoqpglDStaKJ1mR/view?usp=sharing",
        "viewUrl": "https://drive.google.com/file/d/1hlsih69xI608nPL7TLoqpglDStaKJ1mR/view?usp=sharing",
        "previewUrl": "https://drive.google.com/file/d/1hlsih69xI608nPL7TLoqpglDStaKJ1mR/preview",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1hlsih69xI608nPL7TLoqpglDStaKJ1mR",
        "thumbnailUrl": "https://drive.google.com/thumbnail?id=1hlsih69xI608nPL7TLoqpglDStaKJ1mR&sz=w800",
        "slotId": 7
    },
    {
        "id": "prac-8",
        "name": "8- BTK amaliy.doc",
        "topic": "8-amaliy mashg'ulot: Pedagogik konfliktlarni diagnostika qilish metodlari",
        "subject": "Fan: Raqamli emotsional intelekt",
        "category": "practical",
        "type": "doc",
        "size": 1034000,
        "downloadsCount": 65,
        "uploadedAt": "2026-10-25T12:00:00.000Z",
        "isGoogleDrive": true,
        "driveId": "1pV26j33cDA45zH2e9A83JZmgSKGVqBDe",
        "driveUrl": "https://drive.google.com/file/d/1pV26j33cDA45zH2e9A83JZmgSKGVqBDe/view?usp=sharing",
        "viewUrl": "https://drive.google.com/file/d/1pV26j33cDA45zH2e9A83JZmgSKGVqBDe/view?usp=sharing",
        "previewUrl": "https://drive.google.com/file/d/1pV26j33cDA45zH2e9A83JZmgSKGVqBDe/preview",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1pV26j33cDA45zH2e9A83JZmgSKGVqBDe",
        "thumbnailUrl": "https://drive.google.com/thumbnail?id=1pV26j33cDA45zH2e9A83JZmgSKGVqBDe&sz=w800",
        "slotId": 8
    },
    {
        "id": "prac-9",
        "name": "9- BTK amaliy.doc",
        "topic": "9-amaliy mashg'ulot: Pedagogik nizolarni konstruktiv hal etish texnologiyalari",
        "subject": "Fan: Raqamli emotsional intelekt",
        "category": "practical",
        "type": "doc",
        "size": 1052000,
        "downloadsCount": 68,
        "uploadedAt": "2026-10-25T12:00:00.000Z",
        "isGoogleDrive": true,
        "driveId": "1UNb2tFvPbtaxpMCoV2Q7oh7JVMK6sc0B",
        "driveUrl": "https://drive.google.com/file/d/1UNb2tFvPbtaxpMCoV2Q7oh7JVMK6sc0B/view?usp=sharing",
        "viewUrl": "https://drive.google.com/file/d/1UNb2tFvPbtaxpMCoV2Q7oh7JVMK6sc0B/view?usp=sharing",
        "previewUrl": "https://drive.google.com/file/d/1UNb2tFvPbtaxpMCoV2Q7oh7JVMK6sc0B/preview",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1UNb2tFvPbtaxpMCoV2Q7oh7JVMK6sc0B",
        "thumbnailUrl": "https://drive.google.com/thumbnail?id=1UNb2tFvPbtaxpMCoV2Q7oh7JVMK6sc0B&sz=w800",
        "slotId": 9
    },
    {
        "id": "prac-10",
        "name": "10-BTK amaliy_mashgulot.doc",
        "topic": "10-amaliy mashg'ulot: Ta'lim muassasalarida pedagogik mediatorlik (vositachilik) xizmati",
        "subject": "Fan: Raqamli emotsional intelekt",
        "category": "practical",
        "type": "doc",
        "size": 1070000,
        "downloadsCount": 71,
        "uploadedAt": "2026-10-25T12:00:00.000Z",
        "isGoogleDrive": true,
        "driveId": "1VprcqusBwZumPl_B9MwzU0tasAys0koG",
        "driveUrl": "https://drive.google.com/file/d/1VprcqusBwZumPl_B9MwzU0tasAys0koG/view?usp=sharing",
        "viewUrl": "https://drive.google.com/file/d/1VprcqusBwZumPl_B9MwzU0tasAys0koG/view?usp=sharing",
        "previewUrl": "https://drive.google.com/file/d/1VprcqusBwZumPl_B9MwzU0tasAys0koG/preview",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1VprcqusBwZumPl_B9MwzU0tasAys0koG",
        "thumbnailUrl": "https://drive.google.com/thumbnail?id=1VprcqusBwZumPl_B9MwzU0tasAys0koG&sz=w800",
        "slotId": 10
    },
    {
        "id": "prac-11",
        "name": "11-BTK amaliy docx.doc",
        "topic": "11-amaliy mashg'ulot: Oila va maktab hamkorligida pedagogik nizolarni bartaraf etish",
        "subject": "Fan: Raqamli emotsional intelekt",
        "category": "practical",
        "type": "doc",
        "size": 1088000,
        "downloadsCount": 74,
        "uploadedAt": "2026-10-25T12:00:00.000Z",
        "isGoogleDrive": true,
        "driveId": "1VUeRt88UDwGni0BAu_NQyWaC9pP3Borl",
        "driveUrl": "https://drive.google.com/file/d/1VUeRt88UDwGni0BAu_NQyWaC9pP3Borl/view?usp=sharing",
        "viewUrl": "https://drive.google.com/file/d/1VUeRt88UDwGni0BAu_NQyWaC9pP3Borl/view?usp=sharing",
        "previewUrl": "https://drive.google.com/file/d/1VUeRt88UDwGni0BAu_NQyWaC9pP3Borl/preview",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1VUeRt88UDwGni0BAu_NQyWaC9pP3Borl",
        "thumbnailUrl": "https://drive.google.com/thumbnail?id=1VUeRt88UDwGni0BAu_NQyWaC9pP3Borl&sz=w800",
        "slotId": 11
    },
    {
        "id": "prac-12",
        "name": "12-amaliy_mashgulot - Copy.doc",
        "topic": "12-amaliy mashg'ulot: Sinf jamoasida sog'lom psixologik iqlimni shakllantirish texnologiyalari",
        "subject": "Fan: Raqamli emotsional intelekt",
        "category": "practical",
        "type": "doc",
        "size": 1106000,
        "downloadsCount": 77,
        "uploadedAt": "2026-10-25T12:00:00.000Z",
        "isGoogleDrive": true,
        "driveId": "1WdFKgM3lidBtUSVdXxrWhEGuIeJgZDaX",
        "driveUrl": "https://drive.google.com/file/d/1WdFKgM3lidBtUSVdXxrWhEGuIeJgZDaX/view?usp=sharing",
        "viewUrl": "https://drive.google.com/file/d/1WdFKgM3lidBtUSVdXxrWhEGuIeJgZDaX/view?usp=sharing",
        "previewUrl": "https://drive.google.com/file/d/1WdFKgM3lidBtUSVdXxrWhEGuIeJgZDaX/preview",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1WdFKgM3lidBtUSVdXxrWhEGuIeJgZDaX",
        "thumbnailUrl": "https://drive.google.com/thumbnail?id=1WdFKgM3lidBtUSVdXxrWhEGuIeJgZDaX&sz=w800",
        "slotId": 12
    },
    {
        "id": "prac-13",
        "name": "13-amaliy_mashgulot.doc",
        "topic": "13-amaliy mashg'ulot: O'qituvchining kasbiy kompetensiyasi va konfliktologik madaniyati",
        "subject": "Fan: Raqamli emotsional intelekt",
        "category": "practical",
        "type": "doc",
        "size": 1124000,
        "downloadsCount": 80,
        "uploadedAt": "2026-10-25T12:00:00.000Z",
        "isGoogleDrive": true,
        "driveId": "1Rj2l9z5piXS39d4I-vPs4zBOYlqSULa1",
        "driveUrl": "https://drive.google.com/file/d/1Rj2l9z5piXS39d4I-vPs4zBOYlqSULa1/view?usp=sharing",
        "viewUrl": "https://drive.google.com/file/d/1Rj2l9z5piXS39d4I-vPs4zBOYlqSULa1/view?usp=sharing",
        "previewUrl": "https://drive.google.com/file/d/1Rj2l9z5piXS39d4I-vPs4zBOYlqSULa1/preview",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Rj2l9z5piXS39d4I-vPs4zBOYlqSULa1",
        "thumbnailUrl": "https://drive.google.com/thumbnail?id=1Rj2l9z5piXS39d4I-vPs4zBOYlqSULa1&sz=w800",
        "slotId": 13
    },
    {
        "id": "prac-14",
        "name": "14-amaliy_mashgulot.doc",
        "topic": "14-amaliy mashg'ulot: Oiladagi va jamoadagi konfliktlar va ularning yechimlari",
        "subject": "Fan: Raqamli emotsional intelekt",
        "category": "practical",
        "type": "doc",
        "size": 1142000,
        "downloadsCount": 83,
        "uploadedAt": "2026-10-25T12:00:00.000Z",
        "isGoogleDrive": true,
        "driveId": "1u5l0Eph0uXB-v1-DVWfgaZuJXaCq_exg",
        "driveUrl": "https://drive.google.com/file/d/1u5l0Eph0uXB-v1-DVWfgaZuJXaCq_exg/view?usp=sharing",
        "viewUrl": "https://drive.google.com/file/d/1u5l0Eph0uXB-v1-DVWfgaZuJXaCq_exg/view?usp=sharing",
        "previewUrl": "https://drive.google.com/file/d/1u5l0Eph0uXB-v1-DVWfgaZuJXaCq_exg/preview",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1u5l0Eph0uXB-v1-DVWfgaZuJXaCq_exg",
        "thumbnailUrl": "https://drive.google.com/thumbnail?id=1u5l0Eph0uXB-v1-DVWfgaZuJXaCq_exg&sz=w800",
        "slotId": 14
    },
    {
        "id": "prac-15",
        "name": "15-amaliy_mashgulot-1.doc",
        "topic": "15-amaliy mashg'ulot: Boshlang'ich ta'limda pedagogik konfliktlarni bartaraf etishda sinf rahbarining o'rni",
        "subject": "Fan: Raqamli emotsional intelekt",
        "category": "practical",
        "type": "doc",
        "size": 1160000,
        "downloadsCount": 86,
        "uploadedAt": "2026-10-25T12:00:00.000Z",
        "isGoogleDrive": true,
        "driveId": "1UEHdDC53SrhUAuaBDmX2L8xWHKtsEFO4",
        "driveUrl": "https://drive.google.com/file/d/1UEHdDC53SrhUAuaBDmX2L8xWHKtsEFO4/view?usp=sharing",
        "viewUrl": "https://drive.google.com/file/d/1UEHdDC53SrhUAuaBDmX2L8xWHKtsEFO4/view?usp=sharing",
        "previewUrl": "https://drive.google.com/file/d/1UEHdDC53SrhUAuaBDmX2L8xWHKtsEFO4/preview",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1UEHdDC53SrhUAuaBDmX2L8xWHKtsEFO4",
        "thumbnailUrl": "https://drive.google.com/thumbnail?id=1UEHdDC53SrhUAuaBDmX2L8xWHKtsEFO4&sz=w800",
        "slotId": 15
    },
    {
        "id": "test-100",
        "name": "BTK_100_test.docx",
        "topic": "BTK 100 talik yakuniy test savollari to'plami",
        "subject": "Fan: Raqamli emotsional intelekt",
        "category": "test",
        "type": "docx",
        "size": 1250000,
        "downloadsCount": 142,
        "uploadedAt": "2026-10-25T12:00:00.000Z",
        "isGoogleDrive": true,
        "driveId": "1CFHsx3O2WtbQEizL7rzuojPUEmDCJUZW",
        "driveUrl": "https://drive.google.com/file/d/1CFHsx3O2WtbQEizL7rzuojPUEmDCJUZW/view?usp=sharing",
        "viewUrl": "https://drive.google.com/file/d/1CFHsx3O2WtbQEizL7rzuojPUEmDCJUZW/view?usp=sharing",
        "previewUrl": "https://drive.google.com/file/d/1CFHsx3O2WtbQEizL7rzuojPUEmDCJUZW/preview",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1CFHsx3O2WtbQEizL7rzuojPUEmDCJUZW",
        "thumbnailUrl": "https://drive.google.com/thumbnail?id=1CFHsx3O2WtbQEizL7rzuojPUEmDCJUZW&sz=w800",
        "slotId": 100
    },
    {
        "id": "test-qa-100",
        "name": "BTK_100_umumiy_savol.doc",
        "topic": "BTK 100 ta umumiy savollar va topshiriqlar to'plami",
        "subject": "Fan: Raqamli emotsional intelekt",
        "category": "test",
        "type": "doc",
        "size": 1180000,
        "downloadsCount": 128,
        "uploadedAt": "2026-10-25T12:00:00.000Z",
        "isGoogleDrive": true,
        "driveId": "1zxrXfxNT7VPMdKVyAq7cSGWfZPW3W6NJ",
        "driveUrl": "https://drive.google.com/file/d/1zxrXfxNT7VPMdKVyAq7cSGWfZPW3W6NJ/view?usp=sharing",
        "viewUrl": "https://drive.google.com/file/d/1zxrXfxNT7VPMdKVyAq7cSGWfZPW3W6NJ/view?usp=sharing",
        "previewUrl": "https://drive.google.com/file/d/1zxrXfxNT7VPMdKVyAq7cSGWfZPW3W6NJ/preview",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1zxrXfxNT7VPMdKVyAq7cSGWfZPW3W6NJ",
        "thumbnailUrl": "https://drive.google.com/thumbnail?id=1zxrXfxNT7VPMdKVyAq7cSGWfZPW3W6NJ&sz=w800",
        "slotId": 101
    }
];

// ==================== MA'RUZALAR ====================
const lecturesData = defaultPlatformMaterials.filter(m => m.category === 'lecture').map((m, idx) => ({
    id: idx + 1,
    fileId: m.id,
    title: m.topic,
    name: m.name,
    excerpt: `Google Diskdagi rasmiy ma'ruza matni hujjati (.doc)`,
    color: "blue",
    tag: "DOC",
    type: "doc",
    size: m.size,
    downloadsCount: m.downloadsCount,
    driveId: m.driveId,
    driveUrl: m.driveUrl,
    viewUrl: m.viewUrl,
    downloadUrl: m.downloadUrl,
    thumbnailUrl: m.thumbnailUrl
}));

// ==================== TAQDIMOTLAR (SLAYDLAR TO'PLAMI) ====================
const presentationsData = defaultPlatformMaterials.filter(m => m.category === 'presentation').map((p, idx) => ({
    id: idx + 1,
    fileId: p.id,
    title: p.topic,
    name: p.name,
    excerpt: `Mavzu bo'yicha ko'rgazmali taqdimot slaydlari to'plami (${(p.type || 'pptx').toUpperCase()})`,
    color: "orange",
    tag: (p.type || 'pptx').toUpperCase(),
    type: p.type || 'pptx',
    category: "presentation",
    size: p.size,
    downloadsCount: p.downloadsCount,
    driveId: p.driveId,
    driveUrl: p.driveUrl,
    viewUrl: p.viewUrl,
    downloadUrl: p.downloadUrl,
    thumbnailUrl: p.thumbnailUrl
}));

// ==================== AMALIY TOPSHIRIQLAR ====================
const practicalsData = defaultPlatformMaterials.filter(m => m.category === 'practical').map((m, idx) => ({
    id: idx + 1,
    fileId: m.id,
    title: m.topic,
    name: m.name,
    excerpt: `Ushbu amaliy mashg'ulotda mavzuga oid pedagogik keyslar, nizoli vaziyatlar tahlili va amaliy topshiriqlar bajariladi.`,
    color: "purple",
    tag: "DOC",
    type: "doc",
    size: m.size,
    downloadsCount: m.downloadsCount,
    driveId: m.driveId,
    driveUrl: m.driveUrl,
    viewUrl: m.viewUrl,
    downloadUrl: m.downloadUrl,
    thumbnailUrl: m.thumbnailUrl
}));

// ==================== TESTLAR ====================
// ==================== RASMIY YUKLAB OLINADIGAN TEST FAYLLARI ====================
const officialTestFiles = [
    {
        id: "test-100",
        fileId: "test-100",
        title: "BTK 100 talik yakuniy test savollari to'plami",
        name: "BTK_100_test.docx",
        desc: "Raqamli emotsional intellekt va pedagogik konfliktologiya fani bo'yicha 100 talik to'liq yakuniy test savollari va variantlari.",
        tag: "DOCX",
        type: "docx",
        size: 1250000,
        downloadsCount: 142,
        isGoogleDrive: true,
        driveId: "1CFHsx3O2WtbQEizL7rzuojPUEmDCJUZW",
        driveUrl: "https://drive.google.com/file/d/1CFHsx3O2WtbQEizL7rzuojPUEmDCJUZW/view?usp=sharing",
        viewUrl: "https://drive.google.com/file/d/1CFHsx3O2WtbQEizL7rzuojPUEmDCJUZW/view?usp=sharing",
        previewUrl: "https://drive.google.com/file/d/1CFHsx3O2WtbQEizL7rzuojPUEmDCJUZW/preview",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1CFHsx3O2WtbQEizL7rzuojPUEmDCJUZW"
    },
    {
        id: "test-qa-100",
        fileId: "test-qa-100",
        title: "BTK 100 ta umumiy savollar va topshiriqlar to'plami",
        name: "BTK_100_umumiy_savol.doc",
        desc: "Mavzular bo'yicha talabalar bilimini baholash va mustahkamlash uchun 100 ta umumiy nazariy va amaliy savollar to'plami.",
        tag: "DOC",
        type: "doc",
        size: 1180000,
        downloadsCount: 128,
        isGoogleDrive: true,
        driveId: "1zxrXfxNT7VPMdKVyAq7cSGWfZPW3W6NJ",
        driveUrl: "https://drive.google.com/file/d/1zxrXfxNT7VPMdKVyAq7cSGWfZPW3W6NJ/view?usp=sharing",
        viewUrl: "https://drive.google.com/file/d/1zxrXfxNT7VPMdKVyAq7cSGWfZPW3W6NJ/view?usp=sharing",
        previewUrl: "https://drive.google.com/file/d/1zxrXfxNT7VPMdKVyAq7cSGWfZPW3W6NJ/preview",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1zxrXfxNT7VPMdKVyAq7cSGWfZPW3W6NJ"
    }
];

// ==================== 15 TA MAVZU BO'YICHA INTERAKTIV ONLAYN TESTLAR ====================
const testsData = [
    {
        id: 1,
        topicNumber: 1,
        title: "1-mavzu. Pedagogik konfliktologiya fanining predmeti, maqsad va vazifalari",
        desc: "Pedagogik konfliktologiyaning nazariy asoslari, fan predmeti va ta'lim tizimidagi o'rni.",
        questionsCount: 5,
        durationMinutes: 10,
        passingScore: 70,
        questions: [
            {
                q: "Pedagogik konfliktologiya fanining asosiy predmeti nima?",
                options: [
                    "Ta'lim-tarbiya jarayonidagi nizoli vaziyatlar, ularning sabablari va konstruktiv hal etish qonuniyatlari",
                    "Faqat o'quvchilarning darsdagi intizomini nazorat qilish",
                    "O'qituvchilarning oylik maoshlari va mehnat sharoitlarini o'rganish",
                    "Maktab binosining moddiy-texnik holatini tekshirish"
                ],
                correct: 0
            },
            {
                q: "Konstruktiv konfliktning ta'lim jarayonidagi ijobiy funksiyasi nima?",
                options: [
                    "Guruh a'zolarini bir-biriga dushman qilish",
                    "Muammoni aniqlash, yangi yechimlarni topish va shaxslararo munosabatlarni sifat jihatidan yangi bosqichga ko'tarish",
                    "O'quvchilarni darsdan chetlashtirish",
                    "Ta'lim jarayonini butunlay to'xtatish"
                ],
                correct: 1
            },
            {
                q: "Konflikt so'zi lotincha qaysi so'zdan olingan va qanday ma'noni anglatadi?",
                options: [
                    "'Conflictus' — to'qnashuv, qarama-qarshilik",
                    "'Concordia' — kelishuv, hamjihatlik",
                    "'Collaboratio' — birgalikda ishlash",
                    "'Cognitio' — bilish, idrok qilish"
                ],
                correct: 0
            },
            {
                q: "Pedagogik konfliktologiyaning asosiy vazifalaridan biri qaysi?",
                options: [
                    "Barcha nizolarni jazo choralari orqali bostirish",
                    "Pedagogik jamoa va o'quvchilarda nizolarni tahlil qilish hamda konstruktiv hal etish kompetensiyasini shakllantirish",
                    "Nizolar haqida hech kimga bildirmaslik",
                    "O'quvchilarni bir-biri bilan muloqot qilishdan cheklash"
                ],
                correct: 1
            },
            {
                q: "Destruktiv konflikt qanday oqibatga olib keladi?",
                options: [
                    "O'zaro tushunish va do'stlik mustahkamlanadi",
                    "Munosabatlarning buzilishi, psixologik stress va ta'lim sifatining pasayishiga",
                    "Yangi ijodiy g'oyalar paydo bo'lishiga",
                    "O'quvchilarning o'zlashtirishi birdan ortishiga"
                ],
                correct: 1
            }
        ]
    },
    {
        id: 2,
        topicNumber: 2,
        title: "2-mavzu. Pedagogik muloqot va uning konfliktogen omillari",
        desc: "Pedagogik muloqot uslublari, muloqot to'siqlari va nizolarni keltirib chiqaruvchi omillar.",
        questionsCount: 5,
        durationMinutes: 10,
        passingScore: 70,
        questions: [
            {
                q: "'Konfliktogen' tushunchasi nimani anglatadi?",
                options: [
                    "Nizoni bartaraf etuvchi tinchlantiruvchi so'zlar",
                    "Nizoni keltirib chiqarishi yoki uni kuchaytirishi mumkin bo'lgan so'z, xatti-harakat yoki munosabat",
                    "Dars jadvalini to'g'ri tuzish qoidasi",
                    "O'quvchining a'lo baho olish istagi"
                ],
                correct: 1
            },
            {
                q: "O'qituvchining qaysi muloqot uslubi eng ko'p konflikt keltirib chiqaradi?",
                options: [
                    "Demokratik uslub",
                    "Avtoritar (yakka hukmronlikka asoslangan) uslub",
                    "Hamkorlik uslubi",
                    "Rag'batlantiruvchi uslub"
                ],
                correct: 1
            },
            {
                q: "Noverbal konfliktogen omillarga nimalar kiradi?",
                options: [
                    "Istehzoli tabassum, qosh chimirish, kamsituvchi imo-ishoralar va sovuq qarash",
                    "Muloyim ovoz ohangi va ochiq nigoh",
                    "Dars mavzusini doskaga aniq yozish",
                    "O'quvchining javobini sabr bilan tinglash"
                ],
                correct: 0
            },
            {
                q: "Pedagogik muloqotda 'Men-xabar' texnikasi nima uchun xizmat qiladi?",
                options: [
                    "Qarshingizdagi shaxsni ayblamasdan, o'z his-tuyg'ularingiz va vaziyat haqidagi munosabatingizni yetkazish uchun",
                    "O'zining ustunligini ko'rsatish uchun",
                    "Boshqalarga buyruq berish uchun",
                    "Baholarni kamaytirish uchun"
                ],
                correct: 0
            },
            {
                q: "O'qituvchining o'quvchi shaxsiyatini kamsituvchi tanqidi qanday oqibatga olib keladi?",
                options: [
                    "O'quvchining fanga qiziqishi oshadi",
                    "Emotsional to'siq, himoyalanish agressiyasi yoki ichki nizoga",
                    "Sinfda tartib o'z-o'zidan yaxshilanadi",
                    "O'quvchi o'qituvchini ko'proq hurmat qila boshlaydi"
                ],
                correct: 1
            }
        ]
    },
    {
        id: 3,
        topicNumber: 3,
        title: "3-mavzu. Pedagogik konfliktlarning psixologik tuzilishi va dinamikasi",
        desc: "Konflikt tuzilishi, ishtirokchilar motivatsiyasi va nizo rivojlanish bosqichlari.",
        questionsCount: 5,
        durationMinutes: 10,
        passingScore: 70,
        questions: [
            {
                q: "Konfliktning psixologik tuzilishi qanday elementlardan iborat?",
                options: [
                    "Faqat dars va tanaffus vaqti",
                    "Konflikt ishtirokchilari, nizo predmeti, obyekti va ishtirokchilarning motivlari",
                    "Maktab binosi va partalar",
                    "Faqat sinf jurnali"
                ],
                correct: 1
            },
            {
                q: "Konflikt dinamikasida 'Insident' nima?",
                options: [
                    "Konfliktning to'liq tugashi",
                    "Yashirin ziddiyatni ochiq to'qnashuvga aylantiruvchi birinchi turtki yoki bahona",
                    "O'zaro yarashish shartnomasi",
                    "O'qituvchilar kengashi qarori"
                ],
                correct: 1
            },
            {
                q: "Konfliktning eng yuqori, keskinlashgan nuqtasi nima deb ataladi?",
                options: [
                    "Eskalatsiya",
                    "Kulminatsiya",
                    "Tinchlanish",
                    "Latent (yashirin) davr"
                ],
                correct: 1
            },
            {
                q: "Konflikt dinamikasining ketma-ketligi to'g'ri ko'rsatilgan qatorni toping:",
                options: [
                    "Konfliktli vaziyat -> Insident -> Eskalatsiya -> Kulminatsiya -> Yechim",
                    "Yechim -> Insident -> Kulminatsiya -> Tinchlanish",
                    "Kulminatsiya -> Insident -> Yechim -> Sabab",
                    "Insident -> Yechim -> Konfliktli vaziyat"
                ],
                correct: 0
            },
            {
                q: "Nizoni boshqarishda 'latent (yashirin) davr' qanday ahamiyatga ega?",
                options: [
                    "Bu davrda hech narsa qilib bo'lmaydi",
                    "Bu davrda ziddiyat yashirin bo'lib, o'z vaqtida aniqlansa, ochiq to'qnashuvning oldini olish eng oson bo'ladi",
                    "Bu faqat jismoniy janjal vaqti",
                    "Bu imtihon natijalari e'lon qilinadigan davr"
                ],
                correct: 1
            }
        ]
    },
    {
        id: 4,
        topicNumber: 4,
        title: "4-mavzu. O'quvchilarning yosh davrlari inqirozlari va pedagogik konfliktlar",
        desc: "Yosh davrlari psixologiyasi, inqirozlar va nizolarning oldini olish.",
        questionsCount: 5,
        durationMinutes: 10,
        passingScore: 70,
        questions: [
            {
                q: "O'smirlik davri (11-15 yosh) inqirozining asosiy psixologik xususiyati nima?",
                options: [
                    "O'zini kattalardek his qilish (kattalik hissi) va mustaqillikka intilish",
                    "Kattalarning har qanday buyrug'iga so'zsiz bo'ysunish",
                    "Faqat o'yinchoqlar bilan o'ynash istagi",
                    "Emotsional jihatdan butunlay befarqlik"
                ],
                correct: 0
            },
            {
                q: "Boshlang'ich maktabga qabul qilingan o'quvchilarda qaysi yosh inqirozi kuzatiladi?",
                options: [
                    "3 yosh inqirozi",
                    "7 yosh inqirozi (ijtimoiy mavqe va o'quv faoliyatiga moslashish)",
                    "17 yosh inqirozi",
                    "40 yosh inqirozi"
                ],
                correct: 1
            },
            {
                q: "O'smirlik davrida tengdoshlar guruhining o'rni qanday bo'ladi?",
                options: [
                    "O'smir uchun tengdoshlarining fikri va guruhdagi nufuzi ota-ona va o'qituvchi fikridan ustunroq bo'lib qoladi",
                    "Tengdoshlar hech qanday ahamiyatga ega bo'lmaydi",
                    "O'smir faqat yolg'iz qolishni xohlaydi",
                    "O'smir faqat maktab ma'muriyatiga intiladi"
                ],
                correct: 0
            },
            {
                q: "Xarakter aksentuatsiyasi nima?",
                options: [
                    "Xarakterdagi ayrim xususiyatlarning me'yordan ortiq darajada bo'rtib chiqishi va ma'lum vaziyatlarda nizoga moyillik",
                    "Xotiraning to'liq yo'qolishi",
                    "Aqliy zaiflik belgisi",
                    "Faqat jismoniy charchoq"
                ],
                correct: 0
            },
            {
                q: "O'smir bilan pedagogik konfliktni oldini olishda o'qituvchi qanday yo'l tutishi lozim?",
                options: [
                    "Sinf oldida uni masxara qilish va ovozini ko'tarish",
                    "Uning shaxsiyatini hurmat qilish, fikrini eshitish va unga kattalardek mas'uliyat yuklash",
                    "Har qanday fikriga qarshi chiqish",
                    "Ota-onasiga doimiy shikoyat qilish"
                ],
                correct: 1
            }
        ]
    },
    {
        id: 5,
        topicNumber: 5,
        title: "5-mavzu. O'qituvchi va o'quvchi o'rtasidagi pedagogik konfliktlar",
        desc: "O'qituvchi va o'quvchi o'rtasidagi ziddiyatlar sabablari va ularni bartaraf etish usullari.",
        questionsCount: 5,
        durationMinutes: 10,
        passingScore: 70,
        questions: [
            {
                q: "O'qituvchi va o'quvchi o'rtasidagi nizolarning eng ko'p uchraydigan sababi nima?",
                options: [
                    "Baholashdagi subyektivlik va adolatsizlik hissi hamda tushunmaslik",
                    "Darsliklarning rangli bezatilgani",
                    "Maktab qo'ng'irog'ining ovozi",
                    "Sinf xonasining tozaligi"
                ],
                correct: 0
            },
            {
                q: "Dars jarayonida o'quvchi qoidani buzsa, o'qituvchining eng to'g'ri harakati qaysi?",
                options: [
                    "Darhol janjal ko'tarib, o'quvchini sinfdan haydab yuborish",
                    "Hissiyotga berilmay, xotirjamlik bilan darsdan so'ng individual suhbatlashishni taklif qilish",
                    "Butun sinf oldida o'quvchini haqorat qilish",
                    "O'quvchining barcha baholarini tushirib yuborish"
                ],
                correct: 1
            },
            {
                q: "O'qituvchining emotsional intellekti (REI) o'quvchi bilan munosabatda qanday namoyon bo'ladi?",
                options: [
                    "O'z g'azabi va xavotirini nazorat qila olish va o'quvchining holatini tushunish (empatiya)",
                    "Har qanday qiyin vaziyatda jilmayib turish",
                    "O'quvchilar bilan umuman gaplashmaslik",
                    "Faqat qattiqqo'llik bilan tartib o'rnatish"
                ],
                correct: 0
            },
            {
                q: "Faol tinglash (active listening) pedagogik konfliktda qanday natija beradi?",
                options: [
                    "O'quvchi o'zining eshitilganini va tushunilganini his qilib, himoyaviy agressiyasini pasaytiradi",
                    "O'quvchining o'zlashtirishi pasayadi",
                    "Vaqt behuda ketadi",
                    "O'qituvchining obro'si tushadi"
                ],
                correct: 0
            },
            {
                q: "O'quvchining darsdagi sabotaji yoki qarshilik ko'rsatishi ko'pincha nima bilan bog'liq?",
                options: [
                    "Diqqat markazida bo'lish istagi, tushunilmaganlik yoki o'zini noqulay his qilish",
                    "Faqat biologik ochlik",
                    "Maktab formasining yoqmasligi",
                    "Dars soatlarining kamligi"
                ],
                correct: 0
            }
        ]
    },
    {
        id: 6,
        topicNumber: 6,
        title: "6-mavzu. O'quvchi-o'quvchi munosabatlaridagi ziddiyatlar va bulling",
        desc: "Sinfdagi tengdoshlararo nizolar, bulling turlari va profilaktikasi.",
        questionsCount: 5,
        durationMinutes: 10,
        passingScore: 70,
        questions: [
            {
                q: "Bulling nima?",
                options: [
                    "Tengdoshlar o'rtasida bir martalik o'zaro hazil",
                    "Bir yoki bir guruh o'quvchilar tomonidan boshqa bir o'quvchiga nisbatan davomiy, qasddan qilingan psixologik yoki jismoniy tazyiq",
                    "Darsdagi sog'lom bahs-munozara",
                    "Sport musobaqasidagi raqobat"
                ],
                correct: 1
            },
            {
                q: "Bulling tizimida qanday asosiy rollar mavjud?",
                options: [
                    "Agressor (tashabbuskor), qurbon (jabrlanuvchi) va kuzatuvchilar (guvohlar)",
                    "O'qituvchi, direktor va qorovul",
                    "Sinf rahbari va kutubxonachi",
                    "Faqat bitta o'quvchi"
                ],
                correct: 0
            },
            {
                q: "Kiberbulling qanday amalga oshiriladi?",
                options: [
                    "Faqat partada o'tirganda",
                    "Ijtimoiy tarmoqlar, messenjerlar va internet orqali haqorat qilish, tuhmat tarqatish va shaxsiy ma'lumotlarni fosh etish",
                    "Kutubxonada kitob o'qish orqali",
                    "Dars jadvalini o'zgartirish orqali"
                ],
                correct: 1
            },
            {
                q: "Bulling holatida 'guvohlar' (kuzatuvchilar) qanday rol o'ynaydi?",
                options: [
                    "Ularning reaktsiyasi (kulishi yoki jim turishi) agressorni yanada rag'batlantiradi; ularning qarshiligi esa bullingni to'xtatishi mumkin",
                    "Ular hech qanday ta'sirga ega emas",
                    "Guvohlar har doim o'qituvchini himoya qiladi",
                    "Guvohlar qurbonning baholarini oshiradi"
                ],
                correct: 0
            },
            {
                q: "Maktabda bulling aniqlanganda pedagogning birinchi galdagi vazifasi nima?",
                options: [
                    "'O'zlari kelishib oladi' deb e'tiborsiz qoldirish",
                    "Zo'ravonlikni zudlik bilan to'xtatish, jabrlanuvchiga xavfsizlik ta'minlash va tizimli choralar ko'rish",
                    "Faqat qurbonni ayblash",
                    "Barcha sinfni jismoniy jazolash"
                ],
                correct: 1
            }
        ]
    },
    {
        id: 7,
        topicNumber: 7,
        title: "7-mavzu. O'qituvchi va ota-onalar hamkorligidagi konfliktlar",
        desc: "Oila va maktab muloqoti, ota-onalar bilan samarali muloqot va nizoli holatlar.",
        questionsCount: 5,
        durationMinutes: 10,
        passingScore: 70,
        questions: [
            {
                q: "O'qituvchi va ota-ona o'rtasidagi nizoning eng ko'p uchraydigan sababi nima?",
                options: [
                    "O'quvchining bahosi va xulq-atvoriga turlicha baho berish, o'zaro ayblovlar",
                    "Maktab sport zali o'lchami",
                    "Ob-havoning o'zgarishi",
                    "Ota-onalar yig'ilishining vaqti"
                ],
                correct: 0
            },
            {
                q: "Ota-onalar bilan individual suhbatda qaysi usul samarali hisoblanadi?",
                options: [
                    "Faqat bolaning kamchiliklarini ro'yxat qilib aytib berish",
                    "'Sendvich' qoidasi: avval bolaning ijobiy yutuqlarini aytish, keyin muammoni muhokama qilish va ijobiy xulosa bilan yakunlash",
                    "Ota-onaning gapini bo'lib, o'z aybini isbotlash",
                    "Suhbatni 2 daqiqada tugatish"
                ],
                correct: 1
            },
            {
                q: "Tajovuzkor yoki g'azablangan ota-ona bilan muloqotda o'qituvchi nima qilishi kerak?",
                options: [
                    "O'zaro qichqirish va tahdid qilish",
                    "Xotirjamlikni saqlash, ota-onaga his-tuyg'ularini to'kib solishga imkon berish, so'ng konstruktiv yechimga o'tish",
                    "Xonadan qochib ketish",
                    "Darhol sudga berish bilan qo'rqitish"
                ],
                correct: 1
            },
            {
                q: "Ota-onani ta'lim jarayoniga jalb qilishda eng muhim tamoyil nima?",
                options: [
                    "Hamkorlik, o'zaro ishonch va bolaning manfaati ustuvorligi",
                    "Ota-onani faqat moddiy homiy sifatida ko'rish",
                    "Maktab ishlariga ota-onani mutlaqo aralashtirmaslik",
                    "Ota-onalar ustidan doimiy nazorat o'rnatish"
                ],
                correct: 0
            },
            {
                q: "Oila va maktab munosabatlarida 'uchburchak' qoidasi kimlarni qamrab oladi?",
                options: [
                    "O'qituvchi — O'quvchi — Ota-ona",
                    "Direktor — Zavuch — Kotiba",
                    "Sinf rahbari — Psixolog — Hamshira",
                    "Maktab — Mahalla — Ichki ishlar"
                ],
                correct: 0
            }
        ]
    },
    {
        id: 8,
        topicNumber: 8,
        title: "8-mavzu. Pedagogik konfliktlarni diagnostika qilish metodlari",
        desc: "Konfliktlarni o'rganish, Tomas-Kilmann testi va sotsiometriya usullari.",
        questionsCount: 5,
        durationMinutes: 10,
        passingScore: 70,
        questions: [
            {
                q: "Tomas-Kilmann testi bo'yicha konfliktdagi xulq-atvorning nechta strategiyasi farqlanadi?",
                options: [
                    "2 ta",
                    "5 ta (Raqobat, Moslashish, Qochish, Murosa, Hamkorlik)",
                    "10 ta",
                    "1 ta"
                ],
                correct: 1
            },
            {
                q: "Tomas modeli bo'yicha eng samarali va uzoq muddatli yechim beruvchi strategiya qaysi?",
                options: [
                    "Hamkorlik (Har ikki tomonning manfaatlari maksimal hisobga olinadi)",
                    "Qochish (Nizoni e'tiborsiz qoldirish)",
                    "Raqobat (O'z foydasiga zo'rlik bilan erishish)",
                    "Moslashish (O'z manfaatidan butunlay voz kechish)"
                ],
                correct: 0
            },
            {
                q: "Sinfdagi o'zaro munosabatlar va liderlarni aniqlash uchun qaysi metodika qo'llaniladi?",
                options: [
                    "Sotsiometriya (J.Moreno metodikasi)",
                    "IQ testi",
                    "Tez yozish testi",
                    "EKG tekshiruvi"
                ],
                correct: 0
            },
            {
                q: "Konflikt monitoringi nima uchun zarur?",
                options: [
                    "Yashirin nizoli vaziyatlarni barvaqt aniqlash va o'z vaqtida chora ko'rish uchun",
                    "O'quvchilarga yomon baho qo'yish uchun",
                    "Sinf xonasini ta'mirlash uchun",
                    "Jurnallarni tekshirish uchun"
                ],
                correct: 0
            },
            {
                q: "Tomas metodikasida 'Murosa' (kompromiss) strategiyasi nima bilan tavsiflanadi?",
                options: [
                    "Har ikki tomon ma'lum darajada o'z talablaridan yon berib, o'rta yechimga kelishi",
                    "Bir tomonning to'liq yengilishi",
                    "Jang qilish",
                    "Bir-birini mensimaslik"
                ],
                correct: 0
            }
        ]
    },
    {
        id: 9,
        topicNumber: 9,
        title: "9-mavzu. Pedagogik nizolarni konstruktiv hal etish texnologiyalari",
        desc: "Muzokaralar olib borish, 'Win-Win' tamoyili va konstruktiv yechim qadamlari.",
        questionsCount: 5,
        durationMinutes: 10,
        passingScore: 70,
        questions: [
            {
                q: "Konstruktiv yechimning destruktiv yechimdan asosiy farqi nima?",
                options: [
                    "Konstruktiv yechimda muammo ildizi hal qilinadi va munosabatlar saqlab qolinadi",
                    "Konstruktiv yechim har doim jazo bilan tugaydi",
                    "Konstruktiv yechimda hamma yig'laydi",
                    "Hech qanday farq yo'q"
                ],
                correct: 0
            },
            {
                q: "Pedagogik muzokaralar olib borishda birinchi qadam nima bo'lishi kerak?",
                options: [
                    "Hissiyotlarni pasaytirish va tomonlarga xotirjam gapirish imkonini berish",
                    "Darhol aybdorni jazolash",
                    "Qistov bilan kechirim so'ratish",
                    "Tomonlarni bir-biridan ajratib qamab qo'yish"
                ],
                correct: 0
            },
            {
                q: "'Miya hujumi' (Brainstorming) metodi nizoni hal qilishda qanday qo'llaniladi?",
                options: [
                    "Tomonlar birgalikda muammodan chiqishning barcha g'oyalarini taklif qilib, eng ma'qulini tanlaydilar",
                    "Bir-birining kamchiliklarini aytish",
                    "Bir-biriga qattiq baqirish",
                    "Dars o'tmaslik"
                ],
                correct: 0
            },
            {
                q: "'Yutqazmagan tomon' (Win-Win) tamoyili nimani anglatadi?",
                options: [
                    "Har ikki tomon o'zini g'olib deb hisoblaydigan va qoniqish hosil qiladigan yechim",
                    "Bir tomon yutib, ikkinchi tomon mag'lub bo'lishi",
                    "Har ikki tomonning yutqazishi",
                    "O'yinda durang bo'lishi"
                ],
                correct: 0
            },
            {
                q: "Qaysi xatti-harakat nizoni konstruktiv hal qilishga xalal beradi?",
                options: [
                    "O'tmishdagi eski xatolarni eslash va shaxsiyatga tegish",
                    "Faqat ayni damdagi muammo haqida gapirish",
                    "Tinglashga intilish",
                    "Hamkorlikka tayyorlik"
                ],
                correct: 0
            }
        ]
    },
    {
        id: 10,
        topicNumber: 10,
        title: "10-mavzu. Ta'lim muassasalarida mediatorlik (vositachilik) xizmati",
        desc: "Maktab mediatsiyasi, mediatorlik prinsiplari va tengdoshlar mediatsiyasi.",
        questionsCount: 5,
        durationMinutes: 10,
        passingScore: 70,
        questions: [
            {
                q: "Maktab mediatsiyasi nima?",
                options: [
                    "Nizolashayotgan tomonlarga xolis, neytral uchinchi tomon (mediator) yordamida o'zaro maqbul kelishuvga erishish jarayoni",
                    "O'quvchilarni jazolash hay'ati",
                    "Direktor xonasidagi so'roq",
                    "Tibbiy ko'rik"
                ],
                correct: 0
            },
            {
                q: "Mediatsiyaning asosiy tamoyillari to'g'ri ko'rsatilgan qatorni toping:",
                options: [
                    "Ixtiyoriylik, xolislik (neytrallik), maxfiylik va tomonlarning teng huquqliligi",
                    "Majburiylik, oshkoralik, jazoga tortish",
                    "Tezlik, baholash, qoralash",
                    "Ayblash, e'lon qilish, chiqarib yuborish"
                ],
                correct: 0
            },
            {
                q: "Maktab mediatorining vazifasiga nima kirmaydi?",
                options: [
                    "Tomonlarning kim haqligini hal qilib, hukm yoki jazo chiqarish",
                    "Tomonlarning muloqotini tashkil qilish",
                    "Maxfiylikni saqlash",
                    "Tomonlarga o'z yechimlarini topishga ko'maklashish"
                ],
                correct: 0
            },
            {
                q: "Tengdoshlar mediatsiyasi (Peer mediation) nima?",
                options: [
                    "Maxsus o'qitilgan o'quvchilarning o'z tengdoshlari o'rtasidagi nizolarni hal qilishda vositachilik qilishi",
                    "Tengdoshlarning birgalikda mushtlashishi",
                    "Barcha o'quvchilarga bir xil baho qo'yish",
                    "Maktabdan tashqari to'garak"
                ],
                correct: 0
            },
            {
                q: "Yarashuv shartnomasi qachon tuziladi?",
                options: [
                    "Tomonlar o'zaro kelishuvga erishib, kelajakdagi majburiyatlarni ixtiyoriy qabul qilganlarida",
                    "O'qituvchi majburlab qo'l qo'ydirganda",
                    "O'quvchi maktabdan ketayotganda",
                    "Dars boshlanishidan oldin"
                ],
                correct: 0
            }
        ]
    },
    {
        id: 11,
        topicNumber: 11,
        title: "11-mavzu. Oila va maktab hamkorligida pedagogik nizolarni bartaraf etish",
        desc: "Oila muhiti, disfunksional tarbiya va nizolarni bartaraf etishda integratsiyalashgan yondashuv.",
        questionsCount: 5,
        durationMinutes: 10,
        passingScore: 70,
        questions: [
            {
                q: "Oila va maktab hamkorligining muvaffaqiyati nimaga bog'liq?",
                options: [
                    "Maktab va ota-onaning bolaga nisbatan yagona, kelishilgan talablar tizimini qo'yishiga",
                    "Ota-onaning maktabga umuman kelmasligiga",
                    "Maktabning ota-onaga doimiy jarima solishiga",
                    "O'quvchining telefon ishlatmasligiga"
                ],
                correct: 0
            },
            {
                q: "Oila tarbiyasidagi qaysi uslub bolada nizo keltirib chiqaruvchi xulq-atvorni shakllantiradi?",
                options: [
                    "Haddan tashqari qattiqqo'llik (gipernazorat) yoki butunlay e'tiborsizlik (giponazorat)",
                    "Mehr-muhabbat va oqilona talabchanlik",
                    "O'zaro do'stona muloqot",
                    "Kitob o'qishga rag'batlantirish"
                ],
                correct: 0
            },
            {
                q: "O'quvchining maktabdagi xulq-atvori buzilishining asosiy sabablaridan biri nima bo'lishi mumkin?",
                options: [
                    "Oiladagi ichki tanglik, nizolar va mehr yetishmasligi",
                    "Partaning balandligi",
                    "Qalamning rangi",
                    "Darslikning og'irligi"
                ],
                correct: 0
            },
            {
                q: "Ota-onalar bilan ishlashda 'profilaktik yondashuv' nima?",
                options: [
                    "Nizo kelib chiqishini kutmasdan, muntazam psixologik-pedagogik ma'rifat va maslahatlar berib borish",
                    "Faqat voqea sodir bo'lgandan keyin chaqirish",
                    "Har kuni ota-onalarni sinovdan o'tkazish",
                    "Maktab eshigini yopib qo'yish"
                ],
                correct: 0
            },
            {
                q: "O'quvchi xatti-harakatidagi keskin salbiy o'zgarish payqalganda o'qituvchi kim bilan hamkorlik qilishi kerak?",
                options: [
                    "Maktab psixologi va ota-onasi bilan birgalikda",
                    "Hech kim bilan, sir saqlashi kerak",
                    "Faqat sinfdagi boshqa bolalar bilan",
                    "Mahalla noziri orqali jazolash kerak"
                ],
                correct: 0
            }
        ]
    },
    {
        id: 12,
        topicNumber: 12,
        title: "12-mavzu. Sinf jamoasida sog'lom psixologik iqlimni shakllantirish",
        desc: "Psixologik iqlim diagnostikasi, jamoani jipslashtirish va emotsional yuqumlilik.",
        questionsCount: 5,
        durationMinutes: 10,
        passingScore: 70,
        questions: [
            {
                q: "Sinfdagi sog'lom psixologik iqlimning asosiy belgisi nima?",
                options: [
                    "O'zaro ishonch, samimiylik, qo'llab-quvvatlash va xavfsizlik hissi",
                    "Hamma jim o'tirishi va gaplashmasligi",
                    "Hamma bir-biridan qo'rqishi",
                    "Doimiy nazorat ishlari"
                ],
                correct: 0
            },
            {
                q: "Qaysi omil sinf iqlimiga salbiy ta'sir ko'rsatadi?",
                options: [
                    "O'quvchilarni 'yaxshi' va 'yomon' guruhlarga ajratish, kamsitish",
                    "Jamoaviy ijodiy ishlar",
                    "Birgalikdagi sayohatlar",
                    "Bayram tadbirlari"
                ],
                correct: 0
            },
            {
                q: "'Timbilding' (jamoa shakllantirish) mashg'ulotlarining maqsadi nima?",
                options: [
                    "O'quvchilarni jipslashtirish, o'zaro ishonchni oshirish va hamkorlikda ishlashni o'rgatish",
                    "Kim kuchli ekanini aniqlash",
                    "Vaqtni o'tkazish",
                    "Dars qoldirish"
                ],
                correct: 0
            },
            {
                q: "Sinfda chetlatilgan (izolyatsiyadagi) o'quvchini jamoaga qo'shish uchun sinf rahbari nima qilishi kerak?",
                options: [
                    "Unga jamoaviy loyihalarda muhim va qiziqarli vazifa yuklash, uning kuchli tomonlarini sinfga ko'rsatish",
                    "Uni doimiy tanqid qilish",
                    "Alohida partaga o'tqazib qo'yish",
                    "E'tibor bermaslik"
                ],
                correct: 0
            },
            {
                q: "Emotsional yuqumlilik (emotional contagion) sinfda qanday namoyon bo'ladi?",
                options: [
                    "O'qituvchi yoki liderning xotirjam yoki asabiy kayfiyati butun sinfga tez tarqaladi",
                    "Gripp kasalligining yuqishi",
                    "Baholarning bir xil bo'lishi",
                    "Darsning kech boshlanishi"
                ],
                correct: 0
            }
        ]
    },
    {
        id: 13,
        topicNumber: 13,
        title: "13-mavzu. O'qituvchining kasbiy kompetensiyasi va konfliktologik madaniyati",
        desc: "O'qituvchining emotsional barqarorligi, stressni boshqarish va kasbiy yonish profilaktikasi.",
        questionsCount: 5,
        durationMinutes: 10,
        passingScore: 70,
        questions: [
            {
                q: "O'qituvchining konfliktologik madaniyati nima?",
                options: [
                    "Nizolarning oldini olish, ularni konstruktiv boshqarish va nizoli vaziyatlarda o'zini idora qila olish bilimi va mahorati",
                    "Faqat nizolashish qobiliyati",
                    "O'quvchilarga qattiq jazo bera olish",
                    "Hech qachon dars qoldirmaslik"
                ],
                correct: 0
            },
            {
                q: "Pedagoglarda 'Emotsional yonish' (Emotional burnout) sindromining belgisi nima?",
                options: [
                    "Doimiy charchoq, befarqlik, asabiylik va kasbga qiziqishning yo'qolishi",
                    "Darsga katta ishtiyoq bilan kelish",
                    "Yangi metodikalarni faol qo'llash",
                    "Sog'lom uyqu"
                ],
                correct: 0
            },
            {
                q: "Stress vaziyatida o'qituvchi o'zini qanday boshqarishi mumkin?",
                options: [
                    "Nafas mashqlari, pauza (to'xtab fikrlash), o'z fikrlarini ijobiy yo'naltirish",
                    "O'quvchilarga baqirish",
                    "Darsni tashlab chiqib ketish",
                    "Boshqalarni ayblash"
                ],
                correct: 0
            },
            {
                q: "Konfliktologik kompetentlikka nimalar kiradi?",
                options: [
                    "Vaziyatni tahlil qilish, hissiyotlarni boshqarish, faol tinglash va moslashuvchanlik",
                    "Faqat o'z fikrida qat'iy turish",
                    "Tomonlarni tinglamaslik",
                    "Buyruq ohangida gapirish"
                ],
                correct: 0
            },
            {
                q: "Refleksiya nima?",
                options: [
                    "O'z xatti-harakatlari, fikrlari va hissiyotlarini tahlil qilish hamda baholash qobiliyati",
                    "Ko'zguga qarash",
                    "Faqat dars jadvalini yodlash",
                    "Ovozni balandlatish"
                ],
                correct: 0
            }
        ]
    },
    {
        id: 14,
        topicNumber: 14,
        title: "14-mavzu. Oiladagi va jamoadagi konfliktlar va ularning yechimlari",
        desc: "Oila a'zolari o'rtasidagi nizolar, jamoaviy nizolar va psixologik qo'llab-quvvatlash.",
        questionsCount: 5,
        durationMinutes: 10,
        passingScore: 70,
        questions: [
            {
                q: "Oila a'zolari o'rtasidagi destruktiv nizo bolaga qanday ta'sir qiladi?",
                options: [
                    "Bola xavfsizlik hissini yo'qotadi, xavotir va agressiya darajasi oshadi, o'qishi yomonlashadi",
                    "Bolaning ijodiy qobiliyati oshadi",
                    "Bolaga mutlaqo ta'sir qilmaydi",
                    "Bola mustaqil bo'lib qoladi"
                ],
                correct: 0
            },
            {
                q: "Jamoadagi vertikal konflikt qanday nizo?",
                options: [
                    "Rahbar va xodim (yoki o'qituvchi va o'quvchi) o'rtasidagi ierarxik nizo",
                    "Bir xil lavozimdagi xodimlar o'rtasidagi nizo",
                    "Sinfdoshlar o'rtasidagi nizo",
                    "Qo'shnilar o'rtasidagi nizo"
                ],
                correct: 0
            },
            {
                q: "Oila a'zolari o'rtasidagi sog'lom muloqotning asosi nima?",
                options: [
                    "O'zaro hurmat, bir-birini qadrlash va his-tuyg'ularni ochiq muhokama qila olish",
                    "Faqat bitta shaxsning hukmronligi",
                    "Moddiy boylik miqdori",
                    "Hech narsani muhokama qilmaslik"
                ],
                correct: 0
            },
            {
                q: "Jamoada norasmiy lider bilan konflikt kelib chiqsa, rahbar nima qilishi maqsadga muvofiq?",
                options: [
                    "Norasmiy lider bilan muloqot o'rnatish, uning ta'sir kuchini umumiy foydali maqsadlarga yo'naltirish",
                    "Uni jamoadan darhol haydash",
                    "Uning ustidan kulish",
                    "E'tiborsiz qoldirish"
                ],
                correct: 0
            },
            {
                q: "Nizolarni hal etishda kompromiss qanday vaziyatda qo'llaniladi?",
                options: [
                    "Vaqt oz bo'lganda va har ikki tomon uchun o'rtacha maqbul yechim topish zarur bo'lganda",
                    "Butunlay urushish kerak bo'lganda",
                    "Faqat bir kishi haqligida",
                    "Hech qachon qo'llanmaydi"
                ],
                correct: 0
            }
        ]
    },
    {
        id: 15,
        topicNumber: 15,
        title: "15-mavzu. Boshlang'ich ta'limda pedagogik konfliktlarni bartaraf etishda sinf rahbarining o'rni",
        desc: "Kichik maktab yoshidagi bolalar muloqoti, o'yin texnologiyalari va sinf rahbarining roli.",
        questionsCount: 5,
        durationMinutes: 10,
        passingScore: 70,
        questions: [
            {
                q: "Boshlang'ich sinf o'quvchilari o'rtasidagi nizolarning asosiy sababi nima?",
                options: [
                    "O'yin qoidalariga rioya qilmaslik, o'yinchoq yoki buyumlarni talashish, o'zini nazorat qilishning hali to'liq shakllanmaganligi",
                    "Siyosiy qarashlarning to'qnashuvi",
                    "Imtihon topshira olmaslik",
                    "Maosh masalasi"
                ],
                correct: 0
            },
            {
                q: "Boshlang'ich sinf rahbarining konfliktni hal etishdagi eng samarali vositasi qaysi?",
                options: [
                    "Ertak-terapiya, rolli o'yinlar va qiziqarli tarbiyaviy hikoyalar orqali tushuntirish",
                    "Doskaga chiqarib jazolash",
                    "O'quvchini darsdan chiqarib yuborish",
                    "Kundaligiga 2 qo'yish"
                ],
                correct: 0
            },
            {
                q: "Kichik maktab yoshidagi bolalarda emotsional intellektni rivojlantirish nima beradi?",
                options: [
                    "O'z hissiyotlarini taniy olish, do'stlariga hamdard bo'lish va ziddiyatlarni mushtlashuvsiz hal qilish",
                    "Faqat jismoniy kuch beradi",
                    "Bolani jim qilib qo'yadi",
                    "Hech qanday ta'sir ko'rsatmaydi"
                ],
                correct: 0
            },
            {
                q: "Boshlang'ich sinfda ikki o'quvchi urishib qolsa, o'qituvchining birinchi vazifasi nima?",
                options: [
                    "Bolalarni tinchlantirish, xavfsizlikni ta'minlash va har ikkalasiga nima bo'lganini navbat bilan aytib berish imkonini berish",
                    "Kim birinchi boshlaganini darhol kaltaklash",
                    "Butun sinf oldida ularni qoralash",
                    "Direktor xonasiga olib borish"
                ],
                correct: 0
            },
            {
                q: "Sinf rahbarining o'quvchilarga nisbatan adolatli munosabati nima uchun muhim?",
                options: [
                    "Chunki o'qituvchining har bir bahosi va munosabati bolalarning o'zaro do'stligiga bevosita ta'sir qiladi (sevimlilar yaratmaslik)",
                    "Faqat ma'muriyat oldida hisobot uchun",
                    "Dars jadvalini to'ldirish uchun",
                    "Hech qanday ahamiyati yo'q"
                ],
                correct: 0
            }
        ]
    }
];

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
                    { text: "Ichimda g'azab his qilsam-da, chuqur nafas olaman va darsdan keyin o'qituvchi bilan gaplashaman", score: 10, feedback: "A'lo! Hissiyotni tan olib, lekin nazorat qilib, muammoni konstruktiv hal qilish — bu yuqori REI belgisi." },
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
        skill: "Raqamli emotsional intellekt (REI)",
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
                    { text: "Hissiyotimni boshqaraman, izohni shunchaki o'qib, qo'yaman yoki muloyimlik bilan javob beraman", score: 10, feedback: "Ajoyib REI! Har bir izohga reaktsiya berish shart emas. O'zingizga ishonch eng muhim." },
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
                    { text: "5 soniya nafas olaman, ustuvorlikni belgilayman: oila (zudlik), do'st (qisqacha qo'llab-quvvatlash + keyinroq), taqdimot (reja tuzish)", score: 10, feedback: "Zo'r! Bosim ostida hissiyotni boshqarish va ustuvorlikni to'g'ri belgilash — yuqori REI belgisi." },
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
    { term: "Emotsional lug'at", definition: "Hissiyotlarni aniq va nozik ifodalash uchun qo'llaniladigan so'zlar to'plami. Boyroq emotsional lug'at — yuqoriroq REI belgisi." },
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
    { term: "Motivatsiya", definition: "Maqsadga erishish uchun harakatga undovchi ichki va tashqi kuchlar. REI ning muhim komponenti." },
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

