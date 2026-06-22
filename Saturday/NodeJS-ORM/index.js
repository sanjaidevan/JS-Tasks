import express from 'express';
import { commonErrorHandler } from './middleware/errorHandler.js';
import { employeeRouter } from './routes/employee.router.js';
import { EmployeesModel } from './model/employee.model.js';

export const app = express();

app.use(express.json());

app.use('/api',employeeRouter);

EmployeesModel.sync();

app.use(commonErrorHandler);