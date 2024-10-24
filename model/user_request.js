const mongoose = require('mongoose');

const userrequestSchema = new mongoose.Schema({
  username: { type: String, required: true },
  
  useremail: { type: String, required: true },
  userphone: { type: String, required: true },
  date: { type: Date, required: true }, 
  area: { type: String, required: true },
  message: { type: String, required: true },
  add_message: { type: String },
  v_name: { type: String, required: true },
  type: { type: String, required: true },
  type1: { type: String, required: true },
  place: { type: String, required: true },
  price: { type: Number,required : true }, 
  accept: { type: Boolean, default: false },
  reject: { type: Boolean, default: false },
  products: [
    {
        name: { type: String, required: true },
        
    }
],
  amount: { type:  Number } ,
  display:{type:Boolean}
});

const UserRequestModel = mongoose.model("user_request", userrequestSchema);
module.exports = UserRequestModel;
