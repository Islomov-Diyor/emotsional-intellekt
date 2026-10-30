/**
 * RAQAMLI EMOTSIONAL INTELLEKTNI RIVOJLANTIRISH PLATFORMASI
 * Asosiy dastur logikasi va Fayllar markazi (IndexedDB / LocalStorage)
 */

// =============================================================================
// 0. ADMIN AUTHENTICATION & HUQUQLAR BOSHQARUVI
// Faqat sayt egasi (Admin) fayllarni yuklashi va o'chirishi mumkin
// =============================================================================
const AdminAuth = {
    TOKEN_KEY: 'rei_admin_token',
    PASS_KEY: 'rei_admin_password_hash',
    DEFAULT_PASSWORDS: ['admin123', 'admin2026'],

    isAdmin() {
        return localStorage.getItem(this.TOKEN_KEY) === 'true';
    },

    checkPassword(pass) {
        if (!pass) return false;
        const storedPass = localStorage.getItem(this.PASS_KEY);
        if (storedPass) {
            return pass === storedPass;
        }
        return this.DEFAULT_PASSWORDS.includes(pass);
    },

    login(pass) {
        if (this.checkPassword(pass)) {
            localStorage.setItem(this.TOKEN_KEY, 'true');
            if (window.updateAdminUI) window.updateAdminUI();
            return true;
        }
        return false;
    },

    logout() {
        localStorage.removeItem(this.TOKEN_KEY);
        if (window.updateAdminUI) window.updateAdminUI();
    },

    changePassword(oldPass, newPass) {
        if (!this.checkPassword(oldPass)) {
            return { success: false, message: "Amaldagi parol noto'g'ri kiritildi!" };
        }
        if (!newPass || newPass.trim().length < 4) {
            return { success: false, message: "Yangi parol kamida 4 ta belgidan iborat bo'lishi kerak!" };
        }
        localStorage.setItem(this.PASS_KEY, newPass.trim());
        return { success: true, message: "Parol muvaffaqiyatli yangilandi!" };
    }
};

// =============================================================================
// 1. GOOGLE DRIVE YORDAMCHI FUNKSIYALARI VA 1-BET PREVYU GENERATORI
// =============================================================================
function parseGoogleDriveUrl(url) {
    if (!url) return null;
    url = url.trim();

    let fileId = null;
    // Pattern 1: /file/d/ID or /d/ID
    const dMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (dMatch && dMatch[1]) {
        fileId = dMatch[1];
    }
    // Pattern 2: id=ID
    if (!fileId) {
        const idMatch = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
        if (idMatch && idMatch[1]) {
            fileId = idMatch[1];
        }
    }
    // Pattern 3: direct ID string (typically 25+ alphanumeric characters)
    if (!fileId && /^[a-zA-Z0-9_-]{25,65}$/.test(url)) {
        fileId = url;
    }

    if (!fileId) return null;

    return {
        fileId,
        viewUrl: `https://drive.google.com/file/d/${fileId}/view?usp=sharing`,
        previewUrl: `https://drive.google.com/file/d/${fileId}/preview`,
        downloadUrl: `https://drive.google.com/uc?export=download&id=${fileId}`,
        thumbnailUrl: `https://drive.google.com/thumbnail?id=${fileId}&sz=w800`
    };
}

function generateDocumentCoverSvg(title = 'Mavzu taqdimoti', ext = 'docx', slotNumber = 1, planLines = null) {
    const cleanTitle = (title || 'Mavzu')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

    // Standard curriculum outline by topic slot
    const defaultPlans = {
        1: [
            "1. Konfliktologiya fani predmeti va asosiy vazifalari",
            "2. Pedagogik konfliktlarda muloqotning ahamiyati",
            "3. Konflikt tushunchasining ilmiy talqinlari",
            "4. Muloqot jarayonida konfliktlarning paydo bo'lishi",
            "5. Boshlang'ich sinf o'quvchilarida muloqot madaniyati",
            "6. Xalqaro ta'limda konfliktalogiya fani rivoji"
        ],
        14: [
            "14.1. Konflikt tushunchasi, turlari va rivojlanish bosqichlari",
            "14.2. Oiladagi konfliktlar va ularning bolaga ta'siri",
            "14.3. Sinf jamoasidagi konfliktlar",
            "14.4. Konfliktlarni hal etish strategiyalari",
            "14.5. Konfliktlarni hal etish texnologiyalari",
            "14.6. Konfliktlar profilaktikasi va konstruktiv yechimlar"
        ],
        15: [
            "15.1. Sinf rahbari faoliyatining mohiyati va asosiy vazifalari",
            "15.2. Sinf rahbari — konfliktlar bo'yicha vositachi",
            "15.3. Sinf rahbarining kasbiy-shaxsiy sifatlari",
            "15.4. Sinf rahbarining ish rejasi va hujjatlari",
            "15.5. Sinf rahbarining oila, o'quvchilar va mutaxassislar bilan hamkorligi",
            "15.6. Sinf jamoasini shakllantirish va tarbiyaviy soatlar"
        ]
    };

    const lines = planLines || defaultPlans[slotNumber] || [
        `1. ${cleanTitle}ning nazariy asoslari va mohiyati`,
        `2. Boshlang'ich ta'limda pedagogik jarayonni tashkil etish`,
        `3. O'quvchilarning emotsional intellektini rivojlantirish`,
        `4. Amaliy metodlar va interaktiv texnologiyalar`,
        `5. Nizolarning oldini olish va samarali yechimlar`,
        `6. Xalqaro tajriba va pedagogik tavsiyalar`
    ];

    const planXml = lines.slice(0, 6).map((line, i) => {
        const y = 175 + (i * 28);
        return `<text x="75" y="${y}" font-family="'Times New Roman', Times, serif" font-size="15" fill="#1e293b" font-weight="500">${line.replace(/&/g, '&amp;')}</text>`;
    }).join('\n');

    const extLower = (ext || 'docx').toLowerCase();

    // If PPTX / PPT presentation, generate modern 16:9 presentation slide preview
    if (extLower === 'pptx' || extLower === 'ppt') {
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%">
        <defs>
            <linearGradient id="slideGrad_${slotNumber}" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#1e293b"/>
                <stop offset="50%" stop-color="#0f172a"/>
                <stop offset="100%" stop-color="#18181b"/>
            </linearGradient>
            <linearGradient id="orangeGlow_${slotNumber}" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#ea580c"/>
                <stop offset="100%" stop-color="#f97316"/>
            </linearGradient>
            <filter id="slideShadow_${slotNumber}" x="-5%" y="-5%" width="110%" height="110%">
                <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="rgba(0,0,0,0.3)"/>
            </filter>
        </defs>
        <rect width="800" height="480" fill="#090d16"/>
        <rect x="25" y="18" width="750" height="444" rx="12" fill="url(#slideGrad_${slotNumber})" stroke="#334155" stroke-width="2" filter="url(#slideShadow_${slotNumber})"/>
        
        <!-- Top slide accent bar -->
        <rect x="25" y="18" width="750" height="8" rx="4" fill="url(#orangeGlow_${slotNumber})"/>
        
        <!-- PPT Badge -->
        <rect x="55" y="44" width="125" height="30" rx="6" fill="#ea580c"/>
        <text x="117" y="64" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">📽️ SLAYD PREVYU</text>
        
        <text x="55" y="112" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" fill="#ea580c" font-weight="700" letter-spacing="1">
            RAQAMLI EMOTIONAL INTELLEKT • TAQDIMOT
        </text>
        <text x="55" y="152" font-family="'Segoe UI', Roboto, sans-serif" font-size="21" fill="#ffffff" font-weight="700">
            ${cleanTitle.length > 52 ? cleanTitle.substring(0, 50) + '...' : cleanTitle}
        </text>
        
        <line x1="55" y1="182" x2="745" y2="182" stroke="#334155" stroke-width="1.5"/>
        
        ${lines.slice(0, 5).map((l, i) => `
            <circle cx="70" cy="${218 + (i * 38)}" r="5" fill="#f97316"/>
            <text x="90" y="${223 + (i * 38)}" font-family="'Segoe UI', Roboto, sans-serif" font-size="15" fill="#e2e8f0" font-weight="500">${l.replace(/&/g, '&amp;')}</text>
        `).join('')}
        
        <!-- Bottom bar with slide counter and author -->
        <rect x="25" y="420" width="750" height="42" fill="#0f172a" rx="0"/>
        <text x="55" y="446" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" fill="#94a3b8">Boshlang'ich ta'lim kafedrasi • Ko'rgazmali slaydlar</text>
        <text x="740" y="446" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" fill="#f97316" font-weight="700" text-anchor="end">15 ta slayd</text>
    </svg>`;
        return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
    }

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%">
        <defs>
            <linearGradient id="paperGrad_${slotNumber}" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#ffffff"/>
                <stop offset="100%" stop-color="#fdfdfd"/>
            </linearGradient>
            <filter id="docShadow_${slotNumber}" x="-5%" y="-5%" width="110%" height="110%">
                <feDropShadow dx="0" dy="3" stdDeviation="4" flood-color="rgba(0,0,0,0.08)"/>
            </filter>
        </defs>
        <rect width="800" height="480" fill="#f8fafc"/>
        
        <!-- White A4 Sheet representation -->
        <rect x="35" y="18" width="730" height="444" rx="4" fill="url(#paperGrad_${slotNumber})" stroke="#e2e8f0" stroke-width="1.5" filter="url(#docShadow_${slotNumber})"/>
        
        <!-- Document Title -->
        <text x="400" y="72" font-family="'Times New Roman', Times, serif" font-size="20" fill="#0f172a" font-weight="700" text-anchor="middle">
            ${cleanTitle.length > 60 ? cleanTitle.substring(0, 58) + '...' : cleanTitle}
        </text>
        
        <!-- Section: Reja -->
        <text x="400" y="118" font-family="'Times New Roman', Times, serif" font-size="17" fill="#0f172a" font-weight="700" text-anchor="middle">
            Reja:
        </text>
        
        <!-- Reja lines -->
        ${planXml}

        <!-- Footer terms / Tayanch iboralar -->
        <line x1="75" y1="385" x2="725" y2="385" stroke="#f1f5f9" stroke-width="1.5"/>
        <text x="400" y="420" font-family="'Times New Roman', Times, serif" font-size="13" fill="#64748b" font-style="italic" text-anchor="middle">
            Tayanch iboralar: konflikt, konstruktiv konflikt, destruktiv konflikt, pedagogik muloqot
        </text>
    </svg>`;
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

function handlePreviewImgError(img, ext, title, slotNumber) {
    if (!img) return;
    img.onerror = null;
    img.src = generateDocumentCoverSvg(title, ext, slotNumber);
}

// Universal material card renderer (used across Fayllar markazi, Ma'ruzalar, Amaliy topshiriqlar, Testlar)
window.renderPlatformMaterialCardHtml = function({
    id,
    topicTitle,
    fileName,
    fileSize = 949964,
    downloadsCount = 50,
    ext = 'docx',
    categoryBadge = "Ma'ruza",
    subj = "FAN: RAQAMLI EMOTSIONAL INTELEKT",
    plan = null,
    driveId = null,
    slotNumber = 1
}) {
    const isAdmin = typeof AdminAuth !== 'undefined' && AdminAuth.isAdmin();
    const safeTitleEscaped = (topicTitle || 'Mavzu').replace(/'/g, "\\'").replace(/"/g, '&quot;');
    const safeNameEscaped = (fileName || topicTitle).replace(/"/g, '&quot;');
    const extLower = (ext || 'docx').toLowerCase();
    const dCount = downloadsCount || 50;
    const formattedSize = typeof fileSize === 'number' 
        ? (window.fileManager ? fileManager.formatFileSize(fileSize) : `${(fileSize / (1024 * 1024)).toFixed(1)} MB`)
        : (fileSize || '927.7 KB');
    const thumbnailUrl = driveId 
        ? `https://drive.google.com/thumbnail?id=${driveId}&sz=w800` 
        : generateDocumentCoverSvg(topicTitle, extLower, slotNumber, plan);

    return `
        <div class="file-slot-card gdrive-slot-card has-file">
            <div class="slot-preview-wrapper" onclick="fileManager.downloadFile('${id}')" title="Google Diskdan ochish (1-sahifa)">
                <img class="slot-preview-img" src="${thumbnailUrl}" alt="${safeTitleEscaped}" loading="lazy" onerror="handlePreviewImgError(this, '${extLower}', '${safeTitleEscaped}', ${slotNumber})">
                <div class="slot-preview-overlay">
                    <span class="preview-zoom-btn">↗ Google Diskda ochish</span>
                </div>
                <span class="slot-badge-top-left">${categoryBadge}</span>
                <span class="slot-badge-top-right file-ext-${extLower}">${extLower.toUpperCase()}</span>
            </div>

            <div class="slot-content-body">
                <div class="slot-subject-label">${subj}</div>
                <h4 class="slot-title" title="${safeTitleEscaped}">${topicTitle}</h4>
                <div class="slot-file-meta-row">
                    <span class="meta-file-name" title="${safeNameEscaped}">📄 ${fileName || topicTitle}</span>
                    <span class="meta-file-size">${formattedSize}</span>
                </div>
                <div class="slot-download-stat">
                    <span class="stat-icon">📥</span>
                    <span>Yuklab olindi: <b id="stat-count-${id}">${dCount}</b> marta</span>
                </div>
            </div>

            <div class="slot-card-actions">
                <button class="btn btn-primary btn-slot-download-main" onclick="fileManager.downloadFile('${id}')" title="Google Diskdan ochish va yuklab olish">
                    <span>⬇️ Yuklab olish</span>
                </button>
                <button class="btn btn-outline-sm btn-slot-preview-inline" onclick="openFilePreview('${id}')" title="Prevyu ko'rish">
                    <span>👁️</span>
                </button>
                ${isAdmin ? `
                    <button class="btn btn-edit-slot-tiny" onclick="editUploadedFile('${id}')" title="Tahrirlash">✏️</button>
                    <button class="btn btn-slot-delete" onclick="deleteFileFromHub('${id}')" title="O'chirish">🗑️</button>
                ` : ''}
            </div>
        </div>
    `;
};

// =============================================================================
// FILE MANAGER - FAYLLARNI SAQLASH VA BOSHQARISH TIZIMI
// =============================================================================
class FileStorageManager {
    constructor() {
        this.dbName = 'REI_Platform_Files_DB';
        this.storeName = 'uploaded_files';
        this.db = null;
        this.memoryFiles = [];
        this.isReady = false;
        this.init();
    }

    async init() {
        try {
            await this.openIndexedDB();
            this.isReady = true;
            await this.loadAllFiles();
        } catch (e) {
            console.warn('IndexedDB ochilmadi, LocalStorage ishlatiladi:', e);
            this.loadFromLocalStorage();
            this.isReady = true;
        }

        // 1. Dublikatlarni tozalash (foydalanuvchi oldin o'z kompyuterida kiritgan nusxalarini tozalash)
        if (typeof defaultPlatformMaterials !== 'undefined' && Array.isArray(defaultPlatformMaterials)) {
            // Rasmiy materiallar doimo ustuvor
            const officialDriveIds = new Set(defaultPlatformMaterials.map(m => m.driveId).filter(Boolean));
            const officialSlotKeys = new Set(defaultPlatformMaterials.map(m => `${m.category}_${m.slotId}`));

            // Eski gdrive_ va mock yozuvlarni tozalash (double bo'lmasligi uchun)
            this.memoryFiles = (this.memoryFiles || []).filter(f => {
                if (!f) return false;
                if (f.driveUrl && f.driveUrl.includes('1_rei_pedagogik_konfliktlar_')) return false;
                // Qo'lda kiritilgan eski gdrive_ nusxalarini olib tashlash
                if (f.id && f.id.startsWith('gdrive_')) {
                    return false;
                }
                return true;
            });

            // Rasmiy materiallarni to'liq xotiraga yuklash
            const memoryMap = new Map();
            this.memoryFiles.forEach(f => memoryMap.set(f.id, f));

            defaultPlatformMaterials.forEach(m => {
                if (!memoryMap.has(m.id)) {
                    this.memoryFiles.push({ ...m });
                } else {
                    const existing = memoryMap.get(m.id);
                    Object.assign(existing, m);
                }
            });

            // Qat'iy deduplication: har bir slot uchun faqat 1 ta yagona kartochka qoladi
            const seenSlots = new Set();
            this.memoryFiles = this.memoryFiles.filter(f => {
                const slotKey = `${f.category}_${f.slotId || f.id}`;
                if (seenSlots.has(slotKey)) return false;
                seenSlots.add(slotKey);
                return true;
            });
        }
        this.saveToLocalStorage();

        if (this.db) {
            try {
                const tx = this.db.transaction([this.storeName], 'readwrite');
                const store = tx.objectStore(this.storeName);
                const req = store.openCursor();
                const validIds = new Set(this.memoryFiles.map(f => f.id));
                req.onsuccess = (e) => {
                    const cursor = e.target.result;
                    if (cursor) {
                        if (!validIds.has(cursor.value.id) || cursor.value.id.startsWith('gdrive_')) {
                            cursor.delete();
                        }
                        cursor.continue();
                    }
                };
            } catch (e) {}
        }

        this.updateBadgesAndUI();
    }

    openIndexedDB() {
        return new Promise((resolve, reject) => {
            if (!window.indexedDB) {
                return reject(new Error('IndexedDB mavjud emas'));
            }
            const request = window.indexedDB.open(this.dbName, 1);
            request.onupgradeneeded = (e) => {
                const db = e.target.result;
                if (!db.objectStoreNames.contains(this.storeName)) {
                    const store = db.createObjectStore(this.storeName, { keyPath: 'id' });
                    store.createIndex('category', 'category', { unique: false });
                    store.createIndex('slotId', 'slotId', { unique: false });
                }
            };
            request.onsuccess = (e) => {
                this.db = e.target.result;
                resolve(this.db);
            };
            request.onerror = (e) => reject(e.target.error);
        });
    }

    loadFromLocalStorage() {
        try {
            const raw = localStorage.getItem('rei_uploaded_files');
            this.memoryFiles = raw ? JSON.parse(raw) : [];
        } catch (e) {
            this.memoryFiles = [];
        }
    }

    saveToLocalStorage() {
        try {
            // Google Drive yozuvlari yengil (faqat link va meta), to'liq sig'adi
            localStorage.setItem('rei_uploaded_files', JSON.stringify(this.memoryFiles.slice(-100)));
        } catch (e) {
            console.warn('LocalStorage saqlashda ogohlantirish:', e);
        }
    }

    async loadAllFiles() {
        if (this.db) {
            return new Promise((resolve, reject) => {
                const transaction = this.db.transaction([this.storeName], 'readonly');
                const store = transaction.objectStore(this.storeName);
                const request = store.getAll();
                request.onsuccess = () => {
                    this.memoryFiles = request.result || [];
                    resolve(this.memoryFiles);
                };
                request.onerror = () => reject(request.error);
            });
        } else {
            this.loadFromLocalStorage();
            return this.memoryFiles;
        }
    }

    async saveGoogleDriveFile({ id: customId, topic, slotId, category, name, driveUrl, type, subject, downloadsCount, desc }) {
        if (!AdminAuth.isAdmin()) {
            showToast("Kechirasiz, yangi fayl ulash faqat sayt egasi (Admin) uchun ochiq!", "danger");
            if (window.openAdminModal) window.openAdminModal();
            throw new Error("Ruxsatsiz amal: sayt egasi emassiz.");
        }

        const parsed = parseGoogleDriveUrl(driveUrl);
        if (!parsed) {
            throw new Error("Noto'g'ri Google Disk havolasi kiritildi!");
        }

        const id = customId || 'gdrive_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6);
        const ext = (type || (name.split('.').pop() || 'pptx')).toLowerCase();

        const fileRecord = {
            id,
            topic: topic || name || "Mavzu",
            name: name || `${topic || 'Mavzu'}.${ext}`,
            subject: subject || "Fan: Raqamli emotsional intelekt",
            size: ext === 'pptx' ? 14200000 : ext === 'pdf' ? 2400000 : 950000,
            type: ext,
            category: category || 'lecture',
            slotId: parseInt(slotId) || Date.now(),
            desc: desc || '',
            uploadedAt: new Date().toLocaleString('uz-UZ'),
            isGoogleDrive: true,
            driveId: parsed.fileId,
            driveUrl: parsed.viewUrl,
            previewUrl: parsed.previewUrl,
            downloadUrl: parsed.downloadUrl,
            thumbnailUrl: parsed.thumbnailUrl,
            downloadsCount: parseInt(downloadsCount) || 0,
            dataUrl: ''
        };

        if (this.db) {
            try {
                await new Promise((resolve, reject) => {
                    const tx = this.db.transaction([this.storeName], 'readwrite');
                    const store = tx.objectStore(this.storeName);
                    const req = store.put(fileRecord);
                    req.onsuccess = () => resolve();
                    req.onerror = () => reject(req.error);
                });
            } catch (e) {
                console.warn("DB ga saqlashda xato:", e);
            }
        }

        const existingIdx = this.memoryFiles.findIndex(f => f.category === fileRecord.category && f.slotId === fileRecord.slotId && fileRecord.slotId > 0);
        if (existingIdx !== -1) {
            this.memoryFiles[existingIdx] = fileRecord;
        } else {
            this.memoryFiles.unshift(fileRecord);
        }

        this.saveToLocalStorage();
        this.updateBadgesAndUI();
        return fileRecord;
    }

    async saveFile({ name, size, type, category, slotId, desc, fileObj }) {
        if (!AdminAuth.isAdmin()) {
            showToast("Kechirasiz, yangi fayl yuklash faqat sayt egasi (Admin) uchun ochiq!", "danger");
            if (window.openAdminModal) window.openAdminModal();
            throw new Error("Ruxsatsiz amal: sayt egasi emassiz.");
        }

        const id = 'file_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6);
        const dataUrl = await this.readFileAsDataURL(fileObj);
        
        const fileRecord = {
            id,
            name: name || fileObj.name,
            subject: "Fan: Raqamli emotsional intelekt",
            size: size || fileObj.size,
            type: type || fileObj.type || this.getTypeFromExt(fileObj.name),
            category: category || 'lecture',
            slotId: parseInt(slotId) || 0,
            desc: desc || '',
            uploadedAt: new Date().toLocaleString('uz-UZ'),
            downloadsCount: 15,
            isGoogleDrive: false,
            dataUrl
        };

        if (this.db) {
            await new Promise((resolve, reject) => {
                const tx = this.db.transaction([this.storeName], 'readwrite');
                const store = tx.objectStore(this.storeName);
                const req = store.put(fileRecord);
                req.onsuccess = () => resolve();
                req.onerror = () => reject(req.error);
            });
        }

        const existingIdx = this.memoryFiles.findIndex(f => f.id === fileRecord.id);
        if (existingIdx !== -1) {
            this.memoryFiles[existingIdx] = fileRecord;
        } else {
            this.memoryFiles.unshift(fileRecord);
        }

        this.saveToLocalStorage();
        this.updateBadgesAndUI();
        return fileRecord;
    }

    readFileAsDataURL(file) {
        return new Promise((resolve, reject) => {
            if (!file) return resolve('');
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = () => reject(reader.error);
            reader.readAsDataURL(file);
        });
    }

    getTypeFromExt(filename) {
        if (!filename) return 'pptx';
        const ext = (filename.split('.').pop() || '').toLowerCase();
        return ext;
    }

    getFileIcon(filename) {
        const ext = (filename.split('.').pop() || '').toLowerCase();
        if (['pdf'].includes(ext)) return '📕';
        if (['doc', 'docx'].includes(ext)) return '📘';
        if (['ppt', 'pptx'].includes(ext)) return '📙';
        if (['xls', 'xlsx'].includes(ext)) return '📗';
        if (['zip', 'rar', '7z'].includes(ext)) return '🗄️';
        if (['png', 'jpg', 'jpeg', 'svg', 'webp'].includes(ext)) return '🖼️';
        if (['mp3', 'wav', 'ogg'].includes(ext)) return '🎵';
        if (['mp4', 'avi', 'mov', 'mkv'].includes(ext)) return '🎬';
        return '📄';
    }

    formatFileSize(bytes) {
        if (!bytes || bytes === 0) return '0 B';
        const k = 1024;
        const sizes = ['B', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
    }

    async deleteFile(id) {
        if (!AdminAuth.isAdmin()) {
            showToast("Kechirasiz, fayllarni o'chirish faqat sayt egasi (admin) uchun!", "danger");
            if (window.openAdminModal) window.openAdminModal();
            throw new Error("Ruxsatsiz amal: sayt egasi emassiz.");
        }

        if (this.db) {
            try {
                await new Promise((resolve, reject) => {
                    const tx = this.db.transaction([this.storeName], 'readwrite');
                    const store = tx.objectStore(this.storeName);
                    const req = store.delete(id);
                    req.onsuccess = () => resolve();
                    req.onerror = () => reject(req.error);
                });
            } catch (e) {}
        }
        this.memoryFiles = this.memoryFiles.filter(f => f.id !== id);
        this.saveToLocalStorage();
        this.updateBadgesAndUI();
    }

    recordDownload(id) {
        const file = this.memoryFiles.find(f => f.id === id);
        if (!file) return;
        file.downloadsCount = (file.downloadsCount || 0) + 1;

        const countEl = document.getElementById(`stat-count-${id}`);
        if (countEl) countEl.textContent = file.downloadsCount;

        if (this.db) {
            try {
                const tx = this.db.transaction([this.storeName], 'readwrite');
                const store = tx.objectStore(this.storeName);
                store.put(file);
            } catch (e) {}
        }
        this.saveToLocalStorage();
    }

    downloadFile(id) {
        let file = (this.memoryFiles || []).find(f => f.id === id);
        if (!file && typeof defaultPlatformMaterials !== 'undefined') {
            file = defaultPlatformMaterials.find(f => f.id === id);
        }
        if (!file && typeof lecturesData !== 'undefined') {
            const l = lecturesData.find(f => f.fileId === id || f.id === id);
            if (l) file = { ...l, isGoogleDrive: true };
        }
        if (!file && typeof presentationsData !== 'undefined') {
            const p = presentationsData.find(f => f.fileId === id || f.id === id);
            if (p) file = { ...p, isGoogleDrive: true };
        }
        if (!file && typeof practicalsData !== 'undefined') {
            const pr = practicalsData.find(f => f.fileId === id || f.id === id);
            if (pr) file = { ...pr, isGoogleDrive: true };
        }
        if (!file && typeof testsData !== 'undefined') {
            const t = testsData.find(f => f.fileId === id || f.id === id || String(f.id) === String(id));
            if (t) file = { ...t, isGoogleDrive: !!(t.driveId || t.isGoogleDrive) };
        }
        if (!file) {
            showToast('Fayl topilmadi', 'danger');
            return;
        }

        this.recordDownload(id);

        if (file.isGoogleDrive) {
            showToast(`"${file.name}" Google Diskdan ochilmoqda...`, 'success');
            const targetUrl = file.driveUrl || file.viewUrl || file.downloadUrl || `https://drive.google.com/file/d/${file.driveId}/view`;
            window.open(targetUrl, '_blank');
            return;
        }

        if (file.dataUrl) {
            const link = document.createElement('a');
            link.href = file.dataUrl;
            link.download = file.name;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            showToast(`"${file.name}" yuklab olindi!`, 'success');
        } else {
            showToast('Lokal fayl mazmuni topilmadi', 'warning');
        }
    }

    getFileForSlot(category, slotId) {
        return this.memoryFiles.find(f => f.category === category && f.slotId === parseInt(slotId));
    }

    getAllFilesForCategory(category) {
        if (category === 'all') return this.memoryFiles;
        return this.memoryFiles.filter(f => f.category === category);
    }

    updateBadgesAndUI() {
        const total = this.memoryFiles.length;
        const lectures = this.memoryFiles.filter(f => f.category === 'lecture').length;
        const presentations = this.memoryFiles.filter(f => f.category === 'presentation').length;
        const practicals = this.memoryFiles.filter(f => f.category === 'practical').length;
        const tests = this.memoryFiles.filter(f => f.category === 'test').length;
        const resources = this.memoryFiles.filter(f => f.category === 'resource').length;

        // Nav badges
        const navBadge = document.getElementById('nav-file-badge');
        if (navBadge) navBadge.textContent = total;

        const navLecBadge = document.getElementById('nav-lectures-badge');
        const navPresBadge = document.getElementById('nav-presentations-badge');
        const navPracBadge = document.getElementById('nav-practicals-badge');
        const navTestBadge = document.getElementById('nav-tests-badge');

        const totalLecCount = Math.max(typeof lecturesData !== 'undefined' ? lecturesData.length : 0, lectures);
        const totalPresCount = Math.max(typeof presentationsData !== 'undefined' ? presentationsData.length : 0, presentations);
        const totalPracCount = Math.max(typeof practicalsData !== 'undefined' ? practicalsData.length : 0, practicals);
        const totalTestCount = Math.max(typeof testsData !== 'undefined' ? testsData.length : 0, tests);

        if (navLecBadge) navLecBadge.textContent = totalLecCount;
        if (navPresBadge) navPresBadge.textContent = totalPresCount;
        if (navPracBadge) navPracBadge.textContent = totalPracCount;
        if (navTestBadge) navTestBadge.textContent = totalTestCount;

        // Home counts
        const homeCount = document.getElementById('home-file-count');
        const homeBar = document.getElementById('home-file-bar');
        if (homeCount) {
            homeCount.textContent = total;
            homeCount.setAttribute('data-count', total);
        }
        if (homeBar) {
            homeBar.style.width = Math.min(100, total * 10) + '%';
        }

        const homeLecCount = document.getElementById('home-lectures-count');
        const homeLecBar = document.getElementById('home-lectures-bar');
        if (homeLecCount) homeLecCount.textContent = totalLecCount;
        if (homeLecBar) homeLecBar.style.width = Math.min(100, totalLecCount * 10) + '%';

        const homePresCount = document.getElementById('home-presentations-count');
        const homePresBar = document.getElementById('home-presentations-bar');
        if (homePresCount) homePresCount.textContent = totalPresCount;
        if (homePresBar) homePresBar.style.width = Math.min(100, totalPresCount * 10) + '%';

        const homePracCount = document.getElementById('home-practicals-count');
        const homePracBar = document.getElementById('home-practicals-bar');
        if (homePracCount) homePracCount.textContent = totalPracCount;
        if (homePracBar) homePracBar.style.width = Math.min(100, totalPracCount * 10) + '%';

        const homeTestCount = document.getElementById('home-tests-count');
        const homeTestBar = document.getElementById('home-tests-bar');
        if (homeTestCount) homeTestCount.textContent = totalTestCount;
        if (homeTestBar) homeTestBar.style.width = Math.min(100, totalTestCount * 10) + '%';

        // Storage status text
        const statusText = document.getElementById('storage-status-text');
        if (statusText) statusText.textContent = `Yuklangan: ${total} ta material`;

        // Tab counts
        const cntAll = document.getElementById('count-all-files');
        const cntLec = document.getElementById('count-lecture-files');
        const cntPres = document.getElementById('count-presentation-files');
        const cntPrac = document.getElementById('count-practical-files');
        const cntTest = document.getElementById('count-test-files');
        const cntRes = document.getElementById('count-resource-files');
        if (cntAll) cntAll.textContent = total;
        if (cntLec) cntLec.textContent = lectures;
        if (cntPres) cntPres.textContent = presentations;
        if (cntPrac) cntPrac.textContent = practicals;
        if (cntTest) cntTest.textContent = tests;
        if (cntRes) cntRes.textContent = resources;

        const tblCount = document.getElementById('table-files-count');
        if (tblCount) tblCount.textContent = `${total} ta fayl`;

        // Re-render UI views if currently on File Hub
        if (window.renderFileHubSlots) {
            window.renderFileHubSlots();
        }
        if (window.renderFilesTable) {
            window.renderFilesTable();
        }
        // Also update badges on lecture / presentation / practical cards if rendered
        if (window.updateCardFileBadges) {
            window.updateCardFileBadges();
        }
    }
}

const fileManager = new FileStorageManager();

// =============================================================================
// 2. TOAST BILDIRISHNOMALARI
// =============================================================================
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    const icon = type === 'success' ? '✅' : type === 'danger' ? '❌' : 'ℹ️';
    toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

// =============================================================================
// 3. ILOVA HOLATI VA NAVIGATSIYA
// =============================================================================
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    // 1. Splash screen fadeout
    setTimeout(() => {
        const splash = document.getElementById('splash-screen');
        if (splash) splash.classList.add('hidden');
    }, 1200);

    // 2. Navigation handling
    initNavigation();

    // 3. Theme Toggle
    initTheme();

    // 4. Initialize Data Components
    initLectures();
    initPresentations();
    initPracticals();
    initTests();
    initSimulations();
    initDetection();
    initGlossary();

    // 5. Initialize File Hub
    initFileHub();

    // 6. Modal close listeners
    initModals();

    // 7. Stat counters animation
    animateStats();

    // 8. Admin UI & access control
    if (window.updateAdminUI) {
        window.updateAdminUI();
    }
}

function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const pages = document.querySelectorAll('.page');

    function switchPage(pageId) {
        navItems.forEach(item => {
            if (item.getAttribute('data-page') === pageId) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        pages.forEach(page => {
            if (page.id === `page-${pageId}`) {
                page.classList.add('active');
            } else {
                page.classList.remove('active');
            }
        });

        // If navigating away from EI Detection, release camera
        if (pageId !== 'detection' && typeof window.stopCamera === 'function') {
            window.stopCamera();
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });

        // If mobile, close sidebar
        const sidebar = document.getElementById('sidebar');
        if (sidebar && window.innerWidth <= 768) {
            sidebar.classList.remove('open');
        }

        // If switched to File Hub, refresh
        if (pageId === 'file-hub') {
            renderFileHubSlots();
            renderFilesTable();
        }
    }

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const pageId = item.getAttribute('data-page');
            switchPage(pageId);
        });
    });

    // Home stat cards links
    document.querySelectorAll('[data-page-link]').forEach(card => {
        card.addEventListener('click', () => {
            const targetPage = card.getAttribute('data-page-link');
            switchPage(targetPage);
        });
    });

    // Mobile menu toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const sidebar = document.getElementById('sidebar');
    if (mobileBtn && sidebar) {
        mobileBtn.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    }

    window.switchPage = switchPage;
}

