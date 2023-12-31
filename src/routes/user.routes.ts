import { Router } from 'express';
import { userLogin, userRegister } from '../../src/controller/user.controller';
import { zodMiddleware } from '../../src/middleware/zodMiddleWare';
import { z } from 'zod';

export const userPayloadSchema = z.object({
  body: z.object({
    email: z.string({
      invalid_type_error: 'Email must be in string.',
      //   required_error: 'Email is required.',
    }),
    first_name: z.string({
      invalid_type_error: 'First name must be in string.',
      //   required_error: 'First name is required.',
    }),
    last_name: z.string({
      invalid_type_error: 'Last name must be in string.',
      //   required_error: 'Last name is required.',
    }),
    password: z.string({
      invalid_type_error: 'Password must be in string.',
      //   required_error: 'Password is required.',
    }),
    confirmPassword: z
      .string({
        invalid_type_error: 'Confirm password must be in string.',
      })
      .optional(),
    mobile_number: z
      .number({
        //   invalid_type_error: 'Mobile number must be in number.',
        //   required_error: 'Mobile number is required.',
      })
      .optional(),
  }),
});

export const userRouter: Router = Router();

userRouter.post('/login', userLogin);
userRouter.post('/register', userRegister);
