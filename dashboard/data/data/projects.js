/**
 * Masajid Project — Central Data Store & Real-time State Synchronization Engine
 * Base currency: NGN
 */

const g = typeof window !== 'undefined' ? window : global;

const defaultArticles = [
  {
    id: "1",
    slug: "why-technical-audits-guarantee-trust-in-mosque-projects",
    title: "Why Technical Audits Guarantee Trust in Mosque Projects",
    category: "Governance",
    date: "12 Aug 2026",
    author: "Alabi Saheed",
    authorTitle: "Lead Technical Inspector",
    authorAvatar: "SB",
    excerpt: "Every Sadaqah Jariyah project undergoes pre-inspection, competitive contractor bidding, and post-completion audits before public sign-off.",
    content: `
      <p class="article-lead">Transparency in charity isn’t just an ideal—it requires systematic technical field verification. When supporters contribute to mosque improvements, they deserve to know that every naira or pound translates directly into physical, verifiable impact.</p>
      
      <h3>The Three-Stage Technical Audit Process</h3>
      <p>Before any project is published for funding on Masajid Project, our team executes a rigorous three-stage verification process:</p>
      <ul>
        <li><strong>1. Identification & Need Assessment:</strong> Field inspectors evaluate the physical condition, take high-resolution before-photos, and interview mosque committee members to confirm the genuine scope of need.</li>
        <li><strong>2. Bidding & Contractor Selection:</strong> We obtain competitive quotations from vetted local technical contractors (solar engineers, sound specialists, electricians) to prevent inflated invoicing.</li>
        <li><strong>3. Post-Execution Inspection:</strong> Once work is complete, our audit team tests the installation (e.g. acoustic balancing for sound systems, solar battery backup discharge rates) before releasing final payment.</li>
      </ul>

      <blockquote>
        "O you who believe! Fulfill your obligations and honor your trusts." — Qur'an 5:1
      </blockquote>

      <h3>100% Financial Reconciliation</h3>
      <p>All vendor invoices, receipt vouchers, and site photos are uploaded directly to our public Transparency Dashboard. Donors can cross-reference donation receipts with contractor disbursements line-by-line.</p>
    `,
    readTime: "4 min read"
  },
  {
    id: "2",
    slug: "the-impact-of-solar-energy-in-off-grid-masajid",
    title: "The Impact of Solar Energy in Off-Grid Masajid",
    category: "Field Reports",
    date: "08 Aug 2026",
    author: "Alabi Saheed",
    authorTitle: "Community Projects Director",
    authorAvatar: "AD",
    excerpt: "How installing solar inverter systems in rural and semi-urban mosques enables 24/7 power for prayers, nighttime lighting, and madrasah education.",
    content: `
      <p class="article-lead">Unreliable power grids present a major obstacle for daily worship and evening learning sessions in local communities. Installing solar inverter systems solves this permanently.</p>
      
      <h3>Uninterrupted Worship & Learning</h3>
      <p>When power fails during evening Isha or Fajr prayers, sound amplification and lighting shut down. Solar energy guarantees uninterrupted Adhan broadcast, crisp acoustics for the Imam during prayers, and safe nighttime lighting for children attending evening Qur'an classes.</p>
      
      <h3>Long-term Cost Savings</h3>
      <p>Mosques previously spent significant funds on generator fuel each month. Solar systems eliminate this financial burden, allowing local committees to redirect funds toward community welfare and facility maintenance.</p>
    `,
    readTime: "5 min read"
  },
  {
    id: "3",
    slug: "sadaqah-jariyah-small-acts-with-lasting-spiritual-reward",
    title: "Sadaqah Jariyah: Small Acts with Lasting Spiritual Reward",
    category: "Sadaqah Jariyah",
    date: "02 Aug 2026",
    author: "Alabi Saheed",
    authorTitle: "Islamic Governance Advisor",
    authorAvatar: "IK",
    excerpt: "Exploring the Hadith of ongoing charity and why providing essential items—like lighting, clean water, and sound systems—continues benefiting the donor.",
    content: `
      <p class="article-lead">The Prophet Muhammad (peace be upon him) taught us that when a person passes away, their good deeds come to an end except for three: ongoing charity (Sadaqah Jariyah), beneficial knowledge, or a righteous child who prays for them.</p>

      <h3>Continuous Benefit</h3>
      <p>Every time a worshipper hears the Adhan clearly through a sound system you funded, reads from a Qur'an placed on a shelf you provided, or prays under LED lighting you installed, the reward continues to reach your scale of good deeds.</p>
    `,
    readTime: "3 min read"
  }
];

