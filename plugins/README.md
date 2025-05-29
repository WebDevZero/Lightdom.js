# Plugins

You can improve your components with plugins. eg.:

## Using plugins inside components:

To use any plugin inside a component, just import it and call it on the element after it's rendered. Here's a simple example:
```
import { createElement as h, defineComponent } from '../core/component.js';
import { yourPlugin } from '../plugins/yourPlugin.js';
const MyComponent = defineComponent(() => {
  setTimeout(() => {
    const el = document.querySelector('.my-element');
    if (el) yourPlugin(el);
  }, 0);

  return h('div', { className: 'my-element' }, 'Hello from plugin!');
});
export default MyComponent;
```
---

## logger.js plugin:

This is how you would use it outside a component (globally)
Usage example:

```
import { withLogging } from './plugins/logger.js';

const state = withLogging('comp-id', { count: 0 });
```
---
## themetoggle .js plugin:

This is how you would use it outside a component (globally)
Usage example:

```
import { toggleTheme } from '../plugins/themetoggle.js';
toggleTheme(); // you can for example call it on click here
```
---
## storage.js plugin:

This is how you would use it outside a component (globally)
Usage example:

```
import { storage } from '../plugins/storage.js';
storage.set('user', { name: 'whatevernameyouwant' });
console.log(storage.get('user'));
```
---
## scrolltotop.js plugin:

This is how you would use it outside a component (globally)
Usage example:

```
import { scrollToTop } from './plugins/scrolltotop.js';
scrollToTop();
```
---
## autoresizer.js plugin:

This is how you would use it outside a component (globally)
Usage example:

```
import { autoResize } from './plugins/autoresizer.js';
autoResize();
```
---
## banner.js plugin:

This is how you would use it outside a component (globally)
Usage example:

```
import { showBanner } from './plugins/banner.js';
showBanner('Welcome to Lightdom.js!', 'info');
```
---
## animation.js plugin:

This is how you would use it outside a component (globally)
Usage example:

```
import { fadeIn } from './plugins/animation.js';
fadeIn(document.querySelector('.myElement'), 600);
```
---
