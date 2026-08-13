/**
 * Masajid Project — Main JavaScript
 * Shared interactive utilities: Currency management, animations, navigation, filters, modal/toast
 */

const gWin = typeof window !== 'undefined' ? window : global;
gWin.currentCurrency = (typeof localStorage !== 'undefined' && localStorage.getItem('mp_currency')) || 'NGN';
var currentCurrency = gWin.currentCurrency;

// Set Global Currency
function setCurrency(curr) {
  gWin.currentCurrency = curr;
  currentCurrency = curr;
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('mp_currency', curr);
  }

  // Update all data-amount elements
  document.querySelectorAll('[data-amount]').forEach(el => {
    const rawNGN = parseFloat(el.getAttribute('data-amount'));
    if (!isNaN(rawNGN) && window.MP && typeof MP.formatCurrency === 'function') {
      el.textContent = MP.formatCurrency(rawNGN, currentCurrency);
    }
  });

  // Sync currency select dropdowns
  document.querySelectorAll('.currency-select').forEach(select => {
    select.value = currentCurrency;
  });
}

// Mobile Navigation Toggle
function toggleMobileNav() {
  const navMobile = document.getElementById('nav-mobile');
  if (navMobile) {
    navMobile.classList.toggle('open');
  }
}

// Highlight Active Link
function highlightActiveNav() {
  const path = window.location.pathname.split('/').pop().replace(/\.html$/, '') || '';
  document.querySelectorAll('.nav__link').forEach(link => {
    const href = (link.getAttribute('href') || '').replace(/^\.\//, '').replace(/\.html$/, '');
    if (href === path || (path === '' && (href === '' || href === 'index'))) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Scroll Intersection Animations
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, idx) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, idx * 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.animate-in').forEach(el => observer.observe(el));
}

// Counter Animation
function initCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const targetVal = parseFloat(el.dataset.countTo || el.getAttribute('data-count'));
        const prefix = el.dataset.prefix || '';
        const suffix = el.dataset.suffix || '';
        
        if (!isNaN(targetVal)) {
          let start = 0;
          const duration = 1600;
          const startTime = performance.now();

          function updateCount(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(start + (targetVal - start) * easeOut);

            el.textContent = prefix + (targetVal > 1000 ? current.toLocaleString() : current) + suffix;

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            } else {
              el.textContent = prefix + (targetVal > 1000 ? targetVal.toLocaleString() : targetVal) + suffix;
            }
          }
          requestAnimationFrame(updateCount);
        }
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('[data-count-to]').forEach(el => observer.observe(el));
}

// Toast Notifications
function showToast(message, duration = 3000) {
  let toast = document.getElementById('global-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'global-toast';
    toast.style.cssText = `
      position: fixed; bottom: 30px; right: 30px;
      background: #0C3852; color: #FFFFFF;
      border: 1px solid #13547A; padding: 14px 20px;
      border-radius: 8px; box-shadow: 0 10px 25px rgba(19,84,122,0.3);
      font-size: 0.9rem; font-weight: 600; z-index: 9999;
      opacity: 0; transform: translateY(20px); transition: all 0.3s ease;
      display: flex; align-items: center; gap: 10px;
    `;
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color:#D4AF37"></i> ${message}`;
  toast.style.opacity = '1';
  toast.style.transform = 'translateY(0)';

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
  }, duration);
}

// Back to top button
function initBackToTop() {
  let btn = document.getElementById('back-to-top');
  if (!btn) {
    btn = document.createElement('button');
    btn.id = 'back-to-top';
    btn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
    btn.style.cssText = `
      position: fixed; bottom: 24px; right: 24px;
      width: 44px; height: 44px; border-radius: 50%;
      background: var(--primary); color: #FFFFFF; border: none;
      font-size: 1.1rem; font-weight: bold; cursor: pointer;
      box-shadow: 0 4px 15px rgba(19,84,122,0.4);
      opacity: 0; transform: translateY(10px); transition: all 0.3s ease;
      z-index: 9999; display: flex; align-items: center; justify-content: center;
      pointer-events: none;
    `;
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        btn.style.opacity = '1';
        btn.style.transform = 'translateY(0)';
        btn.style.pointerEvents = 'auto';
      } else {
        btn.style.opacity = '0';
        btn.style.transform = 'translateY(10px)';
        btn.style.pointerEvents = 'none';
      }
    });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// Global FAQ Tab & Accordion Controller
function toggleFaqTab(tabName, btn) {
  document.querySelectorAll('.faq-pill-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  const donorStack = document.getElementById('faq-stack-donors');
  const masajidStack = document.getElementById('faq-stack-masajid');
  const transparencyStack = document.getElementById('faq-stack-transparency');

  if (donorStack) donorStack.style.display = (tabName === 'donors') ? 'flex' : 'none';
  if (masajidStack) masajidStack.style.display = (tabName === 'masajid') ? 'flex' : 'none';
  if (transparencyStack) transparencyStack.style.display = (tabName === 'transparency') ? 'flex' : 'none';
}

function toggleFaqCard(cardEl) {
  if (!cardEl) return;
  const isOpen = cardEl.classList.contains('open');
  
  // Close sibling cards in the same stack
  const parentStack = cardEl.parentElement;
  if (parentStack) {
    parentStack.querySelectorAll('.kobble-faq-card').forEach(c => c.classList.remove('open'));
  }

  if (!isOpen) {
    cardEl.classList.add('open');
  }
}

// Global Filter Projects Handler
gWin.filterProjects = function(filter, btn) {
  const normFilter = String(filter || 'all').toLowerCase().replace(/_/g, '-');

  // 1. Highlight active pill button
  const allBtns = document.querySelectorAll('.filter-btn');
  allBtns.forEach(b => b.classList.remove('active'));

  if (btn) {
    btn.classList.add('active');
  } else {
    const targetBtn = Array.from(allBtns).find(b => {
      const df = (b.getAttribute('data-filter') || b.textContent || '').toLowerCase().replace(/_/g, '-');
      return df.includes(normFilter);
    });
    if (targetBtn) targetBtn.classList.add('active');
  }

  // 2. Toggle project card visibility in DOM
  const cards = document.querySelectorAll('.projects-grid .project-card, #homepage-projects .project-card');
  let matchCount = 0;

  cards.forEach(card => {
    const cardStatus = (card.getAttribute('data-status') || '').toLowerCase().replace(/_/g, '-');
    if (normFilter === 'all' || cardStatus === normFilter) {
      card.style.display = 'flex';
      card.style.opacity = '1';
      card.style.visibility = 'visible';
      matchCount++;
    } else {
      card.style.display = 'none';
    }
  });

  return matchCount;
};

// Global DOM Loaded
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    highlightActiveNav();
    initScrollAnimations();
    initCounters();
    initBackToTop();
    setCurrency(currentCurrency);

    // Bind filter button click events automatically
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        const filterVal = this.getAttribute('data-filter') || this.textContent.trim().toLowerCase().replace(/\s+/g, '-');
        window.filterProjects(filterVal, this);
      });
    });
  });
}
