import { EmployeesModel } from "../model/employee.model.js";

export const readAllEmployees = async () => {
    return await EmployeesModel.findAll();
};

export const readEmployeeById = async (empl_id) => {
    const employeeData = await EmployeesModel.findByPk(empl_id);
    if (!employeeData) {
        const error = new Error("Employee Not Found");
        error.statusCode = 404;
        throw error;
    }
    return employeeData;
};

export const addEmployee = async (employeeData) => {
    return await EmployeesModel.create(employeeData);
};

export const updateEmployee = async (empl_id, employeeData) => {
    const employee = await readEmployeeById(empl_id);
    await employee.update(employeeData);
    return employee;
};

export const deleteEmployee = async (empl_id) => {
    const employee = await readEmployeeById(empl_id);
    await employee.destroy();
    return employee;
};