// router.js

const router = require("express").Router();
const Joi = require("joi");
const ctrls = require("../controllers/auth.js");
const validateDTO = require("../middlewares/validation.js");
const { stringReq, numberReq } = require("../middlewares/joiSchema.js");

router.post(
  "/register",
  validateDTO(
    Joi.object({ password: stringReq, name: stringReq, phone: numberReq })
  ),
  ctrls.register
);

module.exports = router;
