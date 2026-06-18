import express from 'express';
import { getAllEmployees, getEmployeeById } from "../controller/employeeController.js";

export const router = express.Router();

router.get('/employees',getAllEmployees);
router.get('/employee/:id',getEmployeeById);
