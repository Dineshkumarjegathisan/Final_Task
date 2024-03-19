module.exports = (sequelize ,DataTypes)=>{
    const User = sequelize.define("user",{
        userId :{
            type : DataTypes.STRING,
            allownull:false,
            primayKey: true 
        },
        userName:{
            type : DataTypes.STRING,
            allownull: false
        },
        role:{
            type: DataTypes.STRING,
            allownull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
          }
    },
    {
        timestamps:false 
    })
    return User ; 
}