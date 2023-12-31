import { Request, Response, NextFunction } from 'express';
import { AppError } from '../../src/utils/AppError';
import { z } from 'zod';

export const zodMiddleware = (schema: z.ZodObject<any, any, any, any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const validatedData = schema.parse(req.body);
      req.body = validatedData;
      next();
    } catch (error) {
      throw AppError.BadRequest('Enter Valid Input', error.message);
    }
  };
};
