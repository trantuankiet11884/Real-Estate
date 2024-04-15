const errorHandler = (error, req, res, next) => {
  const formatedMessage = error?.message?.replace(`\"`, "");

  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  return res.status(statusCode).json({
    success: false,
    message: formatedMessage,
  });
};

const throwErrorWithStatus = (code, message, res, next) => {
  const formatedMessage = message?.replace(`\"`, "");
  const error = new Error(formatedMessage);
  res.status(code);
  next(error);
};

const badRequestExeption = (req, res, next) => {
  const error = new Error(`Route ${req.originalUrl} Not Found`);

  res.status(404);
  next(error);
};

module.exports = { errorHandler, throwErrorWithStatus, badRequestExeption };
