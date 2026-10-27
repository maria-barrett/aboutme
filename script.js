(() => {
  const header = document.getElementById('site-header');
  const navLinks = [...document.querySelectorAll('.nav a[data-section]')];
  const sections = navLinks.map(a => document.getElementById(a.dataset.section));

  // Sticky header border + active nav link
  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 8);
    const y = window.scrollY + window.innerHeight * 0.35;
    let active = null;
    sections.forEach(s => { if (s && s.offsetTop <= y) active = s.id; });
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) active = 'contact';
    navLinks.forEach(a => a.classList.toggle('is-active', a.dataset.section === active));
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Fade sections in as they scroll into view
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduceMotion && 'IntersectionObserver' in window) {
    document.documentElement.classList.add('js-reveal');
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  }

  // RiffCue screenshot lightbox
  const lightbox = document.getElementById('lightbox');
  const openBtn = document.getElementById('shot-open');
  const closeBtn = document.getElementById('shot-close');
  const open = () => { lightbox.hidden = false; document.body.style.overflow = 'hidden'; closeBtn.focus(); };
  const close = () => { lightbox.hidden = true; document.body.style.overflow = ''; openBtn.focus(); };
  openBtn.addEventListener('click', open);
  lightbox.addEventListener('click', close);
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !lightbox.hidden) close(); });
})();
