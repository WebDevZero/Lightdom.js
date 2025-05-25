# Examples

## Counter Example

> This example shows how to use reactive state and update the UI automatically.

```
import { createElement as h } from '../src/core/createElement.js';
import { render } from '../src/core/render.js';
import { reactive } from '../src/core/reactive.js';

const state = reactive({ count: 0 });

function Counter() {
  return h('div', null,
    h('p', { 'data-bind': 'count' }, state.count),
    h('button', { onClick: () => state.count++ }, 'Increment')
  );
}

render(Counter(), document.getElementById('app'));
```

---
## Simple button

> A button with an alert on click.

```
import { createElement as h } from '../src/core/createElement.js';
import { render } from '../src/core/render.js';

function HelloButton() {
  return h('button', { onClick: () => alert('Hello!') }, 'Click Me');
}

render(HelloButton(), document.getElementById('app'));
```

