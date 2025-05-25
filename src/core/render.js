export function render(element, container) {
  const node = typeof element === 'string' ? document.createTextNode(element) : document.createElement(element.type);

  if (typeof element !== 'string') {
    Object.entries(element.props || {}).forEach(([key, value]) => {
      if (key.startsWith('on') && typeof value === 'function') {
        node.addEventListener(key.slice(2).toLowerCase(), value);
      } else {
        node.setAttribute(key, value);
      }
    });

    element.children.forEach(child => render(child, node));
  }

  container.appendChild(node);
}
