const mongoose = require('mongoose');

const adminserviceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    desc: { type: String, required: true },
    image: {
        data: Buffer,  
        contentType: String
    }
});

const AdminServiceModel = mongoose.model("adminservice", adminserviceSchema);
module.exports = AdminServiceModel;
