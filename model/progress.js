const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
 
  username: { type: String, required: true },
  useremail: { type: String, required: true },
  userphone: { type: String, required: true },
  date: { type: Date, required: true }, 
  area: { type: String, required: true },
  v_name: { type: String, required: true },
  type: { type: String, required: true },
  type1: { type: String, required: true },
  place: { type: String },
  amount: { type: Number } ,
  accept: { type: Boolean, default: false },
  reject: { type: Boolean, default: false }, 
  progress:{type:Number}
});

const ProgressModel = mongoose.model("progresses", progressSchema);
module.exports = ProgressModel;
