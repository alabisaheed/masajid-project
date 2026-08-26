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
      <p class="article-lead">Transparency in charitable work is not merely a slogan or an aesthetic choice. It is a profound spiritual obligation that requires rigorous, verifiable engineering standards. When donors entrust their hard-earned wealth to improve a house of Allah, they deserve absolute certainty that every single naira or pound translates directly into high-quality, durable materials on the ground.</p>
      
      <p>Across many grassroots communities, well-intentioned mosque enhancement projects often face challenges. Inexperienced handling can lead to inflated contractor estimates, substandard electrical wiring, or cheap sound amplifiers that fail within months of installation. At Masajid Project, our mandate is to eliminate these inefficiencies by applying professional technical project management principles to every single intervention, no matter how small.</p>

      <h3>The Three-Stage Technical Audit Standard</h3>
      
      <p>Before any mosque need is published for public funding on our platform, our engineering and assessment team executes a strict three-phase verification protocol.</p>

      <p>First is the Preliminary Site Assessment. Our field engineers visit the mosque in person to evaluate the structural and electrical environment. High-resolution before-intervention photographs are captured, local electrical loads are measured, and the Imam and mosque executive committee are interviewed to verify the true scope of the need. We document everything from ambient room acoustics to existing power stability.</p>

      <p>Second is Competitive Procurement and Bill of Quantities verification. Rather than accepting single unverified quotes, our procurement unit solicits competitive quotations from vetted local technical artisans and suppliers. We compare the market cost of materials, verify vendor credibility, and establish fixed-price milestone agreements. This ensures that donor funds are never subjected to arbitrary contractor markups.</p>

      <p>Third is Post-Execution Testing and Commissioning. When a contractor finishes their installation, payment is withheld until our audit inspectors conduct on-site commissioning tests. For sound installations, we measure acoustic distribution across prayer rows to eliminate feedback loops. For solar installations, we test battery discharge rates under full load. Only when the work passes technical criteria do we sign off the final disbursement.</p>

      <div class="article-quote-box">
        O you who believe! Fulfill your obligations and honor your trusts. — Surah Al-Ma'idah (5:1)
      </div>

      <h3>Open Ledger Reconciliation and Public Accountability</h3>

      <p>Technical verification is only half the journey. The other vital half is complete financial reconciliation. Every vendor quote, purchase invoice, receipt voucher, and bank confirmation code is published directly to our public Transparency Dashboard. Any supporter, community member, or independent auditor can inspect our ledgers line by line.</p>

      <p>By pairing engineering rigor with open financial reporting, we safeguard the sanctity of Sadaqah Jariyah. When donors give through Masajid Project, they can rest assured that their contributions build enduring value that serves worshippers for years to come.</p>
    `,
    readTime: "6 min read"
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
      <p class="article-lead">In many rural and semi-urban communities, electrical power outages are not an occasional inconvenience; they are a constant daily reality. For local mosques, the absence of reliable electricity deeply affects the entire spiritual and educational rhythm of the community.</p>

      <p>When the grid fails during evening prayers or early dawn Fajr, worshippers are left in pitch darkness. Imams struggle to lead congregational prayers without sound amplification, and the call to prayer cannot reach surrounding homes. Furthermore, the recurring cost of running petrol generators places an immense financial burden on struggling mosque committees, draining funds that could otherwise support local families or facility maintenance.</p>

      <h3>Restoring Light, Dignity, and Regular Worship</h3>

      <p>Installing dedicated solar photovoltaic systems and pure sine wave inverters brings immediate, transformative change to off-grid mosques. A modest, properly engineered solar installation provides twenty-four hour autonomous power for all core needs: energy-efficient LED prayer hall lighting, minaret floodlights, outdoor security illumination, and audio public address systems.</p>

      <p>With clean solar power, the Adhan resounds reliably five times every day across the village, calling believers together regardless of the municipal power status. During nighttime Isha prayers, worshippers gather in comfort and safety. Wudhu ablution areas remain brightly lit and hygienic, preventing dangerous slips or falls in the dark.</p>

      <div class="article-quote-box">
        The mosques of Allah shall be visited and maintained by those who believe in Allah and the Last Day. — Surah At-Tawbah (9:18)
      </div>

      <h3>Empowering Evening Madrasah and Qur'anic Learning</h3>

      <p>Perhaps the most inspiring outcome of mosque electrification is the revival of evening education. In many communities, children work with their families during the daytime and can only attend Qur'an memorization classes after sunset. Before solar installation, these young students read by dangerous candlelight or dim battery lanterns.</p>

      <p>With dependable solar lighting, evening classes flourish. Dozens of children sit comfortably in well-lit classrooms, reciting from the Holy Book with ease. The mosque transforms from a building used only during daylight into a vibrant, round-the-clock center of learning, worship, and community cohesion.</p>

      <h3>Long-Term Financial Sustainability</h3>

      <p>Beyond spiritual and educational benefits, solar power delivers immediate financial relief. By eliminating monthly generator fuel and maintenance expenses, mosques save tens of thousands of naira each month. These savings allow local committees to invest in clean water filtration, building repairs, and charity distributions for widows and orphans. Solar energy represents a true Sadaqah Jariyah that continues to give back every single day.</p>
    `,
    readTime: "7 min read"
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
    excerpt: "Exploring the Hadith of ongoing charity and why providing essential items like lighting, clean water, and sound systems continues benefiting the donor.",
    content: `
      <p class="article-lead">Human beings naturally desire to leave behind a meaningful legacy that outlives their earthly existence. In the Islamic tradition, Allah in His infinite mercy has gifted us the concept of Sadaqah Jariyah, an ongoing continuous charity whose spiritual rewards flow to the donor long after their soul has departed this world.</p>

      <p>The Messenger of Allah, peace and blessings be upon him, taught us in an authentic narration recorded by Imam Muslim that when a person passes away, all their deeds come to an end except for three: an ongoing charity, beneficial knowledge that people benefit from, or a righteous child who prays for them. This profound principle teaches us to look beyond temporary giving and invest in enduring acts of goodness.</p>

      <h3>The Multiplication of Small Practical Deeds</h3>

      <p>Many believers mistakenly assume that meaningful Sadaqah Jariyah requires massive wealth, such as building an entire grand mosque from the foundation up. While constructing a mosque carries immense reward, the beauty of Islamic charity is that even the smallest practical contribution holds perpetual weight in the sight of Allah.</p>

      <p>Consider the placement of a sturdy wooden bookshelf or reading placeholders for the Holy Qur'an. For years to come, young students and elderly worshippers will place the Book of Allah on those stands, reciting verses daily. Every letter read, every page memorized, and every heart softened yields continuous spiritual dividends recorded in your ledger of good deeds.</p>

      <div class="article-quote-box">
        When a human being dies, all their deeds come to an end except for three: ongoing charity, beneficial knowledge, or a righteous child who prays for them. — Sahih Muslim
      </div>

      <h3>Essential Interventions with Everyday Impact</h3>

      <p>The same enduring reward applies to every essential amenity provided to a house of Allah. When you fund a durable audio amplifier, hundreds of worshippers hear the verses of the Qur'an and the Friday sermon clearly through your contribution. When you replace broken lighting with energy-efficient LED fixtures, believers navigate the prayer hall safely in the dawn hours.</p>

      <p>When you repair a faulty ablution tap, thousands of worshippers purify themselves for prayer with clean, running water. These are not merely physical objects; they are conduits of worship. As long as believers utilize these facilities to remember Allah, the reward continually ascends to the donor, bringing peace to their grave and light to their Day of Judgment.</p>

      <h3>Cultivating Sincerity and Accountability</h3>

      <p>To maximize the blessing of ongoing charity, our actions must be guided by sincere intention (Ikhlas) and careful stewardship (Amanah). Supporting transparent, well-documented initiatives ensures that resources are utilized properly without waste. May Allah accept our humble efforts, purify our intentions, and make our contributions a source of continuous light for us and our loved ones.</p>
    `,
    readTime: "6 min read"
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
      <p class="article-lead">Clear sound transmission inside a mosque is not a luxury; it is a fundamental requirement for congregational worship. When worshippers cannot hear the recitation of the Imam or the guidance of the Friday Khutbah, the communal spirit and spiritual focus of the prayer are compromised.</p>

      <p>Masjid Baitul Hikmah, an active community mosque serving over eight hundred daily worshippers, faced persistent audio degradation for over two years. The existing sound system suffered from harsh feedback squeals, uneven volume distribution between the ground floor and the women's gallery, and frequent amplifier overheating during extended Friday gatherings.</p>

      <h3>Diagnostic Field Inspection and Acoustic Mapping</h3>

      <p>Our technical team conducted a thorough acoustic audit of the prayer sanctuary. We identified three major engineering flaws: poorly angled horn speakers causing severe high-frequency reverberation off marble walls, unshielded microphone cabling picking up electromagnetic interference, and an underpowered mixer unable to handle multi-zone distribution.</p>

      <p>Rather than recommending an excessively expensive full overhaul, our engineers designed a targeted, cost-effective acoustic improvement plan. We specified the installation of balanced column line-array speakers that disperse sound horizontally across the congregation while minimizing vertical ceiling reflections.</p>

      <div class="article-quote-box">
        And recite the Qur'an with measured, clear recitation. — Surah Al-Muzzammil (73:4)
      </div>

      <h3>Implementation and Precision Calibration</h3>

      <p>Over a three-day execution window, our certified audio contractors replaced the degraded wiring with heavy-gauge shielded audio lines, installed four calibrated column speakers in the main hall, and added dedicated auxiliary monitor speakers in the overflow courtyard and sisters' wing.</p>

      <p>A multi-channel mixer with integrated feedback suppression was installed in a secure, ventilated enclosure. Each microphone, including the Imam's wireless lapel and the Minbar podium unit, was individually equalized to match the natural vocal frequencies of the mosque leadership.</p>

      <h3>The Community Response</h3>

      <p>The transformation was immediate and profound. During the subsequent Friday congregational prayer, the Khutbah was heard with pristine clarity in every corner of the mosque, from the front row to the exterior courtyard. Elderly worshippers expressed deep gratitude for finally being able to hear every word without straining. This project stands as a testament to how targeted technical expertise can revitalize the daily worship experience of an entire community.</p>
    `,
    readTime: "6 min read"
  },
  {
    id: "5",
    slug: "maintaining-wudhu-sanitation-health-and-dignity",
    title: "Maintaining Wudhu Sanitation: Health and Dignity",
    category: "Sadaqah Jariyah",
    date: "10 Jul 2026",
    author: "Masajid Care Team",
    authorTitle: "Sanitation & Hygiene Function",
    authorAvatar: "MC",
    excerpt: "Proper ablution facilities prevent water wastage and ensure clean, hygienic conditions for community members before prayer.",
    content: `
      <p class="article-lead">In Islamic practice, physical cleanliness is inextricably linked with spiritual readiness. The ritual ablution (Wudhu) is the essential gateway to prayer, purifying the believer before standing in audience with their Creator. Consequently, the condition of a mosque's ablution area reflects the care and respect accorded to the house of Allah.</p>

      <p>Unfortunately, ablution and sanitation facilities are frequently among the most neglected areas in grassroots mosques. Leaking taps, cracked sitting benches, stagnating greywater, and slippery flooring compromise hygiene, waste precious water resources, and pose serious safety hazards, especially for elderly worshippers and young children.</p>

      <h3>Restoring Cleanliness, Safety, and Dignity</h3>

      <p>At Masajid Project, our sanitation intervention unit focuses on restoring cleanliness, water efficiency, and human dignity to community ablution spaces. We prioritize durable plumbing upgrades, including push-button conservation taps that prevent water wastage and eliminate constant dripping.</p>

      <p>We replace slippery concrete surfaces with non-slip, antimicrobial drainage mats that channel water away quickly, preventing the buildup of algae and standing water. Proper drainage gradient re-engineering ensures that wastewater flows smoothly into municipal drainage channels or soakaway pits, eliminating foul odors and insect breeding grounds.</p>

      <div class="article-quote-box">
        Cleanliness is half of faith. — Sahih Muslim
      </div>

      <h3>Preserving Water: A Sacred Responsibility</h3>

      <p>Water conservation is a core Islamic value emphasized repeatedly by the Prophet Muhammad, peace and blessings be upon him, who instructed believers not to waste water even when performing ablution by a flowing river. In communities facing water scarcity, a single leaking tap can waste hundreds of liters of clean water every day.</p>

      <p>By installing pressure-regulated fittings and repairing cracked overhead storage tanks, our interventions save thousands of liters of clean water each week. This not only preserves a precious natural resource but also drastically reduces the electricity required to pump borehole water, lowering operational costs for the mosque committee.</p>

      <h3>A High-Reward Sadaqah Jariyah</h3>

      <p>Every time a worshipper steps into a clean, safe ablution area, turns on a functioning tap, and purifies themselves for prayer, the donor who facilitated that clean environment shares in the spiritual reward of that worship. Ensuring that our brothers and sisters can perform their religious duties in a clean, dignified space is among the most compassionate and enduring forms of charitable giving.</p>
    `,
    readTime: "6 min read"
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
      <p class="article-lead">The strength of Masajid Project lies in its grassroots community connection. Rather than operating from distant offices, our initiative relies on regular worshippers, community members, and local mosque committees to identify genuine, practical needs in their neighborhoods.</p>

      <p>Whether it is a rural mosque needing a solar inverter, a local madrasah requiring bookshelves and Qur'ans, or a suburban prayer hall struggling with degraded sound equipment, anyone can submit a nomination through our transparent platform. Here is a complete overview of how nominations are processed from initial submission to project completion.</p>

      <h3>Step 1: Community Submission</h3>

      <p>Any individual can visit our Submit a Need portal and fill out our structured nomination form. You provide the name and physical location of the mosque, select the relevant category of need, describe the current challenge in detail, and provide contact information for the local Imam or mosque executive.</p>

      <p>We also strongly encourage nominators to upload photos or short video clips demonstrating the existing condition. Visual evidence allows our assessment desk to immediately understand the urgency and technical nature of the request.</p>

      <h3>Step 2: Rapid Internal Review and Verification</h3>

      <p>Upon submission, the nomination is instantly logged in our central audit database with a unique tracking reference code. Within twenty-four to forty-eight hours, our assessment team conducts preliminary desk verification, confirming the geographic location and reaching out to the mosque leadership to verify community consent and need validity.</p>

      <div class="article-quote-box">
        The best of people are those who are most beneficial to others. — At-Tabarani
      </div>

      <h3>Step 3: On-Site Technical Field Audit</h3>

      <p>Once a nomination passes preliminary vetting, our field operations team is dispatched to conduct an on-site technical inspection. We assess the physical infrastructure, measure required dimensions, verify electrical loads, and prepare a standardized Bill of Quantities with local artisan pricing.</p>

      <h3>Step 4: Public Publication and Funding</h3>

      <p>Approved projects are assigned a permanent project identification code and published on our public website and dashboard. Transparent funding targets are established based on verified vendor quotations, allowing donors worldwide to contribute directly toward the specific verified need.</p>

      <h3>Step 5: Execution, Quality Audit, and Public Reporting</h3>

      <p>Once funds are raised, work commences under the supervision of our engineering inspectors. Upon successful completion and quality sign-off, before-and-after photographic evidence, contractor invoices, and payment receipts are published to our public Transparency Ledger. The project then enters an active monitoring phase to ensure long-term functionality and benefit.</p>
    `,
    readTime: "7 min read"
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
  },
  {
    id: "VND-003",
    name: "Agro-Chemical Stores, Itori",
    trade: "Agricultural Chemical Herbicide & Farm Supplies",
    phone: "+234 805 123 9876",
    email: "agrochemical.itori@gmail.com",
    city: "Itori, Ogun State",
    rating: "5.0",
    invoicesLogged: ["AGR-INV-2026-01"],
    status: "Verified Supplier"
  },
  {
    id: "VND-004",
    name: "Adumbu Local Agricultural Laborers",
    trade: "Perimeter Weed Clearing & Knapsack Chemical Spraying",
    phone: "+234 814 567 8901",
    email: "ops@masajidproject.org",
    city: "Adumbu, Ewekoro, Ogun State",
    rating: "5.0",
    invoicesLogged: ["WRK-VOUCH-2026-01"],
    status: "Verified Service Team"
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

const defaultMaterialDonations = [];

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
      { id: "EXP-002", date: "2026-08-17", desc: "3x Wooden Reading Stands (Rehal / Placeholders)", vendor: "Ariish Furniture", invoiceNo: "AR-INV-2026-02", receiptNo: "AR-REC-2026-02", amountNGN: 24000, receiptVerified: true, status: "Paid & Receipt Verified" }
    ],
    vendorQuotes: [
      { id: "VQ-001", vendor: "Ariish Furniture", item: "Solid Wooden Book Shelf & 3x Reading Stands", invoiceNo: "AR-INV-2026-01/02", receiptNo: "AR-REC-2026-01/02", amountNGN: 64000, status: "Paid & Receipt Verified" },
      { id: "VQ-002", vendor: "Munar Bookstore", item: "10x Copies of the Holy Qur'an (@ ₦10,000 each)", invoiceNo: "MB-QT-2026-08", receiptNo: null, amountNGN: 100000, status: "Invoice Received (Unpaid — Awaiting Donation)" }
    ],
    scope: [
      { item: "Solid Wooden Book Shelf (Ariish Furniture)", costNGN: 40000, status: "Paid & Receipt Verified (AR-REC-2026-01)", invoice: "AR-INV-2026-01" },
      { item: "3x Wooden Reading Stands (Rehal / Placeholders) (Ariish Furniture)", costNGN: 24000, status: "Paid & Receipt Verified (AR-REC-2026-02)", invoice: "AR-INV-2026-02" },
      { item: "10x Copies of the Holy Qur'an (Munar Bookstore)", costNGN: 100000, status: "Unpaid / Awaiting Donation (MB-QT-2026-08)", invoice: "MB-QT-2026-08" }
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
      { id: "EXP-004", date: "2026-08-17", desc: "3x Wooden Reading Stands (Rehal / Placeholders)", vendor: "Ariish Furniture", invoiceNo: "AR-INV-2026-04", receiptNo: "AR-REC-2026-04", amountNGN: 24000, receiptVerified: true, status: "Paid & Receipt Verified" }
    ],
    vendorQuotes: [
      { id: "VQ-003", vendor: "Ariish Furniture", item: "Solid Wooden Book Shelf & 3x Reading Stands", invoiceNo: "AR-INV-2026-03/04", receiptNo: "AR-REC-2026-03/04", amountNGN: 64000, status: "Paid & Receipt Verified" },
      { id: "VQ-004", vendor: "Munar Bookstore", item: "10x Copies of the Holy Qur'an (@ ₦10,000 each)", invoiceNo: "MB-QT-2026-09", receiptNo: null, amountNGN: 100000, status: "Invoice Received (Unpaid — Awaiting Donation)" }
    ],
    scope: [
      { item: "Solid Wooden Book Shelf (Ariish Furniture)", costNGN: 40000, status: "Paid & Receipt Verified (AR-REC-2026-03)", invoice: "AR-INV-2026-03" },
      { item: "3x Wooden Reading Stands (Rehal / Placeholders) (Ariish Furniture)", costNGN: 24000, status: "Paid & Receipt Verified (AR-REC-2026-04)", invoice: "AR-INV-2026-04" },
      { item: "10x Copies of the Holy Qur'an (Munar Bookstore)", costNGN: 100000, status: "Unpaid / Awaiting Donation (MB-QT-2026-09)", invoice: "MB-QT-2026-09" }
    ]
  },
  {
    id: "MP-OG-2026-003",
    mosqueId: "MSQ-003",
    categoryId: "cleaning",
    status: "COMPLETED",
    isFeatured: true,
    titleEN: "Weed Eradication & Perimeter Chemical Clearing",
    titleAR: "إبادة الأعشاب الضارة والرش الكيميائي لمحيط المسجد",
    location: "Opposite Al-Fathia School, Itori, Ewekoro, Ogun State",
    mosqueName: "Adumbu Community Mosque",
    descriptionEN: "Procurement and knapsack application of 5 bottles of Force Up chemical herbicide to eliminate dense weed overgrowth around the uncompleted community mosque and open prayer space, protecting worshippers from dangerous reptiles and pests while restoring a clean environment.",
    descriptionAR: "شراء ورش 5 عبوات من مبيد الأعشاب الكيميائي (Force Up) لإزالة الحشائش الكثيفة المحيطة بمبنى المسجد غير المكتمل ومصلى القرية، لحماية المصلين من الزواحف وتوفير بيئة نظيفة وآمنة.",
    goalNGN: 27500,
    raisedNGN: 27500,
    spentNGN: 27500,
    beneficiaries: "100+",
    supporters: 3,
    createdAt: "2026-08-24",
    completedDate: "2026-08-26",
    verifiedBy: "Masajid Field Operations Team",
    imageBefore: "images/proj-003-adumbu-before.jpg",
    imageAfter: "images/proj-003-adumbu-spraying-1.jpg",
    images: {
      before: "images/proj-003-adumbu-before.jpg",
      during: "images/proj-003-adumbu-spraying-1.jpg",
      after: "images/proj-003-adumbu-spraying-2.jpg",
      gallery: [
        "images/proj-003-adumbu-before.jpg",
        "images/proj-003-adumbu-spraying-1.jpg",
        "images/proj-003-adumbu-spraying-2.jpg",
        "images/proj-003-adumbu-field.jpg"
      ]
    },
    expenses: [
      { id: "EXP-005", date: "2026-08-25", desc: "Force Up Chemical Herbicide (5 Bottles @ ₦3,500 each)", vendor: "Agro-Chemical Stores, Itori", invoiceNo: "AGR-INV-2026-01", receiptNo: "AGR-REC-2026-01", amountNGN: 17500, receiptVerified: true, status: "Paid & Receipt Verified" },
      { id: "EXP-006", date: "2026-08-26", desc: "Workmanship & Knapsack Spraying Labor", vendor: "Adumbu Local Agricultural Laborers", invoiceNo: "WRK-VOUCH-2026-01", receiptNo: "WRK-REC-2026-01", amountNGN: 10000, receiptVerified: true, status: "Paid & Receipt Verified" }
    ],
    vendorQuotes: [
      { id: "VQ-005", vendor: "Agro-Chemical Stores, Itori", item: "5x Bottles of Force Up Chemical Herbicide", invoiceNo: "AGR-INV-2026-01", receiptNo: "AGR-REC-2026-01", amountNGN: 17500, status: "Paid & Receipt Verified" },
      { id: "VQ-006", vendor: "Adumbu Local Agricultural Laborers", item: "Workmanship & Knapsack Spraying Service", invoiceNo: "WRK-VOUCH-2026-01", receiptNo: "WRK-REC-2026-01", amountNGN: 10000, status: "Paid & Receipt Verified" }
    ],
    scope: [
      { item: "Force Up Chemical Herbicide (5 Bottles @ ₦3,500/ea)", costNGN: 17500, status: "Paid & Receipt Verified (AGR-REC-2026-01)", invoice: "AGR-INV-2026-01" },
      { item: "Workmanship & Spraying Labor", costNGN: 10000, status: "Paid & Receipt Verified (WRK-REC-2026-01)", invoice: "WRK-VOUCH-2026-01" }
    ],
    timeline: [
      { event: "Community Assessment & Weed Overgrowth Audit", date: "2026-08-24", done: true },
      { event: "Procurement of 5x Force Up Chemical Herbicide Bottles", date: "2026-08-25", done: true },
      { event: "Knapsack Chemical Spraying around Mosque Completed", date: "2026-08-26", done: true },
      { event: "Site Quality Audit & Project Completion Sign-Off", date: "2026-08-26", done: true }
    ]
  }
];

