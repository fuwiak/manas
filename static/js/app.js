// Import functions from vendors
import { initProjectsSlider, initMap } from './vendors.js';

// Month text for promo
const months = ['январе','феврале','марте','апреле','мае','июне','июле','августе','сентябре','октябре','ноябре','декабре'];
const saleMonthEl = document.getElementById('sale-month');
if (saleMonthEl) saleMonthEl.textContent = months[new Date().getMonth()];

// Modals
function openModal(name) {
  const m = document.querySelector(`.modal[data-modal="${name}"]`);
  if (!m) return;
  m.classList.add('show');
}
function closeModal(modal) {
  modal.classList.remove('show');
}
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.open-modal');
  if (btn) {
    e.preventDefault();
    const href = btn.getAttribute('href') || '#form';
    const target = href.replace('#','');
    const title = btn.dataset.title;
    const product = document.querySelector('.product-name');
    if (product && title) product.textContent = title;
    openModal(target);
  }
  if (e.target.matches('.modal__overlay') || e.target.matches('.modal__close')) {
    const modal = e.target.closest('.modal');
    if (modal) closeModal(modal);
  }
});

// Forms (demo handler)
function handleFormSubmit(e) {
  e.preventDefault();
  const form = e.target.closest('form');
  const data = Object.fromEntries(new FormData(form).entries());
  console.log('Lead:', data);
  alert('Спасибо! Мы свяжемся с вами.');
  const modal = e.target.closest('.modal');
  if (modal) closeModal(modal);
}
document.querySelectorAll('.form-item').forEach(f => {
  f.addEventListener('submit', handleFormSubmit);
});

// FAQ collapses
document.querySelectorAll('.collapse').forEach(c => {
  c.querySelector('.collapse__header')?.addEventListener('click', () => {
    c.classList.toggle('open');
  });
});

// Init vendors - poczekaj na załadowanie DOM i bibliotek
function initVendors() {
  // Poczekaj na Swiper
  if (typeof Swiper === 'undefined') {
    setTimeout(initVendors, 100);
    return;
  }
  
  // Poczekaj na Leaflet
  if (typeof L === 'undefined') {
    setTimeout(initVendors, 100);
    return;
  }
  
  initProjectsSlider();
  initMap();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initVendors);
} else {
  initVendors();
}

// (optional) cookieconsent
if (window.cookieconsent) {
  window.cookieconsent.initialise({
    palette: { popup: { background: 'rgb(34 35 43)' }, button: { background: '#ffcf3b' } },
    content: {
      message: 'На сайте используются cookie-файлы для показа актуальной информации.',
      dismiss: 'Согласен!',
      link: 'Подробнее',
      href: '#'
    }
  });
}
