import { render } from './render.js';

export function createApp(component) {
  return {
    mount(target) {
      const container = typeof target === 'string' ? document.querySelector(target) : target;
      container.innerHTML = '';
      render(component(), container);
    }
  };
}
