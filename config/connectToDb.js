import { Sequelize } from "sequelize";



// export const sequelize= new Sequelize('postgres://postgres:123@localhost:5432/fastifyproject')
export const sequelize = new Sequelize("fastifyproject","postgres","123",{
    dialect: "postgres",
    host:"localhost",
    port:"5432"
})

const connectToDB = async()=>{
    try{
        await sequelize.authenticate();
        console.log('Connection to PostgreSQL has been established successfully.');
    }catch(error){
        console.error('Unable to connect to the database:', error);
    }
}

connectToDB()