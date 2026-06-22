import { addEmployee, deleteEmployee, readAllEmployees, readEmployeeById, updateEmployee } from "../services/employee.services.js";

export const getAllEmployee = async (req, res, next) => {
    try {
        const employees = await readAllEmployees();
        const employeeList = employees.map(({ emp_id, firstName, role }) => ({ emp_id, firstName, role }))
        res.status(200).json(employeeList);
    } catch (error) {
        next(error);
    }
};

export const getEmployeeById = async (req, res, next) => {
    try {
        const empl_id = Number(req.params.id);
        console.log("Employee ID", empl_id);
        if (isNaN(empl_id)) {
            const error = new Error("Error in ID");
            error.statusCode = 400;
            throw error;
        }
        const employee = await readEmployeeById(empl_id);
        let nums = "";
        for (let num = 0; num < 7; num++) {
            nums += Math.floor(Math.random()*10);
        }
        employee.dataValues.InternalID = nums;
        res.status(200).json(employee);
    } catch (error) {
        next(error);
    }
};

export const createEmployee = async (req, res, next) => {
    try {
        const addemployee = await addEmployee(req.body);
        res.status(201).json({ message: "Employee Added SuccessFully", employee_data: addEmployee });
    } catch (error) {
        next(error);
    }
};

export const editEmployeeById = async (req, res, next) => {
    try {
        const empl_id = Number(req.params.id);
        console.log("Employee ID", empl_id);
        if (isNaN(empl_id)) {
            const error = new Error("Error in ID");
            error.statusCode = 400;
            throw error;
        }
        const employee = await updateEmployee(empl_id, req.body)
        res.status(201).json(employee);
    } catch (error) {
        next(error);
    }
};

export const deleteEmployeeById = async (req, res, next) => {
    try {
        const empl_id = Number(req.params.id);
        console.log("Employee ID", empl_id);
        if (isNaN(empl_id)) {
            const error = new Error("Error in ID");
            error.statusCode = 400;
            throw error;
        }
        const employee = await deleteEmployee(empl_id);
        res.status(200).json("Deleted Successfully");
    } catch (error) {
        next(error);
    }
};
