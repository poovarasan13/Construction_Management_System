const express = require('express');
const UserRequestModel =require('../model/user_request.js');

const router = express.Router();
router.put('/user_request/display/:id', async (req, res) => {
    const { id } = req.params;
    const { display } = req.body;
  
    console.log('Request ID:', id); 
    console.log('Display value:', display); 
  
    try {
      const updatedRequest = await UserRequestModel.findByIdAndUpdate(
        id,
        { display: display },
        { new: true }
      );
  
      if (!updatedRequest) {
        return res.status(404).json({ error: 'User request not found' });
      }
  
      res.status(200).json(updatedRequest);
    } catch (error) {
      console.error('Error updating display field:', error);
      res.status(500).json({ error: 'Failed to update display field' });
    }
  });
  
router.post('/user_request', async (req, res) => {
    const { username,useremail,userphone,date,area,message,add_message,v_name,type,type1,place,price} = req.body;
    console.log('Received data:', req.body);

    try {
        const newUser = await UserRequestModel.create({ username,useremail,userphone,date,area,message,add_message,v_name ,type,type1,place,price});
       
        res.json({ success: true, message: 'Request Sent successfully', user: newUser });
    } catch (error) {
        
    res.status(500).json({ success: false, message: 'An error occurred while sending request' });
       
    }
});


router.get('/requests/:v_name', async (req, res) => {
    const { v_name } = req.params;

    try {
        const requests = await UserRequestModel.find({ v_name });

        if (requests.length > 0) {
            res.json({ success: true, requests });
        } else {
            res.json({ success: false, message: 'No requests found for this vendor.' });
        }
    } catch (error) {
        console.error('Error fetching requests:', error);
        res.status(500).json({ success: false, message: 'An error occurred while fetching requests.' });
    }
});
router.get('/request/:username', async (req, res) => {
    const { username } = req.params;

    try {
        const requests = await UserRequestModel.find({ username });

        if (requests.length > 0) {
            res.json({ success: true, requests });
        } else {
            res.json({ success: false, message: 'No requests found for this vendor.' });
        }
    } catch (error) {
        console.error('Error fetching requests:', error);
        res.status(500).json({ success: false, message: 'An error occurred while fetching requests.' });
    }
});



router.put('/requests/accept/:id', async (req, res) => {
    const { id } = req.params;
    const { amount, products } = req.body;

    try {
        const updatedRequest = await UserRequestModel.findByIdAndUpdate(
            id,
            { accept: true, reject: false, amount, products },
            { new: true }
        );

        if (!updatedRequest) {
            return res.status(404).json({ success: false, message: 'Request not found' });
        }

        res.json({ success: true, message: 'Request accepted and amount updated', request: updatedRequest });
    } catch (error) {
        console.error('Error accepting request:', error);
        res.status(500).json({ success: false, message: 'An error occurred while accepting the request' });
    }
});


router.put('/requests/reject/:id', async (req, res) => {
    const { id } = req.params;

    try {
   
        const updatedRequest = await UserRequestModel.findByIdAndUpdate(
            id,
            { accept: false, reject: true, amount: null},  
            { new: true }
        );

        if (!updatedRequest) {
            return res.status(404).json({ success: false, message: 'Request not found' });
        }

        res.json({ success: true, message: 'Request rejected', request: updatedRequest });
    } catch (error) {
        console.error('Error rejecting request:', error);
        res.status(500).json({ success: false, message: 'An error occurred while rejecting the request' });
    }
});



module.exports =router;