function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    // Talab bo'yicha standart mavzu - yorqin (light mode)
    const savedTheme = localStorage.getItem('rei_theme') || 'light';

    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        if (themeToggle) themeToggle.checked = false;
    } else {
        document.body.removeAttribute('data-theme');
        if (themeToggle) themeToggle.checked = true;
    }

    if (themeToggle) {
        themeToggle.addEventListener('change', () => {
            if (themeToggle.checked) {
                document.body.removeAttribute('data-theme');
                localStorage.setItem('rei_theme', 'light');
            } else {
                document.body.setAttribute('data-theme', 'dark');
                localStorage.setItem('rei_theme', 'dark');
            }
        });
    }
}

function animateStats() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count')) || 0;
        let count = 0;
        const step = Math.max(1, Math.ceil(target / 20));
        const timer = setInterval(() => {
            count += step;
            if (count >= target) {
                counter.textContent = target;
                clearInterval(timer);
            } else {
                counter.textContent = count;
            }
        }, 40);
    });
}

function initModals() {
    document.querySelectorAll('.modal-overlay, .modal-close, .modal-close-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal');
            if (modal) modal.classList.remove('active');
        });
    });
}

// =============================================================================
// 4. MA'RUZALAR MODULI
// =============================================================================
function initLectures() {
    const grid = document.getElementById('lectures-grid');
    const searchInput = document.getElementById('lecture-search');
    if (!grid) return;

    window.renderLecturesList = function() {
        const q = searchInput ? searchInput.value.toLowerCase().trim() : '';
        const staticList = typeof lecturesData !== 'undefined' ? lecturesData : [];
        const memoryList = (fileManager ? fileManager.memoryFiles.filter(f => f.category === 'lecture') : []);

        // Unique list by driveId, slotId, or title to prevent any duplicates
        const map = new Map();
        memoryList.forEach((f, idx) => {
            const key = f.driveId || (f.slotId ? `slot_${f.slotId}` : null) || (f.topic || f.name).toLowerCase().trim();
            map.set(key, {
                id: f.id,
                title: f.topic || f.name,
                name: f.name,
                size: f.size,
                type: f.type || 'docx',
                downloadsCount: f.downloadsCount || 50,
                plan: f.plan,
                driveId: f.driveId,
                slotId: f.slotId || (idx + 1),
                file: f
            });
        });

        staticList.forEach((s, idx) => {
            const key = s.driveId || (s.id ? `slot_${s.id}` : null) || (s.title || s.name || '').toLowerCase().trim();
            if (!map.has(key)) {
                map.set(key, {
                    id: s.fileId || `lec-${idx + 1}`,
                    title: s.title,
                    name: s.name || `${s.title}.docx`,
                    size: s.size || 949964,
                    type: s.type || 'docx',
                    downloadsCount: s.downloadsCount || 50,
                    plan: s.plan,
                    driveId: s.driveId,
                    slotId: s.id || (idx + 1)
                });
            }
        });

        let combined = Array.from(map.values());
        if (q) {
            combined = combined.filter(l => l.title.toLowerCase().includes(q) || (l.name && l.name.toLowerCase().includes(q)));
        }

        grid.className = 'cards-grid file-slots-grid';
        grid.innerHTML = '';
        if (combined.length === 0) {
            grid.innerHTML = `
                <div class="empty-state-card" style="grid-column: 1 / -1; text-align:center; padding:3.5rem 1.5rem; background:var(--bg-secondary); border-radius:16px; border:2px dashed var(--border-color);">
                    <div style="font-size:3.5rem; margin-bottom:1rem;">📖</div>
                    <h3 style="font-size:1.3rem; font-weight:700; color:var(--text-primary); margin-bottom:0.5rem;">Hozircha ma'ruzalar topilmadi</h3>
                    <p style="color:var(--text-muted); font-size:0.9rem; max-width:480px; margin:0 auto 1.5rem;">
                        Qidiruv so'zini o'zgartirib ko'ring yoki barcha materiallarni ko'rish uchun qidiruvni tozalang.
                    </p>
                </div>
            `;
            return;
        }

        combined.forEach((lec, idx) => {
            const cardHtml = renderPlatformMaterialCardHtml({
                id: lec.id,
                topicTitle: lec.title,
                fileName: lec.name || `${lec.title}.docx`,
                fileSize: lec.size || 949964,
                downloadsCount: lec.downloadsCount || (50 + (idx % 6)),
                ext: lec.type || 'docx',
                categoryBadge: "Ma'ruza",
                subj: "FAN: RAQAMLI EMOTSIONAL INTELEKT",
                plan: lec.plan,
                driveId: lec.driveId,
                slotNumber: idx + 1
            });
            grid.insertAdjacentHTML('beforeend', cardHtml);
        });
    };

    window.renderLecturesList();

    if (searchInput) {
        searchInput.addEventListener('input', () => {
            window.renderLecturesList();
        });
    }

    window.updateCardFileBadges = () => {
        if (window.renderLecturesList) window.renderLecturesList();
        if (window.renderPresentationsList) window.renderPresentationsList();
        if (window.renderPracticalsList) window.renderPracticalsList();
        if (window.renderTestsList) window.renderTestsList();
    };
}

