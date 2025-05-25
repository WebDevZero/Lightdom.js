# API Documentaion

## `createElement(type, props, ...children)`

- Creates a virtual element  
- `type`: tag name string  
- `props`: attributes and events  
- `children`: strings, numbers, or elements

---

## `render(element, container)`

- Renders virtual element to real DOM  
- Supports `className` prop and event handlers (`onClick`, etc.)  
- Recursively renders children  
- Handles text nodes (string/number)

---

## `reactive(object)`

- Makes an object reactive  
- Updates DOM elements with matching `data-bind` attributes on change

---

## Event handlers

- Use props like `onClick` for events

---
