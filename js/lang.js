async function loadLanguage(lang) {
  const res = await fetch('lang/' + lang + '.json');
  const translations = await res.json();
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const keys = el.getAttribute('data-i18n').split('.');
    let value = translations;
    keys.forEach(key => {
      value = value ? value[key] : undefined;
    });
    if (value) {
      // Use innerHTML for paragraphs to support line breaks and <br>
      if (el.tagName === 'P' || el.tagName === 'BLOCKQUOTE') {
        el.innerHTML = value.replace(/\n/g, '<br>');
      } else {
        el.textContent = value;
      }
    }
  });
  // Ensure testimonials are shown only once per language
  renderTestimonialTranslations(lang);
}

function changeLanguage(lang) {
  localStorage.setItem('lang', lang);
  loadLanguage(lang);
  window.dispatchEvent(new Event('languageChanged'));
}

document.getElementById('language-switcher').addEventListener('change', (e) => {
  changeLanguage(e.target.value);
});

window.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang') || 'en';
  document.getElementById('language-switcher').value = savedLang;
  loadLanguage(savedLang);
});

function renderTestimonialTranslations(lang) {
  document.querySelectorAll('.testimonial').forEach(testimonial => {
    const quoteOriginal = testimonial.querySelector('[data-i18n$=".original"]');
    const quoteTranslation = testimonial.querySelector('.testimonial-translation');
    if (!quoteOriginal || !quoteTranslation) return;
    // English testimonial (t1) is in English, others are in Finnish
    const isEnglishOriginal = quoteOriginal.innerText.trim().startsWith('Dear Merja');
    if (lang === 'en') {
      if (isEnglishOriginal) {
        quoteOriginal.style.display = '';
        quoteTranslation.style.display = 'none';
      } else {
        quoteOriginal.style.display = 'none';
        quoteTranslation.style.display = '';
      }
    } else if (lang === 'fi') {
      if (!isEnglishOriginal) {
        quoteOriginal.style.display = '';
        quoteTranslation.style.display = 'none';
      } else {
        quoteOriginal.style.display = 'none';
        quoteTranslation.style.display = '';
      }
    } else {
      quoteOriginal.style.display = '';
      quoteTranslation.style.display = '';
    }
  });
}
