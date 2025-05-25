import { createElement as h, defineComponent } from '../core/component.js';

const HelloButton = defineComponent(() =>
  h('button', { onclick: () => alert('Hello from your framework!') }, 'Click Me')
);

export default HelloButton;
