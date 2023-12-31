import { envSchema } from './validationSchema';
import { config as cfg } from 'dotenv';
import path from 'path';

const envPath = path.join(__dirname, '../../.env');
cfg({ path: envPath });
const { value: envVars, error } = envSchema.prefs({ errors: { label: 'key' } }).validate(process.env);
if (error) {
  throw new Error(`Env validation error: ${error.message}`);
}
export const config = {
  app: {
    port: envVars.PORT,
    env: envVars.ENVIROMENT,
    host: envVars.HOST,
  },

  postgres: {
    user: envVars.POSTGRES_USER,
    password: envVars.POSTGRES_PASSWORD,
    db: envVars.POSTGRES_DB,
  },
  clientSecret: envVars.CLIENT_SECRET,
};
