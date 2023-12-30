import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/AppError';

export const exceptionHandling = (error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    res.status(error.status).json({
      status: error.status,
      message: error.message,
      error: error.error,
    });
  } else {
    next(error);
  }
};
