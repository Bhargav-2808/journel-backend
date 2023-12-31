import { NextFunction, Request, Response } from 'express';
import { AppError } from '../../src/utils/AppError';

export const exceptionHandling = (
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof AppError) {
    console.log('%cexceptionHadling.ts line:11 error', 'color: #007acc;', error);
    res.status(error.status).json({
      status: error.status,
      message: error.message,
      error: error.error,
    });
  } else {
    console.log('%cexceptionHadling.ts line:18 error', 'color: #007acc;', error);
    res.status(500).json({
      status: 500,
      message: 'Internal Server Error',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};



