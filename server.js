const express = require('express')
const app = express();
require('dotenv').config();
let bodyParser = require('body-parser');
const router = require('./router/bookRoutes');
const userRouter = require('./router/userRouter.js')

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/',router)
app.use('/',userRouter)

const port = process.env.SERVER_PORT ;
app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})