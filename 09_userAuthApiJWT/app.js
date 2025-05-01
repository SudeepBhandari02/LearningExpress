const express = require("express");
const dotenv = require("dotenv");
const connectDB  = require("./config/db");
const userRoutes = require("./routes/authRoutes");

dotenv.config();
const app = express();
app.use(express.json());

app.use("/api/auth",userRoutes);
const port = process.env.PORT || 5000;
console.log(connectDB);


const startServer = async () =>{
    connectDB();

    app.listen(port,()=>{
        console.log(`Server started on port ${port}`);
    })
}

startServer();