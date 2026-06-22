import { DBConnection } from "./config/dbconnect.js";
import { app } from "./index.js";
import 'dotenv/config';

const PORT = process.env.PORT;
app.listen(PORT, async () => {
    console.log(`Server Started in http://localhost:${PORT}`);
    await DBConnection(); 
});