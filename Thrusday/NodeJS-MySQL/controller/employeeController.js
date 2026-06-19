import { deleteEmployee, getEmployee, insertEmployee, readAllemployees, updateEmployee } from "../services/employeeServices.js";

export const getAllEmployees = async (req, res, next) => {
    try {
        const employees = await readAllemployees();//One variable change users to employees
        const employeeList = employees.map((employee) => ({
            employee_id: employee.employee_id,
            firstname: employee.firstname,
            role: employee.role
        }))
        return res.status(200).json(employeeList);
    }
    catch (error) {
        next(error);
    }
};

export const getEmployeeById = async (req, res, next) => {
    try {
        const employee_id = parseInt(req.params.id);
        if (isNaN(employee_id)) {
            console.log("No Employee ID Provided");
            return res.status(400).json({ Error: "No Employee ID Provided" });
        }
        const employee = await getEmployee(employee_id);
        console.log(employee);
        // const employee = employees.find((employee) => employee.employee_id === employee_id) || null;
        if (!employee) { return res.status(404).json({ error: "No employee Found" }); }
        let randomEmployeeId = "";
        for (let i = 1; i < 7; i++) {
            randomEmployeeId += Math.floor(Math.random() * 10);
        }
        console.log("Internal ID", randomEmployeeId);
        employee.Internal_ID = randomEmployeeId;
        console.log(employee);
        return res.status(200).json(employee);
    } catch (error) {
        next(error);
    }
};

export const createEmployee = async (req, res, next) => {
    try {
        const { firstname, lastname, dob, emailid, mobile, role } = req.body;
        const addEmployee = await insertEmployee(firstname, lastname, dob, emailid, mobile, role);
        if (!addEmployee) { return res.status(500).send("Server Error"); }
        return res.status(201).send(addEmployee);
    } catch (error) {
        next(error)
    }
};

export const editEmployee = async (req, res, next) => {
    try {
        const emp_id = parseInt(req.params.id);
        if (isNaN(emp_id)) { return res.status(400).send("Error in employee id"); }
        const { firstname, lastname, dob, emailid, mobile, role } = req.body;
        const employee = await updateEmployee(emp_id, firstname, lastname, dob, emailid, mobile, role);
        if (!employee) { return res.status(404).send("No Employee Found to edit"); }
        return res.status(200).json({ message: "Edited Employee Suceessfull", employee });
    } catch (error) {
        next(error);
    }
};

export const deletEmployeeById = async (req, res, next) => {
    try {
        const emp_id = parseInt(req.params.id);
        if (isNaN(emp_id)) { return res.status(400).send("Error in employee id"); }
        const deletedEmployee = await deleteEmployee(emp_id);
        if (!deletedEmployee) { return res.status(404).send("No Employee found") }
        return res.status(200).send("Successfully Deleted");
    } catch (error) {
        next(error);
    }
};