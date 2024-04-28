const asyncHandler = require("express-async-handler");
const db = require("../models");
const { throwErrorWithStatus } = require("../middlewares/errorHandler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { roles } = require("../utils/constant");

const initRoles = asyncHandler(async (req, res) => {
  const response = await db.Role.bulkCreate(roles);

  return res.json({
    success: Boolean(response),
    message: response ? "Inserted." : "Some thing went wrong!",
  });
});

module.exports = { initRoles };
