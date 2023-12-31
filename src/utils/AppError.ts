export type AppErrorObj = {
  status: number;
  message: string;
  error?: unknown;
};

export class AppError {
  status: number;
  message: string;
  error?: unknown;

  constructor(status: number, message: string, error: unknown) {
    this.status = status;
    this.message = message;
    this.error = error;
  }

  static BadRequest(msg: string, error: unknown): AppErrorObj {
    return new AppError(400, msg, error);
  }

  static NotFound(msg: string): AppErrorObj {
    return new AppError(404, msg, null);
  }

  static ServerError(msg: string, error: unknown): AppErrorObj {
    return new AppError(500, msg, error);
  }

  static UnAuthorized(msg: string): AppErrorObj {
    return new AppError(401, msg, null);
  }
}
