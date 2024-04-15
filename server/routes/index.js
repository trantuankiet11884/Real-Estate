const {
  errorHandler,
  badRequestExeption,
} = require("../middlewares/errorHandler");
const auth = require("./auth");

const initRoutes = (app) => {
  app.use("/api/auth", auth);

  app.use(badRequestExeption);
  app.use(errorHandler);
};
module.exports = initRoutes;
