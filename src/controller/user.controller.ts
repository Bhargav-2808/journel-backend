import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { AppError } from '../../src/utils/AppError';
import { createUser, userService } from '../../src/services/user.service';
import { generateHashPassword, generateJwtToken } from '../../src/utils/helper';
import * as z from 'zod';
import { UserInput } from '../../src/types/userTypes';

export const userLogin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const user = await userService.getUserByEmail(email);
    if (!user) {
      throw AppError.NotFound('User not found');
    }
    const isMatch = await bcrypt.compare(password, user?.password);
    if (!isMatch) {
      throw AppError.UnAuthorized('Invalid credentials');
    }
    const token = generateJwtToken({ id: user.id });

    res.status(200).send({
      message: 'User login successfully',
      token,
    });
  } catch (error) {
    next(error);
  }
};

export const userRegister = async (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  const { first_name, last_name, mobile_number, email, password, confirmPassword } = body;
  try {
    const user = await userService.getUserByEmail(email);

    if (user) {
      throw AppError.BadRequest('User already exists', null);
    }

    if (password !== confirmPassword) {
      throw AppError.BadRequest('Passwords do not match', null);
    }

    const hashedPassword = await generateHashPassword(password);
    await userService.createUser({
      first_name,
      last_name,
      mobile_number,
      email,
      password: hashedPassword,
    });

    res.status(201).send({
      message: 'User registered successfully',
    });
  } catch (error) {
    next(error);
  }
};
