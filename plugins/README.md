## Plugins

You can improve your components with plugins. eg.:

```
import { withLogging } from './plugins/logger.js';

const state = withLogging('comp-id', { count: 0 });
```