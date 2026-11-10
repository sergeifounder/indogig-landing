// Animate once on entry. Content stays visible without JavaScript.
if (window.IntersectionObserver && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.animate(
        [{ opacity: 0.55, transform: 'translateY(12px)' }, { opacity: 1, transform: 'translateY(0)' }],
        { duration: 360, easing: 'ease-out' },
      );
      observer.unobserve(entry.target);
    }
  }, { threshold: 0.14 });
  document.querySelectorAll('.industry-photo, .coverage-preview .board, .pilot-panel')
    .forEach((element) => observer.observe(element));
}