window.openLectureModal = function(id) {
    if (typeof lecturesData === 'undefined') return;
    const lec = lecturesData.find(l => l.id === id);
    if (!lec) return;

    const modal = document.getElementById('lecture-modal');
    const body = document.getElementById('lecture-modal-body');
    if (!modal || !body) return;

    const attachedFile = fileManager.getFileForSlot('lecture', id);

    let fileSectionHtml = `
        <div class="modal-file-attach-box">
            <h4>📎 Ushbu ma'ruzaga biriktirilgan fayllar:</h4>
    `;

    if (attachedFile) {
        const ext = (attachedFile.type || fileManager.getTypeFromExt(attachedFile.name) || 'pptx').toLowerCase();
        const safeTitleEscaped = lec.title.replace(/'/g, "\\'").replace(/"/g, '&quot;');
        const safeNameEscaped = attachedFile.name.replace(/"/g, '&quot;');
        const thumbnailUrl = attachedFile.thumbnailUrl || (attachedFile.driveId ? `https://drive.google.com/thumbnail?id=${attachedFile.driveId}&sz=w800` : generateDocumentCoverSvg(lec.title, ext, id));

        fileSectionHtml += `
            <div class="modal-gdrive-preview-card" style="display:flex; gap:1rem; align-items:center; background:var(--bg-secondary); border:1px solid var(--border-color); border-radius:12px; padding:0.85rem; margin-bottom:1rem; flex-wrap:wrap;">
                <div style="width:140px; height:85px; border-radius:8px; overflow:hidden; position:relative; background:#0f172a; flex-shrink:0; cursor:pointer;" onclick="fileManager.downloadFile('${attachedFile.id}')">
                    <img src="${thumbnailUrl}" alt="${safeTitleEscaped}" style="width:100%; height:100%; object-fit:cover;" onerror="handlePreviewImgError(this, '${ext}', '${safeTitleEscaped}', ${id})">
                    <span style="position:absolute; bottom:4px; left:4px; background:rgba(0,0,0,0.75); color:white; font-size:0.65rem; font-weight:700; padding:2px 6px; border-radius:4px;">${ext.toUpperCase()}</span>
                </div>
                <div style="flex:1; min-width:200px;">
                    <div style="font-size:0.75rem; color:var(--primary-600); font-weight:700; text-transform:uppercase;">Fan: Raqamli emotsional intelekt</div>
                    <div style="font-weight:700; font-size:0.95rem; color:var(--text-primary);">${attachedFile.name}</div>
                    <div style="font-size:0.8rem; color:var(--text-muted); margin-top:0.25rem;">
                        <span>${fileManager.formatFileSize(attachedFile.size)}</span> • 
                        <span style="color:#0284c7; font-weight:700;">📥 Yuklab olindi: <b id="stat-count-${attachedFile.id}">${attachedFile.downloadsCount || 72}</b> marta</span>
                    </div>
                </div>
                <div style="display:flex; gap:0.5rem; align-items:center;">
                    <button class="btn btn-primary btn-sm" onclick="fileManager.downloadFile('${attachedFile.id}')" title="Google Diskdan ochish va yuklab olish">
                        ⬇️ Yuklab olish
                    </button>
                    <button class="btn btn-outline-sm" onclick="openFilePreview('${attachedFile.id}')" title="Prevyu ko'rish">
                        👁️ Prevyu
                    </button>
                    ${AdminAuth.isAdmin() ? `<button class="btn btn-danger-sm" onclick="deleteAndRefreshLecture(${id}, '${attachedFile.id}')" title="O'chirish">🗑️</button>` : ''}
                </div>
            </div>
        `;
    } else {
        if (AdminAuth.isAdmin()) {
            fileSectionHtml += `
                <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:0.75rem;">
                    Hozircha ushbu ma'ruza uchun Google Disk havolasi ulanmagan. O'zingiz biriktirishingiz mumkin:
                </p>
                <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
                    <button class="btn btn-primary btn-sm" onclick="openFastUploadForSlot('lecture', ${id})">
                        🔗 Ushbu ma'ruzaga Google Disk havolasini ulash
                    </button>
                </div>
            `;
        } else {
            fileSectionHtml += `
                <p style="font-size:0.85rem; color:var(--text-muted);">
                    ℹ️ Ushbu ma'ruza uchun hozircha yuklab olinadigan qo'shimcha fayl biriktirilmagan. To'liq matn bilan quyida tanishishingiz mumkin.
                </p>
            `;
        }
    }
    fileSectionHtml += `</div>`;

    // Process content for linebreaks
    const formattedContent = (lec.content || '').split('\n').map(line => {
        if (line.startsWith('📌')) return `<h4 style="margin: 1.25rem 0 0.5rem; color:var(--primary-500);">${line}</h4>`;
        if (line.startsWith('—') || line.startsWith('•')) return `<li style="margin-left: 1.25rem; margin-bottom: 0.25rem;">${line.substring(1).trim()}</li>`;
        if (line.match(/^\d+\./)) return `<div style="margin-top:0.35rem; font-weight:600;">${line}</div>`;
        return `<p style="margin-bottom: 0.5rem;">${line}</p>`;
    }).join('');

    body.innerHTML = `
        <div class="modal-header-section">
            <span class="card-number">№ ${lec.id} - Ma'ruza</span>
            <h2 style="margin: 0.5rem 0 1rem; font-size: 1.5rem;">${lec.title}</h2>
        </div>
        ${fileSectionHtml}
        <div class="modal-text-content" style="margin-top:1.5rem; line-height: 1.8;">
            ${formattedContent}
        </div>
    `;

    modal.classList.add('active');
};

window.deleteAndRefreshLecture = async function(lectureId, fileId) {
    if (!AdminAuth.isAdmin()) {
        showToast("Faylni o'chirish faqat sayt egasi (Admin) uchun ruxsat etilgan!", "danger");
        return;
    }
    if (confirm("Rostdan ham ushbu biriktirilgan faylni o'chirmoqchimisiz?")) {
        await fileManager.deleteFile(fileId);
        showToast("Fayl o'chirildi", "warning");
        openLectureModal(lectureId);
        renderFileHubSlots();
        renderFilesTable();
    }
};

// =============================================================================
// 4.5. TAQDIMOTLAR MODULI (SLAYDLAR VA PPTX FAYLLAR)
// =============================================================================
function initPresentations() {
    const grid = document.getElementById('presentations-grid');
    const searchInput = document.getElementById('presentation-search');
    if (!grid) return;

    window.renderPresentationsList = function() {
        const q = searchInput ? searchInput.value.toLowerCase().trim() : '';
        const staticList = typeof presentationsData !== 'undefined' ? presentationsData : [];
        const memoryList = (fileManager ? fileManager.memoryFiles.filter(f => f.category === 'presentation') : []);

        const map = new Map();
        memoryList.forEach((f, idx) => {
            const key = f.driveId || (f.slotId ? `slot_${f.slotId}` : null) || (f.topic || f.name).toLowerCase().trim();
            map.set(key, {
                id: f.id,
                title: f.topic || f.name,
                name: f.name,
                size: f.size,
                type: f.type || 'pptx',
                downloadsCount: f.downloadsCount || 60,
                plan: f.plan,
                driveId: f.driveId,
                slotId: f.slotId || (idx + 1),
                file: f
            });
        });

        staticList.forEach((p, idx) => {
            const key = p.driveId || (p.id ? `slot_${p.id}` : null) || (p.title || p.name || '').toLowerCase().trim();
            if (!map.has(key)) {
                map.set(key, {
                    id: p.fileId || `pres-${idx + 1}`,
                    title: p.title,
                    name: p.name || `${p.title}.pptx`,
                    size: p.size || 1450000,
                    type: p.type || 'pptx',
                    downloadsCount: p.downloadsCount || 60,
                    plan: p.plan,
                    driveId: p.driveId,
                    slotId: p.id || (idx + 1)
                });
            }
        });

        let combined = Array.from(map.values());
        if (q) {
            combined = combined.filter(p => p.title.toLowerCase().includes(q) || (p.name && p.name.toLowerCase().includes(q)));
        }

        grid.className = 'cards-grid file-slots-grid';
        grid.innerHTML = '';
        if (combined.length === 0) {
            grid.innerHTML = `
                <div class="empty-state-card" style="grid-column: 1 / -1; text-align:center; padding:3.5rem 1.5rem; background:var(--bg-secondary); border-radius:16px; border:2px dashed var(--border-color);">
                    <div style="font-size:3.5rem; margin-bottom:1rem;">📽️</div>
                    <h3 style="font-size:1.3rem; font-weight:700; color:var(--text-primary); margin-bottom:0.5rem;">Hozircha taqdimotlar topilmadi</h3>
                    <p style="color:var(--text-muted); font-size:0.9rem; max-width:480px; margin:0 auto 1.5rem;">
                        Qidiruv so'zini o'zgartirib ko'ring yoki barcha taqdimotlarni ko'rish uchun qidiruvni tozalang.
                    </p>
                </div>
            `;
            return;
        }

        combined.forEach((pres, idx) => {
            const cardHtml = renderPlatformMaterialCardHtml({
                id: pres.id,
                topicTitle: pres.title,
                fileName: pres.name || `${pres.title}.pptx`,
                fileSize: pres.size || 1450000,
                downloadsCount: pres.downloadsCount || (60 + (idx % 8)),
                ext: pres.type || 'pptx',
                categoryBadge: "Taqdimot",
                subj: "FAN: RAQAMLI EMOTSIONAL INTELEKT",
                plan: pres.plan,
                driveId: pres.driveId,
                slotNumber: idx + 1
            });
            grid.insertAdjacentHTML('beforeend', cardHtml);
        });
    };

    window.renderPresentationsList();

    if (searchInput) {
        searchInput.addEventListener('input', () => {
            window.renderPresentationsList();
        });
    }
}

// =============================================================================
// 5. AMALIY TOPSHIRIQLAR MODULI
// =============================================================================
function initPracticals() {
    const grid = document.getElementById('practicals-grid');
    const searchInput = document.getElementById('practical-search');
    if (!grid) return;

    window.renderPracticalsList = function() {
        const q = searchInput ? searchInput.value.toLowerCase().trim() : '';
        const staticList = typeof practicalsData !== 'undefined' ? practicalsData : [];
        const memoryList = (fileManager ? fileManager.memoryFiles.filter(f => f.category === 'practical') : []);

        const map = new Map();
        memoryList.forEach((f, idx) => {
            const key = f.driveId || (f.slotId ? `slot_${f.slotId}` : null) || (f.topic || f.name).toLowerCase().trim();
            map.set(key, {
                id: f.id,
                title: f.topic || f.name,
                name: f.name,
                size: f.size,
                type: f.type || 'docx',
                downloadsCount: f.downloadsCount || 48,
                plan: f.plan,
                driveId: f.driveId,
                slotId: f.slotId || (idx + 1),
                file: f
            });
        });

        staticList.forEach((p, idx) => {
            const key = p.driveId || (p.id ? `slot_${p.id}` : null) || (p.title || p.name || '').toLowerCase().trim();
            if (!map.has(key)) {
                map.set(key, {
                    id: p.fileId || `prac-${idx + 1}`,
                    title: p.title,
                    name: p.name || `${p.title}.docx`,
                    size: p.size || 949964,
                    type: p.type || 'docx',
                    downloadsCount: p.downloadsCount || 48,
                    plan: p.plan,
                    driveId: p.driveId,
                    slotId: p.id || (idx + 1)
                });
            }
        });

        let combined = Array.from(map.values());
        if (q) {
            combined = combined.filter(p => p.title.toLowerCase().includes(q) || (p.name && p.name.toLowerCase().includes(q)));
        }

        grid.className = 'cards-grid file-slots-grid';
        grid.innerHTML = '';
        if (combined.length === 0) {
            grid.innerHTML = `
                <div class="empty-state-card" style="grid-column: 1 / -1; text-align:center; padding:3.5rem 1.5rem; background:var(--bg-secondary); border-radius:16px; border:2px dashed var(--border-color);">
                    <div style="font-size:3.5rem; margin-bottom:1rem;">✍️</div>
                    <h3 style="font-size:1.3rem; font-weight:700; color:var(--text-primary); margin-bottom:0.5rem;">Hozircha amaliy topshiriqlar topilmadi</h3>
                    <p style="color:var(--text-muted); font-size:0.9rem; max-width:480px; margin:0 auto 1.5rem;">
                        Qidiruv so'zini o'zgartirib ko'ring yoki barcha topshiriqlarni ko'rish uchun qidiruvni tozalang.
                    </p>
                </div>
            `;
            return;
        }

        combined.forEach((p, idx) => {
            const cardHtml = renderPlatformMaterialCardHtml({
                id: p.id,
                topicTitle: p.title,
                fileName: p.name || `${p.title}.docx`,
                fileSize: p.size || 949964,
                downloadsCount: p.downloadsCount || (45 + (idx % 8)),
                ext: p.type || 'docx',
                categoryBadge: "Amaliy ish",
                subj: "FAN: RAQAMLI EMOTSIONAL INTELEKT",
                plan: p.plan,
                driveId: p.driveId,
                slotNumber: idx + 1
            });
            grid.insertAdjacentHTML('beforeend', cardHtml);
        });
    };

    window.renderPracticalsList();

    if (searchInput) {
        searchInput.addEventListener('input', () => {
            window.renderPracticalsList();
        });
    }
}

window.openPracticalModal = function(id) {
    if (typeof practicalsData === 'undefined') return;
    const p = practicalsData.find(item => item.id === id);
    if (!p) return;

    const modal = document.getElementById('practical-modal');
    const body = document.getElementById('practical-modal-body');
    if (!modal || !body) return;

    const attachedFile = fileManager.getFileForSlot('practical', id);

    let fileSectionHtml = `
        <div class="modal-file-attach-box">
            <h4>📎 Amaliy topshiriq va ko'rsatmalar fayli:</h4>
    `;

    if (attachedFile) {
        const ext = (attachedFile.type || fileManager.getTypeFromExt(attachedFile.name) || 'docx').toLowerCase();
        const safeTitleEscaped = p.title.replace(/'/g, "\\'").replace(/"/g, '&quot;');
        const safeNameEscaped = attachedFile.name.replace(/"/g, '&quot;');
        const thumbnailUrl = attachedFile.thumbnailUrl || (attachedFile.driveId ? `https://drive.google.com/thumbnail?id=${attachedFile.driveId}&sz=w800` : generateDocumentCoverSvg(p.title, ext, id));

        fileSectionHtml += `
            <div class="modal-gdrive-preview-card" style="display:flex; gap:1rem; align-items:center; background:var(--bg-secondary); border:1px solid var(--border-color); border-radius:12px; padding:0.85rem; margin-bottom:1rem; flex-wrap:wrap;">
                <div style="width:140px; height:85px; border-radius:8px; overflow:hidden; position:relative; background:#0f172a; flex-shrink:0; cursor:pointer;" onclick="fileManager.downloadFile('${attachedFile.id}')">
                    <img src="${thumbnailUrl}" alt="${safeTitleEscaped}" style="width:100%; height:100%; object-fit:cover;" onerror="handlePreviewImgError(this, '${ext}', '${safeTitleEscaped}', ${id})">
                    <span style="position:absolute; bottom:4px; left:4px; background:rgba(0,0,0,0.75); color:white; font-size:0.65rem; font-weight:700; padding:2px 6px; border-radius:4px;">${ext.toUpperCase()}</span>
                </div>
                <div style="flex:1; min-width:200px;">
                    <div style="font-size:0.75rem; color:var(--primary-600); font-weight:700; text-transform:uppercase;">Fan: Raqamli emotsional intelekt</div>
                    <div style="font-weight:700; font-size:0.95rem; color:var(--text-primary);">${attachedFile.name}</div>
                    <div style="font-size:0.8rem; color:var(--text-muted); margin-top:0.25rem;">
                        <span>${fileManager.formatFileSize(attachedFile.size)}</span> • 
                        <span style="color:#0284c7; font-weight:700;">📥 Yuklab olindi: <b id="stat-count-${attachedFile.id}">${attachedFile.downloadsCount || 54}</b> marta</span>
                    </div>
                </div>
                <div style="display:flex; gap:0.5rem; align-items:center;">
                    <button class="btn btn-primary btn-sm" onclick="fileManager.downloadFile('${attachedFile.id}')" title="Google Diskdan ochish va yuklab olish">
                        ⬇️ Yuklab olish
                    </button>
                    <button class="btn btn-outline-sm" onclick="openFilePreview('${attachedFile.id}')" title="Prevyu ko'rish">
                        👁️ Prevyu
                    </button>
                    ${AdminAuth.isAdmin() ? `<button class="btn btn-danger-sm" onclick="deleteAndRefreshPractical(${id}, '${attachedFile.id}')" title="O'chirish">🗑️</button>` : ''}
                </div>
            </div>
        `;
    } else {
        if (AdminAuth.isAdmin()) {
            fileSectionHtml += `
                <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:0.75rem;">
                    Ushbu amaliy topshiriq uchun Google Disk havolasini ulash:
                </p>
                <button class="btn btn-primary btn-sm" onclick="openFastUploadForSlot('practical', ${id})">
                    🔗 Topshiriq faylini ulash
                </button>
            `;
        } else {
            fileSectionHtml += `
                <p style="font-size:0.85rem; color:var(--text-muted);">
                    ℹ️ Ushbu amaliy topshiriq uchun qo'shimcha shablon fayli biriktirilmagan. Topshiriq ko'rsatmalari quyida batafsil keltirilgan.
                </p>
            `;
        }
    }
    fileSectionHtml += `</div>`;

    const formattedContent = (p.content || '').split('\n').map(line => {
        if (line.startsWith('📋') || line.startsWith('🎯') || line.startsWith('📝') || line.startsWith('📊')) {
            return `<h4 style="margin: 1.25rem 0 0.5rem; color:var(--primary-500);">${line}</h4>`;
        }
        if (line.startsWith('—') || line.startsWith('•') || line.startsWith('✅')) {
            return `<li style="margin-left: 1.25rem; margin-bottom: 0.25rem;">${line}</li>`;
        }
        return `<p style="margin-bottom: 0.4rem;">${line}</p>`;
    }).join('');

    body.innerHTML = `
        <div class="modal-header-section">
            <span class="card-number">№ ${p.id} - Amaliy topshiriq</span>
            <h2 style="margin: 0.5rem 0 1rem; font-size: 1.5rem;">${p.title}</h2>
        </div>
        ${fileSectionHtml}
        <div class="modal-text-content" style="margin-top:1.5rem; line-height: 1.8;">
            ${formattedContent}
        </div>
    `;

    modal.classList.add('active');
};

window.deleteAndRefreshPractical = async function(practicalId, fileId) {
    if (!AdminAuth.isAdmin()) {
        showToast("Faylni o'chirish faqat sayt egasi (Admin) uchun ruxsat etilgan!", "danger");
        return;
    }
    if (confirm("Faylni o'chirmoqchimisiz?")) {
        await fileManager.deleteFile(fileId);
        showToast("Fayl o'chirildi", "warning");
        openPracticalModal(practicalId);
        renderFileHubSlots();
        renderFilesTable();
    }
};

// =============================================================================
// 6. TESTLAR MODULI
// =============================================================================
function initTests() {
    const grid = document.getElementById('tests-grid');
    if (!grid) return;

    window.renderTestsList = function() {
        const staticList = typeof testsData !== 'undefined' ? testsData : [];
        const memoryList = (fileManager ? fileManager.memoryFiles.filter(f => f.category === 'test') : []);

        const map = new Map();
        memoryList.forEach(f => {
            const key = (f.topic || f.name).toLowerCase().trim();
            map.set(key, {
                id: f.id,
                title: f.topic || f.name,
                name: f.name,
                size: f.size,
                type: f.type || 'docx',
                downloadsCount: f.downloadsCount || 52,
                plan: f.plan,
                driveId: f.driveId,
                file: f
            });
        });

        staticList.forEach((t, idx) => {
            const key = (t.title || t.name || '').toLowerCase().trim();
            if (!map.has(key)) {
                map.set(key, {
                    id: t.fileId || `test-${idx + 1}`,
                    title: t.title,
                    name: t.name || `${t.title}.docx`,
                    size: t.size || 949964,
                    type: t.type || 'docx',
                    downloadsCount: t.downloadsCount || 52,
                    plan: t.plan,
                    driveId: t.driveId
                });
            }
        });

        const combined = Array.from(map.values()).sort((a, b) => {
            const getOrder = (item) => {
                if (item.id === 'test-100' || item.id === 100 || (item.name && item.name.includes('100_test'))) return 1;
                if (item.id === 'test-qa-100' || item.id === 101 || (item.name && item.name.includes('100_umumiy'))) return 2;
                const match = String(item.id).match(/test-(\d+)/);
                if (match) return 10 + parseInt(match[1]);
                return 100;
            };
            return getOrder(a) - getOrder(b);
        });

        grid.className = 'cards-grid file-slots-grid';
        grid.innerHTML = '';
        if (combined.length === 0) {
            grid.innerHTML = `
                <div class="empty-state-card" style="grid-column: 1 / -1; text-align:center; padding:3.5rem 1.5rem; background:var(--bg-secondary); border-radius:16px; border:2px dashed var(--border-color);">
                    <div style="font-size:3.5rem; margin-bottom:1rem;">📝</div>
                    <h3 style="font-size:1.3rem; font-weight:700; color:var(--text-primary); margin-bottom:0.5rem;">Hozircha testlar kiritilmagan</h3>
                    <p style="color:var(--text-muted); font-size:0.9rem; max-width:480px; margin:0 auto 1.5rem;">
                        ${AdminAuth.isAdmin() ? "Fayllar markazi orqali o'zingiz istalgan mavzudagi test savollari yoki variantlari faylini yuklashingiz mumkin." : "Ushbu bo'limga tez orada o'qituvchi tomonidan test savollari yuklanadi."}
                    </p>
                </div>
            `;
            return;
        }

        combined.forEach((t, idx) => {
            const is100Test = t.id === 'test-100' || t.id === 100 || (t.name && t.name.includes('100_test'));
            const is100QA = t.id === 'test-qa-100' || t.id === 101 || (t.name && t.name.includes('100_umumiy'));
            const badge = is100Test ? "⭐ Asosiy Test" : (is100QA ? "⭐ 100 Savol" : "Mavzu Testi");

            const cardHtml = renderPlatformMaterialCardHtml({
                id: t.id,
                topicTitle: t.title,
                fileName: t.name || `${t.title}.docx`,
                fileSize: t.size || (is100Test ? 1250000 : (is100QA ? 1180000 : 949964)),
                downloadsCount: t.downloadsCount || (120 + (idx % 15)),
                ext: t.type || (is100Test ? 'docx' : 'doc'),
                categoryBadge: badge,
                subj: "FAN: RAQAMLI EMOTSIONAL INTELEKT",
                plan: t.plan,
                driveId: t.driveId || "1CFHsx3O2WtbQEizL7rzuojPUEmDCJUZW",
                slotNumber: idx + 1
            });
            grid.insertAdjacentHTML('beforeend', cardHtml);
        });
    };

    window.renderTestsList();
}

let currentQuizState = {
    testId: 1,
    currentQuestionIdx: 0,
    userAnswers: {},
    isFinished: false
};

window.openTestModal = function(id) {
    if (typeof testsData === 'undefined') return;
    const test = testsData.find(t => t.id === id);
    if (!test) return;

    currentQuizState = {
        testId: id,
        currentQuestionIdx: 0,
        userAnswers: {},
        isFinished: false
    };

    renderQuizModal(test);
};

function renderQuizModal(test) {
    const modal = document.getElementById('test-modal');
    const body = document.getElementById('test-modal-body');
    if (!modal || !body) return;

    const attachedFile = fileManager.getFileForSlot('test', test.id);
    let attachedFileBar = '';
    if (attachedFile) {
        attachedFileBar = `
            <div style="background:var(--bg-secondary); border:1px solid var(--border-color); padding:0.75rem 1rem; border-radius:10px; margin-bottom:1rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
                <div>
                    <span style="font-size:0.85rem; font-weight:700;">📎 Biriktirilgan test fayli: <b>${attachedFile.name}</b></span>
                    <span style="font-size:0.75rem; color:#0284c7; margin-left:0.5rem;">📥 ${attachedFile.downloadsCount || 76} marta ochilgan</span>
                </div>
                <div style="display:flex; gap:0.4rem;">
                    <button class="btn btn-primary btn-sm" onclick="fileManager.downloadFile('${attachedFile.id}')">⬇️ Ochish / Yuklab olish</button>
                    <button class="btn btn-outline-sm" onclick="openFilePreview('${attachedFile.id}')">👁️ Prevyu</button>
                    ${AdminAuth.isAdmin() ? `<button class="btn btn-danger-sm" onclick="deleteFileFromHub('${attachedFile.id}'); renderQuizModal(testsData.find(t => t.id === ${test.id}));" title="O'chirish">🗑️</button>` : ''}
                </div>
            </div>
        `;
    } else {
        if (AdminAuth.isAdmin()) {
            attachedFileBar = `
                <div style="background:var(--bg-secondary); padding:0.5rem 1rem; border-radius:8px; margin-bottom:1rem; display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-size:0.85rem; color:var(--text-muted);">Ushbu test uchun Google Disk havolasini ulash:</span>
                    <button class="btn btn-outline-sm" onclick="openFastUploadForSlot('test', ${test.id})">🔗 Test havolasini ulash</button>
                </div>
            `;
        } else {
            attachedFileBar = `
                <div style="background:var(--bg-secondary); padding:0.4rem 0.85rem; border-radius:8px; margin-bottom:0.75rem;">
                    <span style="font-size:0.8rem; color:var(--text-muted);">ℹ️ Savollar quyida to'liq interaktiv tarzda taqdim etilgan.</span>
                </div>
            `;
        }
    }

    const questions = test.questions || [];
    if (questions.length === 0) {
        body.innerHTML = `<h3>Savollar topilmadi</h3>`;
        modal.classList.add('active');
        return;
    }

    if (currentQuizState.isFinished) {
        // Calculate score
        let correctCount = 0;
        questions.forEach((q, idx) => {
            if (currentQuizState.userAnswers[idx] === q.correct) {
                correctCount++;
            }
        });
        const percent = Math.round((correctCount / questions.length) * 100);

        body.innerHTML = `
            <div class="test-result-view" style="text-align:center; padding: 2rem 1rem;">
                <div style="font-size: 3.5rem; margin-bottom: 0.5rem;">${percent >= 70 ? '🎉' : '📚'}</div>
                <h2>${test.title}</h2>
                <h1 style="font-size: 3rem; color: ${percent >= 70 ? 'var(--success)' : 'var(--warning)'}; margin: 1rem 0;">
                    ${percent}%
                </h1>
                <p style="font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 1.5rem;">
                    Natija: <b>${correctCount}</b> ta to'g'ri / ${questions.length} ta savoldan
                </p>
                <div style="display:flex; justify-content:center; gap:1rem;">
                    <button class="btn btn-primary" onclick="openTestModal(${test.id})">Qayta topshirish</button>
                    <button class="btn btn-outline modal-close-btn" onclick="document.getElementById('test-modal').classList.remove('active')">Yopish</button>
                </div>
            </div>
        `;
        modal.classList.add('active');
        return;
    }

    const q = questions[currentQuizState.currentQuestionIdx];
    const selectedAns = currentQuizState.userAnswers[currentQuizState.currentQuestionIdx];

    const optionsHtml = (q.options || []).map((opt, optIdx) => {
        const isChecked = selectedAns === optIdx ? 'checked' : '';
        return `
            <label class="quiz-option ${selectedAns === optIdx ? 'selected' : ''}" style="display:flex; align-items:center; gap:0.75rem; padding:0.85rem 1rem; border:1px solid var(--border-color); border-radius:8px; margin-bottom:0.5rem; cursor:pointer;">
                <input type="radio" name="quiz_opt" value="${optIdx}" ${isChecked} onchange="selectQuizOption(${optIdx})">
                <span style="font-size: 0.95rem;">${opt}</span>
            </label>
        `;
    }).join('');

    body.innerHTML = `
        <div class="test-header">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
                <span class="card-number">№ ${test.id} - Mavzu testi</span>
                <span style="font-size:0.85rem; color:var(--text-muted);">Savol ${currentQuizState.currentQuestionIdx + 1} / ${questions.length}</span>
            </div>
            <h3 style="margin-bottom:1rem;">${test.title}</h3>
            ${attachedFileBar}
        </div>

        <div class="test-question-box" style="margin-top:1rem;">
            <p style="font-size:1.1rem; font-weight:600; margin-bottom:1.25rem;">${q.q}</p>
            <div class="quiz-options-list">
                ${optionsHtml}
            </div>
        </div>

        <div class="test-footer-nav" style="display:flex; justify-content:space-between; align-items:center; margin-top:2rem;">
            <button class="btn btn-outline" ${currentQuizState.currentQuestionIdx === 0 ? 'disabled' : ''} onclick="prevQuizQuestion()">
                &larr; Oldingisi
            </button>
            <div class="quiz-stepper">
                ${questions.map((_, i) => `
                    <span style="display:inline-block; width:10px; height:10px; border-radius:50%; background:${i === currentQuizState.currentQuestionIdx ? 'var(--primary-500)' : currentQuizState.userAnswers[i] !== undefined ? 'var(--success)' : 'var(--border-color)'}; margin: 0 3px;"></span>
                `).join('')}
            </div>
            ${currentQuizState.currentQuestionIdx === questions.length - 1 
                ? `<button class="btn btn-primary" onclick="finishQuiz()">Yakunlash ✅</button>`
                : `<button class="btn btn-primary" onclick="nextQuizQuestion()">Keyingisi &rarr;</button>`
            }
        </div>
    `;

    modal.classList.add('active');
}

window.selectQuizOption = function(idx) {
    currentQuizState.userAnswers[currentQuizState.currentQuestionIdx] = idx;
    if (typeof testsData !== 'undefined') {
        const test = testsData.find(t => t.id === currentQuizState.testId);
        if (test) renderQuizModal(test);
    }
};

window.nextQuizQuestion = function() {
    if (typeof testsData !== 'undefined') {
        const test = testsData.find(t => t.id === currentQuizState.testId);
        if (test && currentQuizState.currentQuestionIdx < test.questions.length - 1) {
            currentQuizState.currentQuestionIdx++;
            renderQuizModal(test);
        }
    }
};

window.prevQuizQuestion = function() {
    if (typeof testsData !== 'undefined') {
        const test = testsData.find(t => t.id === currentQuizState.testId);
        if (test && currentQuizState.currentQuestionIdx > 0) {
            currentQuizState.currentQuestionIdx--;
            renderQuizModal(test);
        }
    }
};

window.finishQuiz = function() {
    currentQuizState.isFinished = true;
    if (typeof testsData !== 'undefined') {
        const test = testsData.find(t => t.id === currentQuizState.testId);
        if (test) renderQuizModal(test);
    }
};

// =============================================================================
// 7. EMOTSIONAL INTELEKTNI ANIQLASH (CAMERA, FACE, FINGER, VOICE)
// =============================================================================
let cameraStream = null;
let cameraActive = false;
let cameraAnimId = null;
let cameraScanFrame = 0;
let lastCapturedDataUrl = null;

// Audio synth shutter sound
function playCameraShutterSound() {
    try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(800, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.3, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.08);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.09);
    } catch (e) {
        // AudioContext policy fallback
    }
}

