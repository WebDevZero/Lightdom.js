export function createRouter(routes) {
  function renderRoute() {
    const path = location.hash.slice(1);
    const route = routes[path] || routes['*'];
    if (route) {
      route();
    }
  }

  window.addEventListener('hashchange', renderRoute);
  window.addEventListener('load', renderRoute);
}
