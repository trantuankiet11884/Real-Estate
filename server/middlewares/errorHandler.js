const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  return res.status(statusCode).json({
    success: false,
    message: error.message,
  });
};

const throwErrorWithStatus = (code, message, res, next) => {
  const error = new Error(message);
  res.status(code).json({
    success: false,
    message: message,
  });
  next(error);
};

module.exports = { errorHandler, throwErrorWithStatus };
