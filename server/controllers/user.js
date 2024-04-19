const asyncHandler = require("express-async-handler");
const db = require("../models");
const { throwErrorWithStatus } = require("../middlewares/errorHandler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getCurrent = asyncHandler(async (req, res) => {
  const { uid, role } = req.user;

  const response = await db.User.findByPk(uid, {
    attributes: { exclude: ["password"] },
  });

  return res.json({
    success: Boolean(response),
    message: response ? "Got." : "Cannot Get User!",
    currentUser: response,
  });
});

module.exports = { getCurrent };
