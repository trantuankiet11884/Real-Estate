const { throwErrorWithStatus } = require("./errorHandler");
const jwt = require("jsonwebtoken");
const db = require("../models");

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

const isAgent = async (req, res, next) => {
  const { roleCode } = req.user;
  if (roleCode === "ROU") {
    return throwErrorWithStatus(401, `You Do Not Have Access`, res, next);
  }
  next();
};

const isAdmin = async (req, res, next) => {
  const { roleCode } = req.user;
  if (roleCode !== "ROA") {
    return throwErrorWithStatus(401, `You Do Not Have Access`, res, next);
  }
  next();
};

const isOwner = async (req, res, next) => {
  const { roleCode } = req.user;
  if (roleCode === "ROO" || roleCode === "ROU") {
    return throwErrorWithStatus(401, `You Do Not Have Access`, res, next);
  }
  next();
};

module.exports = { verifyToken, isAdmin, isAgent, isOwner };
