const express = require("express");
const dotenv = require("dotenv");
const connectDB  = require("./config/db");
const authRoutes = require("./");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/auth",userRoutes);

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
    
})
