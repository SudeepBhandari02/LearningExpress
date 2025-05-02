const express = require('express');
const {signUp,login,profile,refreshToken,logout} = require("../controllers/authControllers");
const authMiddleware = require("../middlewares/authMiddleWare");

const router = express.Router();

router.post('/signup',signUp);
router.post('/login',login);
router.post('/refresh-token',refreshToken);
router.post('/logout',logout);
router.get('/profile',authMiddleware,profile);

module.exports = router;
