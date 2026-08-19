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

const defaultNominations = [];

const defaultVendors = [
  {
    id: "VND-001",
    name: "Ariish Furniture",
    trade: "Solid Wood Carpentry & Qur'an Placeholders (Rehal)",
    phone: "+234 803 456 7890",
    email: "ariish.furniture@gmail.com",
    city: "Itori, Ogun State",
    rating: "5.0",
    invoicesLogged: ["AR-INV-2026-01", "AR-INV-2026-02", "AR-INV-2026-03", "AR-INV-2026-04"],
    status: "Verified Supplier"
  },
  {
    id: "VND-002",
    name: "Munar Bookstore",
    trade: "Holy Qur'an Copies & Islamic Textbooks",
    phone: "+234 802 345 6789",
    email: "munarbookstore@gmail.com",
    city: "Abeokuta, Ogun State",
    rating: "4.9",
    invoicesLogged: ["MB-QT-2026-08", "MB-QT-2026-09"],
    status: "Verified Supplier"
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
    id: "MP-OG-2026-001",
    mosqueId: "MSQ-001",
    categoryId: "quran",
    status: "IN_PROGRESS",
    isFeatured: true,
    titleEN: "Bookshelf, Reading Placeholders and Quran",
    titleAR: "رف الكتب وحوامل المصاحف والمصاحف الشريفة",
    location: "Adumbu, Itori, Ewekoro, Ogun State",
    mosqueName: "Medinat Dhikr Central Mosque",
    descriptionEN: "Provision of a solid wooden book shelf, 3 pieces of reading placeholders (Rehal), and 10 copies of the Holy Qur'an for worshippers and madrasah students.",
    descriptionAR: "توفير رف كتب خشبي متين، و3 حوامل خشبية لقراءة المصاحف، و10 نسخ من القرآن الكريم للمصلين وطلاب العلم.",
    goalNGN: 164000,
    raisedNGN: 64000,
    spentNGN: 64000,
    verifiedBy: "Masajid Field Operations Team",
    imageBefore: "images/proj-004-before.jpg",
    imageAfter: "images/mosque-hero.jpg",
    expenses: [
      { id: "EXP-001", date: "2026-08-16", desc: "Solid Wooden Book Shelf", vendor: "Ariish Furniture", invoiceNo: "AR-INV-2026-01", receiptNo: "AR-REC-2026-01", amountNGN: 40000, receiptVerified: true, status: "Paid & Receipt Verified" },
      { id: "EXP-002", date: "2026-08-17", desc: "3x Qur'an Reading Placeholders (@ ₦8,000 each)", vendor: "Ariish Furniture", invoiceNo: "AR-INV-2026-02", receiptNo: "AR-REC-2026-02", amountNGN: 24000, receiptVerified: true, status: "Paid & Receipt Verified" }
    ],
    vendorQuotes: [
      { id: "VQ-001", vendor: "Ariish Furniture", item: "Solid Wooden Book Shelf & 3x Placeholders", invoiceNo: "AR-INV-2026-01/02", receiptNo: "AR-REC-2026-01/02", amountNGN: 64000, status: "Paid & Receipt Verified" },
      { id: "VQ-002", vendor: "Munar Bookstore", item: "10x Copies of the Holy Qur'an (@ ₦10,000 each)", invoiceNo: "MB-QT-2026-08", receiptNo: null, amountNGN: 100000, status: "Invoice Received (Unpaid — No Receipt Yet)" }
    ],
    scope: [
      { item: "Solid Wooden Book Shelf (Ariish Furniture)", costNGN: 40000, status: "Paid & Receipt Verified (AR-REC-2026-01)", invoice: "AR-INV-2026-01" },
      { item: "3x Qur'an Placeholders for Reading (Ariish Furniture)", costNGN: 24000, status: "Paid & Receipt Verified (AR-REC-2026-02)", invoice: "AR-INV-2026-02" },
      { item: "10x Copies of Holy Qur'an (Munar Bookstore)", costNGN: 100000, status: "Invoice Received / Unpaid (MB-QT-2026-08)", invoice: "MB-QT-2026-08" }
    ]
  },
  {
    id: "MP-OG-2026-002",
    mosqueId: "MSQ-002",
    categoryId: "quran",
    status: "IN_PROGRESS",
    isFeatured: true,
    titleEN: "Bookshelf, Reading Placeholders and Quran",
    titleAR: "رف الكتب وحوامل المصاحف والمصاحف الشريفة",
    location: "Behind Al-Fathia School, Itori, Ewekoro, Ogun State",
    mosqueName: "Masjid Markaz Diyar",
    descriptionEN: "Provision of a solid wooden book shelf, 3 pieces of reading placeholders (Rehal), and 10 copies of the Holy Qur'an for daily recitation and learning sessions.",
    descriptionAR: "توفير رف كتب خشبي متين، و3 حوامل خشبية لقراءة المصاحف، و10 نسخ من القرآن الكريم للتلاوة اليومية وحلقات تحفيظ القرآن.",
    goalNGN: 164000,
    raisedNGN: 64000,
    spentNGN: 64000,
    verifiedBy: "Masajid Field Operations Team",
    imageBefore: "images/proj-005-before.jpg",
    imageAfter: "images/mosque-hero.jpg",
    expenses: [
      { id: "EXP-003", date: "2026-08-16", desc: "Solid Wooden Book Shelf", vendor: "Ariish Furniture", invoiceNo: "AR-INV-2026-03", receiptNo: "AR-REC-2026-03", amountNGN: 40000, receiptVerified: true, status: "Paid & Receipt Verified" },
      { id: "EXP-004", date: "2026-08-17", desc: "3x Qur'an Reading Placeholders (@ ₦8,000 each)", vendor: "Ariish Furniture", invoiceNo: "AR-INV-2026-04", receiptNo: "AR-REC-2026-04", amountNGN: 24000, receiptVerified: true, status: "Paid & Receipt Verified" }
    ],
    vendorQuotes: [
      { id: "VQ-003", vendor: "Ariish Furniture", item: "Solid Wooden Book Shelf & 3x Placeholders", invoiceNo: "AR-INV-2026-03/04", receiptNo: "AR-REC-2026-03/04", amountNGN: 64000, status: "Paid & Receipt Verified" },
      { id: "VQ-004", vendor: "Munar Bookstore", item: "10x Copies of the Holy Qur'an (@ ₦10,000 each)", invoiceNo: "MB-QT-2026-09", receiptNo: null, amountNGN: 100000, status: "Invoice Received (Unpaid — No Receipt Yet)" }
    ],
    scope: [
      { item: "Solid Wooden Book Shelf (Ariish Furniture)", costNGN: 40000, status: "Paid & Receipt Verified (AR-REC-2026-03)", invoice: "AR-INV-2026-03" },
      { item: "3x Qur'an Placeholders for Reading (Ariish Furniture)", costNGN: 24000, status: "Paid & Receipt Verified (AR-REC-2026-04)", invoice: "AR-INV-2026-04" },
      { item: "10x Copies of Holy Qur'an (Munar Bookstore)", costNGN: 100000, status: "Invoice Received / Unpaid (MB-QT-2026-09)", invoice: "MB-QT-2026-09" }
    ]
  }
];

