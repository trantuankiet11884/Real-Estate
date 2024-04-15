const asyncHandler = require("express-async-handler");

const register = asyncHandler(async (req, res) => {
  const { phone, password, name, role } = req.body;

  return res.json({
    success: true,
    message: "API SC",
    data: { phone, password, name, role },
  });
});

module.exports = { register };
