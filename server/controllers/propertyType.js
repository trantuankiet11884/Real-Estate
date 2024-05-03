const asyncHandler = require("express-async-handler");
const db = require("../models");
const { throwErrorWithStatus } = require("../middlewares/errorHandler");
const { Sequelize, Op } = require("sequelize");

const createNewPropertyType = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const response = await db.PropertyType.findOrCreate({
    where: { name },
    defaults: req.body,
  });

  return res.json({
    success: response[1],
    message: response[1] ? "Created." : "Something went wrong...!",
    propertyType: response[0],
  });
});

const getPropertyType = asyncHandler(async (req, res) => {
  const { limit, page, fields, type, name, ...query } = req.query;

  const options = {};
  if (fields) {
    const attributes = fields.split(",");
    const isExclude = attributes.some((el) => el.startsWith("-"));
    if (isExclude) {
      options.attributes = {
        exclude: attributes.map((el) => el.replace("-", "")),
      };
    } else options.attributes = attributes;
  }

  if (name)
    query.name = Sequelize.where(
      Sequelize.fn("LOWER", Sequelize.col("name")),
      "LIKE",
      `%${name.toLowerCase()}%`
    );

  if (type === "ALL") {
    const response = await db.PropertyType.findAll({
      where: query,
      ...options,
    });
    return res.json({
      success: response.length > 0,
      message: response ? "Got." : "Something went wrong...!",
      propertyType: response,
    });
  } else {
    return res.json({});
  }
});

module.exports = { createNewPropertyType, getPropertyType };
