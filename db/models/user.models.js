import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/connectToDb.js";


// Frist way to  define model in sequelize
// const userSchema = {
//     id:{
//         type:DataTypes.INTEGER,
//         primaryKey:true,
//         autoIncrement:true
//     },
//     first_name:{
//         type:DataTypes.STRING,
//     },
//     last_name:{
//         type:DataTypes.STRING,
//     },
//     username:{
//         type:DataTypes.STRING,
//         allowNull:false,
//         unique:true
//     },
//     password:{
//         type: DataTypes.STRING
//     },
//     isActive:{
//         type:DataTypes.BOOLEAN,
//         defaultValue: false
//     },
//     birthday:{
//         type: DataTypes.DATE,
//     }
// }

// export const UserModel = sequelize.models.User || sequelize.define('User',userSchema)
// UserModel.sync()

//----------------------------------------------------------------------------------
// Second way to define model in sequelize

export class User extends Model{}
User.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    first_name:{
        type:DataTypes.STRING,
    },
    last_name:{
        type:DataTypes.STRING,
    },
    username:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type: DataTypes.STRING
    },
    isActive:{
        type:DataTypes.BOOLEAN,
        defaultValue: false
    },
    birthday:{
        type: DataTypes.DATE,
    }
},{
    sequelize,
    modelName:'User'
})




