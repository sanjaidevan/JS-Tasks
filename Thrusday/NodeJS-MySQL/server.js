import {app} from "./index.js";
import 'dotenv/config';

let PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is started in http://localhost:${PORT}`); 
});
