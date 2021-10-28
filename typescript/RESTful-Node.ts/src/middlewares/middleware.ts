import { NextFunction, Request, Response } from "express";
import ErrorResponse from "./ErrorResponse";



export const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log('HEADERS = ', req.headers);
  console.log('URL = ', req.url);
  console.log('Original_URL = ', req.originalUrl);
  console.log('METHOD = ', req.method);
  console.log('HOST = ', req.headers.host);
  console.log('IsSecure = ', req.secure);
  console.log('Body = ', req.body);
  console.log('Query = ', req.query);
  next();
}

export const asyncHandler = (fn: Function) => (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

export const syncHandler = (fn: Function) => (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    fn(req, res, next);
  } catch (error) {
    next(error);
  }
};

export const notFound = (req: Request, _: Response, next: NextFunction) => {
  next(
    new ErrorResponse({
      statusCode: 404,
      message: `Not found - ${req.originalUrl} ${req.method}`
    })
  );
};

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ErrorResponse) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }

  console.log('ERROR', err);

  return res.status(500).json({
    message: err.message
  });
};
