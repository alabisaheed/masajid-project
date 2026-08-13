/**
 * Masajid Project — Central Data Store
 * All financial figures tracked in NGN as base currency
 */

const g = typeof window !== 'undefined' ? window : global;

g.MP = {
  stats: {
    projectsCompleted: 1,
    totalRaisedNGN: 3825500,
    masajidSupported: 9,
    activeProjects: 8,
    totalSpentNGN: 625000,
    totalDonors: 78
  },

  categories: [
    { id: "lighting",  labelEN: "Lighting & Electrical", labelAR: "الإضاءة والكهرباء",  iconClass: "fa-solid fa-lightbulb", color: "#13547A" },
    { id: "solar",     labelEN: "Solar & Power",          labelAR: "الطاقة الشمسية",       iconClass: "fa-solid fa-solar-panel", color: "#D4AF37" },
    { id: "cleaning",  labelEN: "Cleaning & Maintenance", labelAR: "النظافة والصيانة",    iconClass: "fa-solid fa-broom", color: "#059669" },
    { id: "quran",     labelEN: "Qur'ans & Books",        labelAR: "المصاحف والكتب",       iconClass: "fa-solid fa-book-quran", color: "#0284C7" },
    { id: "furniture", labelEN: "Furniture & Facilities", labelAR: "الأثاث والمرافق",     iconClass: "fa-solid fa-chair", color: "#7C3AED" },
    { id: "sound",     labelEN: "Sound Systems",          labelAR: "أنظمة الصوت",          iconClass: "fa-solid fa-volume-high", color: "#D97706" },
    { id: "security",  labelEN: "Security & Safety",      labelAR: "الأمن والسلامة",        iconClass: "fa-solid fa-shield-halved", color: "#DC2626" },
    { id: "repairs",   labelEN: "Minor Repairs",          labelAR: "إصلاحات بسيطة",       iconClass: "fa-solid fa-wrench", color: "#475569" }
  ],

  statuses: {
    IDENTIFIED:  { id: "identified",  label: "Identified",   labelAR: "محدد",       color: "#94a3b8" },
    VERIFIED:    { id: "verified",    label: "Verified",     labelAR: "موثق",       color: "#2563eb" },
    FUNDING:     { id: "funding",     label: "Funding",      labelAR: "جمع التبرعات", color: "#d97706" },
    IN_PROGRESS: { id: "in-progress", label: "In Progress",  labelAR: "جارٍ التنفيذ", color: "#0284c7" },
    COMPLETED:   { id: "completed",   label: "Completed",    labelAR: "مكتمل",      color: "#059669" },
    MONITORING:  { id: "monitoring",  label: "Monitoring",   labelAR: "متابعة",     color: "#7c3aed" }
  },

  mosques: [
    { id: "MSQ-001", nameEN: "Masjid Baitul Hikmah", nameAR: "مسجد بيت الحكمة", city: "Ikeja", state: "Lagos" },
    { id: "MSQ-002", nameEN: "Masjid Al-Tawheed", nameAR: "مسجد التوحيد", city: "Surulere", state: "Lagos" },
    { id: "MSQ-003", nameEN: "Masjid Nurul Islam", nameAR: "مسجد نور الإسلام", city: "Ikeja", state: "Lagos" },
    { id: "MSQ-004", nameEN: "An-Noor Central Masjid", nameAR: "مسجد النور المركزي", city: "Abeokuta", state: "Ogun" },
    { id: "MSQ-005", nameEN: "Masjid Rahmah", nameAR: "مسجد الرحمة", city: "Yaba", state: "Lagos" },
    { id: "MSQ-006", nameEN: "Al-Taqwa Central Masjid", nameAR: "مسجد التقوى المركزي", city: "Agege", state: "Lagos" },
    { id: "MSQ-007", nameEN: "Al-Huda Central Masjid", nameAR: "مسجد الهدى المركزي", city: "Tudun Wada", state: "Kaduna" },
    { id: "MSQ-008", nameEN: "Masjid Al-Ihsan", nameAR: "مسجد الإحسان", city: "Bodija", state: "Ibadan" },
    { id: "MSQ-009", nameEN: "Fagge Central Masjid", nameAR: "مسجد فج المركزي", city: "Fagge", state: "Kano" }
  ],

  projects: [
    {
      id: "MP-LAG-2026-001",
      mosqueId: "MSQ-001",
      categoryId: "sound",
      status: "COMPLETED",
      titleEN: "Sound System Upgrade",
      titleAR: "تحديث نظام الصوت",
      descriptionEN: "Complete overhaul of audio amplification with 6 ceiling column speakers, dual wireless UHF microphones, and acoustic balancing. Over 800 worshippers benefit during Friday Khutbah and daily prayers.",
      descriptionAR: "تحديث شامل لنظام الصوت وتوفير ميكروفونات لاسلكية ومكبرات صوت لخدمة 800 مصلٍ.",
      goalNGN: 435000,
      raisedNGN: 435000,
      spentNGN: 435000,
      completedDate: "2026-07-28",
      verifiedBy: "Technical Field Team",
      imageBefore: "images/proj-001-before.jpg",
      imageAfter: "images/proj-001-after.jpg",
      expenses: [
        { id: "EXP-001", date: "2026-07-15", desc: "Acoustic Speakers & Amplifiers", vendor: "SoundTech Systems Ltd", amountNGN: 320000, receiptVerified: true },
        { id: "EXP-002", date: "2026-07-20", desc: "UHF Microphones & Cable Wiring", vendor: "ElectraPro Supplies", amountNGN: 115000, receiptVerified: true }
      ]
    },
    {
      id: "MP-LAG-2026-002",
      mosqueId: "MSQ-002",
      categoryId: "solar",
      status: "FUNDING",
      titleEN: "Solar Energy Inverter System",
      titleAR: "نظام محول الطاقة الشمسية",
      descriptionEN: "Installation of a 5kVA solar inverter system with 8 monocrystalline solar panels to guarantee 24/7 power backup for daily prayers, nighttime lighting, and madrasah classes.",
      descriptionAR: "تركيب نظام طاقة شمسية بقدرة 5 كيلو فوا لتوفير الكهرباء المستمرة للصلوات وحلقات التحفيظ.",
      goalNGN: 1250000,
      raisedNGN: 837500,
      spentNGN: 0,
      imageBefore: "images/proj-002-before.jpg",
      expenses: []
    },
    {
      id: "MP-LAG-2026-003",
      mosqueId: "MSQ-003",
      categoryId: "lighting",
      status: "IN_PROGRESS",
      titleEN: "LED Energy Efficient Lighting Overhaul",
      titleAR: "تحديث الإضاءة بإضاءة ليد موفرة",
      descriptionEN: "Replacement of 45 high-wattage fluorescent bulbs with energy-efficient LED panel lighting and safety rewiring of the main electrical distribution panel.",
      descriptionAR: "استبدال المصابيح القديمة بـ 45 لوحة إضاءة ليد موفرة للطاقة وتحديث اللوحة الكهربائية.",
      goalNGN: 380000,
      raisedNGN: 380000,
      spentNGN: 190000,
      imageBefore: "images/proj-003-before.jpg",
      expenses: [
        { id: "EXP-003", date: "2026-08-05", desc: "LED Panels & Cabling Procurement", vendor: "Lagos Light Wholesale", amountNGN: 190000, receiptVerified: true }
      ]
    },
    {
      id: "MP-OG-2026-004",
      mosqueId: "MSQ-004",
      categoryId: "cleaning",
      status: "FUNDING",
      titleEN: "Carpet Steam Sanitation & Deep Clean",
      titleAR: "تنظيف وتعقيم السجاد بالبخار",
      descriptionEN: "Professional industrial steam washing, deep anti-bacterial sanitation, and edging repairs for 350 square meters of main prayer hall carpet.",
      descriptionAR: "تنظيف وغسيل 350 متراً مربعاً من السجاد بالبخار والتعقيم ضد البكتيريا.",
      goalNGN: 220000,
      raisedNGN: 154000,
      spentNGN: 0,
      imageBefore: "images/proj-004-before.jpg",
      expenses: []
    },
    {
      id: "MP-LAG-2026-005",
      mosqueId: "MSQ-005",
      categoryId: "quran",
      status: "VERIFIED",
      titleEN: "Qur'an Storage & Mahogany Bookshelves",
      titleAR: "خزائن ورفوف للمصاحف",
      descriptionEN: "Crafting and mounting of 6 solid mahogany wall-mounted wooden bookshelf units to house 120 copies of the Holy Qur'an and Arabic learning texts.",
      descriptionAR: "تصنيع 6 رفوف خشبية جدارية لتنظيم المصاحف والكتب الإسلامية.",
      goalNGN: 195000,
      raisedNGN: 195000,
      spentNGN: 0,
      imageBefore: "images/proj-005-before.jpg",
      expenses: []
    },
    {
      id: "MP-LAG-2026-006",
      mosqueId: "MSQ-006",
      categoryId: "repairs",
      status: "FUNDING",
      titleEN: "Public Wudhu Area Plumbing Overhaul",
      titleAR: "إصلاح سباكة منطقة الوضوء",
      descriptionEN: "Replacing 16 damaged brass faucets, fixing main supply leakage, and laying anti-slip ceramic floor tiles for safe ablution.",
      descriptionAR: "صيانة سباكة الوضوء واستبدال 16 صنبوراً وتطوير الأرضية بأرضيات مانعة للانزلاق.",
      goalNGN: 310000,
      raisedNGN: 139500,
      spentNGN: 0,
      imageBefore: "images/proj-006-before.jpg",
      expenses: []
    },
    {
      id: "MP-KAD-2026-007",
      mosqueId: "MSQ-007",
      categoryId: "repairs",
      status: "IN_PROGRESS",
      titleEN: "Roof Leak & Ceiling Waterproofing",
      titleAR: "عزل و معالجة تسريب السقف",
      descriptionEN: "Emergency roof sealing with bitumen waterproofing membrane and replacing water-damaged ceiling sheets before rainfall worsens.",
      descriptionAR: "تركيب العازل المائي للسقف واستبدال الألواح المتضررة لحماية المصلى.",
      goalNGN: 480000,
      raisedNGN: 480000,
      spentNGN: 240000,
      imageBefore: "images/proj-007-before.jpg",
      expenses: []
    },
    {
      id: "MP-OYO-2026-008",
      mosqueId: "MSQ-008",
      categoryId: "sound",
      status: "VERIFIED",
      titleEN: "Acoustic Audio Mixer & Mic Upgrade",
      titleAR: "تحديث مكسر الصوت والميكروفونات",
      descriptionEN: "Procurement of a 12-channel digital audio mixer console and dual wireless UHF mics to eliminate Khutbah echo and feedback distortion.",
      descriptionAR: "توفير مكسر صوت حديث بقدرة 12 قناة لتنقية الصوت وإلغاء الصدى.",
      goalNGN: 540000,
      raisedNGN: 540000,
      spentNGN: 0,
      imageBefore: "images/proj-008-before.jpg",
      expenses: []
    },
    {
      id: "MP-KN-2026-009",
      mosqueId: "MSQ-009",
      categoryId: "security",
      status: "FUNDING",
      titleEN: "CCTV Security Camera Installation",
      titleAR: "تركيب كاميرات المراقبة والأمن",
      descriptionEN: "Installation of an 8-camera 1080p night-vision CCTV system with digital video recorder to protect mosque property and congregant vehicles.",
      descriptionAR: "تركيب 8 كاميرات مراقبة ليلية لحماية ممتلكات المسجد ومركبات المصلين.",
      goalNGN: 450000,
      raisedNGN: 135000,
      spentNGN: 0,
      imageBefore: "images/proj-009-before.jpg",
      expenses: []
    }
  ],

  donations: [
    { id: "DON-1001", date: "2026-08-10", ref: "TXN-884920", projectId: "MP-LAG-2026-002", donorName: "Brother Ibrahim A.", amountNGN: 50000 },
    { id: "DON-1002", date: "2026-08-11", ref: "TXN-902148", projectId: "MP-LAG-2026-002", donorName: "Anonymous Sister", amountNGN: 100000 },
    { id: "DON-1003", date: "2026-08-12", ref: "TXN-918302", projectId: "MP-OG-2026-004", donorName: "Usman K.", amountNGN: 25000 },
    { id: "DON-1004", date: "2026-08-13", ref: "TXN-940122", projectId: "MP-LAG-2026-003", donorName: "Hajia Amina B.", amountNGN: 150000 }
  ],

  exchangeRates: {
    NGN: 1,
    GBP: 0.00049,
    USD: 0.00063
  },

  currencySymbols: {
    NGN: "\u20A6",
    GBP: "\u00A3",
    USD: "$"
  }
};

