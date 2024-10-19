const mongoose =require('mongoose');

const connectDB= async () =>{
    try{
        const con= await mongoose.connect('mongodb://127.0.0.1:27017/construction_management');
        console.log(`MongoDB Connected: ${con.connection.port} ,${con.connection.host}   `);
    }
    catch(error)
    {
        console.log(error);
        process.exit(1);
    }
};
module.exports=connectDB;