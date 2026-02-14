// ==========================================
// SECTION VISIBILITY (Scroll Animations)
// ==========================================
function isSectionVisible(section) {
  const rect = section.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  return rect.top <= windowHeight && rect.bottom >= 0;
}

function checkVisibility() {
  const sections = document.querySelectorAll(".section");
  sections.forEach(section => {
    if (isSectionVisible(section)) {
      section.classList.add('visible');
    }
  });
}

// ==========================================
// NAVBAR: Shrink on Scroll
// ==========================================
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });
}

// ==========================================
// NAVBAR: Auto-detect Active Page
// ==========================================
function initActiveNav() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.navbar .nav-link');

  navLinks.forEach(link => {
    link.classList.remove('active');

    const href = link.getAttribute('href');
    if (!href) return;

    // Resolve the href relative to current page
    const linkUrl = new URL(href, window.location.href);
    const linkPath = linkUrl.pathname;

    // Match: exact path or filename match
    if (currentPath === linkPath) {
      link.classList.add('active');
    } else if (currentPath.endsWith('/') && linkPath.endsWith('index.html')) {
      link.classList.add('active');
    }
  });
}

// ==========================================
// BACK TO TOP BUTTON
// ==========================================
function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ==========================================
// INIT
// ==========================================
window.addEventListener('scroll', checkVisibility, { passive: true });
window.addEventListener('load', () => {
  checkVisibility();
  initNavbarScroll();
  initActiveNav();
  initBackToTop();
});