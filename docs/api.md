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

## `registerHooks(componentId, hooks)`

Register lifecycle hooks for a component instance.

- **componentId** (string): Unique ID for this component instance  
- **hooks** (object): Lifecycle callbacks  

### Available hooks

- `onMount`: Called after component is mounted  
- `onUpdate`: Called after component updates  
- `onUnmount`: Called before component unmounts  

### Usage

```
import { registerHooks } from './core/lifecycle.js';

registerHooks('comp-0', {
  onMount() {
    console.log('Mounted!');
  },
  onUpdate() {
    console.log('Updated!');
  },
  onUnmount() {
    console.log('Unmounted!');
  }
});
```

---

