export function fadeIn(node, duration = 500) {
  node.style.opacity = 0;
  node.style.transition = `opacity ${duration}ms`;
  requestAnimationFrame(() => {
    node.style.opacity = 1;
  });
}