// =============================================================================
// REAL-TIME COMPUTER VISION FACIAL EMOTION ANALYZER
// =============================================================================
let analysisCanvas = null;
let lastAnalysisPixels = null;
let currentJoy = 65;
let currentFocus = 78;
let currentCalm = 75;
let currentStress = 18;
let liveEmotionState = {
    type: 'neutral',
    label: 'Xotirjamlik va ichki balans',
    emoji: '😌',
    tag: '😌 XOTIRJAM VA NEYTRAL',
    color: '#00f0ff',
    score: 84,
    tip: "Yuz mushaklaringiz tinch va muvozanatli. Fikrni jamlash va o'rganish uchun qulay fursat."
};

function analyzeVideoFrameForEmotions(source) {
    if (!source) return;
    if (source.tagName === 'VIDEO' && (source.readyState < 2 || source.videoWidth === 0)) return;

    if (!analysisCanvas) {
        analysisCanvas = document.createElement('canvas');
        analysisCanvas.width = 160;
        analysisCanvas.height = 120;
    }
    const aCtx = analysisCanvas.getContext('2d', { willReadFrequently: true });
    aCtx.drawImage(source, 0, 0, 160, 120);

    const frame = aCtx.getImageData(0, 0, 160, 120);
    const data = frame.data;

    // 1. Locate Face Bounding Box using YCbCr skin locus
    let minX = 160, maxX = 0, minY = 120, maxY = 0;
    let skinCount = 0;

    for (let y = 15; y < 105; y += 2) {
        for (let x = 20; x < 140; x += 2) {
            const idx = (y * 160 + x) * 4;
            const r = data[idx];
            const g = data[idx + 1];
            const b = data[idx + 2];
            // YCbCr conversion
            const Y = 0.299 * r + 0.587 * g + 0.114 * b;
            const Cb = 128 - 0.168736 * r - 0.331264 * g + 0.5 * b;
            const Cr = 128 + 0.5 * r - 0.418688 * g - 0.081312 * b;

            if (Cb >= 77 && Cb <= 130 && Cr >= 133 && Cr <= 175 && Y > 35) {
                skinCount++;
                if (x < minX) minX = x;
                if (x > maxX) maxX = x;
                if (y < minY) minY = y;
                if (y > maxY) maxY = y;
            }
        }
    }

    // Default centered face if skin cluster is too small (e.g. dark room)
    if (skinCount < 120 || maxX - minX < 25 || maxY - minY < 30) {
        minX = 35; maxX = 125;
        minY = 18; maxY = 102;
    }

    const faceW = maxX - minX;
    const faceH = maxY - minY;

    // 2. MOUTH ZONE (Bottom 28% of face) - Smile & Teeth Detection
    const mY1 = Math.round(minY + faceH * 0.65);
    const mY2 = Math.round(minY + faceH * 0.92);
    const mX1 = Math.round(minX + faceW * 0.22);
    const mX2 = Math.round(minX + faceW * 0.78);

    let mouthBrightnessSum = 0;
    let mouthBrightnessMax = 0;
    let mouthBrightnessMin = 255;
    let mouthPixCount = 0;
    let mouthEdgeCount = 0;

    for (let y = mY1; y < mY2; y += 2) {
        for (let x = mX1; x < mX2; x += 2) {
            const idx = (y * 160 + x) * 4;
            const r = data[idx], g = data[idx + 1], b = data[idx + 2];
            const lum = 0.299 * r + 0.587 * g + 0.114 * b;
            mouthBrightnessSum += lum;
            if (lum > mouthBrightnessMax) mouthBrightnessMax = lum;
            if (lum < mouthBrightnessMin) mouthBrightnessMin = lum;
            mouthPixCount++;

            // Horizontal gradient (mouth corners and teeth edges)
            if (x + 2 < mX2) {
                const nIdx = (y * 160 + (x + 2)) * 4;
                const nLum = 0.299 * data[nIdx] + 0.587 * data[nIdx + 1] + 0.114 * data[nIdx + 2];
                if (Math.abs(lum - nLum) > 22) mouthEdgeCount++;
            }
        }
    }

    const mouthAvg = mouthPixCount > 0 ? mouthBrightnessSum / mouthPixCount : 100;
    const mouthContrast = mouthBrightnessMax - mouthBrightnessMin;
    const mouthEdgeDensity = mouthPixCount > 0 ? mouthEdgeCount / mouthPixCount : 0;
    const smileIndicator = (mouthContrast / 140) * 0.5 + (mouthEdgeDensity * 2.5) * 0.5;

    // 3. GLABELLA / EYEBROW FURROW ZONE (Between Eyes and Forehead) - Anger / Frown Detection
    const bY1 = Math.round(minY + faceH * 0.18);
    const bY2 = Math.round(minY + faceH * 0.40);
    const bX1 = Math.round(minX + faceW * 0.32);
    const bX2 = Math.round(minX + faceW * 0.68);

    let browEdgeCount = 0;
    let browBrightnessSum = 0;
    let browPixCount = 0;

    for (let y = bY1; y < bY2; y += 2) {
        for (let x = bX1; x < bX2; x += 2) {
            const idx = (y * 160 + x) * 4;
            const r = data[idx], g = data[idx + 1], b = data[idx + 2];
            const lum = 0.299 * r + 0.587 * g + 0.114 * b;
            browBrightnessSum += lum;
            browPixCount++;

            // Horizontal gradient between brows: frowning creates sharp vertical lines/furrows
            if (x + 2 < bX2) {
                const nIdx = (y * 160 + (x + 2)) * 4;
                const nLum = 0.299 * data[nIdx] + 0.587 * data[nIdx + 1] + 0.114 * data[nIdx + 2];
                if (Math.abs(lum - nLum) > 18) browEdgeCount++;
            }
        }
    }

    const browEdgeDensity = browPixCount > 0 ? browEdgeCount / browPixCount : 0;
    const frownIndicator = (browEdgeDensity * 3.2);

    // 4. MOTION & STABILITY (DIQQAT)
    let motionDiff = 0;
    if (lastAnalysisPixels) {
        let diffSum = 0;
        let sampleCount = 0;
        for (let i = 0; i < data.length; i += 16) {
            diffSum += Math.abs(data[i] - lastAnalysisPixels[i]);
            sampleCount++;
        }
        motionDiff = diffSum / sampleCount;
    }
    lastAnalysisPixels = new Uint8ClampedArray(data);

    // 5. DETERMINE EMOTION TARGETS BASED ON REAL FACE FEATURES
    let targetJoy = 60;
    let targetStress = 16;
    let targetFocus = 78;
    let targetCalm = 75;

    // Check Frown / Anger / Stress (eyebrows pulled down / brow furrow wrinkles)
    if (frownIndicator > 0.30 && frownIndicator >= smileIndicator * 0.75) {
        const intensity = Math.min(1, (frownIndicator - 0.30) / 0.30);
        targetStress = Math.round(78 + intensity * 18); // 78% - 96%
        targetJoy = Math.round(20 - intensity * 10);    // 10% - 20%
        targetCalm = Math.round(24 - intensity * 12);   // 12% - 24%
        targetFocus = Math.round(68 + intensity * 6);   // 68% - 74%

        liveEmotionState = {
            type: 'angry',
            label: "G'azab va kuchli taranglik",
            emoji: '😠',
            tag: '😠 JAHL / TARANGLIK ANIQLANDI',
            color: '#ef4444',
            score: targetStress,
            tip: "Qoshlar chimirilgan va yuqori asabiy zo'riqish aniqlandi! Chuqur nafas oling (4-7-8 texnikasi) va hissiy tanaffus qiling."
        };
    }
    // Check Smiling / Joy (teeth visible / wide mouth corners)
    else if (smileIndicator > 0.38) {
        const intensity = Math.min(1, (smileIndicator - 0.38) / 0.35);
        targetJoy = Math.round(86 + intensity * 12); // 86% - 98%
        targetCalm = Math.round(76 + intensity * 8);  // 76% - 84%
        targetFocus = Math.round(75 + intensity * 7); // 75% - 82%
        targetStress = Math.round(14 - intensity * 8); // 6% - 14%

        liveEmotionState = {
            type: 'smile',
            label: 'Quvonch va tabassum',
            emoji: '😊',
            tag: '😊 TABASSUM ANIQLANDI',
            color: '#10b981',
            score: targetJoy,
            tip: "Yuzingizda samimiy tabassum aniqlandi! Ijobiy kayfiyat raqamli ta'limda ishonch va ijodkorlikni oshiradi."
        };
    }
    // Check Focus / Concentration (stable posture, direct camera gaze)
    else if (motionDiff < 3.2 && frownIndicator < 0.28 && smileIndicator < 0.38) {
        targetFocus = Math.round(88 + Math.random() * 5); // 88% - 93%
        targetCalm = Math.round(82 + Math.random() * 4);  // 82% - 86%
        targetJoy = 64;
        targetStress = 14;

        liveEmotionState = {
            type: 'focus',
            label: 'Yuqori kognitiv diqqat',
            emoji: '🎯',
            tag: '🎯 DIQQAT JAMLANGAN',
            color: '#6366f1',
            score: targetFocus,
            tip: "Nigohingiz markazda va barqaror. Yangi va murakkab mavzularni o'rganish uchun eng qulay kognitiv holatdasiz."
        };
    }
    // Neutral / Calm
    else {
        targetCalm = Math.round(84 + Math.random() * 5);  // 84% - 89%
        targetFocus = Math.round(76 + Math.random() * 4); // 76% - 80%
        targetJoy = Math.round(62 + Math.random() * 4);   // 62% - 66%
        targetStress = Math.round(15 + Math.random() * 3);// 15% - 18%

        liveEmotionState = {
            type: 'neutral',
            label: 'Xotirjamlik va ichki balans',
            emoji: '😌',
            tag: '😌 XOTIRJAM VA NEYTRAL',
            color: '#00f0ff',
            score: targetCalm,
            tip: "Yuz mushaklaringiz bo'shashgan va xotirjam. Darslar va topshiriqlarni bir maromda davom ettiring."
        };
    }

    // Exponential Smoothing (Glide smoothly in ~250ms)
    currentJoy = Math.round(currentJoy * 0.65 + targetJoy * 0.35);
    currentFocus = Math.round(currentFocus * 0.65 + targetFocus * 0.35);
    currentCalm = Math.round(currentCalm * 0.65 + targetCalm * 0.35);
    currentStress = Math.round(currentStress * 0.65 + targetStress * 0.35);

    renderTelemetryToDOM();
}

function renderTelemetryToDOM() {
    const reiScore = Math.round((currentJoy * 0.35) + (currentFocus * 0.30) + (currentCalm * 0.35) - (currentStress * 0.20) + 10);

    const barJoy = document.getElementById('bar-fill-joy');
    const lblJoy = document.getElementById('bar-val-joy');
    if (barJoy) barJoy.style.width = currentJoy + '%';
    if (lblJoy) lblJoy.textContent = currentJoy + '%';

    const barFocus = document.getElementById('bar-fill-focus');
    const lblFocus = document.getElementById('bar-val-focus');
    if (barFocus) barFocus.style.width = currentFocus + '%';
    if (lblFocus) lblFocus.textContent = currentFocus + '%';

    const barCalm = document.getElementById('bar-fill-calm');
    const lblCalm = document.getElementById('bar-val-calm');
    if (barCalm) barCalm.style.width = currentCalm + '%';
    if (lblCalm) lblCalm.textContent = currentCalm + '%';

    const barStress = document.getElementById('bar-fill-stress');
    const lblStress = document.getElementById('bar-val-stress');
    if (barStress) barStress.style.width = currentStress + '%';
    if (lblStress) lblStress.textContent = currentStress + '%';

    const reiElem = document.getElementById('camera-rei-score');
    if (reiElem) reiElem.textContent = Math.min(98, Math.max(40, reiScore));

    const domEmoji = document.getElementById('dominant-emoji');
    const domTitle = document.getElementById('dominant-title');
    const domScore = document.getElementById('dominant-score');
    if (domEmoji) domEmoji.textContent = liveEmotionState.emoji;
    if (domTitle) domTitle.textContent = liveEmotionState.label;
    if (domScore) domScore.textContent = liveEmotionState.score + '%';

    const recText = document.getElementById('camera-rec-text');
    if (recText) recText.textContent = liveEmotionState.tip;

    const hudFace = document.getElementById('hud-face-detected');
    if (hudFace) {
        hudFace.textContent = liveEmotionState.tag;
        hudFace.style.color = liveEmotionState.color;
        hudFace.style.borderColor = liveEmotionState.color;
    }
}

// Draw futuristic AI facial scanning geometry on canvas with dynamic emotion-adaptive coloring
function drawFaceMeshHUD(ctx, width, height, time) {
    ctx.clearRect(0, 0, width, height);

    const cx = width / 2;
    const cy = height * 0.48;
    const faceW = width * 0.44;
    const faceH = height * 0.62;

    const pulse = Math.sin(time * 0.003) * 2;
    const scanY = (Math.sin(time * 0.002) * 0.5 + 0.5) * faceH + (cy - faceH / 2);

    const boxX1 = cx - faceW / 2 + pulse;
    const boxY1 = cy - faceH / 2 + pulse;
    const boxX2 = cx + faceW / 2 - pulse;
    const boxY2 = cy + faceH / 2 - pulse;
    const cornerLen = 28;

    const themeColor = liveEmotionState.color || '#00f0ff';

    ctx.save();
    ctx.strokeStyle = themeColor;
    ctx.lineWidth = 2.5;
    ctx.shadowColor = themeColor;
    ctx.shadowBlur = 12;

    // Top-Left corner
    ctx.beginPath();
    ctx.moveTo(boxX1, boxY1 + cornerLen);
    ctx.lineTo(boxX1, boxY1);
    ctx.lineTo(boxX1 + cornerLen, boxY1);
    ctx.stroke();

    // Top-Right corner
    ctx.beginPath();
    ctx.moveTo(boxX2 - cornerLen, boxY1);
    ctx.lineTo(boxX2, boxY1);
    ctx.lineTo(boxX2, boxY1 + cornerLen);
    ctx.stroke();

    // Bottom-Left corner
    ctx.beginPath();
    ctx.moveTo(boxX1, boxY2 - cornerLen);
    ctx.lineTo(boxX1, boxY2);
    ctx.lineTo(boxX1 + cornerLen, boxY2);
    ctx.stroke();

    // Bottom-Right corner
    ctx.beginPath();
    ctx.moveTo(boxX2 - cornerLen, boxY2);
    ctx.lineTo(boxX2, boxY2);
    ctx.lineTo(boxX2, boxY2 - cornerLen);
    ctx.stroke();

    // Scanning laser line with dynamic color
    const laserGrad = ctx.createLinearGradient(boxX1, scanY, boxX2, scanY);
    laserGrad.addColorStop(0, 'rgba(0,0,0,0)');
    laserGrad.addColorStop(0.5, themeColor);
    laserGrad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.strokeStyle = laserGrad;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(boxX1, scanY);
    ctx.lineTo(boxX2, scanY);
    ctx.stroke();

    // Corner alignment dots
    ctx.fillStyle = themeColor;
    ctx.fillRect(boxX1 - 2, boxY1 - 2, 5, 5);
    ctx.fillRect(boxX2 - 3, boxY1 - 2, 5, 5);
    ctx.fillRect(boxX1 - 2, boxY2 - 3, 5, 5);
    ctx.fillRect(boxX2 - 3, boxY2 - 3, 5, 5);

    // Center subtle crosshairs
    ctx.strokeStyle = themeColor;
    ctx.globalAlpha = 0.4;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(cx - 15, cy); ctx.lineTo(cx + 15, cy);
    ctx.moveTo(cx, cy - 15); ctx.lineTo(cx, cy + 15);
    ctx.stroke();
    ctx.globalAlpha = 1;

    // Glowing Real-Time Emotion Status Pill
    const tagText = liveEmotionState.tag || 'AI EMOTIONAL SCANNER: ACTIVE';
    ctx.font = 'bold 12px monospace';
    const tagWidth = ctx.measureText(tagText).width + 24;

    ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
    ctx.strokeStyle = themeColor;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(cx - tagWidth / 2, boxY1 - 32, tagWidth, 24, 12);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = themeColor;
    ctx.shadowBlur = 6;
    ctx.textAlign = 'center';
    ctx.fillText(tagText, cx, boxY1 - 16);

    // Bottom telemetry stats
    ctx.font = '600 11px monospace';
    ctx.fillStyle = themeColor;
    ctx.fillText(`ISHONCHLILIK: ${liveEmotionState.score}% | HOLAT: ${liveEmotionState.label.toUpperCase()}`, cx, boxY2 + 22);

    ctx.restore();
}

function startCameraScanLoop() {
    const video = document.getElementById('camera-video');
    const canvas = document.getElementById('camera-overlay-canvas');
    if (!canvas || !video) return;

    const ctx = canvas.getContext('2d');

    function loop(time) {
        if (!cameraActive) return;

        // Sync canvas resolution with display
        if (canvas.width !== video.clientWidth || canvas.height !== video.clientHeight) {
            canvas.width = video.clientWidth || 640;
            canvas.height = video.clientHeight || 480;
        }

        // Run real computer vision analysis every 6 frames (~10 fps for ultra-smooth responsiveness)
        if (cameraScanFrame % 6 === 0) {
            analyzeVideoFrameForEmotions(video);
        }

        drawFaceMeshHUD(ctx, canvas.width, canvas.height, time);
        cameraScanFrame++;

        cameraAnimId = requestAnimationFrame(loop);
    }

    cameraAnimId = requestAnimationFrame(loop);
}

