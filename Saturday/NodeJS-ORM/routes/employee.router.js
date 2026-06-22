import express from "express";
import { createEmployee, deleteEmployeeById, editEmployeeById, getAllEmployee, getEmployeeById } from "../controller/employee.controller.js";
import { validateEmployee } from "../middleware/employee.validate.js";

export const employeeRouter = express.Router();

employeeRouter.get('/employees', getAllEmployee);
employeeRouter.get('/employee/:id', getEmployeeById);
employeeRouter.post('/employee/register', validateEmployee, createEmployee);
employeeRouter.put('/employee/edit/:id',validateEmployee, editEmployeeById);
employeeRouter.delete('/employee/remove/:id', deleteEmployeeById);