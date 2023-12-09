import express from 'express';
import cors from 'cors';
import router from './routes/index.routes.js';
import { handleApplicationError } from './middlewares/errorHandler.js';
import 'express-async-errors';

const app = express();
app.use(cors());
app.use(express.json());

app
  .use(router)
  .use(handleApplicationError);

export default app;
