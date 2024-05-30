import { DataTypes } from "sequelize";
import { sequelize } from "../../config/connectToDb.js";

const CategorySchema = {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type: DataTypes.STRING
    },
    ParentId:{
        type:DataTypes.INTEGER
    }
}

export const Category = sequelize.models.Category || sequelize.define('Category',CategorySchema)

Category.hasMany(Category,{as:"children",foreignKey:"ParentId"})
Category.belongsTo(Category,{as:"parent",foreignKey:"ParentId"})

// Category.sync({alter:true})
