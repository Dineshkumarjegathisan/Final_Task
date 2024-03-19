const UserService = require('../service/userService.js')
const hashedPassword = require('../validation/hashedPassword.js')
const {v4:uuidv4} = require('uuid')


async function userRegister(req,res){
    try {

        const pass = await hashedPassword.hashPassword(req.body.password);
        const userInfo ={
            userId:uuidv4(),
            userName:req.body.userName,
            role:req.body.role,
            email:req.body.email,
            password:pass
        }
        const response = await UserService.userRegister(userInfo)
        res.status(201).json({
            response : response
        })

    } catch (err) {
        throw err ;
    }
}


async function userLogin(req,res){
    try {
        const email = req.body.email ;
        const password = req.body.password;
        console.log("email"+email);
        console.log("email"+password);
        
        const result = await UserService.userLogin(email,password)
        res.status(201)
        .json({
            result 
        })

    } catch (err) {
        throw err ;
    }
}

module.exports ={userRegister , userLogin}