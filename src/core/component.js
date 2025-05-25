export function defineComponent(fn) {
  return props => fn(props);
}
