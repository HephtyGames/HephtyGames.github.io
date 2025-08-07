/* load-footer.js – inject footer.html into every page */

/* reusable function */
function loadFooter () {
  const container = document.getElementById('site-footer');
  if (!container) return;

  fetch('footer.html')
    .then(resp => resp.text())
    .then(html => { container.innerHTML = html; })
    .catch(err => console.error('Footer load failed:', err));
}

/* If the DOM is already parsed, run immediately;
   otherwise wait for DOMContentLoaded. */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadFooter);
} else {
  loadFooter();
}
