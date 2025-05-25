const hooksMap = new Map();

export function registerHooks(id, hooks) {
  hooksMap.set(id, hooks);
}

export function runMount(id) {
  const hooks = hooksMap.get(id);
  if (hooks && hooks.onMount) hooks.onMount();
}

export function runUpdate(id) {
  const hooks = hooksMap.get(id);
  if (hooks && hooks.onUpdate) hooks.onUpdate();
}

export function runUnmount(id) {
  const hooks = hooksMap.get(id);
  if (hooks && hooks.onUnmount) hooks.onUnmount();
}
