# Lightdom.js

![GitHub repo size](https://img.shields.io/github/repo-size/WebDevZero/Lightdom.js)
![License](https://img.shields.io/github/license/WebDevZero/Lightdom.js)
![Made with JS](https://img.shields.io/badge/made%20with-JavaScript-yellow)

---

## 🚀 About

Lightdom.js is a lightweight, simple JavaScript frontend framework built from scratch.  
Designed to help you learn framework internals and build small projects with ease.

---

## ⚙️ Features

- Custom `createElement` function for building virtual DOM objects  
- Declarative component system with `defineComponent`  
- Simple DOM renderer with event binding  
- Reactive state with `reactive()` proxy  
- Easy app mounting with `createApp`

---

## 📁 Project Structure

```text
Lightdom.js/
├── public/
│   └── index.html
├── src/
│   ├── core/
│   │   ├── app.js
│   │   ├── component.js
│   │   ├── createElement.js
│   │   ├── reactive.js
│   │   └── render.js
│   ├── components/
│   │   └── HelloButton.js
│   └── main.js
├── .gitignore
└── README.md
```

---

## 💻 Getting Started

### Prerequisites

- Node.js & npm (optional, if you want to use `serve` or other tools)  
- VS Code or your favorite editor

### Run Locally

```bash
git clone https://github.com/WebDevZero/Lightdom.js.git
cd Lightdom.js
```

```bash
npm install -g serve
serve public
```

Open your browser at the URL provided by `serve`

---

## 🛠️ Usage Example

```js
import { createElement as h } from './core/createElement.js';
import { createApp } from './core/app.js';
import HelloButton from './components/HelloButton.js';

const App = () =>
  h('div', null,
    h('h1', null, 'Welcome to Your Mini Framework'),
    HelloButton()
  );

createApp(App).mount('#app');
```

---

## 📚 Learn More

- Learn about JavaScript Proxies for reactivity  
- Understand Virtual DOM concepts  
- Explore component-based UI architecture

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

You are free to use and modify this code, but please give appropriate credit.

---

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

Please follow standard GitHub flow:

Fork the repo
Create a feature branch
Submit a pull request with a clear description of your changes

---

## Thanks!

Thanks for checking out this project — happy coding!

---

