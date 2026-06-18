import express from 'express';
import {errorHandler} from './middleware/errorHandler.js';
import {router} from './Routes/employeeRoutes.js';

export const app = express();


app.use(express.json());

app.use('/api',router);

app.use((req, res) => {
    console.log("Page Not Found")
    res.status(404).json({ message: "Page Not Found" })
});

app.use(errorHandler);

export default app;