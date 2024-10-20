
const express = require('express');
const connectDB = require('./db.js');
const cors = require('cors');
const port = 3003;


const userRoutes = require('./controllers/User.js');
const vendorRoutes = require('./controllers/Vendor.js');
const adminServiceRouter=require('./controllers/AdminServices.js');
const Services=require('./controllers/Services.js');
const URequest=require('./controllers/User_Request.js');
const Progress=require('./controllers/Progress.js')
const Complaint=require('./controllers/Complaint.js');
const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use('/', userRoutes);
app.use('/', vendorRoutes);
app.use('/',adminServiceRouter);
app.use('/',Services);
app.use('/',URequest);
app.use('/',Progress);
app.use('/',Complaint);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
