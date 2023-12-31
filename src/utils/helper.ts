import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { config } from '../config/config';

interface TokenPayload {
  id: number;
}

export const generateJwtToken = (payload: TokenPayload): string => {
  const secretKey = config.clientSecret;
  const expiresIn = '1h';
  const token = jwt.sign(payload, secretKey, { expiresIn }) as string;
  return token;
};

export const comparePassword = (password: string, password2: string): boolean => {
  return bcrypt.compareSync(password, password2);
};

export const generateHashPassword = async (password: string): Promise<string> => {
  const salt = 10;
  return bcrypt.hash(password, salt);
};
