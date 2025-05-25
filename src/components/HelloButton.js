import { createElement as h} from '../core/createElement.js';
import { defineComponent } from '../core/component.js';
import { registerHooks } from '../core/lifecycle.js';

const HelloButton = defineComponent(() => {
  registerHooks('comp-0', {
   onMount: () => console.log('HelloButton mounted!'),
    onUpdate: () => console.log('HelloButton updated!'),
    onUnmount: () => console.log('HelloButton unmounted!'),
});
 return h(
    'button',
    { onclick: () => alert('Hello from your framework!') },
    'Click Me'
  );
});

export default HelloButton;
