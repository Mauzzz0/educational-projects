const ErrorResponse = require("./ErrorResponse");

const logger = (req, res, next) => {
    console.log('HEADERS = ', req.headers);
    console.log('URL = ', req.url);
    console.log('Original_URL = ', req.originalUrl);
    console.log('METHOD = ', req.method);
    console.log('HOST = ', req.headers.host);
    console.log('IsSecure = ', req.secure);
    console.log('Body = ', req.body);
    console.log('Query = ', req.query);
    console.log('Files = ', req.files);
    next();
}

const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

const syncHandler = (fn) => (req, res, next) => {
    try {
        fn(req, res, next);
    } catch (error) {
        next(error);
    }
};

const notFound = (req, _res, next) => {
    next(new ErrorResponse(`Not found - ${req.originalUrl}`, 404));
};

const errorHandler = (err, _req, res, _next) => {
    console.log('Ошибка', {
        code: err.code,
        message: err.message,
        stack: err.stack,
    });
    let code = 500;
    if (typeof err.code === 'number') {
        code = err.code;
    }
    res.status(code || 500).json({
        message: err.message,
        stack: err.stack
    });
};

module.exports = {
    logger,
    syncHandler,
    asyncHandler,
    notFound,
    errorHandler
}