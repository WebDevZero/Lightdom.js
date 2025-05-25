import { createElement as h } from './core/createElement.js';
import { createApp } from './core/app.js';
import HelloButton from './components/HelloButton.js';

const App = () =>
  h('div', null,
    h('h1', null, 'Welcome to Lightdom.js'),
    HelloButton()
  );

createApp(App).mount('#app');
