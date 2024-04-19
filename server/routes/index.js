const {
  errorHandler,
  badRequestExeption,
} = require("../middlewares/errorHandler");
const auth = require("./auth");
const user = require("./user");

const initRoutes = (app) => {
  app.use("/api/auth", auth);
  app.use("/api/user", user);

  app.use(badRequestExeption);
  app.use(errorHandler);
};
module.exports = initRoutes;
