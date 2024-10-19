
const mongoose = require('mongoose');
const serviceSchema = new mongoose.Schema({
    fname: String,
    lname:String,
    email:String,
    phone:String,
    company:String,
    type: String,
    about:String,
    year:String,
    price:String,
    image: {
        data: Buffer,  
        contentType: String
    },
    image1: {
        data: Buffer,  
        contentType: String
    } 

});

const ServiceModel = mongoose.model("Service", serviceSchema);
module.exports = ServiceModel;