const defaultNominations = [
  {
    id: "NOM-2026-001",
    masjidName: "Masjid Al-Ansar",
    city: "Surulere",
    state: "Lagos",
    country: "Nigeria",
    congregation: "200-500",
    needTypes: ["solar", "lighting"],
    description: "The mosque main prayer hall suffers constant power blackouts during Maghrib and Isha prayers. Solar inverter installation needed urgently.",
    urgency: "High",
    contactName: "Imam Ibrahim Alabi",
    contactPhone: "+234 803 123 4567",
    submittingName: "Kabir Usman",
    submittingEmail: "kabir.usman@example.com",
    submittedAt: "2026-08-10",
    status: "Pending Review"
  },
  {
    id: "NOM-2026-002",
    masjidName: "Central Juma'at Masjid",
    city: "Epe",
    state: "Lagos",
    country: "Nigeria",
    congregation: "500+",
    needTypes: ["sound", "repairs"],
    description: "Amplifier system broken. Worshippers in the balcony area cannot hear the Friday sermon clear audio.",
    urgency: "Medium",
    contactName: "Secretary Al-Hassan",
    contactPhone: "+234 802 987 6543",
    submittingName: "Mariam Yusuf",
    submittingEmail: "mariam.y@example.com",
    submittedAt: "2026-08-11",
    status: "Approved"
  }
];

const defaultComments = [
  {
    id: "COM-001",
    articleSlug: "why-technical-audits-guarantee-trust-in-mosque-projects",
    author: "Zaid Omar",
    email: "zaid@example.com",
    comment: "This technical audit standard is exactly what gives donors peace of mind. May Allah bless the team!",
    date: "12 Aug 2026",
    status: "approved"
  }
];

const initialProjects = [
  {
    id: "MP-LAG-2026-001",
    mosqueId: "MSQ-001",
    categoryId: "sound",
    status: "COMPLETED",
    isFeatured: true,
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
    isFeatured: true,
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
    isFeatured: true,
    titleEN: "LED Energy Efficient Lighting Overhaul",
    titleAR: "تحديث الإضاءة بإضاءة ليد موفرة",
    descriptionEN: "Replacement of 45 high-wattage fluorescent bulbs with energy-efficient LED panel lighting and safety rewiring of the main electrical distribution panel.",
    descriptionAR: "استبدال المصابيح القديمة بـ 45 لوحة إضاءة ليد موفرة للطاقة وتحديث اللوحة الكهربائية.",
    goalNGN: 380000,
    raisedNGN: 380000,
    spentNGN: 190000,
    imageBefore: "images/proj-003-before.jpg",
    expenses: [
      { id: "EXP-003", date: "2026-08-02", desc: "LED Lighting Panels (45 units)", vendor: "Lumica Electrical Ltd", amountNGN: 190000, receiptVerified: true }
    ]
  },
  {
    id: "MP-OGN-2026-004",
    mosqueId: "MSQ-004",
    categoryId: "quran",
    status: "FUNDING",
    isFeatured: false,
    titleEN: "Qur'an Shelves & Copy Provision",
    titleAR: "توفير المصاحف ورفوف التخزين",
    descriptionEN: "Provision of 100 new hardbound Madani-script Qur'an copies with 4 carved wooden storage display shelves for worshippers and students.",
    descriptionAR: "توفير 100 مصحف بطبعة المدينة و4 رفوف خشبية خشبية فاخرة.",
    goalNGN: 290000,
    raisedNGN: 145000,
    spentNGN: 0,
    imageBefore: "images/proj-004-before.jpg",
    expenses: []
  },
  {
    id: "MP-LAG-2026-005",
    mosqueId: "MSQ-005",
    categoryId: "cleaning",
    status: "VERIFIED",
    isFeatured: false,
    titleEN: "Ablution Area Cleaning & Plumbing",
    titleAR: "تنظيف منطقة الوضوء والسباكة",
    descriptionEN: "Deep chemical sanitation of ablution floor tiles, replacement of 12 leaking brass water taps, and installation of anti-slip rubber floor mats.",
    descriptionAR: "تنظيف وتعقيم منطقة الوضوء واستبدال 12 صنبور مياه وإضافة حصير لمنع الانزلاق.",
    goalNGN: 220000,
    raisedNGN: 0,
    spentNGN: 0,
    imageBefore: "images/proj-005-before.jpg",
    expenses: []
  }
];

