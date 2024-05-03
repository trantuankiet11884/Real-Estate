const {
  errorHandler,
  badRequestExeption,
} = require("../middlewares/errorHandler");
const auth = require("./auth");
const user = require("./user");
const insert = require("./insert");
const propertyType = require("./propertyType");

const initRoutes = (app) => {
  app.use("/api/insert", insert);
  app.use("/api/property-type", propertyType);
  app.use("/api/user", user);
  app.use("/api/auth", auth);

  app.use(badRequestExeption);
  app.use(errorHandler);
};
module.exports = initRoutes;
