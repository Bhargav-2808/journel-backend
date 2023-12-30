import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AppError } from '../../src/utils/AppError';
import { config } from './../config/config';
import { userService } from '../../src/services/user.service';
import { User } from '../../src/types/userTypes';

export type jwtpayload = {
  id: number;
};
interface CustomRequest extends Request {
  user?: User;
}

export const authUser = async (req: CustomRequest, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
      throw AppError.UnAuthorized('token not found');
    }

    const decode = jwt.verify(token, config.clientSecret) as jwtpayload;

    if (!decode) {
      throw AppError.UnAuthorized('token expired');
    }

    const userExists = await userService.getUserById(decode.id);

    if (userExists) {
      req.user = userExists;
    }

    next();
  } catch (error) {
    throw AppError.ServerError('Error occurred while Authentication', error.message);
  }
};
