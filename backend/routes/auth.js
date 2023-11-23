const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken')
var fetchuser=require('../middleware/fetchuser')



const JWT_SECRET = 'The User is identified'


//Route :1 Create a User using POST "/api/auth/createuser".No login required

router.post('/createuser', [
    body('name', ' Please Enter  a Valid name').isLength({ min: 3 }),
    body("email", 'Please Enter a valid Email Address').isEmail({}),
    body("password", 'Password must be atleast 5 characters').isLength({ min: 5 }),


], async (req, res) => {
    //if there are error return bad request and the errors
    let success=false
    console.log("errors",req.body)

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({success, errors: errors.array() })
    }
    //check whether the user with this email exists already

    try {
        let user = await User.findOne({ email: req.body.email })

        if (user) {
            return res.status(400).json({ success, error: "Sorry a user with this email already exists" })
        }
        const salt = await bcrypt.genSalt(10)
        const secPass = await bcrypt.hash(req.body.password, salt)

        //Create a new user
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,

        })
        const data = {
            user: {
                id: user.id
            }
        }

        const authToken = jwt.sign(data, JWT_SECRET)
        // console.log(authToken)
        success=true
        res.json({success, authToken })

        //res.json(user)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }

})

//Route:2 Authenticate a User using POST "/api/auth/login".No login required

router.post('/login', [
    body("email", 'Enter a valid Email Address').isEmail(),
    body("password", 'Password cannot be blank').exists()


], async (req, res) => {
    let success=false
    //if there are error return bad request and the errors

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body
    try {
        let user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ error: "Please try to Login with current credentials " })
        }

        const passwordCompare= await bcrypt.compare(password, user.password)
        if(!passwordCompare){
            success=false
            return res.status(400).json({ success, error: "Please try to Login with current credentials " })

        }

        const data={
            user:{
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET)
        success=true
        res.json({success,authToken})

    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error ")
    }
})

////Route:3 Get loggedIn user details using POST "/api/auth/getuser". login required

router.post('/getuser',fetchuser, async (req, res) => {
    //middleware

try {
    userId=req.user.id
    const user = await User.findById(userId).select("-password")
    res.send(user)
} catch (error) {
    console.error(error.message)
    res.status(500).send("Internal Server Error ")
}
})


module.exports = router