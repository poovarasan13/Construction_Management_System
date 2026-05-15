require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const uri = process.env.MONGODB_URI;
        const clientOptions = { 
            serverApi: { 
                version: '1', 
                strict: true, 
                deprecationErrors: true 
            } 
        };
        
        await mongoose.connect(uri, clientOptions);
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log(" MongoDB Connected Successfully!");
        console.log(" Connected to MongoDB Atlas!");
    }
    catch(error) {
        console.error(' MongoDB Connection Failed:');
        console.error(`  Error: ${error.message}`);
        console.error('  Retrying in 5 seconds...');
        setTimeout(() => connectDB(), 5000);
    }
};

module.exports = connectDB;