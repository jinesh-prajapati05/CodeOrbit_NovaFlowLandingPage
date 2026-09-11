/* =========================================================
   NovaFlow — main.js
   Vanilla JS: mobile menu, FAQ accordion, scroll reveal,
   navbar scroll state, back-to-top.
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {
  initHeaderScrollState();
  initMobileMenu();
  initSmoothScroll();
  initFaqAccordion();
  initScrollReveal();
  initBackToTop();
});

/**
 * Adds a "scrolled" class to the header once the page scrolls
 * past a small threshold, enabling the blurred background style.
 */
function initHeaderScrollState() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const SCROLL_THRESHOLD = 12;

  function updateHeaderState() {
    if (window.scrollY > SCROLL_THRESHOLD) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  updateHeaderState();
  window.addEventListener('scroll', updateHeaderState, { passive: true });
}

/**
 * Handles opening/closing the mobile hamburger menu, keeps
 * aria-expanded in sync, and closes the menu whenever a
 * navigation link inside it is selected.
 */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  if (!hamburger || !mobileNav) return;

  function openMenu() {
    mobileNav.hidden = false;
    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.setAttribute('aria-label', 'Close menu');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileNav.hidden = true;
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Open menu');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', function () {
    const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
    isOpen ? closeMenu() : openMenu();
  });

  // Close the mobile menu whenever a nav link is clicked
  const mobileLinks = mobileNav.querySelectorAll('.mobile-nav-link, .mobile-nav-actions a');
  mobileLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape key for keyboard users
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && hamburger.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      hamburger.focus();
    }
  });
}

/**
 * Enables smooth scrolling for all in-page anchor links,
 * accounting for the fixed header height.
 */
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(function (link) {
    link.addEventListener('click', function (event) {
      const targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      event.preventDefault();
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Move focus to the target for accessibility after the scroll settles
      window.setTimeout(function () {
        targetEl.setAttribute('tabindex', '-1');
        targetEl.focus({ preventScroll: true });
      }, 400);
    });
  });
}

/**
 * Implements the FAQ accordion: only one answer is open at a
 * time, toggled via click or keyboard (Enter/Space handled
 * natively since we use real <button> elements).
 */
function initFaqAccordion() {
  const faqButtons = document.querySelectorAll('.faq-question');

  faqButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const answer = button.closest('.faq-item').querySelector('.faq-answer');
      const isOpen = button.getAttribute('aria-expanded') === 'true';

      // Close every other open FAQ item first
      faqButtons.forEach(function (otherButton) {
        if (otherButton !== button) {
          otherButton.setAttribute('aria-expanded', 'false');
          const otherAnswer = otherButton.closest('.faq-item').querySelector('.faq-answer');
          otherAnswer.style.maxHeight = null;
        }
      });

      // Toggle the clicked item
      if (isOpen) {
        button.setAttribute('aria-expanded', 'false');
        answer.style.maxHeight = null;
      } else {
        button.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}

/**
 * Reveals elements with the .reveal class as they enter the
 * viewport, using IntersectionObserver for performance.
 * Falls back to showing everything immediately if unsupported.
 */
function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal');
  if (!revealEls.length) return;

  if (!('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  const observer = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealEls.forEach(function (el) { observer.observe(el); });
}

/**
 * Shows a "back to top" button once the user has scrolled down
 * the page, and scrolls smoothly to the top when clicked.
 */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  const SHOW_AFTER = 500;

  function toggleVisibility() {
    backToTopBtn.hidden = window.scrollY < SHOW_AFTER;
  }

  toggleVisibility();
  window.addEventListener('scroll', toggleVisibility, { passive: true });

  backToTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
