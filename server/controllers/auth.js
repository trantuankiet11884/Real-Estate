const asyncHandler = require("express-async-handler");
const db = require("../models");
const { throwErrorWithStatus } = require("../middlewares/errorHandler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = asyncHandler(async (req, res) => {
  const { phone } = req.body;

  const response = await db.User.findOrCreate({
    where: { phone: phone },
    defaults: req.body,
  });

  return res.json({
    success: response[1],
    message: response[1]
      ? "Register Successfully"
      : "Phone Number Already Had Exists!",
  });
});

const login = asyncHandler(async (req, res, next) => {
  const { phone, password } = req.body;

  const user = await db.User.findOne({
    where: { phone },
  });

  if (!user)
    return throwErrorWithStatus(
      403,
      "User With That Phone Have Register",
      res,
      next
    );

  const isMatchingPassword = bcrypt.compareSync(password, user.password);

  if (!isMatchingPassword)
    return throwErrorWithStatus(
      401,
      "Password or Phone is Wrong...",
      res,
      next
    );

  const token = jwt.sign(
    {
      uid: user.id,
      role: user.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  return res.json({
    success: true,
    message: "Login is Successfully",
    accessToken: token,
  });
});

module.exports = { register, login };
