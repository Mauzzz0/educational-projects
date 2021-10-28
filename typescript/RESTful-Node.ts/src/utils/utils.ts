import ErrorResponse from "../middlewares/ErrorResponse";

export const throwError = (code = 400, message = 'Error') => {
    throw new ErrorResponse({ statusCode: code, message: message });
}