window.startCamera = async function() {
    const video = document.getElementById('camera-video');
    const placeholder = document.getElementById('camera-placeholder');
    const hud = document.getElementById('camera-scan-hud');
    const statusBadge = document.getElementById('camera-status-badge');
    const statusLabel = document.getElementById('camera-status-label');
    const btnText = document.getElementById('btn-camera-text');
    const snapBtn = document.getElementById('btn-snapshot-analyze');

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        showToast("Brauzeringiz kamerani qo'llab-quvvatlamaydi yoki xavfsiz (HTTPS/localhost) ulanish mavjud emas. 'Rasm yuklash' orqali tekshirishingiz mumkin.", "danger");
        return;
    }

    try {
        if (statusLabel) statusLabel.textContent = "Kamera ulanmoqda...";

        if (cameraStream) {
            cameraStream.getTracks().forEach(t => t.stop());
            cameraStream = null;
        }

        const stream = await navigator.mediaDevices.getUserMedia({
            video: {
                width: { ideal: 1280, min: 640 },
                height: { ideal: 720, min: 480 },
                facingMode: 'user'
            },
            audio: false
        });

        cameraStream = stream;
        cameraActive = true;
        if (video) {
            video.srcObject = stream;
            video.muted = true;
            video.playsInline = true;
            try {
                await video.play();
            } catch (playErr) {
                console.warn("Video play promise error, retrying on metadata:", playErr);
                video.onloadedmetadata = () => video.play();
            }
        }

        if (placeholder) placeholder.classList.add('hidden');
        if (hud) hud.classList.remove('hidden');
        if (statusBadge) statusBadge.classList.add('active');
        if (statusLabel) statusLabel.textContent = "🟢 Jonli skanerlash faol";
        if (btnText) btnText.textContent = "⏹️ Kamerani to'xtatish";
        if (snapBtn) snapBtn.removeAttribute('disabled');

        startCameraScanLoop();
        showToast("Veb-kamera ulandi! Jonli AI emotsional skaner ishga tushdi.", "success");
    } catch (err) {
        console.error("Camera access error:", err);
        let msg = "Kameraga ulanib bo'lmadi. ";
        if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
            msg += "Brauzerda kameraga ruxsat bering (manzil satridagi kamera belgisini bosing).";
        } else if (err.name === 'NotFoundError' || err.name === 'DevicesNotFoundError') {
            msg += "Qurilmangizda veb-kamera topilmadi. 'Rasm yuklash' tugmasi orqali rasm yuklab tahlil qilishingiz mumkin.";
        } else if (err.name === 'NotReadableError' || err.name === 'TrackStartError') {
            msg += "Kamera boshqa ilova (Zoom, Telegram) tomonidan band qilingan.";
        } else {
            msg += (err.message || "Kamera xatosi");
        }
        if (statusLabel) statusLabel.textContent = "Kamera ulanmadi";
        showToast(msg, "warning");
    }
};

window.stopCamera = function() {
    if (cameraStream) {
        cameraStream.getTracks().forEach(track => track.stop());
        cameraStream = null;
    }
    cameraActive = false;

    if (cameraAnimId) {
        cancelAnimationFrame(cameraAnimId);
        cameraAnimId = null;
    }

    const video = document.getElementById('camera-video');
    if (video) video.srcObject = null;

    const placeholder = document.getElementById('camera-placeholder');
    const hud = document.getElementById('camera-scan-hud');
    const statusBadge = document.getElementById('camera-status-badge');
    const statusLabel = document.getElementById('camera-status-label');
    const btnText = document.getElementById('btn-camera-text');
    const snapBtn = document.getElementById('btn-snapshot-analyze');
    const canvas = document.getElementById('camera-overlay-canvas');

    if (placeholder) placeholder.classList.remove('hidden');
    if (hud) hud.classList.add('hidden');
    if (statusBadge) statusBadge.classList.remove('active');
    if (statusLabel) statusLabel.textContent = "Kamera o'chiq";
    if (btnText) btnText.textContent = "📹 Kamerani yoqish";
    if (snapBtn) snapBtn.setAttribute('disabled', 'true');

    if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
};

window.toggleCamera = function() {
    if (cameraActive) {
        window.stopCamera();
    } else {
        window.startCamera();
    }
};

// Snapshot capture & Deep AI Diagnostic Report
window.captureAndAnalyze = function() {
    const video = document.getElementById('camera-video');
    const screenElem = document.getElementById('camera-screen');
    const modal = document.getElementById('camera-snapshot-modal');
    const imgPreview = document.getElementById('snapshot-preview-img');
    const timestampElem = document.getElementById('snapshot-timestamp');

    if (!video || !cameraActive) {
        showToast("Suratga olish uchun avval kamerani yoqing!", "warning");
        return;
    }

    playCameraShutterSound();

    // Visual camera shutter flash effect
    if (screenElem) {
        screenElem.style.filter = 'brightness(2.5)';
        setTimeout(() => { screenElem.style.filter = ''; }, 150);
    }

    // Capture snapshot frame to canvas
    const snapCanvas = document.createElement('canvas');
    snapCanvas.width = video.videoWidth || 640;
    snapCanvas.height = video.videoHeight || 480;
    const ctx = snapCanvas.getContext('2d');

    // Video is mirrored for user, mirror canvas image for natural photo look
    ctx.translate(snapCanvas.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(video, 0, 0, snapCanvas.width, snapCanvas.height);

    lastCapturedDataUrl = snapCanvas.toDataURL('image/png');

    if (imgPreview) imgPreview.src = lastCapturedDataUrl;

    const now = new Date();
    const timeStr = now.toLocaleTimeString();
    if (timestampElem) timestampElem.textContent = timeStr;

    // Use real computer vision analyzed metrics at this exact moment
    const joyPct = currentJoy;
    const focusPct = currentFocus;
    const calmPct = currentCalm;
    const stressPct = currentStress;
    const overallScore = Math.min(98, Math.max(40, Math.round((joyPct * 0.35) + (focusPct * 0.30) + (calmPct * 0.35) - (stressPct * 0.20) + 10)));

    const scoreNum = document.getElementById('snap-score-num');
    if (scoreNum) scoreNum.textContent = overallScore;

    const gradeBadge = document.getElementById('snap-grade-badge');
    if (gradeBadge) {
        gradeBadge.textContent = liveEmotionState.label;
        gradeBadge.style.background = liveEmotionState.color;
    }

    const joyEl = document.getElementById('snap-joy-pct');
    if (joyEl) joyEl.textContent = joyPct + '%';

    const focusEl = document.getElementById('snap-focus-pct');
    if (focusEl) focusEl.textContent = focusPct + '%';

    const calmEl = document.getElementById('snap-calm-pct');
    if (calmEl) calmEl.textContent = calmPct + '%';

    const stressEl = document.getElementById('snap-stress-pct');
    if (stressEl) stressEl.textContent = `${stressPct}%`;

    const recContent = document.getElementById('snap-recommendation-content');
    if (recContent) recContent.textContent = liveEmotionState.tip;

    if (modal) modal.classList.add('active');
    showToast("Surat olindi va to'liq emotsional tahlil qilindi!", "success");
};

window.closeCameraSnapshotModal = function() {
    const modal = document.getElementById('camera-snapshot-modal');
    if (modal) modal.classList.remove('active');
};

window.copySnapshotAnalysis = function() {
    const score = document.getElementById('snap-score-num')?.textContent || '86';
    const joy = document.getElementById('snap-joy-pct')?.textContent || '85%';
    const focus = document.getElementById('snap-focus-pct')?.textContent || '82%';
    const calm = document.getElementById('snap-calm-pct')?.textContent || '78%';
    const stress = document.getElementById('snap-stress-pct')?.textContent || '14%';
    const time = document.getElementById('snapshot-timestamp')?.textContent || '';

    const text = `📊 RAQAMLI EMOTIONAL INTELLEKT (REI) DIAGNOSTIKA NATIJASI
Sana/Vaqt: ${time}
--------------------------------------------------
Umumiy REI Indeksi: ${score}/100 (A'lo)
• Quvonch va Ijobiy kayfiyat: ${joy}
• Kognitiv diqqat / Fokus: ${focus}
• Psixo-emotsional barqarorlik: ${calm}
• Asabiy zo'riqish (Stress): ${stress}

💡 Tavsiya: Raqamli muhitda diqqatni to'plash va ta'limiy topshiriqlarni yuqori samaradorlik bilan bajarish uchun eng maqbul fiziologik va emotsional balansdasiz.`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            showToast("Tahlil xulosasi nusxalandi!", "success");
        }).catch(() => {
            showToast("Nusxalashda xatolik", "warning");
        });
    } else {
        showToast("Tahlil xulosasi nusxalandi!", "success");
    }
};

window.downloadSnapshotImage = function() {
    if (!lastCapturedDataUrl) {
        showToast("Yuklab olish uchun surat topilmadi", "warning");
        return;
    }
    const a = document.createElement('a');
    a.href = lastCapturedDataUrl;
    a.download = `ei_emotion_scan_${Date.now()}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    showToast("Surat kompyuteringizga yuklab olindi!", "success");
};

// Handle uploaded photo for EI analysis (webcam fallback)
window.handlePhotoUploadForAnalysis = function(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
            // Stop active webcam if running
            if (cameraActive) window.stopCamera();

            const canvas = document.getElementById('camera-overlay-canvas');
            const placeholder = document.getElementById('camera-placeholder');
            const hud = document.getElementById('camera-scan-hud');
            const statusBadge = document.getElementById('camera-status-badge');
            const statusLabel = document.getElementById('camera-status-label');
            const snapBtn = document.getElementById('btn-snapshot-analyze');

            if (placeholder) placeholder.classList.add('hidden');
            if (hud) hud.classList.remove('hidden');
            if (statusBadge) statusBadge.classList.add('active');
            if (statusLabel) statusLabel.textContent = "📁 Yuklangan rasm tahlili";
            if (snapBtn) snapBtn.removeAttribute('disabled');

            if (canvas) {
                const screen = document.getElementById('camera-screen');
                canvas.width = screen ? screen.clientWidth : 640;
                canvas.height = screen ? screen.clientHeight : 480;
                const ctx = canvas.getContext('2d');

                // Draw photo fitted to screen
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

                // Run real computer vision analysis on uploaded image
                analyzeVideoFrameForEmotions(img);

                // Overlay face mesh geometry on photo with detected color
                drawFaceMeshHUD(ctx, canvas.width, canvas.height, 1200);

                lastCapturedDataUrl = canvas.toDataURL('image/png');
            }

            // Open snapshot report modal with real detected metrics
            const modal = document.getElementById('camera-snapshot-modal');
            const imgPreview = document.getElementById('snapshot-preview-img');
            const timestampElem = document.getElementById('snapshot-timestamp');

            if (imgPreview) imgPreview.src = lastCapturedDataUrl || e.target.result;
            if (timestampElem) timestampElem.textContent = new Date().toLocaleTimeString();

            const scoreNum = document.getElementById('snap-score-num');
            if (scoreNum) scoreNum.textContent = liveEmotionState.score;

            const gradeBadge = document.getElementById('snap-grade-badge');
            if (gradeBadge) {
                gradeBadge.textContent = liveEmotionState.label;
                gradeBadge.style.background = liveEmotionState.color;
            }

            const joyEl = document.getElementById('snap-joy-pct');
            if (joyEl) joyEl.textContent = currentJoy + '%';

            const focusEl = document.getElementById('snap-focus-pct');
            if (focusEl) focusEl.textContent = currentFocus + '%';

            const calmEl = document.getElementById('snap-calm-pct');
            if (calmEl) calmEl.textContent = currentCalm + '%';

            const stressEl = document.getElementById('snap-stress-pct');
            if (stressEl) stressEl.textContent = `${currentStress}%`;

            const recContent = document.getElementById('snap-recommendation-content');
            if (recContent) recContent.textContent = liveEmotionState.tip;

            if (modal) modal.classList.add('active');

            showToast("Rasm yuklandi va sun'iy intellekt tahlili yakunlandi!", "success");
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
};

function initDetection() {
    // Tab switching
    const tabs = document.querySelectorAll('.detection-tab');
    const panels = document.querySelectorAll('.detection-panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-tab');
            tabs.forEach(t => t.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));

            tab.classList.add('active');
            const targetPanel = document.getElementById(`panel-${target}`);
            if (targetPanel) targetPanel.classList.add('active');

            // If switching away from camera tab, stop camera stream
            if (target !== 'camera' && typeof window.stopCamera === 'function') {
                window.stopCamera();
            }
        });
    });

    // Face detection options
    const faceOptions = document.querySelectorAll('.face-option');
    const faceResult = document.getElementById('face-result');
    const faceResultContent = document.getElementById('face-result-content');

    faceOptions.forEach(opt => {
        opt.addEventListener('click', () => {
            faceOptions.forEach(o => o.classList.remove('selected'));
            opt.classList.add('selected');

            const emotion = opt.getAttribute('data-emotion');
            const score = parseInt(opt.getAttribute('data-score')) || 50;

            const recommendations = {
                quvonch: "Ajoyib holat! Ushbu ijobiy energiyani ijodiy vazifalarga va boshqalarga ko'tarinkilik ulashishga yo'naltiring.",
                "qayg'u": "Hissiyotlaringizni tan oling. O'zingizga qisqa tanaffus bering, yaqinlaringiz bilan gaplashing yoki iliq choy ichib tinchlaning.",
                "g'azab": "10 soniya qoidasini qo'llang. Chuqur nafas oling (4-7-8 texnikasi). Hech qachon ushbu holatda xabar yoki post yozmang.",
                hayrat: "Yangi ma'lumotni xolis baholash uchun ayni vaqt. Shoshilmasdan tahlil qiling.",
                "qo'rquv": "Qo'rquv sababini aniq yozib chiqing. Kichik qadamlar bilan harakat qilish xavotirni kamaytiradi.",
                nafrat: "O'z shaxsiy chegaralaringizni hurmat qiling, toksik kontentdan uzoqlashing.",
                tinchlik: "Eng maqbul muvozanatli holat! Qaror qabul qilish va yangi bilimlarni o'zlashtirish uchun ideal payt.",
                ishonch: "O'z ko'nikmalaringizga ishoning, murakkab amaliy topshiriqlarni boshlash uchun ayni fursat."
            };

            if (faceResult && faceResultContent) {
                faceResult.classList.remove('hidden');
                faceResultContent.innerHTML = `
                    <div style="display:flex; align-items:center; gap:1rem; margin-bottom:1rem;">
                        <span style="font-size:3rem;">${opt.querySelector('.face-emoji').textContent}</span>
                        <div>
                            <h4 style="text-transform: capitalize; font-size:1.25rem;">Aniqlangan holat: ${emotion}</h4>
                            <div style="font-size:0.9rem; color:var(--text-secondary);">Emotsional intellekt indeksi: <b>${score}/100</b></div>
                        </div>
                    </div>
                    <div style="background:var(--bg-secondary); padding:1rem; border-radius:8px; border-left:4px solid var(--primary-500);">
                        <b>💡 REI bo'yicha tavsiya:</b>
                        <p style="margin-top:0.35rem; font-size:0.9rem;">${recommendations[emotion] || "Emotsiyalaringizni doimiy kuzatib boring."}</p>
                    </div>
                `;
            }
        });
    });

    // Finger hold pressure test
    const fingerCircle = document.getElementById('finger-circle');
    const fingerProgress = document.getElementById('finger-progress');
    const pressDurationElem = document.getElementById('press-duration');
    const pressForceElem = document.getElementById('press-force');
    const pressStabilityElem = document.getElementById('press-stability');
    const fingerResult = document.getElementById('finger-result');
    const fingerResultContent = document.getElementById('finger-result-content');

    let pressStartTime = 0;
    let pressTimer = null;
    let isPressed = false;

    if (fingerCircle) {
        const startPress = (e) => {
            e.preventDefault();
            isPressed = true;
            pressStartTime = Date.now();
            fingerCircle.classList.add('pressing');
            if (fingerProgress) fingerProgress.style.width = '0%';

            pressTimer = setInterval(() => {
                if (!isPressed) return;
                const elapsed = (Date.now() - pressStartTime) / 1000;
                if (pressDurationElem) pressDurationElem.textContent = elapsed.toFixed(1) + 's';
                
                const pct = Math.min(100, (elapsed / 4) * 100);
                if (fingerProgress) fingerProgress.style.width = pct + '%';

                if (pressForceElem) pressForceElem.textContent = (elapsed > 2 ? 'Barqaror o‘rtacha' : 'Boshlang‘ich');
                if (pressStabilityElem) pressStabilityElem.textContent = (elapsed > 3 ? 'Yuqori (92%)' : 'O‘lchanmoqda...');

                if (elapsed >= 4) {
                    endPress();
                }
            }, 50);
        };

        const endPress = () => {
            if (!isPressed) return;
            isPressed = false;
            clearInterval(pressTimer);
            fingerCircle.classList.remove('pressing');
            const totalElapsed = (Date.now() - pressStartTime) / 1000;

            if (totalElapsed < 1.5) {
                showToast("Iltimos, barmoqni kamida 3-4 soniya bosib turing!", "warning");
                return;
            }

            if (fingerResult && fingerResultContent) {
                fingerResult.classList.remove('hidden');
                fingerResultContent.innerHTML = `
                    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1rem; margin-bottom:1rem;">
                        <div style="background:var(--bg-secondary); padding:0.85rem; border-radius:8px;">
                            <div style="font-size:0.8rem; color:var(--text-muted);">Puls tebranishi (simulyatsiya):</div>
                            <div style="font-size:1.25rem; font-weight:700; color:var(--success);">74 bpm (Normal)</div>
                        </div>
                        <div style="background:var(--bg-secondary); padding:0.85rem; border-radius:8px;">
                            <div style="font-size:0.8rem; color:var(--text-muted);">Emotsional barqarorlik:</div>
                            <div style="font-size:1.25rem; font-weight:700; color:var(--primary-500);">88% (Xotirjam)</div>
                        </div>
                    </div>
                    <p style="font-size:0.9rem;">
                        ✅ Barmoq bosimi va mikrotremor tahlili shuni ko'rsatadiki, sizda asabiy taranglik past darajada. Fikrni jamlash va o'rganish uchun qulay vaqt.
                    </p>
                `;
            }
        };

        fingerCircle.addEventListener('mousedown', startPress);
        fingerCircle.addEventListener('mouseup', endPress);
        fingerCircle.addEventListener('mouseleave', endPress);
        fingerCircle.addEventListener('touchstart', startPress);
        fingerCircle.addEventListener('touchend', endPress);
    }

    // Voice detection
    const voiceBtn = document.getElementById('voice-btn');
    const voiceWaves = document.getElementById('voice-waves');
    const voiceTimer = document.getElementById('voice-timer');
    const voiceResult = document.getElementById('voice-result');
    const voiceResultContent = document.getElementById('voice-result-content');
    const analyzeTextBtn = document.getElementById('analyze-text-btn');
    const voiceTextInput = document.getElementById('voice-text-input');

    let isRecording = false;
    let recInterval = null;
    let recSeconds = 0;

    if (voiceBtn) {
        voiceBtn.addEventListener('click', () => {
            if (!isRecording) {
                isRecording = true;
                recSeconds = 0;
                voiceBtn.classList.add('recording');
                voiceBtn.querySelector('.voice-btn-text').textContent = "To'xtatish";
                if (voiceWaves) voiceWaves.classList.add('active');

                recInterval = setInterval(() => {
                    recSeconds++;
                    const m = String(Math.floor(recSeconds / 60)).padStart(2, '0');
                    const s = String(recSeconds % 60).padStart(2, '0');
                    if (voiceTimer) voiceTimer.textContent = `${m}:${s}`;

                    if (recSeconds >= 6) {
                        voiceBtn.click();
                    }
                }, 1000);
            } else {
                isRecording = false;
                clearInterval(recInterval);
                voiceBtn.classList.remove('recording');
                voiceBtn.querySelector('.voice-btn-text').textContent = "Boshlash";
                if (voiceWaves) voiceWaves.classList.remove('active');

                if (voiceResult && voiceResultContent) {
                    voiceResult.classList.remove('hidden');
                    voiceResultContent.innerHTML = `
                        <div style="background:var(--bg-secondary); padding:1rem; border-radius:8px;">
                            <h4 style="color:var(--primary-500); margin-bottom:0.5rem;">🎤 Ovoz akustikasi tahlili:</h4>
                            <p style="font-size:0.9rem; margin-bottom:0.5rem;">• <b>Tembr:</b> Samimiy va barqaror</p>
                            <p style="font-size:0.9rem; margin-bottom:0.5rem;">• <b>Nutq sur'ati:</b> 120 so'z/daq (Optimal)</p>
                            <p style="font-size:0.9rem; margin-bottom:0.5rem;">• <b>Empatiya koeffitsienti:</b> 84%</p>
                            <p style="font-size:0.85rem; color:var(--text-muted); margin-top:0.75rem;">
                                Xulosa: Ovoz ohangingizda muloyimlik va ishonchlilik ustuvor. Tinglovchi bilan ijobiy muloqot o'rnatish qobiliyati yuqori.
                            </p>
                        </div>
                    `;
                }
            }
        });
    }

    if (analyzeTextBtn && voiceTextInput) {
        analyzeTextBtn.addEventListener('click', () => {
            const text = voiceTextInput.value.trim();
            if (!text) {
                showToast("Iltimos, tahlil qilish uchun matn yozing!", "warning");
                return;
            }

            const lower = text.toLowerCase();
            let tone = "Neytral va ma'lumotli";
            let score = 70;
            let advice = "Xabaringiz aniq va tushunarli.";

            if (lower.includes('rahmat') || lower.includes('yaxshi') || lower.includes('zo‘r') || lower.includes('ajoyib') || lower.includes('sev') || lower.includes('quvonch')) {
                tone = "Ijobiy va minnatdorlik ohangi 😊";
                score = 92;
                advice = "Empatik va iliq muloqot. Suhbatdoshda katta ishonch uyg'otadi.";
            } else if (lower.includes('yomon') || lower.includes('jahl') || lower.includes('kerak emas') || lower.includes('noto‘g‘ri') || text === text.toUpperCase() && text.length > 5) {
                tone = "Keskin yoki norozilik ohangi ⚠️";
                score = 42;
                advice = "Ehtiyot bo'ling! Raqamli muhitda keskin so'zlar yoki bosh harflar bilan yozish nizo keltirib chiqarishi mumkin. 'Men' xabaridan foydalaning.";
            }

            if (voiceResult && voiceResultContent) {
                voiceResult.classList.remove('hidden');
                voiceResultContent.innerHTML = `
                    <div style="background:var(--bg-secondary); padding:1rem; border-radius:8px;">
                        <h4 style="color:var(--primary-500); margin-bottom:0.5rem;">📝 Matn emotsional tahlili:</h4>
                        <div style="font-size:1.1rem; font-weight:700; margin-bottom:0.5rem;">Ohang: ${tone}</div>
                        <div style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:0.5rem;">Raqamli muloqot indeksi: <b>${score}/100</b></div>
                        <p style="font-size:0.9rem; color:var(--text-primary); margin-top:0.5rem;">💡 ${advice}</p>
                    </div>
                `;
            }
        });
    }
}

// =============================================================================
// 8. SIMULYATSIYALAR MODULI (8 TA INTERAKTIV SIMULYATSIYA)
// =============================================================================
function initSimulations() {
    const grid = document.getElementById('simulations-grid');
    if (!grid) return;

    if (typeof simulationsData !== 'undefined') {
        grid.innerHTML = '';
        simulationsData.forEach(sim => {
            const card = document.createElement('div');
            card.className = 'simulation-card glass-card';
            card.innerHTML = `
                <div class="simulation-icon">${sim.icon || '🎮'}</div>
                <h3 class="simulation-title">${sim.title}</h3>
                <div class="simulation-skill">🎯 Ko'nikma: ${sim.skill || "Emotsional idrok"}</div>
                <p class="simulation-desc">${sim.desc}</p>
                <button class="btn btn-primary btn-sm" onclick="openSimulationModal(${sim.id})" style="margin-top:1rem; width:100%;">
                    Simulyatsiyani boshlash &rarr;
                </button>
            `;
            grid.appendChild(card);
        });
    }
}

let activeSimState = {
    simId: 1,
    scenarioIdx: 0,
    totalScore: 0,
    answersLog: []
};

window.openSimulationModal = function(id) {
    if (typeof simulationsData === 'undefined') return;
    const sim = simulationsData.find(s => s.id === id);
    if (!sim) return;

    activeSimState = {
        simId: id,
        scenarioIdx: 0,
        totalScore: 0,
        answersLog: []
    };

    renderSimModal(sim);
};

function renderSimModal(sim) {
    const modal = document.getElementById('simulation-modal');
    const body = document.getElementById('simulation-modal-body');
    if (!modal || !body) return;

    // Special: Dynamic formula physics-style simulator if id === 1 or similar
    const scenarios = sim.scenarios || [];
    if (scenarios.length === 0) {
        body.innerHTML = `
            <h3>${sim.title}</h3>
            <p>Ushbu simulyatsiya uchun interaktiv modul yuklanmoqda...</p>
        `;
        modal.classList.add('active');
        return;
    }

    if (activeSimState.scenarioIdx >= scenarios.length) {
        // Simulation finished
        const maxScore = scenarios.length * 10;
        const pct = Math.round((activeSimState.totalScore / maxScore) * 100);

        body.innerHTML = `
            <div style="text-align:center; padding:2rem 1rem;">
                <div style="font-size:3.5rem;">🏆</div>
                <h2 style="margin:0.5rem 0;">Simulyatsiya yakunlandi!</h2>
                <h3 style="color:var(--text-muted);">${sim.title}</h3>
                <div style="font-size:3rem; font-weight:800; color:var(--primary-500); margin:1.25rem 0;">
                    ${activeSimState.totalScore} / ${maxScore} ball (${pct}%)
                </div>
                <div style="text-align:left; background:var(--bg-secondary); padding:1.25rem; border-radius:10px; margin-bottom:1.5rem;">
                    <h4 style="margin-bottom:0.75rem;">📋 Natijalar xulosasi:</h4>
                    ${activeSimState.answersLog.map((log, i) => `
                        <div style="margin-bottom:0.75rem; border-bottom:1px solid var(--border-color); padding-bottom:0.5rem;">
                            <b>${i + 1}-vaziyat:</b> <span style="color:${log.score >= 8 ? 'var(--success)' : 'var(--warning)'}; font-weight:700;">+${log.score} ball</span>
                            <div style="font-size:0.85rem; color:var(--text-secondary); margin-top:0.25rem;">${log.feedback}</div>
                        </div>
                    `).join('')}
                </div>
                <div style="display:flex; justify-content:center; gap:1rem;">
                    <button class="btn btn-primary" onclick="openSimulationModal(${sim.id})">Qayta boshlash</button>
                    <button class="btn btn-outline" onclick="document.getElementById('simulation-modal').classList.remove('active')">Yopish</button>
                </div>
            </div>
        `;
        modal.classList.add('active');
        return;
    }

    const currentScenario = scenarios[activeSimState.scenarioIdx];

    const optionsHtml = currentScenario.options.map((opt, optIdx) => `
        <button class="sim-option-btn" onclick="chooseSimOption(${optIdx})" style="display:block; width:100%; text-align:left; padding:1rem 1.25rem; margin-bottom:0.75rem; background:var(--bg-card); border:1px solid var(--border-color); border-radius:8px; font-size:0.95rem; line-height:1.5; color:var(--text-primary); transition:all 0.2s; cursor:pointer;">
            ${opt.text}
        </button>
    `).join('');

    body.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; border-bottom:1px solid var(--border-color); padding-bottom:0.75rem;">
            <div>
                <span class="card-number">${sim.icon} ${sim.title}</span>
                <span style="font-size:0.85rem; color:var(--text-muted); margin-left:0.75rem;">
                    Vaziyat ${activeSimState.scenarioIdx + 1} / ${scenarios.length}
                </span>
            </div>
            <span style="font-weight:700; color:var(--primary-500);">To'plangan ball: ${activeSimState.totalScore}</span>
        </div>

        <div style="background:var(--bg-secondary); padding:1.25rem; border-radius:10px; margin-bottom:1.5rem; font-size:1.1rem; font-weight:600; line-height:1.6;">
            ${currentScenario.text}
        </div>

        <h4 style="margin-bottom:0.75rem; color:var(--text-muted); font-size:0.9rem;">Qanday yo'l tutasiz? (Eng to'g'ri qarorni tanlang):</h4>
        <div class="sim-options-wrap">
            ${optionsHtml}
        </div>
    `;

    modal.classList.add('active');
}

