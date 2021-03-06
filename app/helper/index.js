const router = require("express").Router();

let _registeredRoutes = (routes, method) => {
  for (let key in routes) {
    if (
      typeof routes[key] === "object" &&
      routes[key] !== null &&
      !(routes[key] instanceof Array)
    ) {
      _registeredRoutes(routes[key], key);
    } else {
      if (method === "get") {
        router.get(key, routes[key]);
      } else if (method === "post") {
        router.post(key, routes[key]);
      } else {
        router.use(routes[key]);
      }
    }
  }
};

let route = routes => {
  _registeredRoutes(routes);
  return router;
};

module.exports = {
  route
};
