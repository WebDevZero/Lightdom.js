export function reactive(obj) {
  return new Proxy(obj, {
    set(target, key, value) {
      target[key] = value;
      document.querySelectorAll('[data-bind]').forEach(el => {
        const prop = el.getAttribute('data-bind');
        if (prop === key) el.textContent = value;
      });
      return true;
    }
  });
}
