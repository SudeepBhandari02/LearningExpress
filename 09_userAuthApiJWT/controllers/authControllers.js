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

        const token = jwt.sign(
            {userId:user._id},
            process.env.JWT_SECRET,
            {expiresIn:'1h'}
        )

        res.status(200).json({
            success: true,
            token
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
  };

module.exports = {signUp,login,profile};