export function showBanner(message, type = 'info') {
  const banner = document.createElement('div');
  banner.textContent = message;
  banner.style.cssText = `
    background: ${type === 'error' ? '#f44336' : '#2196f3'};
    color: white;
    padding: 10px;
    text-align: center;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
  `;
  document.body.prepend(banner);
  setTimeout(() => banner.remove(), 5000);
}