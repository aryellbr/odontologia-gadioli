/* ════════════════════════════════════════════════
   Odontologia Gadioli — script.js
   ════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  /* ── HEADER: encolhe ao rolar ──────────────── */
  const header = document.getElementById('header');

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  });

  /* ── SCROLL REVEAL ─────────────────────────── */
  const revealEls = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // para de observar após revelar
        }
      });
    },
    { threshold: 0.12 }
  );

  revealEls.forEach((el) => observer.observe(el));
});
