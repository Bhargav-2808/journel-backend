import Joi from 'joi';

export const envSchema = Joi.object({
  PORT: Joi.number().positive().required().description('Port'),
  ENVIROMENT: Joi.string().description('Enviroment'),
  POSTGRES_USER: Joi.string().required().description('Postgress user'),
  POSTGRES_PASSWORD: Joi.string().required().description('Postgress password'),
  POSTGRES_DB: Joi.string().required().description('Postgress db'),
  HOST: Joi.string().required().description('Postgres Host'),
  CLIENT_SECRET: Joi.string().required().description('Client secret'),
}).unknown();