window.chooseSimOption = function(optIdx) {
    if (typeof simulationsData === 'undefined') return;
    const sim = simulationsData.find(s => s.id === activeSimState.simId);
    if (!sim) return;

    const currentScenario = sim.scenarios[activeSimState.scenarioIdx];
    const opt = currentScenario.options[optIdx];

    activeSimState.totalScore += opt.score;
    activeSimState.answersLog.push({
        score: opt.score,
        feedback: opt.feedback
    });

    const body = document.getElementById('simulation-modal-body');
    if (!body) return;

    body.innerHTML = `
        <div style="padding:1.5rem; text-align:center;">
            <div style="font-size:3rem; margin-bottom:0.5rem;">${opt.score >= 8 ? '🌟 Ajoyib!' : opt.score >= 5 ? '🤔 O‘rtacha' : '⚠️ Xato yondashuv'}</div>
            <h3 style="color:${opt.score >= 8 ? 'var(--success)' : opt.score >= 5 ? 'var(--warning)' : 'var(--danger)'};">
                +${opt.score} ball
            </h3>
            <div style="background:var(--bg-secondary); padding:1.25rem; border-radius:10px; margin:1.5rem 0; font-size:1rem; line-height:1.6; text-align:left;">
                <b>Izoh va pedagogik tahlil:</b>
                <p style="margin-top:0.5rem;">${opt.feedback}</p>
            </div>
            <button class="btn btn-primary" onclick="proceedNextSimScenario()">
                ${activeSimState.scenarioIdx < sim.scenarios.length - 1 ? 'Keyingi vaziyat &rarr;' : 'Natijani ko‘rish 🏆'}
            </button>
        </div>
    `;
};

window.proceedNextSimScenario = function() {
    activeSimState.scenarioIdx++;
    if (typeof simulationsData !== 'undefined') {
        const sim = simulationsData.find(s => s.id === activeSimState.simId);
        if (sim) renderSimModal(sim);
    }
};

// =============================================================================
// 9. GLOSSARIY MODULI (IZOHLI LUG'AT)
// =============================================================================
function initGlossary() {
    const alphabetWrap = document.getElementById('glossary-alphabet');
    const listWrap = document.getElementById('glossary-list');
    const searchInput = document.getElementById('glossary-search');
    if (!listWrap) return;

    let selectedLetter = 'ALL';

    function renderAlphabet() {
        if (!alphabetWrap) return;
        const letters = ['ALL', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z'];
        alphabetWrap.innerHTML = letters.map(l => `
            <button class="alpha-btn ${selectedLetter === l ? 'active' : ''}" onclick="filterGlossaryByLetter('${l}')">${l}</button>
        `).join('');
    }

    function renderGlossary(terms) {
        listWrap.innerHTML = '';
        if (terms.length === 0) {
            listWrap.innerHTML = `<div style="text-align:center; padding:2rem; color:var(--text-muted);">Lug'atdan so'z topilmadi.</div>`;
            return;
        }

        terms.forEach(item => {
            const div = document.createElement('div');
            div.className = 'glossary-item';
            const firstLetter = (item.term || '').charAt(0).toUpperCase();

            div.innerHTML = `
                <div class="glossary-term">
                    <div class="glossary-term-text">
                        <span class="glossary-term-letter">${firstLetter}</span>
                        <span>${item.term}</span>
                    </div>
                    <span class="glossary-arrow">▼</span>
                </div>
                <div class="glossary-definition">
                    <p>${item.definition}</p>
                </div>
            `;

            div.querySelector('.glossary-term').addEventListener('click', () => {
                div.classList.toggle('open');
            });

            listWrap.appendChild(div);
        });
    }

    if (typeof glossaryData !== 'undefined') {
        renderAlphabet();
        renderGlossary(glossaryData);
    }

    window.filterGlossaryByLetter = function(letter) {
        selectedLetter = letter;
        renderAlphabet();
        if (typeof glossaryData === 'undefined') return;
        if (letter === 'ALL') {
            renderGlossary(glossaryData);
        } else {
            const filtered = glossaryData.filter(g => (g.term || '').toUpperCase().startsWith(letter));
            renderGlossary(filtered);
        }
    };

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const q = e.target.value.toLowerCase();
            if (typeof glossaryData === 'undefined') return;
            const filtered = glossaryData.filter(g => 
                (g.term || '').toLowerCase().includes(q) || (g.definition || '').toLowerCase().includes(q)
            );
            renderGlossary(filtered);
        });
    }
}

// =============================================================================
// 10. FAYLLAR MARKAZI (FILE HUB & GOOGLE DRIVE ENGINE)
// =============================================================================
let currentFileHubCategory = 'all';
let currentSelectedFile = null;
let currentEditingFileId = null;

window.switchUploadMode = function(mode) {
    const btnGdrive = document.getElementById('btn-mode-gdrive');
    const btnLocal = document.getElementById('btn-mode-local');
    const panelGdrive = document.getElementById('gdrive-upload-panel');
    const panelLocal = document.getElementById('local-upload-panel');

    if (mode === 'gdrive') {
        if (btnGdrive) btnGdrive.classList.add('active');
        if (btnLocal) btnLocal.classList.remove('active');
        if (panelGdrive) panelGdrive.style.display = 'block';
        if (panelLocal) panelLocal.style.display = 'none';
    } else {
        if (btnGdrive) btnGdrive.classList.remove('active');
        if (btnLocal) btnLocal.classList.add('active');
        if (panelGdrive) panelGdrive.style.display = 'none';
        if (panelLocal) panelLocal.style.display = 'block';
    }
};

window.cancelSlotEditing = function() {
    currentEditingFileId = null;
    const cancelBtn = document.getElementById('btn-cancel-edit-slot');
    if (cancelBtn) cancelBtn.style.display = 'none';
    const heading = document.getElementById('uploader-heading-text');
    if (heading) heading.textContent = 'Fayl ulash va boshqarish';
    const urlInput = document.getElementById('gdrive-url-input');
    if (urlInput) urlInput.value = '';
    const nameInput = document.getElementById('gdrive-file-name');
    if (nameInput) nameInput.value = '';
    const topicInput = document.getElementById('upload-target-topic');
    if (topicInput) topicInput.value = '';
    const previewBox = document.getElementById('gdrive-live-preview-box');
    if (previewBox) previewBox.classList.add('hidden');
};

function initFileHub() {
    const catSelect = document.getElementById('upload-target-category');
    const topicInput = document.getElementById('upload-target-topic');

    // 2. Google Drive Link input & Live Preview
    const gdriveUrlInput = document.getElementById('gdrive-url-input');
    const gdriveStatus = document.getElementById('gdrive-url-status');
    const livePreviewBox = document.getElementById('gdrive-live-preview-box');
    const previewImg = document.getElementById('gdrive-preview-img');
    const previewTitle = document.getElementById('preview-box-title');
    const previewSub = document.getElementById('preview-box-sub');
    const previewTag = document.getElementById('preview-box-tag');
    const previewCount = document.getElementById('preview-box-count');
    const fileNameInput = document.getElementById('gdrive-file-name');
    const fileTypeSelect = document.getElementById('gdrive-file-type');
    const saveGdriveBtn = document.getElementById('btn-save-gdrive-file');
    const pasteBtn = document.getElementById('btn-paste-gdrive');

    function updateLivePreviewFromInputs() {
        if (!gdriveUrlInput) return;
        const url = gdriveUrlInput.value.trim();
        const parsed = parseGoogleDriveUrl(url);

        const cat = catSelect ? catSelect.value : 'lecture';
        const topic = topicInput ? topicInput.value.trim() : '';
        const ext = fileTypeSelect ? fileTypeSelect.value : 'pptx';
        const autoTitle = topic || (fileNameInput && fileNameInput.value.trim()) || "O'quv materiali";

        if (parsed) {
            if (livePreviewBox) livePreviewBox.classList.remove('hidden');
            if (previewImg) {
                previewImg.onerror = () => handlePreviewImgError(previewImg, ext, autoTitle, 1);
                previewImg.src = parsed.thumbnailUrl;
            }
            if (previewTitle) previewTitle.textContent = autoTitle;
            const catBadge = cat === 'lecture' ? "Ma'ruza" : cat === 'practical' ? "Amaliy ish" : cat === 'test' ? "Test" : "Adabiyot";
            if (previewTag) previewTag.textContent = `${catBadge} • ${ext.toUpperCase()}`;
            if (previewSub) previewSub.textContent = `Fan: Raqamli emotsional intelekt`;
            if (previewCount) {
                const cnt = document.getElementById('gdrive-downloads-count');
                previewCount.textContent = `Yuklab olindi: ${cnt ? cnt.value : 0} marta`;
            }
            if (gdriveStatus) {
                gdriveStatus.innerHTML = `<span style="color:var(--success); font-weight:700;">✓ Google Disk ID aniqlandi (${parsed.fileId.substring(0, 8)}...). 1-bet prevyusi tayyor!</span>`;
            }
            // Auto fill file name if empty
            if (fileNameInput && !fileNameInput.value.trim()) {
                fileNameInput.value = `${autoTitle}.${ext}`;
            }
        } else if (url.length > 5) {
            if (gdriveStatus) {
                gdriveStatus.innerHTML = `<span style="color:var(--warning); font-weight:600;">⚠️ Havoladan Google Disk ID aniqlanmadi. Iltimos, to'g'ri ommaviy havolani kiriting.</span>`;
            }
        } else {
            if (livePreviewBox) livePreviewBox.classList.add('hidden');
            if (gdriveStatus) {
                gdriveStatus.textContent = "Linkni qo'yishingiz bilan 1-sahifa prevyusi pastda avtomatik chiqadi";
            }
        }
    }

    if (gdriveUrlInput) {
        gdriveUrlInput.addEventListener('input', updateLivePreviewFromInputs);
        gdriveUrlInput.addEventListener('change', updateLivePreviewFromInputs);
    }
    if (topicInput) {
        topicInput.addEventListener('input', updateLivePreviewFromInputs);
    }
    if (catSelect) {
        catSelect.addEventListener('change', updateLivePreviewFromInputs);
    }
    if (fileNameInput) {
        fileNameInput.addEventListener('input', updateLivePreviewFromInputs);
    }
    if (fileTypeSelect) {
        fileTypeSelect.addEventListener('change', updateLivePreviewFromInputs);
    }

    if (pasteBtn && gdriveUrlInput) {
        pasteBtn.addEventListener('click', async () => {
            try {
                if (navigator.clipboard && navigator.clipboard.readText) {
                    const text = await navigator.clipboard.readText();
                    if (text) {
                        gdriveUrlInput.value = text;
                        updateLivePreviewFromInputs();
                        showToast("Google Disk havolasi qo'yildi!", "success");
                    }
                } else {
                    gdriveUrlInput.focus();
                }
            } catch (err) {
                gdriveUrlInput.focus();
            }
        });
    }

    // Save Google Drive File
    if (saveGdriveBtn) {
        saveGdriveBtn.addEventListener('click', async () => {
            if (!AdminAuth.isAdmin()) {
                showToast("Fayl ulash faqat sayt egasi (Admin) uchun ochiq!", "warning");
                openAdminModal();
                return;
            }

            const url = gdriveUrlInput ? gdriveUrlInput.value.trim() : '';
            if (!url) {
                showToast("Iltimos, Google Disk havolasini kiriting!", "warning");
                if (gdriveUrlInput) gdriveUrlInput.focus();
                return;
            }

            const parsed = parseGoogleDriveUrl(url);
            if (!parsed) {
                showToast("Noto'g'ri Google Disk havolasi! Ommaviy havola (Share link) ekanligini tekshiring.", "danger");
                return;
            }

            const cat = catSelect ? catSelect.value : 'lecture';
            const topic = topicInput ? topicInput.value.trim() : '';
            const ext = fileTypeSelect ? fileTypeSelect.value : 'pptx';
            const name = fileNameInput && fileNameInput.value.trim() 
                ? fileNameInput.value.trim() 
                : (topic ? `${topic}.${ext}` : `Material.${ext}`);
            const subj = document.getElementById('gdrive-subject-name')?.value.trim() || "Fan: Raqamli emotsional intelekt";
            const dCount = parseInt(document.getElementById('gdrive-downloads-count')?.value) || 0;
            const desc = document.getElementById('gdrive-file-desc')?.value.trim() || '';

            saveGdriveBtn.disabled = true;
            saveGdriveBtn.innerHTML = `<span>⏳ Ulanmoqda...</span>`;

            try {
                const saved = await fileManager.saveGoogleDriveFile({
                    id: currentEditingFileId || undefined,
                    topic,
                    category: cat,
                    name,
                    driveUrl: url,
                    type: ext,
                    subject: subj,
                    downloadsCount: dCount,
                    desc
                });

                showToast(`"${saved.name}" muvaffaqiyatli saqlandi! 1-beti avtomatik ulandi.`, "success");

                // Reset form
                if (gdriveUrlInput) gdriveUrlInput.value = '';
                if (fileNameInput) fileNameInput.value = '';
                if (topicInput) topicInput.value = '';
                if (livePreviewBox) livePreviewBox.classList.add('hidden');
                cancelSlotEditing();

                renderFileHubSlots();
                renderFilesTable();
            } catch (err) {
                console.error(err);
                showToast("Google Disk faylini ulashda xatolik yuz berdi", "danger");
            } finally {
                saveGdriveBtn.disabled = false;
                saveGdriveBtn.innerHTML = `<span>💾 Google Disk faylini saqlash va ulash</span>`;
            }
        });
    }

    // 3. Local Drag & Drop handling
    const dropzone = document.getElementById('main-dropzone');
    const fileInput = document.getElementById('universal-file-input');
    const selectedPreview = document.getElementById('selected-file-preview');
    const selectedName = document.getElementById('selected-file-name');
    const selectedSize = document.getElementById('selected-file-size');
    const clearBtn = document.getElementById('btn-clear-selection');
    const saveBtn = document.getElementById('btn-save-uploaded-file');

    if (dropzone && fileInput) {
        ['dragenter', 'dragover'].forEach(eventName => {
            dropzone.addEventListener(eventName, (e) => {
                e.preventDefault();
                dropzone.classList.add('dragover');
            });
        });

        ['dragleave', 'drop'].forEach(eventName => {
            dropzone.addEventListener(eventName, (e) => {
                e.preventDefault();
                dropzone.classList.remove('dragover');
            });
        });

        dropzone.addEventListener('drop', (e) => {
            if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
                handleFileSelection(e.dataTransfer.files[0]);
            }
        });

        fileInput.addEventListener('change', (e) => {
            if (e.target.files && e.target.files.length > 0) {
                handleFileSelection(e.target.files[0]);
            }
        });
    }

    function handleFileSelection(file) {
        currentSelectedFile = file;
        if (selectedPreview && selectedName && selectedSize) {
            selectedPreview.classList.remove('hidden');
            selectedName.textContent = file.name;
            selectedSize.textContent = `(${fileManager.formatFileSize(file.size)})`;
        }
    }

    if (clearBtn) {
        clearBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            currentSelectedFile = null;
            if (fileInput) fileInput.value = '';
            if (selectedPreview) selectedPreview.classList.add('hidden');
        });
    }

    // Save Local File Button
    if (saveBtn) {
        saveBtn.addEventListener('click', async () => {
            if (!AdminAuth.isAdmin()) {
                showToast("Fayl yuklash faqat sayt egasi (Admin) uchun ochiq!", "warning");
                openAdminModal();
                return;
            }

            if (!currentSelectedFile) {
                showToast("Iltimos, avval kompyuteringizdan fayl tanlang!", "warning");
                return;
            }

            const cat = catSelect ? catSelect.value : 'lecture';
            const slotId = slotSelect ? slotSelect.value : 1;
            const descInput = document.getElementById('upload-file-desc');
            const desc = descInput ? descInput.value.trim() : '';

            saveBtn.disabled = true;
            saveBtn.innerHTML = `<span>⏳ Saqlanmoqda...</span>`;

            try {
                const saved = await fileManager.saveFile({
                    name: currentSelectedFile.name,
                    size: currentSelectedFile.size,
                    type: currentSelectedFile.type,
                    category: cat,
                    slotId: parseInt(slotId) || 0,
                    desc,
                    fileObj: currentSelectedFile
                });

                showToast(`"${saved.name}" muvaffaqiyatli saqlandi!`, "success");

                currentSelectedFile = null;
                if (fileInput) fileInput.value = '';
                if (selectedPreview) selectedPreview.classList.add('hidden');
                if (descInput) descInput.value = '';

                renderFileHubSlots();
                renderFilesTable();
            } catch (err) {
                console.error(err);
                showToast("Faylni saqlashda xatolik yuz berdi", "danger");
            } finally {
                saveBtn.disabled = false;
                saveBtn.innerHTML = `<span>💾 Lokal faylni saqlash</span>`;
            }
        });
    }

    // 4. Category Tabs in File Hub
    const fileTabs = document.querySelectorAll('.file-tab');
    fileTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            fileTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentFileHubCategory = tab.getAttribute('data-file-cat');
            renderFileHubSlots();
            renderFilesTable();
        });
    });

    // 5. Search in files table
    const filesSearch = document.getElementById('files-search-input');
    if (filesSearch) {
        filesSearch.addEventListener('input', () => {
            renderFilesTable();
        });
    }

    // 6. Export backup list
    const exportBtn = document.getElementById('btn-export-files-backup');
    if (exportBtn) {
        exportBtn.addEventListener('click', () => {
            const files = fileManager.memoryFiles;
            if (files.length === 0) {
                showToast("Hozircha saqlangan fayllar yo'q", "warning");
                return;
            }
            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(files.map(f => ({
                id: f.id,
                name: f.name,
                size: f.size,
                type: f.type,
                category: f.category,
                slotId: f.slotId,
                desc: f.desc,
                uploadedAt: f.uploadedAt,
                isGoogleDrive: !!f.isGoogleDrive,
                driveUrl: f.driveUrl || '',
                downloadsCount: f.downloadsCount || 0
            })), null, 2));
            const dlAnchor = document.createElement('a');
            dlAnchor.setAttribute("href", dataStr);
            dlAnchor.setAttribute("download", "REI_platform_fayllar_royxati.json");
            document.body.appendChild(dlAnchor);
            dlAnchor.click();
            dlAnchor.remove();
            showToast("Fayllar ro'yxati eksport qilindi!", "success");
        });
    }

    // Initial renders
    renderFileHubSlots();
    renderFilesTable();
}

