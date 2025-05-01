document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded successfully');

    const translations = {
        en: {
            greeting: 'Hello',
        },
        fi: {
            greeting: 'Moi',
        }
    };

    const updateLanguage = (lang) => {
        console.log(`Switching to language: ${lang}`);
        document.getElementById('greeting').textContent = translations[lang].greeting;
        document.documentElement.lang = lang;
    };

    document.getElementById('en-btn').addEventListener('click', () => updateLanguage('en'));
    document.getElementById('fi-btn').addEventListener('click', () => updateLanguage('fi'));
});