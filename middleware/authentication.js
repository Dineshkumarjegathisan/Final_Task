
const jwt = require('jsonwebtoken');

async function authandicate(req,res,next){

        const authHeader = req.header('Authorization');
        const token = authHeader.split(' ')[1];
        // console.log("=====>"+token);
        // const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            res.status(401).send('Access Denied')
        }
        try {
        // const decoded = jwt.verify(token.replace("Bearer", ""), process.env.TOKEN_SEC)
        const decoded = jwt.verify(token, process.env.TOKEN_SEC);
        // console.log("======>"+decoded);
        req.userMail = decoded ;

        console.log("decoded:",decoded);

        next(); 

    } catch (error) {
        res.status(400).send('Invalid Token');
    }
}

module.exports = {authandicate};
