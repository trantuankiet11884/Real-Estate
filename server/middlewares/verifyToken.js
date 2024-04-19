const { throwErrorWithStatus } = require("./errorHandler");
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers?.authorization?.startsWith("Bearer");
  if (!token) return throwErrorWithStatus(401, "Creds Not Provides", res, next);

  const rawToken = req.headers?.authorization?.split(" ")[1];
  jwt.verify(rawToken, process.env.JWT_SECRET, (error, decode) => {
    if (error) return throwErrorWithStatus(401, "Creds Invalid", res, next);
    req.user = decode;
    next();
  });
};

module.exports = { verifyToken };
