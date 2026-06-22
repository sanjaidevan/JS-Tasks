import { Sequelize } from "sequelize";
import 'dotenv/config';

export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false,
});
export const DBConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log("DB Connection Successfull");
    } catch (error) {
        console.error("Unable to Connect with DB", error);
    }
};