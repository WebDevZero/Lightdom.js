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
import { toggleTheme } from '../plugins/themeToggle.js';
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
import { scrollToTop } from './plugins/scrollToTop.js';
scrollToTop();
```
---
## autoresizer.js plugin:

Usage example:

```
import { autoResize } from './plugins/autoResizer.js';
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

