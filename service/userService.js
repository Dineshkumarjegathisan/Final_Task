const connectToDb = require('../connection/db_config.js')
const userValidation = require('../validation/userValidation.js')
const jwt = require('jsonwebtoken');
const {Books ,Users} =  connectToDb();



async function userRegister(userInfo){
    try {
        const result = await Users.create(userInfo)
        return result ;
    } catch (err) {
        throw err ;
    }
}

async function userLogin(email,password){
    try {
        console.log( email + "<====>" + password);
       const userMail = await userValidation.mailValidation(email,password)
       console.log("usermail"+userMail);
       if(userMail.length==0){
         return ('user not found')
       }
       console.log("**********"+ typeof userMail.password);
       console.log("PASSWORD"+password);
       const validPassword = await userValidation.comparePasswords(password, userMail.password)
       if(validPassword){
                const token = jwt.sign({ role: userMail.role }, process.env.TOKEN_SEC, { expiresIn: '1h' });
                console.log("TOKEN GEN"+token);
                return token ;
       }
       if(!validPassword){
        return ('invalid password') ;
       }
       return 'logged in'  
        
    } catch (err) {
        throw err ;
    }
 }




module.exports = {userRegister, userLogin }