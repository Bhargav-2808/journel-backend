import express, { Application } from 'express';
import cors from 'cors';
import { config } from './config/config';

export const app: Application = express();

const port = config.app.port || 8080

const corsOptions = {
  // origin: [/\.?qualifarm\.com$/, /(localhost|127.0.0.1){1}(:?\d{2,4})?/],
  origin: '*',
};
app.use(cors(corsOptions));
app.use(express.json({ limit: '50mb' }));

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
