/* IndoGig — Shared JS */

// Nav scroll
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav') || document.querySelector('nav');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 60);
});

// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const mob = document.querySelector('.nav-mob');
  const links = document.querySelector('.nav-links');
  if (mob && links) {
    mob.addEventListener('click', () => {
      const isOpen = links.classList.toggle('open');
      mob.innerHTML = isOpen
        ? '<span class="material-symbols-outlined">close</span>'
        : '<span class="material-symbols-outlined">menu</span>';
    });
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        links.classList.remove('open');
        mob.innerHTML = '<span class="material-symbols-outlined">menu</span>';
      });
    });
  }

  // FAQ single open
  document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        document.querySelectorAll('.faq-item').forEach(o => {
          if (o !== item) o.open = false;
        });
      }
    });
  });
});

// GA4
(function(){
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=G-MR9RRNN3H3';
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-MR9RRNN3H3');
})();
