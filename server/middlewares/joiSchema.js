const joi = require("joi");

exports.string = joi.string().allow(null, "");
exports.stringReq = joi.string().required();
exports.number = joi.string().allow(null, "");
exports.numberReq = joi.number().required();
exports.array = joi.string().allow(null, "");
exports.arrayReq = joi.string().required();
