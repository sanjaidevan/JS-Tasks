import {connection} from "../db/config.js";


export const readAllemployees = () => {
    try {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM Company.Employee_tbl', (error, result) => {
                if (error) {
                    reject(error);
                }
                else{
                resolve(result);
            }
            });
        })

    } catch (error) {
        console.error(error);
    }
};