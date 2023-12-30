export type AppResponseObj = {
  status: number;
  messsage: string;
  data?: any;
};

export class AppResponse {
  status: number;
  messsage: string;
  data?: any;

  constructor(status: number, message: string, data: unknown) {
    this.status = status;
    this.messsage = message;
    this.data = data;
  }

  static Created(msg: string, req, res, next): AppResponseObj {
    return new AppResponse(201, msg, null);
  }

  static Updated(msg: string): AppResponseObj {
    return new AppResponse(200, msg, null);
  }

  static Success(msg: string, data: unknown): AppResponseObj {
    return new AppResponse(200, msg, data);
  }

  static Deleted(msg: string): AppResponseObj {
    return new AppResponse(204, msg, null);
  }
}
