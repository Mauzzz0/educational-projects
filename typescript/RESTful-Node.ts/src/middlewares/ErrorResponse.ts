interface ExceptionOptions {
  statusCode?: number;
  message?: string;
}

class ErrorResponse extends Error {
  statusCode: number;
  message: string;

  constructor({
    statusCode = 400,
    message = 'Error'
  }: ExceptionOptions) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
  }
}

export default ErrorResponse;