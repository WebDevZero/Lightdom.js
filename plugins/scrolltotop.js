export function scrollToTop() {
  const btn = document.createElement('button');
  btn.textContent = '↑ Top';
  btn.style.position = 'fixed';
  btn.style.bottom = '50px';
  btn.style.right = '10px';
  btn.style.display = 'none';
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) btn.style.display = 'block';
    else btn.style.display = 'none';
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}