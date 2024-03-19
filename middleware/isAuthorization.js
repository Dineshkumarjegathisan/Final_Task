
const isAuthorization = (...roles) => {
    return (req, res, next) => {
    
        try {
            console.log("++++++++>"+req.userMail.role);
            console.log(roles);
            console.log('response :'+ roles.includes(req.userMail.role));
            if (!roles.includes(req.userMail.role)) {
                return res.status(403).send({
                    message : 'you are not Authorized to access'
                })
            }else{
                next()
            }
            // next();
        } catch (error) {
            console.error(error);
            return res.status(500).send('Internal Server Error');
        }
    };
};

module.exports = { isAuthorization };
































// const isAuthorization = (...roles) => {
//     return (req, res, next) => {
//         try {
//             if (!roles.some(role => req.userMail.role.includes(role))) {
//                 return res.status(403).json({
//                     message:'you are not Authorized to access'
//                 })
//             }
//             next();
//         } catch (error) {
//             console.error(error);
//             return res.status(500).send('Internal Server Error');
//         }
//     };
// };

// module.exports = { isAuthorization };
