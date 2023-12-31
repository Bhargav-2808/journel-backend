import express, { Application } from 'express';
import cors from 'cors';
import { config } from './config/config';
import { exceptionHandling } from './middleware/exceptionHadling';
import { userRouter } from './routes/user.routes';

export const app: Application = express();

const port = config.app.port || 8080;

const corsOptions = {
  origin: '*',
};
app.use(cors(corsOptions));
app.use(express.json({ limit: '50mb' }));

app.use('/api/user', userRouter);
app.use(exceptionHandling);
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
