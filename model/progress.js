const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  username:{type:String,required:true},
  uname: { type: String, required: true },
  uemail: { type: String, required: true },
  uphone: { type: String, required: true },
  date: { type: Date, required: true }, 
  area: { type: String, required: true },
  v_name: { type: String, required: true },
  type: { type: String, required: true },
  place: { type: String },
  amount: { type: Number } ,
  accept: { type: Boolean, default: false },
  reject: { type: Boolean, default: false }, 
  progress:{type:Number}
});

const ProgressModel = mongoose.model("progresses", progressSchema);
module.exports = ProgressModel;
