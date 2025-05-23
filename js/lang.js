async function loadLanguage(lang) {
  const res = await fetch('lang/' + lang + '.json');
  const translations = await res.json();
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const keys = el.getAttribute('data-i18n').split('.');
    let value = translations;
    keys.forEach(key => {
      value = value[key];
    });
    if (value) el.textContent = value;
  });
}

function changeLanguage(lang) {
  localStorage.setItem('lang', lang);
  loadLanguage(lang);
}

document.getElementById('language-switcher').addEventListener('change', (e) => {
  changeLanguage(e.target.value);
});

window.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang') || 'en';
  document.getElementById('language-switcher').value = savedLang;
  loadLanguage(savedLang);
});
