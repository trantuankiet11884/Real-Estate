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
  const { limit, page, fields, type, sort, name, ...query } = req.query;

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
  // filter client queries
  if (name)
    query.name = Sequelize.where(
      Sequelize.fn("LOWER", Sequelize.col("name")),
      "LIKE",
      `%${name.toLowerCase()}%`
    );
  // sort
  if (sort) {
    const order = sort
      .split(",")
      .map((el) =>
        el.startsWith("-") ? [el.replace("-", ""), "DESC"] : [el, "ASC"]
      );
    options.order = order;
  }

  if (!limit) {
    const response = await db.PropertyType.findAll({
      where: query,
      ...options,
    });
    return res.json({
      success: response.length > 0,
      message: response ? "Got." : "Something went wrong...!",
      propertyType: response,
    });
  }

  // Pagination
  const prevPage = page - 1 > 0 ? page - 1 : 1;

  const offset = (prevPage - 1) * limit;

  if (offset) options.offset = offset;
  options.limit = +limit;

  const response = await db.PropertyType.findAndCountAll({
    where: query,
    ...options,
  });

  return res.json({
    success: response.length > 0,
    message: response ? "Got." : "Something went wrong...!",
    propertyType: response,
  });
});

const updatePropertyType = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  if (Object.keys(req.body).length === 0)
    return throwErrorWithStatus(403, "Need less 1 argument.", res, next);

  const response = await db.PropertyType.update(req.body, {
    where: { id },
  });

  return res.json({
    success: response[0] > 0,
    message: response[0] ? "Updated." : "Something went wrong...!",
  });
});

const deletePropertyType = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const response = await db.PropertyType.destroy({
    where: { id },
  });

  return res.json({
    success: response > 0,
    message: response ? "Deleted." : "Something went wrong...!",
  });
});

module.exports = {
  createNewPropertyType,
  getPropertyType,
  updatePropertyType,
  deletePropertyType,
};
