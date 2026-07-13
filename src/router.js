export class Router {
  constructor() {
    this.routes = {};
    window.addEventListener("hashchange", () => this.handleRoute());
  }

  addRoute(path, handler) {
    this.routes[path] = handler;
  }

  navigate(hash) {
    // Accept both "#/path" and "/path" formats
    window.location.hash = hash.startsWith("#") ? hash.substring(1) : hash;
  }

  init() {
    this.handleRoute();
  }

  handleRoute() {
    const hash = window.location.hash || "#/";

    let matchedHandler = null;
    let params = {};

    for (const routePath in this.routes) {
      const routeRegex = this.pathToRegex(routePath);
      const match = hash.match(routeRegex);
      if (match) {
        matchedHandler = this.routes[routePath];
        params = this.getParams(routePath, match);
        break;
      }
    }

    if (matchedHandler) {
      matchedHandler(params);
    } else {
      // Fallback to home
      window.location.hash = "/";
    }
  }

  pathToRegex(path) {
    const escaped = path.replace(/\//g, "\\/").replace(/:\w+/g, "([^/]+)");
    return new RegExp("^" + escaped + "$");
  }

  getParams(routePath, match) {
    const params = {};
    const paramNames = (routePath.match(/:\w+/g) || []).map(n => n.substring(1));
    const paramValues = match.slice(1);
    paramNames.forEach((name, i) => {
      params[name] = decodeURIComponent(paramValues[i]);
    });
    return params;
  }
}
