const express = require('express');
const {signUp,login,profile} = require("../controllers/authControllers");
const authMiddleware = require("../middlewares/authMiddleWare");

const router = express.Router();

router.post('/signup',signUp);
router.post('/login',login);

router.get('/profile',authMiddleware,profile);

module.exports = router;
