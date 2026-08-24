/**
 * Masajid Project — Supabase Realtime & Cloud Database Client
 * Dual-Layer Architecture: Supabase Cloud PostgreSQL + LocalStorage Resilience Fallback
 */

(function() {
  'use strict';

  // ── 1. SUPABASE CREDENTIALS CONFIGURATION ──
  // Replace these with your actual credentials from your Supabase Project Settings > API
  const DEFAULT_CONFIG = {
    url: 'https://YOUR_PROJECT_ID.supabase.co',
    anonKey: 'YOUR_SUPABASE_ANON_KEY'
  };

  // Load from localStorage if configured dynamically via admin settings, else fallback to DEFAULT_CONFIG
  function getSupabaseConfig() {
    try {
      const saved = localStorage.getItem('masajid_supabase_config');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.url && parsed.anonKey && !parsed.url.includes('YOUR_PROJECT_ID')) {
          return parsed;
        }
      }
    } catch(e) {}
    return DEFAULT_CONFIG;
  }

  const config = getSupabaseConfig();
  const isConfigured = config.url && config.anonKey && !config.url.includes('YOUR_PROJECT_ID') && !config.anonKey.includes('YOUR_SUPABASE');

  let client = null;
  if (isConfigured && typeof window.supabase !== 'undefined' && typeof window.supabase.createClient === 'function') {
    try {
      client = window.supabase.createClient(config.url, config.anonKey, {
        auth: { persistSession: true, autoRefreshToken: true }
      });
      console.log('✅ [Masajid Project] Supabase Cloud Client Initialized successfully.');
    } catch (err) {
      console.warn('⚠️ [Masajid Project] Supabase initialization failed, running in local resilience mode.', err);
    }
  } else {
    console.log('ℹ️ [Masajid Project] Supabase running in LocalStorage Mode (Cloud Sync ready to activate).');
  }

  // ── 2. REALTIME WEBSOCKET SUBSCRIPTION MANAGER ──
  function setupRealtimeListeners() {
    if (!client) return;

    try {
      const channel = client.channel('masajid_realtime_stream');

      // Listen for new nominations
      channel.on('postgres_changes', { event: '*', schema: 'public', table: 'nominations' }, payload => {
        console.log('🔔 [Realtime] Mosque Nomination event received:', payload.eventType);
        if (window.MP && typeof window.MP.onCloudNominationSync === 'function') {
          window.MP.onCloudNominationSync(payload);
        }
      });

      // Listen for donations
      channel.on('postgres_changes', { event: '*', schema: 'public', table: 'donations' }, payload => {
        console.log('🔔 [Realtime] Donation event received:', payload.eventType);
        if (window.MP && typeof window.MP.onCloudDonationSync === 'function') {
          window.MP.onCloudDonationSync(payload);
        }
      });

      // Listen for material donations
      channel.on('postgres_changes', { event: '*', schema: 'public', table: 'material_donations' }, payload => {
        console.log('🔔 [Realtime] Material Pledge event received:', payload.eventType);
        if (window.MP && typeof window.MP.onCloudMaterialSync === 'function') {
          window.MP.onCloudMaterialSync(payload);
        }
      });

      // Listen for project scope & financial updates
      channel.on('postgres_changes', { event: '*', schema: 'public', table: 'projects' }, payload => {
        console.log('🔔 [Realtime] Project update received:', payload.eventType);
        if (window.MP && typeof window.MP.onCloudProjectSync === 'function') {
          window.MP.onCloudProjectSync(payload);
        }
      });

      channel.subscribe((status) => {
        if (status === 'SUBSCRIBED') {
          console.log('⚡ [Realtime] Subscribed to live Masajid Cloud Database stream.');
        }
      });
    } catch (err) {
      console.warn('⚠️ [Realtime] Could not subscribe to Supabase channel:', err);
    }
  }

  // Initialize listeners if client ready
  if (client) {
    setupRealtimeListeners();
  }

  // ── 3. CLOUD CRUD & SYNC ENGINE EXPORTS ──
  window.MasajidCloud = {
    client: client,
    isConfigured: isConfigured,

    // Configure dynamically from admin UI
    saveConfig: function(url, anonKey) {
      if (!url || !anonKey) return false;
      const newCfg = { url: url.trim(), anonKey: anonKey.trim() };
      localStorage.setItem('masajid_supabase_config', JSON.stringify(newCfg));
      window.location.reload();
      return true;
    },

    // ── NOMINATIONS (MOSQUE SUBMISSIONS) ──
    submitNomination: async function(nom) {
      if (!client) return null;
      try {
        const row = {
          id: nom.id || ('NOM-' + Date.now()),
          masjid_name: nom.masjidName,
          masjid_name_ar: nom.masjidNameAR || null,
          city: nom.city,
          state: nom.state,
          category: nom.category,
          need_desc: nom.needDesc,
          media_files: nom.mediaFiles || [],
          media_drive_link: nom.mediaDriveLink || null,
          your_name: nom.yourName,
          your_phone: nom.yourPhone,
          your_email: nom.yourEmail || null,
          status: nom.status || 'pending',
          submitted_at: nom.submittedAt || new Date().toLocaleString()
        };
        const { data, error } = await client.from('nominations').insert([row]).select().single();
        if (error) throw error;
        return data;
      } catch (err) {
        console.error('❌ [Supabase] Error saving nomination:', err);
        return null;
      }
    },

    fetchNominations: async function() {
      if (!client) return null;
      try {
        const { data, error } = await client.from('nominations').select('*').order('created_at', { ascending: false });
        if (error) throw error;
        return data.map(r => ({
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
        }));
      } catch (err) {
        console.error('❌ [Supabase] Error fetching nominations:', err);
        return null;
      }
    },

    updateNominationStatus: async function(id, status) {
      if (!client) return null;
      try {
        const { data, error } = await client.from('nominations').update({ status: status }).eq('id', id).select().single();
        if (error) throw error;
        return data;
      } catch (err) {
        console.error('❌ [Supabase] Error updating nomination status:', err);
        return null;
      }
    },

    deleteNomination: async function(id) {
      if (!client) return null;
      try {
        const { error } = await client.from('nominations').delete().eq('id', id);
        if (error) throw error;
        return true;
      } catch (err) {
        console.error('❌ [Supabase] Error deleting nomination:', err);
        return false;
      }
    },

    // ── FINANCIAL DONATIONS ──
    submitDonation: async function(don) {
      if (!client) return null;
      try {
        const row = {
          ref: don.ref,
          project_id: don.projectId || null,
          amount_ngn: don.amountNGN,
          date: don.date,
          donor_name: don.donorName || 'Anonymous',
          email: don.email || null,
          purpose: don.purpose || 'General Mosque Support',
          channel: don.channel || 'Direct Bank Transfer',
          status: don.status || 'PENDING'
        };
        const { data, error } = await client.from('donations').insert([row]).select().single();
        if (error) throw error;
        return data;
      } catch (err) {
        console.error('❌ [Supabase] Error submitting donation:', err);
        return null;
      }
    },

    fetchDonations: async function() {
      if (!client) return null;
      try {
        const { data, error } = await client.from('donations').select('*').order('created_at', { ascending: false });
        if (error) throw error;
        return data.map(r => ({
          ref: r.ref,
          projectId: r.project_id,
          amountNGN: Number(r.amount_ngn),
          date: r.date,
          donorName: r.donor_name,
          email: r.email,
          purpose: r.purpose,
          channel: r.channel,
          status: r.status
        }));
      } catch (err) {
        console.error('❌ [Supabase] Error fetching donations:', err);
        return null;
      }
    },

    updateDonationStatus: async function(ref, status) {
      if (!client) return null;
      try {
        const { data, error } = await client.from('donations').update({ status: status }).eq('ref', ref).select().single();
        if (error) throw error;
        return data;
      } catch (err) {
        console.error('❌ [Supabase] Error updating donation:', err);
        return null;
      }
    },

    // ── MATERIAL / IN-KIND DONATIONS ──
    submitMaterialDonation: async function(mat) {
      if (!client) return null;
      try {
        const row = {
          ref: mat.ref,
          project_id: mat.projectId || null,
          project_title: mat.projectTitle || null,
          materials: mat.materials,
          condition: mat.condition || 'Standard Mosque Grade',
          donor_name: mat.donorName || 'Anonymous',
          phone: mat.phone,
          email: mat.email || null,
          donor_location: mat.donorLocation || null,
          delivery_preference: mat.deliveryPreference || 'Self-Delivery to Mosque Site',
          status: mat.status || 'Pending Delivery / Pickup',
          date: mat.date || new Date().toISOString().split('T')[0]
        };
        const { data, error } = await client.from('material_donations').insert([row]).select().single();
        if (error) throw error;
        return data;
      } catch (err) {
        console.error('❌ [Supabase] Error submitting material donation:', err);
        return null;
      }
    },

    fetchMaterialDonations: async function() {
      if (!client) return null;
      try {
        const { data, error } = await client.from('material_donations').select('*').order('created_at', { ascending: false });
        if (error) throw error;
        return data.map(r => ({
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
        }));
      } catch (err) {
        console.error('❌ [Supabase] Error fetching material donations:', err);
        return null;
      }
    },

    updateMaterialStatus: async function(ref, status) {
      if (!client) return null;
      try {
        const { data, error } = await client.from('material_donations').update({ status: status }).eq('ref', ref).select().single();
        if (error) throw error;
        return data;
      } catch (err) {
        console.error('❌ [Supabase] Error updating material status:', err);
        return null;
      }
    },

    deleteMaterialDonation: async function(ref) {
      if (!client) return null;
      try {
        const { error } = await client.from('material_donations').delete().eq('ref', ref);
        if (error) throw error;
        return true;
      } catch (err) {
        console.error('❌ [Supabase] Error deleting material donation:', err);
        return false;
      }
    },

    // ── PROJECTS & SCOPE ──
    fetchProjects: async function() {
      if (!client) return null;
      try {
        const { data, error } = await client.from('projects').select('*').order('created_at', { ascending: true });
        if (error) throw error;
        return data.map(p => ({
          id: p.id,
          mosqueId: p.mosque_id,
          categoryId: p.category_id,
          status: p.status,
          isFeatured: p.is_featured,
          titleEN: p.title_en,
          titleAR: p.title_ar,
          location: p.location,
          mosqueName: p.mosque_name,
          descriptionEN: p.description_en,
          descriptionAR: p.description_ar,
          goalNGN: Number(p.goal_ngn),
          raisedNGN: Number(p.raised_ngn),
          spentNGN: Number(p.spent_ngn),
          verifiedBy: p.verified_by,
          imageBefore: p.image_before,
          imageAfter: p.image_after,
          expenses: p.expenses || [],
          vendorQuotes: p.vendor_quotes || [],
          scope: p.scope || [],
          timeline: p.timeline || []
        }));
      } catch (err) {
        console.error('❌ [Supabase] Error fetching projects:', err);
        return null;
      }
    },

    saveProject: async function(p) {
      if (!client) return null;
      try {
        const row = {
          id: p.id,
          mosque_id: p.mosqueId,
          category_id: p.categoryId,
          status: p.status,
          is_featured: p.isFeatured !== false,
          title_en: p.titleEN,
          title_ar: p.titleAR,
          location: p.location,
          mosque_name: p.mosqueName,
          description_en: p.descriptionEN,
          description_ar: p.descriptionAR,
          goal_ngn: p.goalNGN,
          raised_ngn: p.raisedNGN,
          spent_ngn: p.spentNGN,
          verified_by: p.verifiedBy,
          image_before: p.imageBefore,
          image_after: p.imageAfter,
          expenses: p.expenses || [],
          vendor_quotes: p.vendorQuotes || [],
          scope: p.scope || [],
          timeline: p.timeline || [],
          updated_at: new Date().toISOString()
        };
        const { data, error } = await client.from('projects').upsert([row]).select().single();
        if (error) throw error;
        return data;
      } catch (err) {
        console.error('❌ [Supabase] Error saving project:', err);
        return null;
      }
    }
  };

})();
