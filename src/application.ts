import express from 'express';
import cors from 'cors';
import globalError from './app/middleware/globalError';
import { mainRouter } from './app/router';
import notFound from './utils/notFound';
const app = express();
// parsers 
app.use(express.json());
app.use(cors());

app.use(mainRouter);

app.use('*', notFound);

app.use(globalError);
export default app;
