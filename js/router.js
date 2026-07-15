/**
 * js/router.js — Roteador hash-based simples
 * Expõe window.UPEDIA_ROUTER (instância global)
 */
(function () {
  function Router() {
    this.routes = {};
    var self = this;
    window.addEventListener("hashchange", function () { self.handleRoute(); });
  }

  Router.prototype.addRoute = function (path, handler) {
    this.routes[path] = handler;
  };

  Router.prototype.navigate = function (hash) {
    window.location.hash = hash.startsWith("#") ? hash.substring(1) : hash;
  };

  Router.prototype.init = function () {
    this.handleRoute();
  };

  Router.prototype.handleRoute = function () {
    var rawHash = window.location.hash || "#/";
    // Garante que o hash comece com # para compatibilidade
    if (!rawHash.startsWith("#")) {
      rawHash = "#" + rawHash;
    }
    
    var matchedHandler = null;
    var params = {};

    for (var routePath in this.routes) {
      var regex = this.pathToRegex(routePath);
      var match = rawHash.match(regex);
      if (match) {
        matchedHandler = this.routes[routePath];
        params = this.getParams(routePath, match);
        break;
      }
    }

    if (matchedHandler) {
      matchedHandler(params);
    } else {
      window.location.hash = "#/";
      // Executa o handler da home imediatamente para evitar tela em branco localmente
      if (this.routes["#/"]) {
        this.routes["#/"]({});
      }
    }
  };

  Router.prototype.pathToRegex = function (path) {
    var escaped = path.replace(/\//g, "\\/").replace(/:\w+/g, "([^/]+)");
    return new RegExp("^" + escaped + "$");
  };

  Router.prototype.getParams = function (routePath, match) {
    var params = {};
    var paramNames = (routePath.match(/:\w+/g) || []).map(function (n) { return n.substring(1); });
    var paramValues = match.slice(1);
    paramNames.forEach(function (name, i) {
      params[name] = decodeURIComponent(paramValues[i]);
    });
    return params;
  };

  window.UPEDIA_ROUTER = new Router();
})();
