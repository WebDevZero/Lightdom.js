export function withLogging(componentId, state) {
  return new Proxy(state, {
    set(target, key, value) {
      console.log(`[${componentId}] ${key} changed to`, value);
      target[key] = value;
      return true;
    }
  });
}
