// router.js

const router = require("express").Router();
const Joi = require("joi");
const ctrls = require("../controllers/propertyType.js");
const validateDTO = require("../middlewares/validation.js");
const { stringReq, string } = require("../middlewares/joiSchema.js");
const { verifyToken, isAdmin } = require("../middlewares/verifyToken.js");

router.post(
  "/",
  verifyToken,
  isAdmin,
  validateDTO(
    Joi.object({ name: stringReq, description: stringReq, image: stringReq })
  ),
  ctrls.createNewPropertyType
);

router.get("/", ctrls.getPropertyType);
router.patch(
  "/:id",
  verifyToken,
  isAdmin,
  validateDTO(Joi.object({ name: string, description: string, image: string })),
  ctrls.updatePropertyType
);

router.delete("/:id", verifyToken, isAdmin, ctrls.deletePropertyType);

module.exports = router;
