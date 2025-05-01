const jwt = require('jsonwebtoken');

const authMiddleware = (req,res,next) =>{

    const header = req.headers.authorization;
    if(!header || !header.startsWith("Bearer ")){
        return res.status(401).json({
            error:"No token provided"
        })
    }

    const token = header.split(" ")[1];

    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        console.error(error);
        return res.status(400).json({
            error : "Server Failed"
        })
    }
}

module.exports = authMiddleware;