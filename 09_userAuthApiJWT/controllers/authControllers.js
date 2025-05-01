const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SignUp = {
    try {
        const {email,password} = req.body;

        const userExists =await User.findOne({email});
        if(userExists){
            return res.status(400).json({"User already Exists"});
        }

        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = await User.create({
            email : email,
            password : hashedPassword,
        });

        res.status(201).json({
            success: true,
            message: 'User registered successfully',
            userId: newUser._id
        });

    } catch (error) {
        console.error(error);
        return res.status(400).json({error:"Server failed while creating account"});
    }
}