// ============================================
// Animaciones al hacer scroll
// ============================================
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});

// ============================================
// Sombra del header al hacer scroll
// ============================================
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 100) {
    header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
  } else {
    header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
  }
});

// ============================================
// Menú móvil (antes era un onclick inline)
// ============================================
const menuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.getElementById('navMenu');
if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}

// ============================================
// Acordeón de preguntas frecuentes (antes eran onclick inline)
// ============================================
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    button.parentElement.classList.toggle('active');
  });
});

// ============================================
// Email ofuscado (evita cosecha automática de la dirección por bots de spam)
// ============================================
document.querySelectorAll('.email-obfuscated').forEach(el => {
  const user = el.getAttribute('data-user');
  const domain = el.getAttribute('data-domain');
  el.textContent = user + '@' + domain;
});

document.querySelectorAll('.email-obfuscated-link').forEach(el => {
  const user = el.getAttribute('data-user');
  const domain = el.getAttribute('data-domain');
  el.setAttribute('href', 'mailto:' + user + '@' + domain);
});