const MP = g.MP;

// Helper methods
MP.formatCurrency = function(amountNGN, currency = "NGN") {
  const rate = MP.exchangeRates[currency] || 1;
  const symbol = MP.currencySymbols[currency] || "\u20A6";
  const converted = amountNGN * rate;
  
  if (currency === "NGN") {
    return symbol + Math.round(converted).toLocaleString();
  }
  return symbol + converted.toFixed(2);
};

MP.getCategoryLabel = function(catId) {
  const cat = MP.categories.find(c => c.id === catId);
  return cat ? cat.labelEN : catId;
};

MP.getMosque = function(mosqueId) {
  return MP.mosques.find(m => m.id === mosqueId) || { nameEN: "Local Masjid", city: "Lagos", state: "Nigeria" };
};

MP.getLocation = function(project) {
  const m = MP.getMosque(project.mosqueId);
  return `${m.city}, ${m.state}`;
};

MP.getActiveProjects = function() {
  return MP.projects.filter(p => p.status !== "COMPLETED");
};

MP.getCompletedProjects = function() {
  return MP.projects.filter(p => p.status === "COMPLETED");
};

MP.getProgressPercent = function(project) {
  if (!project.goalNGN || project.goalNGN === 0) return 0;
  return Math.min(100, Math.round((project.raisedNGN / project.goalNGN) * 100));
};
