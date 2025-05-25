import { render } from './render.js';
import { runMount } from './lifecycle.js';
let idCounter = 0;

export function createApp(component) {
  return {
    mount(target) {
      const container = typeof target === 'string' ? document.querySelector(target) : target;
      container.innerHTML = '';
      const appId = `comp-${idCounter++}`;
      render(component(), container, appId);
      runMount(appId);

    }
  };
}
