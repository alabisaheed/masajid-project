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
    author: "Engr. Sulaiman Bello",
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
    author: "Hajiya Aisha Danjuma",
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
    author: "Ustadh Imran Khalid",
    authorTitle: "Islamic Governance Advisor",
    authorAvatar: "IK",
    excerpt: "Exploring the Hadith of ongoing charity and why providing essential items—like lighting, clean water, and sound systems—continues benefiting the donor.",
    content: `
      <p class="article-lead">The Prophet Muhammad (peace be upon him) taught us that when a person passes away, their good deeds come to an end except for three: ongoing charity (Sadaqah Jariyah), beneficial knowledge, or a righteous child who prays for them.</p>

      <h3>Continuous Benefit</h3>
      <p>Every time a worshipper hears the Adhan clearly through a sound system you funded, reads from a Qur'an placed on a shelf you provided, or prays under LED lighting you installed, the reward continues to reach your scale of good deeds.</p>
    `,
    readTime: "3 min read"
  },
  {
    id: "4",
    slug: "upgrading-audio-acoustics-at-masjid-baitul-hikmah",
    title: "Upgrading Audio Acoustics at Masjid Baitul Hikmah",
    category: "Field Reports",
    date: "19 Jul 2026",
    author: "Field Ops Team",
    authorTitle: "Acoustic Engineering Unit",
    authorAvatar: "FO",
    excerpt: "A case study on replacing faulty speaker columns with balanced acoustic mixers to serve over 800 daily worshippers in Ikeja.",
    content: `
      <p class="article-lead">High-quality audio acoustics ensure that every worshipper in the prayer hall and overflow balcony hears the Imam and Adhan with crystal-clear fidelity.</p>
      
      <h3>Acoustic Balancing & Mixer Calibration</h3>
      <p>Our technical team installed multi-channel sound mixers and weather-resistant horn speakers calibrated specifically for architectural reverberation reduction.</p>
    `,
    readTime: "4 min read"
  },
  {
    id: "5",
    slug: "maintaining-wudhu-sanitation-health-and-dignity",
    title: "Maintaining Wudhu Sanitation: Health & Dignity",
    category: "Sadaqah Jariyah",
    date: "10 Jul 2026",
    author: "Masajid Care Team",
    authorTitle: "Sanitation & Hygiene Function",
    authorAvatar: "MC",
    excerpt: "Proper ablution facilities prevent water wastage and ensure clean, hygienic conditions for community members before prayer.",
    content: `
      <p class="article-lead">Cleanliness is half of faith. Ensuring that mosque ablution (wudhu) areas have functioning taps, non-slip rubber flooring, and clean water drainage is a high-impact Sadaqah Jariyah intervention.</p>
    `,
    readTime: "3 min read"
  },
  {
    id: "6",
    slug: "how-communities-nominate-masajid-in-need",
    title: "How Communities Nominate Masajid in Need",
    category: "Governance",
    date: "25 Jun 2026",
    author: "Audit Committee",
    authorTitle: "Governance & Vetting Desk",
    authorAvatar: "AC",
    excerpt: "Step-by-step walkthrough of the nomination assessment process: from submission to technical field verification.",
    content: `
      <p class="article-lead">Anyone can nominate a local mosque in need of practical maintenance. Our field assessment team reviews each submission within 24 hours to schedule an on-site audit.</p>
    `,
    readTime: "4 min read"
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
    location: "Mushin, Lagos",
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
    location: "Surulere, Lagos",
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
    location: "Ikeja, Lagos",
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
    id: "MP-OG-2026-004",
    mosqueId: "MSQ-004",
    categoryId: "cleaning",
    status: "FUNDING",
    isFeatured: true,
    titleEN: "Carpet Steam Sanitation",
    titleAR: "تنظيف وتعقيم السجاد بالبخار",
    location: "Abeokuta, Ogun",
    descriptionEN: "Professional industrial steam washing, deep anti-bacterial sanitation, and edging repairs for 350 sq meters of prayer carpet.",
    descriptionAR: "غسيل بالبخار الصناعي وتعقيم عميق لـ 350 متراً مربعاً من سجاد الصلاة.",
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
    isFeatured: false,
    titleEN: "Qur'an Storage & Bookshelves",
    titleAR: "توفير المصاحف ورفوف التخزين",
    location: "Yaba, Lagos",
    descriptionEN: "Crafting and mounting of 6 solid mahogany wall-mounted wooden bookshelf units and provision of 100 hardbound Madani Qur'an copies.",
    descriptionAR: "صناعة 6 رفوف خشبية وتوفير 100 مصحف بطبعة المدينة.",
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
    isFeatured: false,
    titleEN: "Public Wudhu Area Plumbing",
    titleAR: "سباكة منطقة الوضوء العامة",
    location: "Agege, Lagos",
    descriptionEN: "Replacing 16 damaged brass faucets, fixing supply leakage, and laying anti-slip floor tiles in the public wudhu area.",
    descriptionAR: "استبدال 16 صنبور نحاسي وإصلاح التسريبات وتركيب أرضيات مانعة للانزلاق.",
    goalNGN: 310000,
    raisedNGN: 139500,
    spentNGN: 0,
    imageBefore: "images/proj-002-before.jpg",
    expenses: []
  },
  {
    id: "MP-KAD-2026-007",
    mosqueId: "MSQ-007",
    categoryId: "repairs",
    status: "IN_PROGRESS",
    isFeatured: false,
    titleEN: "Roof Leak & Waterproofing",
    titleAR: "إصلاح تسرب السطح والعزل المائي",
    location: "Tudun Wada, Kaduna",
    descriptionEN: "Emergency roof sealing with bitumen waterproofing membrane and replacing damaged aluminium roofing sheets over main prayer hall.",
    descriptionAR: "عزل مائي ومعالجة تسربات مياه الأمطار في السقف لقاعة الصلاة الرئيسية.",
    goalNGN: 480000,
    raisedNGN: 480000,
    spentNGN: 0,
    imageBefore: "images/proj-003-before.jpg",
    expenses: []
  },
  {
    id: "MP-OYO-2026-008",
    mosqueId: "MSQ-008",
    categoryId: "sound",
    status: "VERIFIED",
    isFeatured: false,
    titleEN: "Acoustic Audio Mixer Upgrade",
    titleAR: "ترقية جهاز مزج الصوت الصوتي",
    location: "Bodija, Ibadan",
    descriptionEN: "Procurement of a 12-channel digital audio mixer console and dual wireless UHF mics for clear audio distribution.",
    descriptionAR: "توفير وحدة تحكم صوتية رقمية بـ 12 قناة وميكروفونات لاسلكية.",
    goalNGN: 540000,
    raisedNGN: 540000,
    spentNGN: 0,
    imageBefore: "images/proj-001-before.jpg",
    expenses: []
  },
  {
    id: "MP-KAN-2026-009",
    mosqueId: "MSQ-009",
    categoryId: "security",
    status: "FUNDING",
    isFeatured: false,
    titleEN: "Perimeter Security Lighting & CCTV",
    titleAR: "إنارة الأمن المحيط وكاميرات المراقبة",
    location: "Fagge, Kano",
    descriptionEN: "Installation of 8 high-output solar floodlights around mosque perimeter and a 4-channel security camera monitoring system.",
    descriptionAR: "تركيب 8 كشافات طاقة شمسية ونظام كاميرات مراقبة لحماية المسجد.",
    goalNGN: 640000,
    raisedNGN: 320000,
    spentNGN: 0,
    imageBefore: "images/proj-002-before.jpg",
    expenses: []
  }
];

