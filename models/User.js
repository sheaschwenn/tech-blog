const {Model, DataTypes} = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model{
    checkPassword(password){
        return bcrypt.compare(
            password,
            this.password
        )
    };
};

User.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey: true,
            autoIncrement: true
        },
        user_name:{
            type: DataTypes.STRING,
            allowNull: false,
            unique:true
        },
        password:{
            type:DataTypes.STRING,
            allowNull: false
        },

    },
    {
        hooks:{
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
)

module.exports = User