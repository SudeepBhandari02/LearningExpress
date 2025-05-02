const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signUp = async (req,res)=> {
    try {
        const {email,password} = req.body;

        const userExists =await User.findOne({email});
        if(userExists){
            return res.status(400).json({error:"User already Exists"});
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

const login = async (req,res) =>{
    try {
        const {email,password} = req.body;
        const user =await User.findOne({email});
        if(!user){
            return res.status(400).json({
                error:"Invalid Credentails"
            })
        }
        console.log("email : "+email + " Password :"+password);
        console.log("hashedPassword :"+user.password);
        
        const passwordMatch = await bcrypt.compare(password,user.password);
        if (!passwordMatch){
            return res.status(400).json({ error: 'Invalid credentials'});
        }

        const accessToken = jwt.sign(
            {userId:user._id},
            process.env.JWT_SECRET,
            {expiresIn:'1h'}
        );

        const refreshToken = jwt.sign(
            {id:user._id},
            process.env.JWT_SECRET,
            {expiresIn:'7d'}
        );

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Set 'true' in production for HTTPS
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
          });

        res.status(200).json({
            success: true,
            accessToken
          });

    } catch (error) {
        console.error(error);
        return res.status(400).json({error:"Login Failed - server problem"});
    }
}

const profile = async (req, res) => {
    try {
      // `req.user` is set by the auth middleware
      const user = await User.findById(req.user.userId).select('-password');
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ error: 'Unable to fetch profile' });
    }
}

const refreshToken = async (req,res)=>{
    try {
        const token = req.cookies.refreshToken;
        if(!token){
            return res.status(401).json({error:"Refresh token not provided "});
        }
        
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);
        if(!user){
            return res.status(401).json({error:"Invalid Refresh token"})
        }
        console.log(process.env.JWT_SECRET);
        console.log(user._id);
        
        const newAccessToken = jwt.sign(
            {userId:user._id},
            process.env.JWT_SECRET,
            {expiresIn:'1h'}
        );

        res.status(200).json({
            success:true,
            token : newAccessToken
        })
    } catch (error) {
        console.error(error);
    }
}

const logout = (req,res)=>{
    try {
        res.clearCookie('refreshToken',{
            secure : false,
            httpOnly : true
        })
        res.json({
            message:"Logged Out Successfully"
        })
    } catch (error) {
        console.error(error);
    }
}

module.exports = {signUp,login,profile,refreshToken,logout};