document.querySelectorAll('.nav a').forEach(a => {
  if (a.pathname === location.pathname || (a.getAttribute('href') === 'index.html' && location.pathname.endsWith('/'))) {
    a.classList.add('active');
  }
});
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
