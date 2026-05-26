// =============================================
// BLUB'S PRINTS — main.js
// =============================================

// Mobile hamburger menu
const hamburger    = document.getElementById('hamburger');
const mobileMenu   = document.getElementById('mobileMenu');
const mobileClose  = document.getElementById('mobileClose');
const mobileOverlay = document.getElementById('mobileOverlay');

function openMenu() {
  mobileMenu.classList.add('open');
  mobileOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  hamburger.setAttribute('aria-label', 'Close Menu');
}

function closeMenu() {
  mobileMenu.classList.remove('open');
  mobileOverlay.classList.remove('open');
  document.body.style.overflow = '';
  hamburger.setAttribute('aria-label', 'Open Menu');
}

if (hamburger) hamburger.addEventListener('click', openMenu);
if (mobileClose) mobileClose.addEventListener('click', closeMenu);
if (mobileOverlay) mobileOverlay.addEventListener('click', closeMenu);

// Hero image press/spring animation (CSS handles the :active state,
// but we also support tap end on mobile)
const heroImg = document.getElementById('heroImg');
if (heroImg) {
  heroImg.addEventListener('dragstart', e => e.preventDefault());
}

// ── Copy email to clipboard on click ──────────────────────────────────────
// Intercepts all mailto: links, copies the address, and shows a small tooltip.

function showCopiedTooltip(link) {
  // Avoid stacking duplicate tooltips
  if (link.querySelector('.copied-tooltip')) return;

  const tip = document.createElement('span');
  tip.className = 'copied-tooltip';
  tip.textContent = 'Copied!';
  link.appendChild(tip);

  // Trigger the fade-in on next frame so the CSS transition fires
  requestAnimationFrame(() => tip.classList.add('visible'));

  setTimeout(() => {
    tip.classList.remove('visible');
    setTimeout(() => tip.remove(), 300);
  }, 1800);
}

/* document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // don't open the mail client

    const email = this.href.replace('mailto:', '').trim();

    navigator.clipboard.writeText(email).then(() => {
      showCopiedTooltip(this);
    }).catch(() => {
      // Fallback for older browsers / HTTP
      const ta = document.createElement('textarea');
      ta.value = email;
      ta.style.cssText = 'position:fixed;opacity:0;pointer-events:none';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
      showCopiedTooltip(this);
    });
  });
});
*/