// Local Storage Helper
function loadLocal(key, defaultVal) {
  if (typeof localStorage === 'undefined') return defaultVal;
  try {
    const val = localStorage.getItem('masajid_' + key);
    return val ? JSON.parse(val) : defaultVal;
  } catch (e) {
    return defaultVal;
  }
}

function saveLocal(key, data) {
  if (typeof localStorage === 'undefined') return;
  try {
    localStorage.setItem('masajid_' + key, JSON.stringify(data));
  } catch (e) {
    console.error('Storage error', e);
  }
}

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
    { id: "MSQ-005", nameEN: "Masjid Rahmah", nameAR: "مسجد الرحمة", city: "Yaba", state: "Lagos" }
  ],

  // Projects Methods
  getProjects: function() {
    return loadLocal('projects', initialProjects);
  },

  saveProject: function(proj) {
    const list = this.getProjects();
    const idx = list.findIndex(p => p.id === proj.id);
    if (idx >= 0) {
      list[idx] = proj;
    } else {
      list.push(proj);
    }
    saveLocal('projects', list);
    return list;
  },

  deleteProject: function(id) {
    const list = this.getProjects().filter(p => p.id !== id);
    saveLocal('projects', list);
    return list;
  },

  toggleFeatured: function(id) {
    const list = this.getProjects();
    const proj = list.find(p => p.id === id);
    if (proj) {
      proj.isFeatured = !proj.isFeatured;
      saveLocal('projects', list);
    }
    return list;
  },

  getActiveProjects: function() {
    return this.getProjects().filter(p => p.status !== 'COMPLETED');
  },

  getCompletedProjects: function() {
    return this.getProjects().filter(p => p.status === 'COMPLETED');
  },

  getFeaturedProjects: function() {
    const all = this.getProjects();
    const feat = all.filter(p => p.isFeatured);
    return feat.length > 0 ? feat : all.slice(0, 3);
  },

  getProjectById: function(id) {
    return this.getProjects().find(p => p.id === id) || this.getProjects()[0];
  },

  // Nominations Methods
  getNominations: function() {
    return loadLocal('nominations', defaultNominations);
  },

  saveNomination: function(nom) {
    const list = this.getNominations();
    nom.id = nom.id || 'NOM-' + Date.now();
    nom.submittedAt = nom.submittedAt || new Date().toISOString().split('T')[0];
    nom.status = nom.status || 'Pending Review';
    list.unshift(nom);
    saveLocal('nominations', list);
    return nom;
  },

  updateNominationStatus: function(id, status) {
    const list = this.getNominations();
    const item = list.find(n => n.id === id);
    if (item) {
      item.status = status;
      saveLocal('nominations', list);
    }
    return list;
  },

  // Articles Methods
  getArticles: function() {
    return loadLocal('articles', defaultArticles);
  },

  getArticleBySlug: function(slug) {
    const list = this.getArticles();
    return list.find(a => a.slug === slug || a.id === slug) || list[0];
  },

  saveArticle: function(art) {
    const list = this.getArticles();
    if (!art.slug) {
      art.slug = art.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    }
    const idx = list.findIndex(a => a.id === art.id || a.slug === art.slug);
    if (idx >= 0) {
      list[idx] = { ...list[idx], ...art };
    } else {
      art.id = art.id || String(Date.now());
      art.date = art.date || new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
      list.unshift(art);
    }
    saveLocal('articles', list);
    return art;
  },

  deleteArticle: function(id) {
    const list = this.getArticles().filter(a => a.id !== id && a.slug !== id);
    saveLocal('articles', list);
    return list;
  },

  // Comments Methods
  getComments: function(slug) {
    const all = loadLocal('comments', defaultComments);
    return slug ? all.filter(c => c.articleSlug === slug) : all;
  },

  saveComment: function(com) {
    const list = loadLocal('comments', defaultComments);
    com.id = com.id || 'COM-' + Date.now();
    com.date = com.date || new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    com.status = com.status || 'pending';
    list.unshift(com);
    saveLocal('comments', list);
    return com;
  },

  updateCommentStatus: function(id, status) {
    const list = loadLocal('comments', defaultComments);
    const item = list.find(c => c.id === id);
    if (item) {
      item.status = status;
      saveLocal('comments', list);
    }
    return list;
  }
};
