import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

export const getUserById = async (userId: number): Promise<User> => {
  return prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
};

export const userService = {
  getUserById,
};