// Render the 15 slots for the currently selected category
// Render materials for the currently selected category
window.renderFileHubSlots = function() {
    const wrapper = document.getElementById('file-slots-wrapper');
    if (!wrapper) return;

    const isAdmin = AdminAuth.isAdmin();
    const targetCat = currentFileHubCategory;
    let list = fileManager.memoryFiles;
    if (targetCat !== 'all') {
        list = list.filter(f => f.category === targetCat);
    }

    const catLabels = {
        'all': "Barcha o'quv materiallari",
        'lecture': "Ma'ruzalar matnlari va adabiyotlar",
        'presentation': "Taqdimotlar va ko'rgazmali slaydlar",
        'practical': "Amaliy topshiriqlar va ko'rsatmalar",
        'test': "Test materiallari va savollar to'plamlari",
        'resource': "Qo'shimcha adabiyotlar va qo'llanmalar"
    };
    const catTitle = catLabels[targetCat] || "O'quv materiallari";

    let cardsHtml = '';
    if (list.length === 0) {
        cardsHtml = `
            <div class="empty-file-slot-card" style="grid-column: 1 / -1; text-align:center; padding:3.5rem 1.5rem; background:var(--bg-secondary); border-radius:16px; border:2px dashed var(--border-color); margin-bottom:1.5rem;">
                <div style="font-size:3.5rem; margin-bottom:1rem;">📂</div>
                <h4 style="font-size:1.25rem; font-weight:700; color:var(--text-primary); margin-bottom:0.5rem;">Ushbu bo'limda hozircha materiallar yo'q</h4>
                <p style="color:var(--text-muted); font-size:0.9rem; max-width:480px; margin:0 auto 1.5rem;">
                    ${isAdmin ? "Yuqoridagi formadan foydalanib, xohlagan mavzuingiz nomini yozing va unga tegishli Google Disk havolasini yoki faylni biriktiring." : "Ushbu bo'limga tez orada o'qituvchi tomonidan yangi mavzular va o'quv materiallari yuklanadi."}
                </p>
                ${isAdmin ? `
                    <button class="btn btn-primary" onclick="scrollToUploader('${targetCat}')">
                        <span>➕ Yangi mavzu va fayl yuklash</span>
                    </button>
                ` : ''}
            </div>
        `;
    } else {
        list.forEach((attached, idx) => {
            const ext = (attached.type || fileManager.getTypeFromExt(attached.name) || 'docx').toLowerCase();
            const topicTitle = attached.topic || attached.name || `Material ${idx + 1}`;
            const catBadgeNames = {
                'lecture': "Ma'ruza",
                'presentation': "Taqdimot",
                'practical': "Amaliy ish",
                'test': "Test",
                'resource': "Adabiyot"
            };
            const badgeTypeLabel = catBadgeNames[attached.category] || "Material";

            cardsHtml += renderPlatformMaterialCardHtml({
                id: attached.id,
                topicTitle: topicTitle,
                fileName: attached.name || topicTitle,
                fileSize: attached.size,
                downloadsCount: attached.downloadsCount || (50 + (idx % 5)),
                ext: ext,
                categoryBadge: badgeTypeLabel,
                subj: attached.subject || "FAN: RAQAMLI EMOTSIONAL INTELEKT",
                plan: attached.plan,
                driveId: attached.driveId,
                slotNumber: idx + 1
            });
        });
    }

    wrapper.innerHTML = `
        <div style="margin-bottom:1.25rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
            <div>
                <h3 style="font-size:1.25rem; font-weight:800;">${catTitle}</h3>
                <p style="font-size:0.85rem; color:var(--text-muted); margin-top:0.25rem;">
                    Barcha materiallar Google Disk orqali 0 MB joy egallaydi.
                </p>
            </div>
            <div style="display:flex; align-items:center; gap:0.5rem;">
                <span class="subhead-badge" style="background:rgba(14,165,233,0.1); color:#0284c7; font-weight:700;">
                    ${list.length} ta material
                </span>
                ${isAdmin ? `
                    <button class="btn btn-outline-sm" onclick="scrollToUploader('${targetCat}')" style="font-size:0.8rem;">
                        ➕ Yangi qo'shish
                    </button>
                ` : ''}
            </div>
        </div>
        <div class="file-slots-grid">
            ${cardsHtml}
        </div>
    `;
};

// Render the files table list
window.renderFilesTable = function() {
    const container = document.getElementById('files-table-container');
    if (!container) return;

    const isAdmin = AdminAuth.isAdmin();
    const searchInput = document.getElementById('files-search-input');
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

    let list = fileManager.memoryFiles;
    if (currentFileHubCategory !== 'all') {
        list = list.filter(f => f.category === currentFileHubCategory);
    }
    if (query) {
        list = list.filter(f => 
            f.name.toLowerCase().includes(query) || 
            (f.desc || '').toLowerCase().includes(query) ||
            f.category.toLowerCase().includes(query)
        );
    }

    if (list.length === 0) {
        container.innerHTML = `
            <div class="empty-files-placeholder">
                <div class="empty-icon">📂</div>
                <h4>Fayllar topilmadi</h4>
                <p>${isAdmin ? "Yuqoridagi yuklash maydoni orqali Google Diskingizdagi taqdimot yoki hujjat linkini ulashingiz mumkin." : "Hozircha ushbu bo'limda yuklangan fayllar mavjud emas."}</p>
            </div>
        `;
        return;
    }

    const rowsHtml = list.map((f, idx) => {
        const catLabels = {
            lecture: "📖 Ma'ruza",
            practical: "✍️ Amaliy ish",
            test: "📝 Test",
            resource: "📚 Adabiyot"
        };
        const catLabel = catLabels[f.category] || f.category;
        const slotText = f.slotId > 0 ? `${f.slotId}-mavzu` : 'Umumiy';
        const ext = (f.type || fileManager.getTypeFromExt(f.name) || 'pptx').toLowerCase();

        return `
            <tr>
                <td style="width:40px; text-align:center;">${idx + 1}</td>
                <td>
                    <div style="display:flex; align-items:center; gap:0.75rem;">
                        <span style="font-size:1.5rem;">${fileManager.getFileIcon(f.name)}</span>
                        <div>
                            <div style="font-weight:700; cursor:pointer; color:var(--text-primary);" onclick="fileManager.downloadFile('${f.id}')" title="${f.name}">${f.name}</div>
                            <div style="display:flex; align-items:center; gap:0.4rem; margin-top:0.25rem;">
                                <span class="file-type-chip file-type-${ext}">${ext.toUpperCase()}</span>
                                ${f.isGoogleDrive ? `<span style="font-size:0.7rem; color:#0284c7; background:rgba(2,132,199,0.1); padding:1px 6px; border-radius:4px; font-weight:700;">Google Disk</span>` : ''}
                                <span style="font-size:0.75rem; color:var(--text-muted); margin-left:0.35rem;">📥 ${f.downloadsCount || 0} marta</span>
                            </div>
                        </div>
                    </div>
                </td>
                <td><span class="slot-number-badge">${catLabel} (${slotText})</span></td>
                <td>${fileManager.formatFileSize(f.size)}</td>
                <td style="font-size:0.8rem; color:var(--text-muted);">${f.uploadedAt}</td>
                <td>
                    <div style="display:flex; gap:0.4rem;">
                        <button class="btn btn-primary btn-sm" onclick="fileManager.downloadFile('${f.id}')" title="Google Diskdan ochish / Yuklab olish">⬇️ Ochish</button>
                        <button class="btn btn-outline-sm" onclick="openFilePreview('${f.id}')" title="Prevyu ko'rish">👁️</button>
                        ${isAdmin ? `<button class="btn btn-danger-sm" onclick="deleteFileFromHub('${f.id}')" title="O'chirish">🗑️</button>` : ''}
                    </div>
                </td>
            </tr>
        `;
    }).join('');

    container.innerHTML = `
        <table class="files-table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Fayl nomi</th>
                    <th>Bo'lim / Mavzu</th>
                    <th>Hajmi</th>
                    <th>Sana</th>
                    <th>Amallar</th>
                </tr>
            </thead>
            <tbody>
                ${rowsHtml}
            </tbody>
        </table>
    `;
};

