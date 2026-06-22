import express from 'express';
import { commonErrorHandler } from './middleware/errorHandler.js';
import { employeeRouter } from './routes/employee.routes.js';


export const app = express();

app.use(express.json());
app.use('/api', employeeRouter)
app.use(commonErrorHandler);