// Local Storage & Cross-Tab Synchronization Engine
function loadLocal(key, defaultVal) {
  if (typeof localStorage === 'undefined') return defaultVal;
  try {
    const val = localStorage.getItem('masajid_' + key);
    if (!val) return defaultVal;
    const parsed = JSON.parse(val);
    if (Array.isArray(defaultVal) && Array.isArray(parsed)) {
      if (parsed.length < defaultVal.length) {
        return defaultVal;
      }
    }
    return parsed;
  } catch (e) {
    return defaultVal;
  }
}

function saveLocal(key, data) {
  if (typeof localStorage === 'undefined') return;
  try {
    localStorage.setItem('masajid_' + key, JSON.stringify(data));
    // Broadcast change across tabs
    if (typeof BroadcastChannel !== 'undefined' && g.MP && g.MP.channel) {
      g.MP.channel.postMessage({ type: 'update', key: key, data: data });
    }
    if (g.MP && typeof g.MP.onDataChange === 'function') {
      g.MP.onDataChange(key, data);
    }
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
    { id: "MSQ-001", nameEN: "Al-Ihsan Mosque", nameAR: "مسجد الإحسان", city: "Mushin", state: "Lagos" },
    { id: "MSQ-002", nameEN: "Surulere Central Mosque", nameAR: "مسجد سوروليري المركزي", city: "Surulere", state: "Lagos" },
    { id: "MSQ-003", nameEN: "An-Nur Mosque", nameAR: "مسجد النور", city: "Ikeja", state: "Lagos" },
    { id: "MSQ-004", nameEN: "Masjid Taqwa", nameAR: "مسجد التقوى", city: "Abeokuta", state: "Ogun" },
    { id: "MSQ-005", nameEN: "Masjid Rahmah", nameAR: "مسجد الرحمة", city: "Yaba", state: "Lagos" },
    { id: "MSQ-006", nameEN: "Agege Central Mosque", nameAR: "مسجد أغيغي المركزي", city: "Agege", state: "Lagos" },
    { id: "MSQ-007", nameEN: "Tudun Wada Central Mosque", nameAR: "مسجد تودون وادا", city: "Tudun Wada", state: "Kaduna" },
    { id: "MSQ-008", nameEN: "Baitul Hikmah Mosque", nameAR: "مسجد بيت الحكمة", city: "Bodija", state: "Oyo" },
    { id: "MSQ-009", nameEN: "Fagge Juma'at Mosque", nameAR: "مسجد فاقي جامع", city: "Fagge", state: "Kano" }
  ],

  donations: [
    { ref: "MP-DON-901", projectId: "MP-LAG-2026-002", amountNGN: 50000, date: "2026-08-13", donorName: "Anonymous", status: "Received" },
    { ref: "MP-DON-902", projectId: "MP-LAG-2026-002", amountNGN: 100000, date: "2026-08-12", donorName: "Hajia Fatima B.", status: "Received" },
    { ref: "MP-DON-903", projectId: "MP-LAG-2026-003", amountNGN: 25000, date: "2026-08-11", donorName: "Brother Yusuf A.", status: "Received" },
    { ref: "MP-DON-904", projectId: "MP-OG-2026-004", amountNGN: 75000, date: "2026-08-10", donorName: "Community Contributor", status: "Received" }
  ],

  // Real-time broadcast channel
  channel: typeof BroadcastChannel !== 'undefined' ? new BroadcastChannel('masajid_channel') : null,
  onDataChange: null,

  // Projects Methods
  get projects() {
    return this.getProjects();
  },
  set projects(val) {
    saveLocal('projects', val);
  },

  getProjects: function() {
    return loadLocal('projects', initialProjects);
  },

  getProject: function(id) {
    return this.getProjects().find(p => p.id === id);
  },

  saveProject: function(proj) {
    const list = this.getProjects();
    const idx = list.findIndex(p => p.id === proj.id);
    if (idx >= 0) {
      list[idx] = proj;
    } else {
      list.unshift(proj);
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

  getCategory: function(catId) {
    return this.categories.find(c => c.id === catId || c.labelEN.toLowerCase().includes((catId||'').toLowerCase()));
  },

  getProgressPercent: function(proj) {
    if (!proj.goalNGN || proj.goalNGN <= 0) return 0;
    return Math.min(100, Math.round(((proj.raisedNGN || 0) / proj.goalNGN) * 100));
  },

  getLocation: function(proj) {
    const msq = this.mosques.find(m => m.id === proj.mosqueId);
    return msq ? `${msq.city}, ${msq.state}` : (proj.location || 'Lagos, Nigeria');
  },

  // Nominations Methods
  getNominations: function() {
    return loadLocal('nominations', defaultNominations);
  },

  saveNomination: function(nom) {
    const list = this.getNominations();
    nom.id = nom.id || 'NOM-' + new Date().getFullYear() + '-' + String(Date.now()).slice(-4);
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

      // If approved, automatically convert to an active project
      if (status === 'Approved') {
        const catMap = {
          'Lighting & Electrical': 'lighting',
          'Solar & Power Backup': 'solar',
          'Cleaning & Sanitation': 'cleaning',
          "Qur'ans & Books": 'quran',
          'Furniture & Facilities': 'furniture',
          'Sound System': 'sound',
          'Security & Safety': 'security',
          'Minor Repairs': 'repairs'
        };
        const catName = (item.needTypes && item.needTypes[0]) || 'solar';
        const catId = catMap[catName] || 'solar';
        const newProjId = 'MP-NOM-' + String(Date.now()).slice(-4);

        const newProj = {
          id: newProjId,
          mosqueId: "MSQ-001",
          categoryId: catId,
          status: "FUNDING",
          isFeatured: false,
          titleEN: item.masjidName + " — " + (item.needTypes ? item.needTypes.join(', ') : 'Improvement Need'),
          titleAR: item.masjidNameAR || "",
          location: `${item.city || 'Lagos'}, ${item.state || 'State'}`,
          descriptionEN: item.description || "Essential mosque improvement project nominated by community.",
          descriptionAR: "",
          goalNGN: 500000,
          raisedNGN: 0,
          spentNGN: 0,
          imageBefore: "images/proj-002-before.jpg",
          expenses: []
        };
        this.saveProject(newProj);
      }
    }
    return list;
  },

  // Articles Methods
  getArticles: function() {
    return loadLocal('articles', defaultArticles);
  },

  getArticleBySlug: function(slug) {
    if (!slug) return defaultArticles[0];
    const list = this.getArticles();
    const clean = String(slug).toLowerCase().trim().replace(/^\/+|\/+$/g, '');
    
    // Direct match by slug
    let found = list.find(a => a.slug && a.slug.toLowerCase() === clean);
    if (found) return found;

    // Match by ID
    found = list.find(a => String(a.id) === clean);
    if (found) return found;

    // Match by slug generated from title
    found = list.find(a => a.title && a.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') === clean);
    if (found) return found;

    return defaultArticles[0];
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
      art.readTime = art.readTime || '4 min read';
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
  },

  // Currency Formatter
  formatCurrency: function(amountNGN, currency = 'NGN') {
    const rates = { NGN: 1, GBP: 0.0005, USD: 0.00067 };
    const symbols = { NGN: '₦', GBP: '£', USD: '$' };
    const rate = rates[currency] || 1;
    const symbol = symbols[currency] || '₦';
    const converted = Math.round(amountNGN * rate);
    return `${symbol}${converted.toLocaleString()}`;
  }
};

// Global cross-tab listener
if (typeof window !== 'undefined') {
  if (g.MP.channel) {
    g.MP.channel.onmessage = function(e) {
      if (e.data && e.data.key && typeof g.MP.onDataChange === 'function') {
        g.MP.onDataChange(e.data.key, e.data.data);
      }
    };
  }
  window.addEventListener('storage', function(e) {
    if (e.key && e.key.startsWith('masajid_') && typeof g.MP.onDataChange === 'function') {
      const keyName = e.key.replace('masajid_', '');
      try {
        const val = JSON.parse(e.newValue);
        g.MP.onDataChange(keyName, val);
      } catch(err){}
    }
  });
}
