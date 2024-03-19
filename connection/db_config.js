const Sequelize = require('sequelize')
const BookModel = require('../models/bookModels.js')
const UserModel = require('../models/userModels.js')

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host :process.env.DB_HOST,
         dialect:'mysql'

    }
);

const Books = BookModel(sequelize ,Sequelize);
const Users = UserModel(sequelize ,Sequelize)

const Models = {
    Books,
    Users
};

const connection = {} ;

module.exports = ()=>{
    if(connection.isConnected){
        console.log("Using existing connection.");
        return Models
    }
     sequelize.sync();
     sequelize.authenticate();
    connection.isConnected = true ;
    console.log("Created a new connection");
    return Models ;
}