// Bulletproof Local Storage & Cross-Tab State Engine
function loadLocal(key, defaultVal) {
  if (typeof localStorage === 'undefined') return defaultVal;
  try {
    const val = localStorage.getItem('masajid_' + key);
    if (!val) return defaultVal;
    const parsed = JSON.parse(val);
    if (parsed === null || parsed === undefined) return defaultVal;
    return parsed;
  } catch (e) {
    console.warn(`[Masajid Sync] Error parsing key "${key}":`, e);
    return defaultVal;
  }
}

function saveLocal(key, data) {
  if (typeof localStorage === 'undefined') return;
  try {
    try {
      localStorage.setItem('masajid_' + key, JSON.stringify(data));
    } catch (quotaErr) {
      console.warn(`[Masajid Sync] Quota limit encountered for ${key}, optimizing storage payload...`, quotaErr);
      if (key === 'nominations' && Array.isArray(data)) {
        const sanitized = data.map(item => {
          if (!item.mediaFiles || !Array.isArray(item.mediaFiles)) return item;
          return {
            ...item,
            mediaFiles: item.mediaFiles.map(m => ({
              name: m.name,
              type: m.type,
              size: m.size,
              dataUrl: (m.dataUrl && m.dataUrl.length > 500000) ? m.dataUrl.slice(0, 100000) : m.dataUrl
            }))
          };
        });
        localStorage.setItem('masajid_' + key, JSON.stringify(sanitized));
      }
    }

    // 1. Broadcast change across all open browser tabs via BroadcastChannel
    if (typeof BroadcastChannel !== 'undefined') {
      try {
        if (!g.MP_BC) g.MP_BC = new BroadcastChannel('masajid_channel');
        g.MP_BC.postMessage({ type: 'update', key: key, data: data });
      } catch(e) {}
    }

    // 2. Post to cross-origin sync hub iframe if present
    const iframe = document.getElementById('masajid-sync-hub-iframe');
    if (iframe && iframe.contentWindow) {
      try {
        iframe.contentWindow.postMessage({ type: 'MASAJID_WRITE_SYNC', key: key, data: data }, '*');
      } catch(e) {}
    }

    // 3. Trigger in-page real-time subscriber if registered
    if (g.MP && typeof g.MP.onDataChange === 'function') {
      try { g.MP.onDataChange(key, data); } catch(e) {}
    }
  } catch (e) {
    console.error(`[Masajid Sync] Critical storage error for ${key}:`, e);
  }
}

