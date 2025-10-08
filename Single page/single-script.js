// Sidebar open/close
const openBtn = document.getElementById('openSidebar');
const closeBtn = document.getElementById('closeSidebar');
const sidebar = document.getElementById('sidebar');

openBtn?.addEventListener('click', () => sidebar.classList.add('open'));
closeBtn?.addEventListener('click', () => sidebar.classList.remove('open'));
sidebar?.addEventListener('click', (e) => {
  if (e.target.classList.contains('side-link')) sidebar.classList.remove('open');
});

// Smooth scroll active state highlight
const links = document.querySelectorAll('.side-link');
const sections = [...links].map(l => document.querySelector(l.getAttribute('href')));

const setActive = () => {
  const y = window.scrollY + 100;
  sections.forEach((sec, i) => {
    if (!sec) return;
    const top = sec.offsetTop, bottom = top + sec.offsetHeight;
    if (y >= top && y < bottom) links[i].classList.add('active');
    else links[i].classList.remove('active');
  });
};
window.addEventListener('scroll', setActive);
window.addEventListener('load', setActive);

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
},{ threshold:0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Loader
const loader = document.getElementById('loader');
window.addEventListener('load', () => setTimeout(() => loader.classList.add('hidden'), 250));

// Subtle tilt on stats card (3D feel)
const tilt = document.querySelector('.tilt');
if (tilt) {
  tilt.addEventListener('mousemove', (e) => {
    const r = tilt.getBoundingClientRect();
    const cx = r.left + r.width/2;
    const cy = r.top + r.height/2;
    const dx = (e.clientX - cx) / r.width;
    const dy = (e.clientY - cy) / r.height;
    tilt.style.transform = `rotateX(${(-dy*4).toFixed(2)}deg) rotateY(${(dx*6).toFixed(2)}deg)`;
  });
  tilt.addEventListener('mouseleave', () => {
    tilt.style.transform = 'rotateX(0) rotateY(0)';
  });
}

// Minimal form validation (frontend only)
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const setErr = (id, msg) => {
      const el = document.getElementById('err-'+id);
      if (el) el.textContent = msg || '';
    };
    setErr('name', name ? '' : 'Please enter a name.');
    setErr('email', emailRe.test(email) ? '' : 'Enter a valid email.');
    setErr('message', message ? '' : 'Please include a message.');

    if (!name || !emailRe.test(email) || !message) return;

    document.getElementById('form-response')?.classList.remove('hidden');
    form.reset();
  });
}
