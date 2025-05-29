# Plugins

You can improve your components with plugins. eg.:

## logger.js plugin:

Usage example:

```
import { withLogging } from './plugins/logger.js';

const state = withLogging('comp-id', { count: 0 });
```
---
## themetoggle .js plugin:

Usage example:

```
import { toggleTheme } from '../plugins/themetoggle.js';
toggleTheme(); // you can for example call it on click here
```
---
## storage.js plugin:

Usage example:

```
import { storage } from '../plugins/storage.js';
storage.set('user', { name: 'whatevernameyouwant' });
console.log(storage.get('user'));
```
---
## scrolltotop.js plugin:

Usage example:

```
import { scrollToTop } from './plugins/scrolltotop.js';
scrollToTop();
```
---
## autoresizer.js plugin:

Usage example:

```
import { autoResize } from './plugins/autoresizer.js';
autoResize();
```
---
## banner.js plugin:

Usage example:

```
import { showBanner } from './plugins/banner.js';
showBanner('Welcome to Lightdom.js!', 'info');
```
---

