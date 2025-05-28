export function autoResize() {
  const resizeWindow = () => {
    document.body.style.height = `${window.innerHeight}px`;
    document.body.style.width = `${window.innerWidth}px`;
  };

  window.addEventListener('resize', resizeWindow);
  resizeWindow();
}