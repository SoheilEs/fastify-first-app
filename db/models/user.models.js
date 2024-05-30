import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/connectToDb.js";


// Frist way to  define model in sequelize
const userSchema = {
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
    },
    accessToken:{
         type: DataTypes.STRING,
         defaultValue:""
     }
}

const userDetailSchema = {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    address:{
        type:DataTypes.STRING,
    },
    latitudes:{
        type:DataTypes.DOUBLE,
    },
    longitudes:{
        type:DataTypes.DOUBLE,
    },
    UserId:{
        type:DataTypes.INTEGER,
        
    }
}

export const User = sequelize.models.User || sequelize.define('User',userSchema)
export const UserDetail = sequelize.models.UserDetail || sequelize.define('UserDetail',userDetailSchema)
User.hasOne(UserDetail)
UserDetail.belongsTo(User)

// User.sync({alter:true}).then(()=>{
//     console.log("User Sync completed");
// })
// UserDetail.sync({alter:true}).then(()=>{
//     console.log("UserDetail Sync completed");
// })

//----------------------------------------------------------------------------------
// Second way to define model in sequelize

// export class User extends Model{}
// User.init({
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
//     },
//     accessToken:{
//         type: DataTypes.STRING,
//         defaultValue:""
//     }
// },{
//     sequelize,
//     modelName:'User'
// })

// User.sync({force:true,alter:true})



