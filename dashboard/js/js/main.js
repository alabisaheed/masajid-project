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

// Robust Mobile Navigation Toggle
function toggleMobileNav() {
  const navMobile = document.getElementById('nav-mobile');
  if (navMobile) {
    navMobile.classList.toggle('open');
  }
}

// Toast Notification Utility
function showToast(msg, duration = 3000) {
  let toast = document.getElementById('mp-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'mp-toast';
    toast.style.cssText = `
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      background: #13547A;
      color: #FFFFFF;
      padding: 0.85rem 1.4rem;
      border-radius: 9999px;
      font-size: 0.9rem;
      font-weight: 700;
      box-shadow: 0 10px 25px rgba(0,0,0,0.25);
      z-index: 99999;
      display: flex;
      align-items: center;
      gap: 0.6rem;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      opacity: 0;
      transform: translateY(20px);
    `;
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #10B981;"></i> <span>${msg}</span>`;
  toast.style.opacity = '1';
  toast.style.transform = 'translateY(0)';

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
  }, duration);
}

// Copy to Clipboard Utility
function copyToClipboard(text, successMsg = 'Copied to clipboard!') {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => showToast(successMsg));
  } else {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      showToast(successMsg);
    } catch (err) {
      showToast('Failed to copy text.');
    }
    document.body.removeChild(textArea);
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

  document.querySelectorAll('[data-count]').forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  highlightActiveNav();
  initScrollAnimations();
  initCounters();
  if (currentCurrency) setCurrency(currentCurrency);

  // Close mobile nav on click outside
  document.addEventListener('click', (e) => {
    const navMobile = document.getElementById('nav-mobile');
    const toggleBtn = document.querySelector('.nav__hamburger');
    if (navMobile && navMobile.classList.contains('open')) {
      if (!navMobile.contains(e.target) && (!toggleBtn || !toggleBtn.contains(e.target))) {
        navMobile.classList.remove('open');
      }
    }
  });
});
