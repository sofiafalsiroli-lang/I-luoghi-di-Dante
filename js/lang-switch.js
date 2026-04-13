// Language Switcher Script for Dante Map
// This script enables the language dropdown and handles switching

document.addEventListener('DOMContentLoaded', function () {
  const langBtn = document.getElementById('lang-btn');
  const langMenu = document.getElementById('lang-menu');

  if (!langBtn || !langMenu) return;

  // Toggle menu on button click
  langBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    const expanded = langBtn.getAttribute('aria-expanded') === 'true';
    langMenu.style.display = expanded ? 'none' : 'block';
    langBtn.setAttribute('aria-expanded', (!expanded).toString());
  });

  // Hide menu when clicking outside
  document.addEventListener('click', function (e) {
    if (!langBtn.contains(e.target) && !langMenu.contains(e.target)) {
      langMenu.style.display = 'none';
      langBtn.setAttribute('aria-expanded', 'false');
    }
  });

  // Handle language selection
  langMenu.querySelectorAll('button[data-lang]').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      const lang = btn.getAttribute('data-lang');
      // Implement your language switching logic here
      // For now, just alert the user
      alert('Language switch to: ' + lang + ' (implement navigation logic)');
      langMenu.style.display = 'none';
      langBtn.setAttribute('aria-expanded', 'false');
    });
  });
});