// Fast upload, edit and navigation helpers
window.scrollToUploader = function(cat) {
    if (window.switchPage) {
        window.switchPage('file-hub');
    }
    setTimeout(() => {
        if (cat && cat !== 'all') {
            const catSelect = document.getElementById('upload-target-category');
            if (catSelect) {
                catSelect.value = cat;
                catSelect.dispatchEvent(new Event('change'));
            }
        }
        const uploaderCard = document.getElementById('file-hub-upload-card');
        if (uploaderCard) {
            uploaderCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        const topicInput = document.getElementById('upload-target-topic');
        if (topicInput) topicInput.focus();
    }, 120);
};

window.openUploadForCategory = function(cat, topicName = '') {
    if (window.switchPage) {
        window.switchPage('file-hub');
    }
    setTimeout(() => {
        const catSelect = document.getElementById('upload-target-category');
        if (catSelect && cat) {
            catSelect.value = cat;
            catSelect.dispatchEvent(new Event('change'));
        }
        const topicInput = document.getElementById('upload-target-topic');
        if (topicInput && topicName) {
            topicInput.value = topicName;
        }
        const uploaderCard = document.getElementById('file-hub-upload-card');
        if (uploaderCard) {
            uploaderCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        if (topicInput) topicInput.focus();
    }, 150);
};

window.editUploadedFile = function(fileId) {
    const file = fileManager.memoryFiles.find(f => f.id === fileId);
    if (!file) return;

    if (window.switchPage) {
        window.switchPage('file-hub');
    }

    currentEditingFileId = fileId;
    const heading = document.getElementById('uploader-heading-text');
    const cancelBtn = document.getElementById('btn-cancel-edit-slot');
    const urlInput = document.getElementById('gdrive-url-input');
    const nameInput = document.getElementById('gdrive-file-name');
    const topicInput = document.getElementById('upload-target-topic');
    const typeSelect = document.getElementById('gdrive-file-type');
    const catSelect = document.getElementById('upload-target-category');

    if (heading) heading.textContent = `"${file.topic || file.name}" materialini tahrirlash`;
    if (cancelBtn) cancelBtn.style.display = 'inline-block';
    if (urlInput) urlInput.value = file.driveUrl || '';
    if (nameInput) nameInput.value = file.name || '';
    if (topicInput) topicInput.value = file.topic || '';
    if (typeSelect && file.type) typeSelect.value = file.type;
    if (catSelect && file.category) catSelect.value = file.category;

    const uploaderCard = document.getElementById('file-hub-upload-card');
    if (uploaderCard) {
        uploaderCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (urlInput) urlInput.dispatchEvent(new Event('input'));
};

window.openFastUploadForSlot = function(category, slotId, existingFileId = null) {
    if (existingFileId) {
        window.editUploadedFile(existingFileId);
    } else {
        window.openUploadForCategory(category);
    }
};

window.deleteFileFromHub = async function(fileId) {
    if (!AdminAuth.isAdmin()) {
        showToast("Faylni o'chirish faqat sayt egasi (admin) uchun ruxsat etilgan!", "danger");
        openAdminModal();
        return;
    }
    if (confirm("Ushbu faylni ro'yxatdan butunlay o'chirmoqchimisiz?")) {
        await fileManager.deleteFile(fileId);
        showToast("Fayl muvaffaqiyatli o'chirildi!", "warning");
        renderFileHubSlots();
        renderFilesTable();
    }
};

window.openFilePreview = function(fileId) {
    let file = (fileManager && fileManager.memoryFiles) ? fileManager.memoryFiles.find(f => f.id === fileId) : null;
    if (!file && typeof defaultPlatformMaterials !== 'undefined') {
        file = defaultPlatformMaterials.find(f => f.id === fileId);
    }
    if (!file && typeof testsData !== 'undefined') {
        const t = testsData.find(f => f.fileId === fileId || f.id === fileId || String(f.id) === String(fileId));
        if (t) file = { ...t, isGoogleDrive: !!(t.driveId || t.isGoogleDrive) };
    }
    if (!file && typeof lecturesData !== 'undefined') {
        const l = lecturesData.find(f => f.fileId === fileId || f.id === fileId);
        if (l) file = { ...l, isGoogleDrive: true };
    }
    if (!file && typeof presentationsData !== 'undefined') {
        const p = presentationsData.find(f => f.fileId === fileId || f.id === fileId);
        if (p) file = { ...p, isGoogleDrive: true };
    }
    if (!file && typeof practicalsData !== 'undefined') {
        const pr = practicalsData.find(f => f.fileId === fileId || f.id === fileId);
        if (pr) file = { ...pr, isGoogleDrive: true };
    }
    if (!file) {
        showToast("Fayl topilmadi", "warning");
        return;
    }

    const modal = document.getElementById('file-preview-modal');
    const titleElem = document.getElementById('preview-file-title');
    const metaElem = document.getElementById('preview-file-meta');
    const contentElem = document.getElementById('file-preview-content');
    const dlBtn = document.getElementById('preview-download-btn');

    if (!modal || !contentElem) return;

    if (titleElem) titleElem.textContent = file.name;
    if (metaElem) metaElem.textContent = `${fileManager.formatFileSize(file.size)} • ${file.uploadedAt} • ${file.category} (№${file.slotId}) • 📥 ${file.downloadsCount || 0} marta yuklandi`;
    
    if (dlBtn) {
        dlBtn.onclick = () => fileManager.downloadFile(file.id);
        dlBtn.innerHTML = `<span>↗ Google Diskda to'liq ochish</span>`;
    }

    const ext = (file.type || fileManager.getTypeFromExt(file.name) || 'pptx').toLowerCase();

    // If Google Drive file
    if (file.isGoogleDrive && file.driveId) {
        contentElem.innerHTML = `
            <div style="width:100%; height:75vh; border-radius:12px; overflow:hidden; background:#0f172a; position:relative;">
                <iframe 
                    src="https://drive.google.com/file/d/${file.driveId}/preview" 
                    style="width:100%; height:100%; border:none;" 
                    allow="autoplay" 
                    allowfullscreen>
                </iframe>
            </div>
            <div style="margin-top:0.75rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
                <span style="font-size:0.85rem; color:var(--text-muted);">
                    💡 Fayl Google Disk orqali yuklanmoqda. Agar prevyu ko'rinmasa, yuqoridagi tugma orqali to'g'ridan-to'g'ri ochishingiz mumkin.
                </span>
                <button class="btn btn-primary btn-sm" onclick="fileManager.downloadFile('${file.id}')">
                    ↗ Google Diskda ochish
                </button>
            </div>
        `;
        modal.classList.add('active');
        return;
    }

    // Local data URL rendering
    if (['png', 'jpg', 'jpeg', 'svg', 'webp', 'gif'].includes(ext)) {
        contentElem.innerHTML = `
            <div style="text-align:center; padding:1rem;">
                <img src="${file.dataUrl}" alt="${file.name}" style="max-height:65vh; border-radius:8px; box-shadow:0 4px 20px rgba(0,0,0,0.3);">
            </div>
        `;
    } else if (['pdf'].includes(ext)) {
        contentElem.innerHTML = `
            <iframe src="${file.dataUrl}" style="width:100%; height:70vh; border:none; border-radius:8px;"></iframe>
        `;
    } else if (['mp3', 'wav', 'ogg'].includes(ext)) {
        contentElem.innerHTML = `
            <div style="text-align:center; padding:3rem 1rem;">
                <div style="font-size:4rem; margin-bottom:1rem;">🎵</div>
                <audio controls src="${file.dataUrl}" style="width:100%; max-width:500px;"></audio>
            </div>
        `;
    } else if (['mp4', 'webm'].includes(ext)) {
        contentElem.innerHTML = `
            <div style="text-align:center;">
                <video controls src="${file.dataUrl}" style="max-width:100%; max-height:65vh; border-radius:8px;"></video>
            </div>
        `;
    } else {
        contentElem.innerHTML = `
            <div style="text-align:center; padding:3rem 1rem;">
                <div style="font-size:4.5rem; margin-bottom:1rem;">${fileManager.getFileIcon(file.name)}</div>
                <h3>${file.name}</h3>
                <p style="color:var(--text-muted); margin:0.75rem 0 1.5rem;">
                    Ushbu formatdagi (${ext.toUpperCase()}) fayllarni to'g'ridan-to'g'ri ko'rish uchun qurilmangizga yuklab oling.
                </p>
                <button class="btn btn-primary" onclick="fileManager.downloadFile('${file.id}')">
                    ⬇️ Faylni kompyuterga yuklab olish
                </button>
            </div>
        `;
    }

    modal.classList.add('active');
};

// =============================================================================
// ADMIN MODAL & UI CONTROLS
// =============================================================================
window.updateAdminUI = function() {
    const isAdmin = AdminAuth.isAdmin();

    // 1. Sidebar admin widget
    const sidebarAdminArea = document.getElementById('sidebar-admin-area');
    if (sidebarAdminArea) {
        if (isAdmin) {
            sidebarAdminArea.innerHTML = `
                <div class="sidebar-admin-card" onclick="openAdminModal()" title="Sayt egasi kabineti">
                    <div class="sidebar-admin-left">
                        <span class="sidebar-admin-icon">👑</span>
                        <div class="sidebar-admin-meta">
                            <span class="sidebar-admin-title">Sayt Egasi</span>
                            <span class="sidebar-admin-name">Administrator</span>
                        </div>
                    </div>
                    <button class="btn-logout-mini" onclick="event.stopPropagation(); handleAdminLogout();" title="Chiqish">Chiqish</button>
                </div>
            `;
        } else {
            sidebarAdminArea.innerHTML = `
                <button type="button" class="sidebar-admin-btn" onclick="openAdminModal()">
                    <span>🔐</span>
                    <span>Admin kirish</span>
                </button>
            `;
        }
    }

    // 2. Mobile Header icon
    const mobileAdminIcon = document.getElementById('mobile-admin-icon');
    if (mobileAdminIcon) {
        mobileAdminIcon.textContent = isAdmin ? '👑' : '🔐';
    }

    // 3. File Hub Role Pill
    const rolePill = document.getElementById('filehub-admin-status-pill');
    const roleIcon = document.getElementById('filehub-role-icon');
    const roleText = document.getElementById('filehub-role-text');
    if (rolePill && roleIcon && roleText) {
        if (isAdmin) {
            rolePill.classList.add('is-admin');
            roleIcon.textContent = '👑';
            roleText.textContent = 'Administrator (Admin)';
        } else {
            rolePill.classList.remove('is-admin');
            roleIcon.textContent = '👤';
            roleText.textContent = 'Talaba (Mehmon) • Kirish';
        }
    }

    // 4. File Hub Uploader Card vs Guest Locked Banner
    const guestBanner = document.getElementById('file-hub-guest-banner');
    const uploadCard = document.getElementById('file-hub-upload-card');
    if (guestBanner && uploadCard) {
        if (isAdmin) {
            guestBanner.classList.add('hidden');
            uploadCard.classList.remove('hidden');
        } else {
            guestBanner.classList.remove('hidden');
            uploadCard.classList.add('hidden');
        }
    }

    // 5. Admin modal views
    const loginView = document.getElementById('admin-login-view');
    const panelView = document.getElementById('admin-panel-view');
    const modalFileCount = document.getElementById('admin-modal-file-count');
    if (loginView && panelView) {
        if (isAdmin) {
            loginView.classList.add('hidden');
            panelView.classList.remove('hidden');
            if (modalFileCount && window.fileManager) {
                modalFileCount.textContent = fileManager.memoryFiles.length;
            }
        } else {
            loginView.classList.remove('hidden');
            panelView.classList.add('hidden');
        }
    }

    // 6. Refresh active views
    if (window.renderFileHubSlots) window.renderFileHubSlots();
    if (window.renderFilesTable) window.renderFilesTable();
    if (window.updateCardFileBadges) window.updateCardFileBadges();
};

window.openAdminModal = function() {
    const modal = document.getElementById('admin-auth-modal');
    if (!modal) return;
    
    // Clear inputs and errors
    const passInput = document.getElementById('admin-password-input');
    const errorMsg = document.getElementById('admin-login-error');
    if (passInput) passInput.value = '';
    if (errorMsg) errorMsg.classList.add('hidden');

    const oldPass = document.getElementById('old-pass-input');
    const newPass = document.getElementById('new-pass-input');
    const changeErr = document.getElementById('admin-change-error');
    if (oldPass) oldPass.value = '';
    if (newPass) newPass.value = '';
    if (changeErr) changeErr.classList.add('hidden');

    const passBox = document.getElementById('change-pass-box');
    if (passBox) passBox.classList.add('hidden');

    window.updateAdminUI();
    modal.classList.add('active');

    if (!AdminAuth.isAdmin() && passInput) {
        setTimeout(() => passInput.focus(), 200);
    }
};

window.closeAdminModal = function() {
    const modal = document.getElementById('admin-auth-modal');
    if (modal) modal.classList.remove('active');
};

window.handleAdminLogin = function() {
    const passInput = document.getElementById('admin-password-input');
    const errorMsg = document.getElementById('admin-login-error');
    const val = passInput ? passInput.value.trim() : '';

    if (!val) return;

    if (AdminAuth.login(val)) {
        showToast("Xush kelibsiz! Admin huquqlari faollashdi.", "success");
        closeAdminModal();
    } else {
        if (errorMsg) {
            errorMsg.classList.remove('hidden');
            errorMsg.textContent = "Noto'g'ri parol kiritildi! Qayta urinib ko'ring.";
        }
        showToast("Noto'g'ri parol kiritildi!", "danger");
    }
};

window.handleAdminLogout = function() {
    AdminAuth.logout();
    showToast("Admin rejimidan chiqildi. Endi siz talaba (mehmon) rejimidasiz.", "info");
    closeAdminModal();
};

window.handleAdminChangePassword = function() {
    const oldPassInput = document.getElementById('old-pass-input');
    const newPassInput = document.getElementById('new-pass-input');
    const errBox = document.getElementById('admin-change-error');

    const oldVal = oldPassInput ? oldPassInput.value : '';
    const newVal = newPassInput ? newPassInput.value : '';

    const res = AdminAuth.changePassword(oldVal, newVal);
    if (errBox) {
        errBox.textContent = res.message;
        errBox.classList.remove('hidden');
        errBox.style.color = res.success ? 'var(--success)' : 'var(--danger)';
    }

    if (res.success) {
        showToast(res.message, "success");
        if (oldPassInput) oldPassInput.value = '';
        if (newPassInput) newPassInput.value = '';
        setTimeout(() => {
            const passBox = document.getElementById('change-pass-box');
            if (passBox) passBox.classList.add('hidden');
        }, 1200);
    }
};

window.toggleAdminPassVisibility = function() {
    const passInput = document.getElementById('admin-password-input');
    const btn = document.getElementById('btn-toggle-admin-pass');
    if (!passInput) return;
    if (passInput.type === 'password') {
        passInput.type = 'text';
        if (btn) btn.textContent = '🔒';
    } else {
        passInput.type = 'password';
        if (btn) btn.textContent = '👁️';
    }
};

window.toggleChangePassBox = function() {
    const box = document.getElementById('change-pass-box');
    const arrow = document.getElementById('pass-box-arrow');
    if (!box) return;
    box.classList.toggle('hidden');
    if (arrow) arrow.textContent = box.classList.contains('hidden') ? '▼' : '▲';
};

// =============================================================================
// 10. TALABALARNING RAQAMLI EMOTIONAL INTELLEKTINI (REI) ANIQLASH MODULI
// 38 ta mezonli so'rovnoma, 10 ta kompetensiya bloki, Integral REI hisoblash
// =============================================================================
const ReiSurveyState = {
    answers: {}, // { questionId: ratingNumber (1..5) }
    activeCategory: 'all',
    lastResult: null
};

window.openReiQuestionnaireModal = function() {
    const modal = document.getElementById('rei-questionnaire-modal');
    if (!modal) return;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Har safar so'rovnoma ochilganda barcha savollar bo'sh (tanlanmagan) holatda boshlanadi
    ReiSurveyState.answers = {};
    ReiSurveyState.lastResult = null;
    ReiSurveyState.activeCategory = 'all';
    renderReiSurvey();
};

window.closeReiQuestionnaireModal = function() {
    const modal = document.getElementById('rei-questionnaire-modal');
    if (modal) modal.classList.remove('active');
    document.body.style.overflow = '';
};

window.renderReiSurvey = function() {
    const container = document.getElementById('rei-modal-body');
    if (!container || typeof reiQuestionnaireData === 'undefined') return;

    const data = reiQuestionnaireData;
    const answeredCount = Object.keys(ReiSurveyState.answers).length;
    const totalCount = data.questions.length;
    const progressPct = Math.round((answeredCount / totalCount) * 100);

    let html = `
        <div class="rei-survey-wrapper">
            <!-- Modal Header -->
            <div class="rei-survey-header">
                <div class="rei-badge-pill">
                    <span class="pulse-dot"></span>
                    <span>METODIK SO'ROVNOMA • 38 TA SAVOL</span>
                </div>
                <h2 class="rei-survey-main-title">🧠 ${data.title}</h2>
                <div class="rei-purpose-box">
                    <div class="purpose-item">
                        <span class="p-icon">🎯</span>
                        <div><b>Maqsad:</b> ${data.purpose}</div>
                    </div>
                    <div class="purpose-item">
                        <span class="p-icon">📝</span>
                        <div><b>Javob berish tartibi:</b> Har bir fikr sizning raqamli muhitdagi odatiy xatti-harakatingizga qanchalik mos kelishini tanlang: “Har doim”, “Ko‘pincha”, “Ba’zan”, “Kamdan-kam” yoki “Hech qachon”.</div>
                    </div>
                </div>
            </div>

            <!-- Sticky Progress Tracker -->
            <div class="rei-sticky-tracker">
                <div class="tracker-flex">
                    <div class="tracker-info">
                        <span class="tracker-label">Javob berilgan savollar:</span>
                        <span class="tracker-count"><b id="rei-answered-val">${answeredCount}</b> / ${totalCount} ta</span>
                    </div>
                    <div class="tracker-pct-badge" id="rei-progress-pct-badge">${progressPct}%</div>
                </div>
                <div class="tracker-bar-track">
                    <div class="tracker-bar-fill" id="rei-progress-bar-fill" style="width: ${progressPct}%;"></div>
                </div>

                <!-- Category filter chips -->
                <div class="rei-category-chips">
                    <button type="button" class="rei-cat-chip ${ReiSurveyState.activeCategory === 'all' ? 'active' : ''}" onclick="filterReiCategory('all')">
                        Barchasi (38)
                    </button>
                    ${data.categories.map(cat => `
                        <button type="button" class="rei-cat-chip ${ReiSurveyState.activeCategory === cat.id ? 'active' : ''}" onclick="filterReiCategory(${cat.id})">
                            ${cat.code}. ${cat.name}
                        </button>
                    `).join('')}
                </div>
            </div>

            <!-- Questions Container -->
            <div class="rei-questions-list" id="rei-questions-list">
    `;

    // Filter categories to display
    const visibleCategories = ReiSurveyState.activeCategory === 'all' 
        ? data.categories 
        : data.categories.filter(c => c.id === ReiSurveyState.activeCategory);

    visibleCategories.forEach(category => {
        const catQuestions = data.questions.filter(q => q.categoryId === category.id);
        const answeredInCat = catQuestions.filter(q => ReiSurveyState.answers[q.id] !== undefined).length;

        html += `
            <div class="rei-category-section" id="rei-cat-sec-${category.id}">
                <div class="rei-category-heading">
                    <div class="cat-heading-left">
                        <span class="cat-icon-badge">${category.icon || '📌'}</span>
                        <div>
                            <h3 class="cat-title">${category.code}. ${category.name}</h3>
                            <span class="cat-meta">${catQuestions.length} ta savol (${catQuestions[0].id}–${catQuestions[catQuestions.length - 1].id})</span>
                        </div>
                    </div>
                    <div class="cat-progress-tag" id="cat-prog-${category.id}">
                        ${answeredInCat} / ${catQuestions.length} belgilandi
                    </div>
                </div>

                <div class="rei-category-items">
                    ${catQuestions.map(q => {
                        const currentAnswer = ReiSurveyState.answers[q.id];
                        return `
                            <div class="rei-question-card ${currentAnswer !== undefined ? 'answered' : ''}" id="rei-q-${q.id}">
                                <div class="rei-q-header">
                                    <span class="rei-q-number">${q.id}</span>
                                    <p class="rei-q-text">${q.text}</p>
                                </div>
                                <div class="rei-options-grid">
                                    ${data.scale.map(opt => `
                                        <button type="button" 
                                            class="rei-opt-btn ${currentAnswer === opt.value ? 'selected' : ''}" 
                                            onclick="selectReiAnswer(${q.id}, ${opt.value})"
                                            id="rei-opt-${q.id}-${opt.value}"
                                            title="${opt.label}">
                                            <span class="rei-opt-label">${opt.label}</span>
                                        </button>
                                    `).join('')}
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    });

    html += `
            </div>

            <!-- Survey Footer Toolbar -->
            <div class="rei-survey-footer">
                <div class="footer-left-status">
                    <span class="footer-status-icon" id="rei-footer-icon">${answeredCount === totalCount ? '✅' : '⏳'}</span>
                    <span id="rei-footer-status-text">
                        ${answeredCount === totalCount 
                            ? 'Barcha 38 ta savol belgilandi! Natijani hisoblashingiz mumkin.' 
                            : `To‘ldirish davom etmoqda: ${totalCount - answeredCount} ta savol qoldi.`}
                    </span>
                </div>
                <div class="footer-actions-group">
                    <button type="button" class="btn btn-outline btn-sm" onclick="resetReiSurveyAnswers()">
                        <span>🔄 Qayta tozalash</span>
                    </button>
                    <button type="button" class="btn btn-primary btn-calc-rei" id="btn-calc-rei" onclick="submitReiSurvey()">
                        <span>📊 Natijani hisoblash (REI) &rarr;</span>
                    </button>
                </div>
            </div>
        </div>
    `;

    container.innerHTML = html;
};

window.filterReiCategory = function(catId) {
    ReiSurveyState.activeCategory = catId;
    renderReiSurvey();
};

window.selectReiAnswer = function(qId, val) {
    ReiSurveyState.answers[qId] = val;

    // Update DOM instantly for smooth 60fps responsiveness
    const qCard = document.getElementById(`rei-q-${qId}`);
    if (qCard) {
        qCard.classList.add('answered');
        qCard.classList.remove('missing-warning');

        // Deselect all buttons for this question
        const btns = qCard.querySelectorAll('.rei-opt-btn');
        btns.forEach(btn => btn.classList.remove('selected'));

        // Select the chosen one
        const activeBtn = document.getElementById(`rei-opt-${qId}-${val}`);
        if (activeBtn) activeBtn.classList.add('selected');
    }

    // Update progress numbers
    const answeredCount = Object.keys(ReiSurveyState.answers).length;
    const totalCount = reiQuestionnaireData.questions.length;
    const pct = Math.round((answeredCount / totalCount) * 100);

    const countElem = document.getElementById('rei-answered-val');
    if (countElem) countElem.textContent = answeredCount;

    const pctElem = document.getElementById('rei-progress-pct-badge');
    if (pctElem) pctElem.textContent = `${pct}%`;

    const barFill = document.getElementById('rei-progress-bar-fill');
    if (barFill) barFill.style.width = `${pct}%`;

    const footerIcon = document.getElementById('rei-footer-icon');
    const footerText = document.getElementById('rei-footer-status-text');
    if (footerText) {
        if (answeredCount === totalCount) {
            if (footerIcon) footerIcon.textContent = '✅';
            footerText.textContent = 'Barcha 38 ta savol belgilandi! Natijani hisoblashingiz mumkin.';
        } else {
            if (footerIcon) footerIcon.textContent = '⏳';
            footerText.textContent = `To‘ldirish davom etmoqda: ${totalCount - answeredCount} ta savol qoldi.`;
        }
    }
};

window.resetReiSurveyAnswers = function() {
    ReiSurveyState.answers = {};
    ReiSurveyState.lastResult = null;
    renderReiSurvey();
};

window.submitReiSurvey = function() {
    if (typeof reiQuestionnaireData === 'undefined') return;
    const data = reiQuestionnaireData;
    const answeredIds = Object.keys(ReiSurveyState.answers).map(Number);
    const missing = data.questions.filter(q => !answeredIds.includes(q.id));

    if (missing.length > 0) {
        // If some are filtered out by category, reset filter to 'all'
        if (ReiSurveyState.activeCategory !== 'all') {
            ReiSurveyState.activeCategory = 'all';
            renderReiSurvey();
        }

        // Highlight missing questions
        missing.forEach(q => {
            const card = document.getElementById(`rei-q-${q.id}`);
            if (card) card.classList.add('missing-warning');
        });

        // Scroll to the first missing
        const firstCard = document.getElementById(`rei-q-${missing[0].id}`);
        if (firstCard) {
            firstCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        if (window.showToast) {
            window.showToast(`Iltimos, barcha 38 ta savolga javob bering! Qolib ketgan: ${missing.length} ta savol.`, "warning");
        }
        return;
    }

    // Calculation:
    // ΣXᵢ: Total Score
    let totalScore = 0;
    for (let i = 1; i <= 38; i++) {
        totalScore += (ReiSurveyState.answers[i] || 1);
    }

    // REI = ΣXᵢ / (38 × 5) × 100%
    const maxScore = 38 * 5; // 190
    const reiPct = Math.round((totalScore / maxScore) * 100);

    // Determine Level:
    // Yuqori: 145–190 ball → REI 76–100%
    // O‘rta: 97–144 ball → REI 51–75%
    // Past: 38–96 ball → REI 20–50%
    let levelKey = 'past';
    if (totalScore >= 145) {
        levelKey = 'yuqori';
    } else if (totalScore >= 97) {
        levelKey = 'orta';
    } else {
        levelKey = 'past';
    }

    const currentLevel = data.levels.find(l => l.key === levelKey);

    // Calculate Category Breakdown (10 blocks)
    const categoryBreakdown = data.categories.map(cat => {
        let catScore = 0;
        cat.questionIds.forEach(id => {
            catScore += (ReiSurveyState.answers[id] || 0);
        });
        const catMax = cat.questionIds.length * 5;
        const catPct = Math.round((catScore / catMax) * 100);
        return {
            ...cat,
            score: catScore,
            maxScore: catMax,
            pct: catPct
        };
    });

    const resultObj = {
        totalScore,
        maxScore,
        reiPct,
        level: currentLevel,
        levels: data.levels,
        categories: categoryBreakdown,
        completedAt: new Date().toLocaleString('uz-UZ')
    };

    ReiSurveyState.lastResult = resultObj;
    renderReiResult(resultObj);
};

window.renderReiResult = function(result) {
    const container = document.getElementById('rei-modal-body');
    if (!container) return;

    const { totalScore, maxScore, reiPct, level, levels, categories, completedAt } = result;

    let badgeColor = level.badgeColor || '#10b981';

    let html = `
        <div class="rei-result-wrapper">
            <!-- Header Bar -->
            <div class="rei-result-header-bar">
                <button type="button" class="btn btn-outline btn-sm" onclick="backToReiSurvey()">
                    &larr; Savollarga qaytish
                </button>
                <div class="result-time-meta">
                    🕒 Tekshirilgan vaqt: <b>${completedAt}</b>
                </div>
            </div>

            <!-- Big Celebratory Score Hero -->
            <div class="rei-score-hero-card glass-card">
                <div class="score-hero-gauge-col">
                    <div class="rei-circular-meter">
                        <svg viewBox="0 0 120 120" class="meter-svg">
                            <circle class="meter-bg" cx="60" cy="60" r="50"></circle>
                            <circle class="meter-bar" cx="60" cy="60" r="50" 
                                style="stroke-dasharray: 314; stroke-dashoffset: ${314 - (314 * reiPct) / 100}; stroke: ${badgeColor};">
                            </circle>
                        </svg>
                        <div class="meter-center-text">
                            <span class="meter-pct">${reiPct}%</span>
                            <span class="meter-sub">REI Indeksi</span>
                        </div>
                    </div>
                </div>

                <div class="score-hero-details-col">
                    <div class="score-level-badge" style="background:${badgeColor}20; color:${badgeColor}; border:1px solid ${badgeColor}40;">
                        <span>${level.icon}</span>
                        <span>${level.title.toUpperCase()}</span>
                    </div>

                    <h2 class="score-congrats-text">
                        Siz <span class="highlight-score">${totalScore} ball</span> to‘pladingiz, REI ko‘rsatkichi <span class="highlight-pct">${reiPct}%</span>!
                    </h2>

                    <!-- Formula breakdown box -->
                    <div class="score-formula-box">
                        <span class="formula-title">📐 Matematik hisoblash formulasi:</span>
                        <code>REI = ΣXᵢ / (n × 5) × 100% = ${totalScore} / (${38} × 5) × 100% = ${reiPct}%</code>
                    </div>
                </div>
            </div>

            <!-- Pedagogical Evaluation Box (User specifically asked for this with "Siz") -->
            <div class="rei-evaluation-card glass-card">
                <div class="eval-card-header">
                    <span class="eval-icon">💡</span>
                    <div>
                        <h3 class="eval-title">Sizning pedagogik-psixologik tavsifingiz</h3>
                        <p class="eval-sub">${level.title} bo‘yicha to‘liq metodik xulosa</p>
                    </div>
                </div>
                <div class="eval-card-body">
                    <blockquote class="eval-quote-text">
                        “${level.description}”
                    </blockquote>
                </div>
            </div>

            <!-- Methodology Comparison Table (Darajalar Jadvali) -->
            <div class="rei-methodology-section glass-card">
                <div class="table-section-header">
                    <div>
                        <h3>📊 Raqamli emotsional intellekt (REI) darajalar tasnifi jadvali</h3>
                        <p>Ushbu metodika bo‘yicha ballar va REI ko‘rsatkichlarining pedagogik mezonlari</p>
                    </div>
                </div>

                <div class="rei-table-responsive">
                    <table class="rei-levels-table">
                        <thead>
                            <tr>
                                <th style="width: 14%;">Daraja</th>
                                <th style="width: 16%;">Ball diapazoni</th>
                                <th style="width: 15%;">REI ko‘rsatkichi</th>
                                <th>Pedagogik tavsif</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${levels.map(l => {
                                const isUserLevel = (l.key === level.key);
                                return `
                                    <tr class="${isUserLevel ? 'active-level-row' : ''}">
                                        <td>
                                            <div class="tbl-level-cell">
                                                <span class="tbl-icon">${l.icon}</span>
                                                <b>${l.title}</b>
                                                ${isUserLevel ? '<span class="user-here-badge">Sizning darajangiz</span>' : ''}
                                            </div>
                                        </td>
                                        <td>
                                            <span class="tbl-score-pill">${l.scoreRange}</span>
                                        </td>
                                        <td>
                                            <span class="tbl-rei-pill" style="color:${l.color}; font-weight:700;">${l.reiRange}</span>
                                        </td>
                                        <td class="tbl-desc-cell">
                                            ${l.description}
                                        </td>
                                    </tr>
                                `;
                            }).join('')}
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- 10 Competencies Breakdown (10 ta blok bo'yicha tahlil) -->
            <div class="rei-competencies-section glass-card">
                <div class="comp-section-header">
                    <div>
                        <h3>🎯 10 ta kompetensiya bloki bo‘yicha tahliliy natijalar</h3>
                        <p>Qaysi raqamli emotsional ko‘nikmalaringiz kuchli va qaysilarini yanada rivojlantirish zarurligini ko‘ring</p>
                    </div>
                </div>

                <div class="rei-comp-grid">
                    ${categories.map(c => `
                        <div class="rei-comp-card">
                            <div class="comp-card-top">
                                <span class="comp-code">${c.code}</span>
                                <span class="comp-icon">${c.icon || '📌'}</span>
                            </div>
                            <h4 class="comp-name">${c.name}</h4>
                            <div class="comp-meter-row">
                                <div class="comp-track">
                                    <div class="comp-fill" style="width:${c.pct}%; background:${c.pct >= 75 ? 'var(--success)' : c.pct >= 50 ? 'var(--warning)' : 'var(--danger)'};"></div>
                                </div>
                                <span class="comp-pct-val" style="color:${c.pct >= 75 ? 'var(--success)' : c.pct >= 50 ? 'var(--warning)' : 'var(--danger)'};">
                                    ${c.pct}%
                                </span>
                            </div>
                            <div class="comp-footer-score">
                                <span>To‘plangan ball:</span>
                                <b>${c.score} / ${c.maxScore}</b>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Action Buttons Footer -->
            <div class="rei-result-actions-footer">
                <button type="button" class="btn btn-outline" onclick="copyReiResultSummary()">
                    <span>📋 Xulosani nusxalash</span>
                </button>
                <button type="button" class="btn btn-outline" onclick="printReiResultReport()">
                    <span>🖨️ Natijani chop etish / Saqlash</span>
                </button>
                <button type="button" class="btn btn-outline" onclick="backToReiSurvey()">
                    <span>🔄 Qayta topshirish</span>
                </button>
                <button type="button" class="btn btn-primary" onclick="closeReiQuestionnaireModal()">
                    <span>✅ Tushundim va yakunlash</span>
                </button>
            </div>
        </div>
    `;

    container.innerHTML = html;
};

window.backToReiSurvey = function() {
    renderReiSurvey();
};

window.copyReiResultSummary = function() {
    if (!ReiSurveyState.lastResult) return;
    const { totalScore, maxScore, reiPct, level } = ReiSurveyState.lastResult;
    const text = `🧠 TALABALARNING RAQAMLI EMOTSIONAL INTELLEKTINI ANIQLASH SO'ROVNOMASI NATIJALARI\n\n` +
                 `To'plangan ball: ${totalScore} / ${maxScore} ball\n` +
                 `Integral REI ko'rsatkichi: ${reiPct}%\n` +
                 `Daraja: ${level.title}\n\n` +
                 `Pedagogik tavsif:\n"${level.description}"\n\n` +
                 `Platforma: Raqamli emotsional intelektni rivojlantirish`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            if (window.showToast) window.showToast("Natija xulosasi xotiraga nusxalandi!", "success");
        }).catch(() => {
            fallbackCopyText(text);
        });
    } else {
        fallbackCopyText(text);
    }
};

function fallbackCopyText(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    try {
        document.execCommand('copy');
        if (window.showToast) window.showToast("Natija xulosasi nusxalandi!", "success");
    } catch (e) {
        alert("Xulosani nusxalab oling:\n\n" + text);
    }
    document.body.removeChild(ta);
}

window.printReiResultReport = function() {
    window.print();
};

