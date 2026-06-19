import { connection } from "../db/config.js";


export const readAllemployees = () => {
    try {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM Employee_tbl', (error, result) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(result);
                }
            });
        })

    } catch (error) {
        console.log("Error in reading all employees");
        console.error(error);
        throw error;
    }
};


export const getEmployee = async (emp_id) => {
    try {
        const [employee] = await connection.promise().query(`SELECT * FROM Employee_tbl WHERE employee_id = ?`, [emp_id]);
        console.log("Query executed successfully");
        console.log(employee);
        return employee[0] || null;
    } catch (error) {
        console.error(error);
        throw error;
    }
};


export const insertEmployee = async (firstname, lastname, dob, emailid, mobile, role) => {
    try {
        const [newEmployee] = await connection.promise().query(`INSERT INTO Employee_tbl (firstname, lastname, dob, email_id, mobile, role) VALUES (?,?,?,?,?,?)`,
            [firstname, lastname, dob, emailid, mobile, role]);
        if (newEmployee.affectedRows === 0) { return null; }
        return await readAllemployees();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const updateEmployee = async (emp_id, firstname, lastname, dob, emailid, mobile, role) => {
    try {
        const [editedEmployee] = await connection.promise().query(`UPDATE Employee_tbl SET firstname = ?, lastname = ?, dob = ?, email_id = ?, mobile = ?, role = ? WHERE employee_id = ?`,
            [firstname, lastname, dob, emailid, mobile, role, emp_id]);
        if (editedEmployee.affectedRows === 0) { return null; }
        return await getEmployee(emp_id);
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const deleteEmployee = async (emp_id) => {
    try {
        const [removedEmployee] = await connection.promise().query(`DELETE FROM Employee_tbl WHERE employee_id = ?`, [emp_id]);
        if (removedEmployee.affectedRows > 0) { return true; }
    } catch (error) {
        console.error(error);
        throw error;
    }
};