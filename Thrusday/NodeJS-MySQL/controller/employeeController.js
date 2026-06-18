import { readAllemployees } from "../services/employeeServices.js";

export const getAllEmployees = async (req, res, next) => {
    try {
        const employees = await readAllemployees();//One variable change users to employees
        const employeeList = employees.map((employee) => ({
            employee_id: employee.employee_id,
            firstname: employee.firstname,
            role: employee.role
        }))
        res.status(200).json(employeeList);
    }
    catch (error) {
        next(error);
    }
}

export const getEmployeeById = async (req, res, next) => {
    try {
        const employee_id = parseInt(req.params.id);
        if (isNaN(employee_id)) {
            console.log("No Employee ID Provided");
            res.status(400).json({ Error: "No Employee ID Provided" });
        }
        const employees = await readAllemployees();
        const employee = employees.find((employee) => employee.employee_id === employee_id) || null;
        if (!employee) { res.status(404).json({ error: "No employee Found" }); }
        const chars = "0123456789";
        let randomEmployeeId = "";
        for (let i = 1; i < 7; i++) {
            randomEmployeeId += Math.floor(Math.random() * chars.length)
        }
        console.log("Internal ID", randomEmployeeId);
        employee.Internal_ID = randomEmployeeId;
        console.log(employee);
        res.status(200).json(employee);
    } catch (error) {
        next(error);
    }
}
