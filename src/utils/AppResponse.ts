export type AppResponseObj = {
  status: number;
  messsage: string;
  data?: any;
};

export class AppError {
  status: number;
  messsage: string;
  data?: any;

  constructor(status: number, message: string, data: unknown) {
    this.status = status;
    this.messsage = message;
    this.data = data;
  }

  static Created(msg: string): AppResponseObj {
    return new AppError(201, msg, null);
  }

  static Updated(msg: string): AppResponseObj {
    return new AppError(200, msg, null);
  }

  static Success(msg: string, data: unknown): AppResponseObj {
    return new AppError(200, msg, data);
  }

  static Deleted(msg: string): AppResponseObj {
    return new AppError(204, msg, null);
  }
}
