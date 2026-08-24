-- ==============================================================================
-- MASAJID PROJECT — SUPABASE DATABASE SCHEMA & REALTIME SYNC
-- Database: PostgreSQL 15+ (Supabase)
-- Instructions: Copy and paste this entire SQL script into the Supabase SQL Editor
-- and click "Run".
-- ==============================================================================

-- 1. PROJECTS TABLE
CREATE TABLE IF NOT EXISTS public.projects (
  id TEXT PRIMARY KEY,
  mosque_id TEXT,
  category_id TEXT,
  status TEXT DEFAULT 'IN_PROGRESS',
  is_featured BOOLEAN DEFAULT true,
  title_en TEXT NOT NULL,
  title_ar TEXT,
  location TEXT NOT NULL,
  mosque_name TEXT NOT NULL,
  description_en TEXT,
  description_ar TEXT,
  goal_ngn NUMERIC DEFAULT 0,
  raised_ngn NUMERIC DEFAULT 0,
  spent_ngn NUMERIC DEFAULT 0,
  verified_by TEXT DEFAULT 'Masajid Field Operations Team',
  image_before TEXT,
  image_after TEXT,
  expenses JSONB DEFAULT '[]'::jsonb,
  vendor_quotes JSONB DEFAULT '[]'::jsonb,
  scope JSONB DEFAULT '[]'::jsonb,
  timeline JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. FINANCIAL DONATIONS TABLE
CREATE TABLE IF NOT EXISTS public.donations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  ref TEXT UNIQUE NOT NULL,
  project_id TEXT,
  amount_ngn NUMERIC NOT NULL,
  date TEXT NOT NULL,
  donor_name TEXT DEFAULT 'Anonymous',
  email TEXT,
  purpose TEXT,
  channel TEXT DEFAULT 'Direct Bank Transfer',
  status TEXT DEFAULT 'PENDING',
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. PHYSICAL MATERIALS & RESOURCES (IN-KIND) TABLE
CREATE TABLE IF NOT EXISTS public.material_donations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  ref TEXT UNIQUE NOT NULL,
  project_id TEXT,
  project_title TEXT,
  materials TEXT NOT NULL,
  condition TEXT DEFAULT 'Standard Mosque Grade',
  donor_name TEXT DEFAULT 'Anonymous',
  phone TEXT,
  email TEXT,
  donor_location TEXT,
  delivery_preference TEXT DEFAULT 'Self-Delivery to Mosque Site',
  status TEXT DEFAULT 'Pending Delivery / Pickup',
  date TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. MOSQUE NOMINATIONS & SITE SUBMISSIONS TABLE
CREATE TABLE IF NOT EXISTS public.nominations (
  id TEXT PRIMARY KEY,
  masjid_name TEXT NOT NULL,
  masjid_name_ar TEXT,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  category TEXT NOT NULL,
  need_desc TEXT NOT NULL,
  media_files JSONB DEFAULT '[]'::jsonb,
  media_drive_link TEXT,
  your_name TEXT NOT NULL,
  your_phone TEXT NOT NULL,
  your_email TEXT,
  status TEXT DEFAULT 'pending',
  submitted_at TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. VERIFIED VENDORS & SUPPLIERS TABLE
CREATE TABLE IF NOT EXISTS public.vendors (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  phone TEXT,
  location TEXT,
  rating TEXT DEFAULT '5.0',
  status TEXT DEFAULT 'Verified Supplier',
  invoices_logged JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 6. ARTICLES & BLOG POSTS TABLE
CREATE TABLE IF NOT EXISTS public.articles (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  category TEXT NOT NULL,
  author TEXT NOT NULL,
  read_time TEXT DEFAULT '4 min read',
  date TEXT NOT NULL,
  image TEXT,
  excerpt TEXT,
  content TEXT,
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 7. ARTICLE COMMENTS & MODERATION TABLE
CREATE TABLE IF NOT EXISTS public.comments (
  id TEXT PRIMARY KEY,
  article_slug TEXT NOT NULL,
  author TEXT NOT NULL,
  email TEXT,
  comment TEXT NOT NULL,
  date TEXT NOT NULL,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ==============================================================================
-- ENABLE ROW LEVEL SECURITY (RLS) & PUBLIC ACCESS POLICIES
-- ==============================================================================
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.donations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.material_donations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.nominations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.vendors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.comments ENABLE ROW LEVEL SECURITY;

-- Allow Public READ on all tables
CREATE POLICY "Public can view projects" ON public.projects FOR SELECT USING (true);
CREATE POLICY "Public can view donations" ON public.donations FOR SELECT USING (true);
CREATE POLICY "Public can view material donations" ON public.material_donations FOR SELECT USING (true);
CREATE POLICY "Public can view nominations" ON public.nominations FOR SELECT USING (true);
CREATE POLICY "Public can view vendors" ON public.vendors FOR SELECT USING (true);
CREATE POLICY "Public can view articles" ON public.articles FOR SELECT USING (true);
CREATE POLICY "Public can view comments" ON public.comments FOR SELECT USING (true);

-- Allow Public INSERT (Forms submission from website)
CREATE POLICY "Public can submit donations" ON public.donations FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can submit material donations" ON public.material_donations FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can submit nominations" ON public.nominations FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can submit comments" ON public.comments FOR INSERT WITH CHECK (true);

-- Allow Full CRUD operations for Admin / All records
CREATE POLICY "Admin full projects access" ON public.projects FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Admin full donations access" ON public.donations FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Admin full material donations access" ON public.material_donations FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Admin full nominations access" ON public.nominations FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Admin full vendors access" ON public.vendors FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Admin full articles access" ON public.articles FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Admin full comments access" ON public.comments FOR ALL USING (true) WITH CHECK (true);

-- ==============================================================================
-- ENABLE REALTIME PUBLICATION (INSTANT WEBSOCKET PUSH TO DASHBOARDS)
-- ==============================================================================
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_publication WHERE pubname = 'supabase_realtime') THEN
    CREATE PUBLICATION supabase_realtime;
  END IF;
END $$;

ALTER PUBLICATION supabase_realtime ADD TABLE public.projects;
ALTER PUBLICATION supabase_realtime ADD TABLE public.donations;
ALTER PUBLICATION supabase_realtime ADD TABLE public.material_donations;
ALTER PUBLICATION supabase_realtime ADD TABLE public.nominations;
ALTER PUBLICATION supabase_realtime ADD TABLE public.vendors;
ALTER PUBLICATION supabase_realtime ADD TABLE public.articles;
ALTER PUBLICATION supabase_realtime ADD TABLE public.comments;

-- ==============================================================================
-- SEED INITIAL FOUNDATIONAL PROJECTS
-- ==============================================================================
INSERT INTO public.projects (
  id, mosque_id, category_id, status, is_featured, title_en, title_ar, location, mosque_name,
  description_en, description_ar, goal_ngn, raised_ngn, spent_ngn, verified_by, image_before, image_after,
  expenses, vendor_quotes, scope, timeline
) VALUES 
(
  'MP-OG-2026-001',
  'MSQ-001',
  'quran',
  'IN_PROGRESS',
  true,
  'Bookshelf, Reading Placeholders and Quran',
  'رف الكتب وحوامل المصاحف والمصاحف الشريفة',
  'Adumbu, Itori, Ewekoro, Ogun State',
  'Medinat Dhikr Central Mosque',
  'Provision of a solid wooden book shelf, 3 pieces of reading placeholders (Rehal), and 10 copies of the Holy Qur''an for daily recitation and learning sessions.',
  'توفير رف كتب خشبي متين، و3 حوامل خشبية لقراءة المصاحف، و10 نسخ من القرآن الكريم للتلاوة اليومية وحلقات تحفيظ القرآن.',
  164000,
  64000,
  64000,
  'Masajid Field Operations Team',
  'images/proj-003-before.jpg',
  'images/proj-001-after.jpg',
  '[
    {"id":"EXP-001","date":"2026-08-16","desc":"Solid Wooden Book Shelf","vendor":"Ariish Furniture","invoiceNo":"AR-INV-2026-01","receiptNo":"AR-REC-2026-01","amountNGN":40000,"receiptVerified":true,"status":"Paid & Receipt Verified"},
    {"id":"EXP-002","date":"2026-08-17","desc":"3x Wooden Reading Stands (Rehal / Placeholders)","vendor":"Ariish Furniture","invoiceNo":"AR-INV-2026-02","receiptNo":"AR-REC-2026-02","amountNGN":24000,"receiptVerified":true,"status":"Paid & Receipt Verified"}
  ]'::jsonb,
  '[
    {"id":"VQ-001","vendor":"Ariish Furniture","item":"Solid Wooden Book Shelf & 3x Reading Stands","invoiceNo":"AR-INV-2026-01/02","receiptNo":"AR-REC-2026-01/02","amountNGN":64000,"status":"Paid & Receipt Verified"},
    {"id":"VQ-002","vendor":"Munar Bookstore","item":"10x Copies of the Holy Qur''an (@ ₦10,000 each)","invoiceNo":"MB-QT-2026-08","receiptNo":null,"amountNGN":100000,"status":"Invoice Received (Unpaid — Awaiting Donation)"}
  ]'::jsonb,
  '[
    {"item":"Solid Wooden Book Shelf (Ariish Furniture)","costNGN":40000,"status":"Paid & Receipt Verified (AR-REC-2026-01)","invoice":"AR-INV-2026-01"},
    {"item":"3x Wooden Reading Stands (Rehal / Placeholders) (Ariish Furniture)","costNGN":24000,"status":"Paid & Receipt Verified (AR-REC-2026-02)","invoice":"AR-INV-2026-02"},
    {"item":"10x Copies of the Holy Qur''an (Munar Bookstore)","costNGN":100000,"status":"Unpaid / Awaiting Donation","invoice":"MB-QT-2026-08"}
  ]'::jsonb,
  '[
    {"event":"Community Referral Received","date":"2026-08-10","done":true},
    {"event":"Site Assessment & Photographic Audit","date":"2026-08-12","done":true},
    {"event":"Vendor Quotes Sourced & Procurement Approved","date":"2026-08-14","done":true},
    {"event":"Bookshelf & Reading Stands Delivered","date":"2026-08-17","done":true},
    {"event":"Final Qur''an Delivery & Project Sign-Off","date":"Pending Remaining Funding","done":false}
  ]'::jsonb
),
(
  'MP-OG-2026-002',
  'MSQ-002',
  'quran',
  'IN_PROGRESS',
  true,
  'Bookshelf, Reading Placeholders and Quran',
  'رف الكتب وحوامل المصاحف والمصاحف الشريفة',
  'Behind Al-Fathia School, Itori, Ewekoro, Ogun State',
  'Masjid Markaz Diyar',
  'Provision of a solid wooden book shelf, 3 pieces of reading placeholders (Rehal), and 10 copies of the Holy Qur''an for daily recitation and learning sessions.',
  'توفير رف كتب خشبي متين، و3 حوامل خشبية لقراءة المصاحف، و10 نسخ من القرآن الكريم للتلاوة اليومية وحلقات تحفيظ القرآن.',
  164000,
  64000,
  64000,
  'Masajid Field Operations Team',
  'images/proj-005-before.jpg',
  'images/mosque-hero.jpg',
  '[
    {"id":"EXP-003","date":"2026-08-16","desc":"Solid Wooden Book Shelf","vendor":"Ariish Furniture","invoiceNo":"AR-INV-2026-03","receiptNo":"AR-REC-2026-03","amountNGN":40000,"receiptVerified":true,"status":"Paid & Receipt Verified"},
    {"id":"EXP-004","date":"2026-08-17","desc":"3x Wooden Reading Stands (Rehal / Placeholders)","vendor":"Ariish Furniture","invoiceNo":"AR-INV-2026-04","receiptNo":"AR-REC-2026-04","amountNGN":24000,"receiptVerified":true,"status":"Paid & Receipt Verified"}
  ]'::jsonb,
  '[
    {"id":"VQ-003","vendor":"Ariish Furniture","item":"Solid Wooden Book Shelf & 3x Reading Stands","invoiceNo":"AR-INV-2026-03/04","receiptNo":"AR-REC-2026-03/04","amountNGN":64000,"status":"Paid & Receipt Verified"},
    {"id":"VQ-004","vendor":"Munar Bookstore","item":"10x Copies of the Holy Qur''an (@ ₦10,000 each)","invoiceNo":"MB-QT-2026-09","receiptNo":null,"amountNGN":100000,"status":"Invoice Received (Unpaid — Awaiting Donation)"}
  ]'::jsonb,
  '[
    {"item":"Solid Wooden Book Shelf (Ariish Furniture)","costNGN":40000,"status":"Paid & Receipt Verified (AR-REC-2026-03)","invoice":"AR-INV-2026-03"},
    {"item":"3x Wooden Reading Stands (Rehal / Placeholders) (Ariish Furniture)","costNGN":24000,"status":"Paid & Receipt Verified (AR-REC-2026-04)","invoice":"AR-INV-2026-04"},
    {"item":"10x Copies of the Holy Qur''an (Munar Bookstore)","costNGN":100000,"status":"Unpaid / Awaiting Donation","invoice":"MB-QT-2026-09"}
  ]'::jsonb,
  '[
    {"event":"Community Referral Received","date":"2026-08-11","done":true},
    {"event":"Site Assessment & Photographic Audit","date":"2026-08-13","done":true},
    {"event":"Vendor Quotes Sourced & Procurement Approved","date":"2026-08-15","done":true},
    {"event":"Bookshelf & Reading Stands Delivered","date":"2026-08-17","done":true},
    {"event":"Final Qur''an Delivery & Project Sign-Off","date":"Pending Remaining Funding","done":false}
  ]'::jsonb
)
ON CONFLICT (id) DO NOTHING;

-- SEED INITIAL CONFIRMED DONATIONS
INSERT INTO public.donations (ref, project_id, amount_ngn, date, donor_name, purpose, channel, status) VALUES
('MP-DON-101', 'MP-OG-2026-001', 40000, '2026-08-16', 'Anonymous', 'Solid Wooden Book Shelf Funding', 'Direct Bank Transfer', 'CONFIRMED'),
('MP-DON-102', 'MP-OG-2026-001', 24000, '2026-08-17', 'Anonymous', '3x Qur''an Reading Placeholders Funding', 'Direct Bank Transfer', 'CONFIRMED'),
('MP-DON-103', 'MP-OG-2026-002', 40000, '2026-08-16', 'Anonymous', 'Solid Wooden Book Shelf Funding', 'Direct Bank Transfer', 'CONFIRMED'),
('MP-DON-104', 'MP-OG-2026-002', 24000, '2026-08-17', 'Anonymous', '3x Qur''an Reading Placeholders Funding', 'Direct Bank Transfer', 'CONFIRMED')
ON CONFLICT (ref) DO NOTHING;
