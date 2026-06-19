import express from 'express';
import { createEmployee, deletEmployeeById, editEmployee, getAllEmployees, getEmployeeById } from "../controller/employeeController.js";
import { commonValidation } from '../middleware/basicValidation.js';

export const router = express.Router();

router.get('/employees', getAllEmployees);
router.get('/employee/:id', getEmployeeById);
router.post('/employee/add', commonValidation, createEmployee);
router.put('/employee/edit/:id', commonValidation, editEmployee);
router.delete('/employee/remove/:id', deletEmployeeById);