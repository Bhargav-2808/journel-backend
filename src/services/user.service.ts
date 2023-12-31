import { PrismaClient, User } from '@prisma/client';
import { UserInput } from '../../src/types/userTypes';

const prisma = new PrismaClient();

export const getUserById = async (userId: number): Promise<User> => {
  return prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
};

export const getUserByEmail = async (email: string): Promise<User> => {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
};
export const createUser = async (payload:  UserInput): Promise<User> => {
  console.log('%cuser.service.ts line:22 payload', 'color: #007acc;', payload);
  return prisma.user.create({
    data: payload,
  });
};

export const userService = {
  getUserById,
  getUserByEmail,
  createUser
};