// Local Storage & Cross-Tab Synchronization Engine
function loadLocal(key, defaultVal) {
  if (typeof localStorage === 'undefined') return defaultVal;
  try {
    const val = localStorage.getItem('masajid_' + key);
    if (!val) return defaultVal;
    const parsed = JSON.parse(val);
    if (key === 'projects') {
      if (Array.isArray(parsed) && (parsed.length !== defaultVal.length || parsed.some(p => p.goalNGN !== 164000 || p.titleEN !== "Bookshelf, Reading Placeholders and Quran" || (p.descriptionEN && p.descriptionEN.includes('paid')) || (p.id && p.id.startsWith('MP-LAG-'))))) {
        localStorage.setItem('masajid_projects', JSON.stringify(defaultVal));
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
    // Broadcast change across tabs via BroadcastChannel
    if (typeof BroadcastChannel !== 'undefined' && g.MP && g.MP.channel) {
      g.MP.channel.postMessage({ type: 'update', key: key, data: data });
    }
    // Post to cross-origin sync hub iframe if present
    const iframe = document.getElementById('masajid-sync-hub-iframe');
    if (iframe && iframe.contentWindow) {
      try {
        iframe.contentWindow.postMessage({ type: 'MASAJID_WRITE_SYNC', key: key, data: data }, '*');
      } catch(e) {}
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
    projectsCompleted: 0,
    totalRaisedNGN: 128000,
    totalSpentNGN: 128000,
    masajidSupported: 2,
    activeProjects: 2,
    totalDonors: 1
  },

  categories: [
    { id: "quran",     labelEN: "Qur'ans & Books",        labelAR: "المصاحف والكتب",       iconClass: "fa-solid fa-book-quran", color: "#0284C7" },
    { id: "furniture", labelEN: "Furniture & Facilities", labelAR: "الأثاث والمرافق",     iconClass: "fa-solid fa-chair", color: "#7C3AED" },
    { id: "lighting",  labelEN: "Lighting & Electrical", labelAR: "الإضاءة والكهرباء",  iconClass: "fa-solid fa-lightbulb", color: "#13547A" },
    { id: "solar",     labelEN: "Solar & Power",          labelAR: "الطاقة الشمسية",       iconClass: "fa-solid fa-solar-panel", color: "#D4AF37" },
    { id: "cleaning",  labelEN: "Cleaning & Maintenance", labelAR: "النظافة والصيانة",    iconClass: "fa-solid fa-broom", color: "#059669" },
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
    { id: "MSQ-001", nameEN: "Medinat Dhikr Central Mosque", nameAR: "مسجد مدينة الذكر المركزي", city: "Adumbu, Itori, Ewekoro", state: "Ogun State" },
    { id: "MSQ-002", nameEN: "Masjid Markaz Diyar", nameAR: "مسجد مركز الديار", city: "Behind Al-Fathia School, Itori, Ewekoro", state: "Ogun State" }
  ],

  donations: [
    { ref: "MP-DON-101", projectId: "MP-OG-2026-001", amountNGN: 40000, date: "2026-08-16", donorName: "Anonymous", purpose: "Solid Wooden Book Shelf Funding", status: "Received" },
    { ref: "MP-DON-102", projectId: "MP-OG-2026-001", amountNGN: 24000, date: "2026-08-17", donorName: "Anonymous", purpose: "3x Qur'an Reading Placeholders Funding", status: "Received" },
    { ref: "MP-DON-103", projectId: "MP-OG-2026-002", amountNGN: 40000, date: "2026-08-16", donorName: "Anonymous", purpose: "Solid Wooden Book Shelf Funding", status: "Received" },
    { ref: "MP-DON-104", projectId: "MP-OG-2026-002", amountNGN: 24000, date: "2026-08-17", donorName: "Anonymous", purpose: "3x Qur'an Reading Placeholders Funding", status: "Received" }
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

  // ── Security Firewall & Anti-Spam / Anti-Scam Guard ──
  securityFirewall: {
    spamKeywords: [
      'crypto', 'bitcoin', 'btc', 'eth', 'binance', 'forex', 'invest and earn',
      'guaranteed return', 'double your money', 'telegram channel', 't.me/', 'whatsapp +',
      'chat me on whatsapp', 'passive income', 'cashapp', 'paypal transfer', 'buy cheap',
      'viagra', 'cialis', 'casino', 'slot online', 'betting', 'loan offer', 'urgent loan',
      'escort', 'seo service', 'guest post', 'backlinks', 'traffic generator', 'free gift',
      'claim bonus', 'make money fast', 'pills', 'darkweb', 'hack', 'click here to win'
    ],
    suspiciousDomains: ['.xyz', '.top', '.click', '.ru', '.biz', '.cc', 'bit.ly', 'tinyurl.com', 'cutt.ly', 'is.gd', 't.co'],
    lastSubmissionTime: 0,

    inspect: function(data) {
      const textToScan = `${data.comment || ''} ${data.author || ''} ${data.email || ''}`.toLowerCase();
      
      // 1. Rate Limiting / Anti-Flood (Cooldown of 4s)
      const now = Date.now();
      if (now - this.lastSubmissionTime < 4000) {
        return { allowed: false, reason: "Flood Protection: Please wait a few seconds before submitting again." };
      }
      this.lastSubmissionTime = now;

      // 2. Keyword Filtering (Scam, Pitching, Gambling)
      for (const word of this.spamKeywords) {
        if (textToScan.includes(word)) {
          return { allowed: false, reason: `Security Firewall Alert: Prohibited spam or promotional keyword detected ("${word}").` };
        }
      }

      // 3. Suspicious / Shortened Scam Domains
      for (const domain of this.suspiciousDomains) {
        if (textToScan.includes(domain)) {
          return { allowed: false, reason: "Security Firewall Alert: Unverified URL or link shortener detected." };
        }
      }

      // 4. XSS Sanitization & Stripping of Executable Tags
      const cleanAuthor = String(data.author || '').replace(/<[^>]*>?/gm, '').trim();
      const cleanEmail = String(data.email || '').replace(/<[^>]*>?/gm, '').trim();
      const cleanComment = String(data.comment || '').replace(/<[^>]*>?/gm, '').trim();

      if (!cleanAuthor || !cleanComment) {
        return { allowed: false, reason: "Validation Error: Name and comment content cannot be empty." };
      }

      return {
        allowed: true,
        sanitized: {
          author: cleanAuthor,
          email: cleanEmail,
          comment: cleanComment
        }
      };
    }
  },

  // Comments Methods (Protected by Security Firewall)
  getComments: function(slug) {
    const all = loadLocal('comments', defaultComments);
    return slug ? all.filter(c => c.articleSlug === slug) : all;
  },

  saveComment: function(com) {
    const inspection = this.securityFirewall.inspect(com);
    if (!inspection.allowed) {
      return { success: false, error: inspection.reason };
    }

    const list = loadLocal('comments', defaultComments);
    const newCom = {
      id: com.id || 'COM-' + Date.now(),
      articleSlug: com.articleSlug,
      author: inspection.sanitized.author,
      email: inspection.sanitized.email,
      comment: inspection.sanitized.comment,
      date: com.date || new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      status: 'pending' // Mandatory moderation quarantine
    };

    list.unshift(newCom);
    saveLocal('comments', list);
    return { success: true, comment: newCom };
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

  deleteComment: function(id) {
    const list = loadLocal('comments', defaultComments).filter(c => c.id !== id);
    saveLocal('comments', list);
    return list;
  },

  // Vendors Methods
  getVendors: function() {
    return loadLocal('vendors', defaultVendors);
  },

  saveVendor: function(v) {
    const list = this.getVendors();
    v.id = v.id || 'VND-' + String(Date.now()).slice(-4);
    v.rating = v.rating || '5.0';
    v.status = v.status || 'Verified Supplier';
    v.invoicesLogged = v.invoicesLogged || [];
    const idx = list.findIndex(item => item.id === v.id);
    if (idx >= 0) {
      list[idx] = { ...list[idx], ...v };
    } else {
      list.unshift(v);
    }
    saveLocal('vendors', list);
    return v;
  },

  deleteVendor: function(id) {
    const list = this.getVendors().filter(v => v.id !== id);
    saveLocal('vendors', list);
    return list;
  },

  // Inflows & Donations Methods (Automated Submission & Admin Verification Workflow)
  getDonations: function(includePending = false) {
    const list = loadLocal('donations', this.donations);
    if (includePending) return list;
    return list.filter(d => d.status === 'CONFIRMED' || d.status === 'Received' || !d.status);
  },

  getPendingDonations: function() {
    const list = loadLocal('donations', this.donations);
    return list.filter(d => d.status === 'PENDING');
  },

  // Called from donate.html when donor completes submission
  submitDonation: function(d) {
    const list = loadLocal('donations', this.donations);
    d.ref = d.ref || 'MP-DON-' + String(Math.floor(1000 + Math.random() * 9000));
    d.date = d.date || new Date().toISOString().split('T')[0];
    d.donorName = (d.donorName && d.donorName.trim()) ? d.donorName.trim() : 'Anonymous';
    d.amountNGN = Number(d.amountNGN) || 0;
    d.status = 'PENDING'; // Awaiting admin bank alert confirmation
    d.channel = d.channel || 'Direct Bank Transfer';
    d.purpose = d.purpose || 'Direct Mosque Intervention Funding';
    
    list.unshift(d);
    saveLocal('donations', list);
    return d;
  },

  // Called by admin on dashboard when payment alert is received and acknowledged
  confirmDonation: function(ref) {
    const list = loadLocal('donations', this.donations);
    const d = list.find(item => item.ref === ref);
    if (d) {
      d.status = 'CONFIRMED';
      saveLocal('donations', list);

      // Increment project raisedNGN only after confirmation
      if (d.projectId) {
        const projList = this.getProjects();
        const proj = projList.find(p => p.id === d.projectId);
        if (proj) {
          proj.raisedNGN = (Number(proj.raisedNGN) || 0) + Number(d.amountNGN);
          this.saveProject(proj);
        }
      }
      this.stats.totalRaisedNGN = (Number(this.stats.totalRaisedNGN) || 0) + Number(d.amountNGN);
    }
    return d;
  },

  // Called by admin when payment alert was not received
  declineDonation: function(ref) {
    let list = loadLocal('donations', this.donations);
    list = list.filter(item => item.ref !== ref);
    saveLocal('donations', list);
    return list;
  },

  // Direct manual logging by admin (already confirmed)
  saveDonation: function(d) {
    const list = loadLocal('donations', this.donations);
    d.ref = d.ref || 'MP-DON-' + String(Date.now()).slice(-4);
    d.date = d.date || new Date().toISOString().split('T')[0];
    d.donorName = (d.donorName && d.donorName.trim()) ? d.donorName.trim() : 'Anonymous';
    d.amountNGN = Number(d.amountNGN) || 0;
    d.status = 'CONFIRMED';
    list.unshift(d);
    saveLocal('donations', list);

    // Update project raisedNGN
    if (d.projectId) {
      const projList = this.getProjects();
      const proj = projList.find(p => p.id === d.projectId);
      if (proj) {
        proj.raisedNGN = (Number(proj.raisedNGN) || 0) + d.amountNGN;
        this.saveProject(proj);
      }
    }
    return d;
  },

  // Expense Methods
  saveExpense: function(exp, projectId) {
    const projList = this.getProjects();
    const proj = projList.find(p => p.id === projectId);
    if (proj) {
      proj.expenses = proj.expenses || [];
      exp.id = exp.id || 'EXP-' + String(Date.now()).slice(-4);
      exp.date = exp.date || new Date().toISOString().split('T')[0];
      exp.amountNGN = Number(exp.amountNGN) || 0;
      proj.expenses.unshift(exp);
      if (exp.receiptVerified || exp.status === 'Paid & Receipt Verified') {
        proj.spentNGN = (Number(proj.spentNGN) || 0) + exp.amountNGN;
      }
      this.saveProject(proj);
    }
    return exp;
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

// Cross-Domain & Cross-Tab Real-Time Sync Engine
if (typeof window !== 'undefined') {
  // 1. BroadcastChannel Listener
  if (g.MP.channel) {
    g.MP.channel.onmessage = function(e) {
      if (e.data && e.data.key && typeof g.MP.onDataChange === 'function') {
        g.MP.onDataChange(e.data.key, e.data.data);
      }
    };
  }

  // 2. Storage Event Listener
  window.addEventListener('storage', function(e) {
    if (e.key && e.key.startsWith('masajid_') && typeof g.MP.onDataChange === 'function') {
      const keyName = e.key.replace('masajid_', '');
      try {
        const val = JSON.parse(e.newValue);
        g.MP.onDataChange(keyName, val);
      } catch(err){}
    }
  });

  // 3. Cross-Subdomain Sync Hub Tunnel (Between masajidproject.org & dashboard.masajidproject.org)
  function initCrossDomainSyncHub() {
    if (document.getElementById('masajid-sync-hub-iframe')) return;
    try {
      const isDashboard = window.location.hostname.includes('dashboard') || window.location.pathname.includes('dashboard');
      const hubUrl = isDashboard ? 'https://masajidproject.org/sync-hub.html' : 'sync-hub.html';
      
      const iframe = document.createElement('iframe');
      iframe.id = 'masajid-sync-hub-iframe';
      iframe.src = hubUrl;
      iframe.style.display = 'none';
      iframe.style.width = '0px';
      iframe.style.height = '0px';
      iframe.style.border = 'none';
      document.body.appendChild(iframe);

      iframe.onload = function() {
        try {
          iframe.contentWindow.postMessage({ type: 'MASAJID_REQUEST_SYNC' }, '*');
        } catch(e) {}
      };
    } catch(e) {}
  }

  window.addEventListener('message', function(e) {
    if (e.data && e.data.type === 'MASAJID_SYNC_FULL_STATE' && e.data.state) {
      const state = e.data.state;
      Object.keys(state).forEach(k => {
        if (state[k] !== undefined) {
          const currentLocal = loadLocal(k, null);
          if (Array.isArray(state[k])) {
            if (!currentLocal || state[k].length >= currentLocal.length) {
              localStorage.setItem('masajid_' + k, JSON.stringify(state[k]));
              if (g.MP && typeof g.MP.onDataChange === 'function') {
                g.MP.onDataChange(k, state[k]);
              }
            }
          }
        }
      });
    } else if (e.data && e.data.type === 'MASAJID_SYNC_KEY' && e.data.key) {
      const k = e.data.key;
      const val = e.data.data;
      if (val !== undefined) {
        localStorage.setItem('masajid_' + k, JSON.stringify(val));
        if (g.MP && typeof g.MP.onDataChange === 'function') {
          g.MP.onDataChange(k, val);
        }
      }
    }
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCrossDomainSyncHub);
  } else {
    initCrossDomainSyncHub();
  }
}
