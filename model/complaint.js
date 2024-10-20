const mongoose = require('mongoose');
const complaintSchema = new mongoose.Schema({
    name: String,
    v_name:String,
    company:String,
    phone:String,
    email:String,
    type:String,
    complaint:String,
    date:Date
});

const ComplaintModel = mongoose.model("Complaint", complaintSchema);
module.exports = ComplaintModel;
