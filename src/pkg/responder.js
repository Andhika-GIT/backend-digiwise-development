import { CustomError } from "./customError.js";

function generateResponse(res, code, message, data) {
  const modelResponse = {
    code: code,
    message: message,
    data: data,
  };
  res.status(code).json(modelResponse);
}

const responseError = (res, error) => {
  if (error instanceof CustomError) {
    generateResponse(res, error.code, error.message, null);
    return;
  }
  generateResponse(res, 500, "internal server error", null);
};
export { generateResponse, responseError };
