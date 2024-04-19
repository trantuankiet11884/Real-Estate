// router.js

const router = require("express").Router();
const Joi = require("joi");
const ctrls = require("../controllers/user.js");
const validateDTO = require("../middlewares/validation.js");
const { stringReq, numberReq } = require("../middlewares/joiSchema.js");
const { verify } = require("jsonwebtoken");
const { verifyToken } = require("../middlewares/verifyToken.js");

router.get("/current", verifyToken, ctrls.getCurrent);

module.exports = router;
