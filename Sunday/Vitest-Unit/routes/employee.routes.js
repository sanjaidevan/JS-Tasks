import express from "express";
import { createEmployee, editEmployee, readAllEmployee, readEmployeeById } from "../controller/employee.controller.js";

export const employeeRouter = express.Router();

employeeRouter.get('/employees', readAllEmployee);
employeeRouter.get('/employee/:id', readEmployeeById);
employeeRouter.post('/employee/register', createEmployee);
employeeRouter.put('/employee/edit/:id', editEmployee);
employeeRouter.delete('/employee/remove/:id', readEmployeeById);
