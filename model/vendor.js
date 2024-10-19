const mongoose =require('mongoose');

const vendorSchema = new mongoose.Schema({
    fname:   String,
    lname: String,
    company: String,
    category :String,
    email:   String,
    phone :String,
    password:   String,
    state:String
});


const VendorModel=mongoose.model("vendor",vendorSchema)
module.exports=VendorModel;