g.MP = {
  get stats() {
    const projects = (typeof this.getProjects === 'function') ? this.getProjects() : initialProjects;
    const donations = (typeof this.getDonations === 'function') ? this.getDonations() : this.donations;
    const completed = projects.filter(p => p.status === 'COMPLETED').length;
    const active = projects.filter(p => p.status !== 'COMPLETED').length;
    const raised = donations.reduce((sum, d) => sum + (Number(d.amountNGN) || 0), 0);
    const spent = projects.reduce((sum, p) => sum + (Number(p.spentNGN) || 0), 0);
    const uniqueMosques = new Set(projects.map(p => p.mosqueId || p.mosqueName)).size;
    return {
      projectsCompleted: completed,
      totalRaisedNGN: raised,
      totalSpentNGN: spent,
      masajidSupported: uniqueMosques || 3,
      activeProjects: active,
      totalDonors: donations.length
    };
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
    { id: "MSQ-002", nameEN: "Masjid Markaz Diyar", nameAR: "مسجد مركز الديار", city: "Behind Al-Fathia School, Itori, Ewekoro", state: "Ogun State" },
    { id: "MSQ-003", nameEN: "Adumbu Community Mosque", nameAR: "مسجد مجتمع أدومبو", city: "Opposite Al-Fathia School, Itori, Ewekoro", state: "Ogun State" }
  ],

  donations: [
    { ref: "MP-DON-101", projectId: "MP-OG-2026-001", amountNGN: 40000, date: "2026-08-16", donorName: "Anonymous", purpose: "Solid Wooden Book Shelf Funding", channel: "Direct Bank Transfer", status: "Received" },
    { ref: "MP-DON-102", projectId: "MP-OG-2026-001", amountNGN: 24000, date: "2026-08-17", donorName: "Anonymous", purpose: "3x Qur'an Reading Placeholders Funding", channel: "Direct Bank Transfer", status: "Received" },
    { ref: "MP-DON-103", projectId: "MP-OG-2026-002", amountNGN: 40000, date: "2026-08-16", donorName: "Anonymous", purpose: "Solid Wooden Book Shelf Funding", channel: "Direct Bank Transfer", status: "Received" },
    { ref: "MP-DON-104", projectId: "MP-OG-2026-002", amountNGN: 24000, date: "2026-08-17", donorName: "Anonymous", purpose: "3x Qur'an Reading Placeholders Funding", channel: "Direct Bank Transfer", status: "Received" },
    { ref: "MP-DON-105", projectId: "MP-OG-2026-003", amountNGN: 5000, date: "2026-08-24", donorName: "Anonymous", purpose: "Force Up Chemical Herbicide Funding", channel: "Direct Bank Transfer", status: "Received" },
    { ref: "MP-DON-106", projectId: "MP-OG-2026-003", amountNGN: 10000, date: "2026-08-25", donorName: "Anonymous", purpose: "Force Up Chemical Herbicide Funding", channel: "Direct Bank Transfer", status: "Received" },
    { ref: "MP-DON-107", projectId: "MP-OG-2026-003", amountNGN: 12500, date: "2026-08-25", donorName: "Anonymous", purpose: "Workmanship & Chemical Spraying Labor Funding", channel: "Direct Bank Transfer", status: "Received" }
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
    let list = loadLocal('projects', initialProjects);
    if (!Array.isArray(list) || list.length === 0) {
      list = initialProjects;
    }
    // Automatically merge any projects in initialProjects that are not yet in local storage
    initialProjects.forEach(initP => {
      const idx = list.findIndex(p => p.id === initP.id);
      if (idx === -1) {
        list.push(initP);
        saveLocal('projects', list);
      }
    });

    list.forEach(p => {
      if (p.scope && Array.isArray(p.scope)) {
        p.scope.forEach(s => {
          const itemStr = (s.item || '').toLowerCase();
          if (itemStr.includes("qur'an") || itemStr.includes('quran')) {
            if (!itemStr.includes('stand') && !itemStr.includes('rehal') && !itemStr.includes('placeholder')) {
              s.status = 'Unpaid / Awaiting Donation';
            }
          }
        });
      }
    });
    return list;
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

    // Asynchronously push to Supabase Cloud Database if configured
    if (typeof window !== 'undefined' && window.MasajidCloud && typeof window.MasajidCloud.submitNomination === 'function') {
      window.MasajidCloud.submitNomination(nom);
    }
    return nom;
  },

  updateNominationStatus: function(id, status) {
    const list = this.getNominations();
    const item = list.find(n => n.id === id);
    if (item) {
      item.status = status;
      saveLocal('nominations', list);

      // Asynchronously update on Supabase Cloud Database
      if (typeof window !== 'undefined' && window.MasajidCloud && typeof window.MasajidCloud.updateNominationStatus === 'function') {
        window.MasajidCloud.updateNominationStatus(id, status);
      }

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
    if (!slug) return all;
    const cleanSlug = String(slug).toLowerCase().trim().replace(/^\/+|\/+$/g, '');
    return all.filter(c => {
      const cSlug = String(c.articleSlug || '').toLowerCase().trim().replace(/^\/+|\/+$/g, '');
      return cSlug === cleanSlug || cSlug.includes(cleanSlug) || cleanSlug.includes(cSlug);
    });
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

  // Masajid Directory Methods
  getMosques: function() {
    const defaultMosques = [
      {
        id: "MSQ-001",
        nameEN: "Medinat Dhikr Central Mosque",
        nameAR: "مسجد مدينة الذكر المركزي",
        address: "Central Area, Adumbu Village",
        city: "Adumbu, Itori",
        state: "Ogun State",
        country: "Nigeria",
        congregation: "450+",
        contactPerson: "Imam & Mosque Committee",
        status: "Verified & Active Partner",
        projects: ["MP-OG-2026-001"],
        notes: "Active weekly madrasah and 5 daily prayers."
      },
      {
        id: "MSQ-002",
        nameEN: "Masjid Markaz Diyar",
        nameAR: "مسجد مركز الديار",
        address: "Behind Al-Fathia School, Off Itori Express",
        city: "Itori",
        state: "Ogun State",
        country: "Nigeria",
        congregation: "450+",
        contactPerson: "Imam & Youth Learning Head",
        status: "Verified & Active Partner",
        projects: ["MP-OG-2026-002"],
        notes: "Educational hub with evening Quran recitation circles."
      },
      {
        id: "MSQ-003",
        nameEN: "Adumbu Community Mosque",
        nameAR: "مسجد مجتمع أدومبو",
        address: "Opposite Al-Fathia School",
        city: "Itori",
        state: "Ogun State",
        country: "Nigeria",
        congregation: "100+",
        contactPerson: "Adumbu Community Elders",
        status: "Verified & Active Partner",
        projects: ["MP-OG-2026-003"],
        notes: "Uncompleted community mosque shelter with open praying area."
      }
    ];

    let list = loadLocal('mosques', defaultMosques);
    if (!Array.isArray(list) || list.length === 0) {
      list = defaultMosques;
    }
    defaultMosques.forEach(initM => {
      const idx = list.findIndex(m => m.id === initM.id);
      if (idx === -1) {
        list.push(initM);
        saveLocal('mosques', list);
      }
    });
    return list;
  },

  saveMosque: function(m) {
    const list = this.getMosques();
    m.id = m.id || 'MSQ-' + String(Date.now()).slice(-3);
    m.status = m.status || 'Verified & Active Partner';
    m.congregation = m.congregation || '100+';
    const idx = list.findIndex(item => item.id === m.id);
    if (idx >= 0) {
      list[idx] = { ...list[idx], ...m };
    } else {
      list.push(m);
    }
    saveLocal('mosques', list);
    return m;
  },

  deleteMosque: function(id) {
    const list = this.getMosques().filter(m => m.id !== id);
    saveLocal('mosques', list);
    return list;
  },

  // Vendors Methods
  getVendors: function() {
    let list = loadLocal('vendors', defaultVendors);
    if (!Array.isArray(list) || list.length === 0) {
      list = defaultVendors;
    }
    defaultVendors.forEach(initV => {
      const idx = list.findIndex(v => v.id === initV.id);
      if (idx === -1) {
        list.push(initV);
        saveLocal('vendors', list);
      }
    });
    return list;
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
    let list = loadLocal('donations', this.donations);
    if (!Array.isArray(list) || list.length === 0) {
      list = this.donations;
    }
    this.donations.forEach(initD => {
      const idx = list.findIndex(d => d.ref === initD.ref);
      if (idx === -1) {
        list.push(initD);
        saveLocal('donations', list);
      }
    });
    if (includePending) return list;
    return list.filter(d => d.status === 'CONFIRMED' || d.status === 'Received' || !d.status);
  },

  getPendingDonations: function() {
    const list = this.getDonations(true);
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

    // Asynchronously push to Supabase Cloud Database
    if (typeof window !== 'undefined' && window.MasajidCloud && typeof window.MasajidCloud.submitDonation === 'function') {
      window.MasajidCloud.submitDonation(d);
    }
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

      // Asynchronously update on Supabase Cloud Database
      if (typeof window !== 'undefined' && window.MasajidCloud && typeof window.MasajidCloud.updateDonationStatus === 'function') {
        window.MasajidCloud.updateDonationStatus(ref, 'CONFIRMED');
      }
    }
    return d;
  },

  // Called by admin when payment alert was not received
  declineDonation: function(ref) {
    let list = loadLocal('donations', this.donations);
    list = list.filter(item => item.ref !== ref);
    saveLocal('donations', list);
    if (typeof window !== 'undefined' && window.MasajidCloud && typeof window.MasajidCloud.updateDonationStatus === 'function') {
      window.MasajidCloud.updateDonationStatus(ref, 'DECLINED');
    }
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

    if (typeof window !== 'undefined' && window.MasajidCloud && typeof window.MasajidCloud.submitDonation === 'function') {
      window.MasajidCloud.submitDonation(d);
    }

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

  // Material / Physical Resource In-Kind Donations Methods
  getMaterialDonations: function() {
    let list = loadLocal('material_donations', defaultMaterialDonations);
    if (Array.isArray(list)) {
      list = list.filter(m => m.ref !== 'MP-MAT-101');
    }
    return list || [];
  },

  submitMaterialDonation: function(mat) {
    const list = this.getMaterialDonations();
    mat.ref = mat.ref || 'MP-MAT-' + String(Math.floor(1000 + Math.random() * 9000));
    mat.date = mat.date || new Date().toISOString().split('T')[0];
    mat.donorName = (mat.donorName && mat.donorName.trim()) ? mat.donorName.trim() : 'Anonymous';
    mat.status = mat.status || 'Pending Delivery / Pickup';
    list.unshift(mat);
    saveLocal('material_donations', list);

    // Asynchronously push to Supabase Cloud Database
    if (typeof window !== 'undefined' && window.MasajidCloud && typeof window.MasajidCloud.submitMaterialDonation === 'function') {
      window.MasajidCloud.submitMaterialDonation(mat);
    }
    return mat;
  },

  updateMaterialDonationStatus: function(ref, status) {
    const list = this.getMaterialDonations();
    const item = list.find(m => m.ref === ref);
    if (item) {
      item.status = status;
      saveLocal('material_donations', list);

      // Asynchronously update on Supabase Cloud Database
      if (typeof window !== 'undefined' && window.MasajidCloud && typeof window.MasajidCloud.updateMaterialStatus === 'function') {
        window.MasajidCloud.updateMaterialStatus(ref, status);
      }
    }
    return list;
  },

  deleteMaterialDonation: function(ref) {
    let list = this.getMaterialDonations();
    list = list.filter(m => m.ref !== ref);
    saveLocal('material_donations', list);

    if (typeof window !== 'undefined' && window.MasajidCloud && typeof window.MasajidCloud.deleteMaterialDonation === 'function') {
      window.MasajidCloud.deleteMaterialDonation(ref);
    }
    return list;
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
  },

  // ── REALTIME CLOUD HANDLERS & BACKGROUND SYNC ──
  onCloudNominationSync: function(payload) {
    if (!payload || !payload.new) return;
    const r = payload.new;
    const item = {
      id: r.id,
      masjidName: r.masjid_name,
      masjidNameAR: r.masjid_name_ar,
      city: r.city,
      state: r.state,
      category: r.category,
      needDesc: r.need_desc,
      mediaFiles: r.media_files || [],
      mediaDriveLink: r.media_drive_link,
      yourName: r.your_name,
      yourPhone: r.your_phone,
      yourEmail: r.your_email,
      status: r.status,
      submittedAt: r.submitted_at
    };
    const list = this.getNominations();
    const idx = list.findIndex(n => n.id === item.id);
    if (idx >= 0) {
      list[idx] = item;
    } else {
      list.unshift(item);
    }
    saveLocal('nominations', list);
    if (typeof this.onDataChange === 'function') {
      this.onDataChange('nominations', list);
    }
  },

  onCloudDonationSync: function(payload) {
    if (!payload || !payload.new) return;
    const r = payload.new;
    const item = {
      ref: r.ref,
      projectId: r.project_id,
      amountNGN: Number(r.amount_ngn),
      date: r.date,
      donorName: r.donor_name,
      email: r.email,
      purpose: r.purpose,
      channel: r.channel,
      status: r.status
    };
    const list = loadLocal('donations', this.donations);
    const idx = list.findIndex(d => d.ref === item.ref);
    if (idx >= 0) {
      list[idx] = item;
    } else {
      list.unshift(item);
    }
    saveLocal('donations', list);
    if (typeof this.onDataChange === 'function') {
      this.onDataChange('donations', list);
    }
  },

  onCloudMaterialSync: function(payload) {
    if (!payload || !payload.new) return;
    const r = payload.new;
    const item = {
      ref: r.ref,
      projectId: r.project_id,
      projectTitle: r.project_title,
      materials: r.materials,
      condition: r.condition,
      donorName: r.donor_name,
      phone: r.phone,
      email: r.email,
      donorLocation: r.donor_location,
      deliveryPreference: r.delivery_preference,
      status: r.status,
      date: r.date
    };
    const list = this.getMaterialDonations();
    const idx = list.findIndex(m => m.ref === item.ref);
    if (idx >= 0) {
      list[idx] = item;
    } else {
      list.unshift(item);
    }
    saveLocal('material_donations', list);
    if (typeof this.onDataChange === 'function') {
      this.onDataChange('material_donations', list);
    }
  },

  // Pull latest cloud state in background on load
  syncFromCloud: async function() {
    if (typeof window === 'undefined' || !window.MasajidCloud || !window.MasajidCloud.isConfigured) return;
    try {
      const [cloudNoms, cloudDons, cloudMats, cloudProjs] = await Promise.all([
        window.MasajidCloud.fetchNominations(),
        window.MasajidCloud.fetchDonations(),
        window.MasajidCloud.fetchMaterialDonations(),
        window.MasajidCloud.fetchProjects()
      ]);

      if (cloudNoms && cloudNoms.length > 0) {
        saveLocal('nominations', cloudNoms);
        if (typeof this.onDataChange === 'function') this.onDataChange('nominations', cloudNoms);
      }
      if (cloudDons && cloudDons.length > 0) {
        saveLocal('donations', cloudDons);
        if (typeof this.onDataChange === 'function') this.onDataChange('donations', cloudDons);
      }
      if (cloudMats && cloudMats.length > 0) {
        saveLocal('material_donations', cloudMats);
        if (typeof this.onDataChange === 'function') this.onDataChange('material_donations', cloudMats);
      }
      if (cloudProjs && cloudProjs.length > 0) {
        saveLocal('projects', cloudProjs);
        if (typeof this.onDataChange === 'function') this.onDataChange('projects', cloudProjs);
      }
      console.log('☁️ [Masajid Project] Cloud data synchronization complete.');
    } catch (err) {
      console.warn('⚠️ [Masajid Project] Cloud background sync notice:', err);
    }
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
