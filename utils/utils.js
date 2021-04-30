const ErrorResponse = require("../middlewares/ErrorResponse");

const throwError = (code = 400, message = 'Error') =>{
    throw new ErrorResponse(message, code);
}

module.exports = {
    throwError,
}