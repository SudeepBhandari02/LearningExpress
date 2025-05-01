const mongoose = require('mongoose');
require('dotenv');

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database Connected Successfully");
        
    } catch (error) {
        console.error("Database Connection failed " + error);
        process.exit(1);
    }
}

module.exports = connectDB;