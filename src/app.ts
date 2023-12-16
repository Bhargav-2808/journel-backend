import express, { Application } from 'express';
import cors from 'cors';

export const app: Application = express();

const corsOptions = {
  // origin: [/\.?qualifarm\.com$/, /(localhost|127.0.0.1){1}(:?\d{2,4})?/],
  origin: '*',
};
app.use(cors(corsOptions));
app.use(express.json({ limit: '50mb' }));

app.listen(3000, () => {
  console.log('App is running');
});
