const express = require("express");
const { registerUser,loginUser } = require("../../controllers/auth-controller/index.js");
const authenticateMiddlware = require('../../middleware/auth-middleware.js')
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post('/check-auth',authenticateMiddlware,(req,res)=>{
    const user = req.user

    res.status(200).json({
            success: true,
            message: 'Authenticate user!',
            data: {
                user,
            }
    })
})

module.exports = router;
