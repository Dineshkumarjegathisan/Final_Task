const express = require('express')
const router = express.Router();
const UserController = require('../controllers/userController.js')


router.post('/userRegister',UserController.userRegister);
router.post('/userLogin',UserController.userLogin);


module.exports = router ;