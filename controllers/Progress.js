const express = require('express');
const ProgressModel=require('../model/progress.js');

const router = express.Router();
router.put('/progress/update/:id', async (req, res) => {
  const { id } = req.params;
  const { progress } = req.body;

  try {
    const updatedRequest = await ProgressModel.findByIdAndUpdate(id, { progress }, { new: true });
    if (!updatedRequest) {
      return res.status(404).json({ message: 'Progress request not found' });
    }
    res.status(200).json({ message: 'Progress updated successfully', request: updatedRequest });
  } catch (error) {
    res.status(500).json({ message: 'Error updating progress', error });
  }
});
router.get('/progress/:username', async (req, res) => {
  const { username } = req.params;

  try {
    const requests = await ProgressModel.find({ uname: username });
    res.status(200).json({ requests });
  } catch (error) {
    console.error('Error fetching progress requests:', error);
    res.status(500).json({ message: 'Failed to fetch progress requests.' });
  }
});


router.get('/progresss/:fname', async (req, res) => { 
  const { fname } = req.params; 

  try {
    const requests = await ProgressModel.find({ v_name: fname }); 
    res.status(200).json({ requests });
  } catch (error) {
    console.error('Error fetching progress requests:', error);
    res.status(500).json({ message: 'Failed to fetch progress requests.' });
  }
});

router.post('/progress/accept', async (req, res) => {
    const { uname, uemail, uphone, date, area, v_name, type, place, amount } = req.body;
  
    try {
    
      const newProgress = new ProgressModel({
        uname,
        uemail,
        uphone,
        date,
        area,
        v_name,
        type,
        place,
        amount,
        accept: true,
        reject: false,
      });
  
      await newProgress.save(); 
      res.status(201).json(newProgress); 
    } catch (error) {
      console.error('Error adding accepted request to progress:', error);
      res.status(500).json({ message: 'Error adding accepted request to progress' });
    }
  });
  
  // Reject request and add to progress
  router.post('/progress/reject', async (req, res) => {
    const { uname, uemail, uphone, date, area, v_name, type, place } = req.body;
  
    try {
      // Add the rejected request directly to the progress table
      const newProgress = new ProgressModel({
        uname,
        uemail,
        uphone,
        date,
        area,
        v_name,
        type,
        place,
        amount: 0, 
        accept: false,
        reject: true,
      });
  
      await newProgress.save(); 
      res.status(201).json(newProgress); 
    } catch (error) {
      console.error('Error adding rejected request to progress:', error);
      res.status(500).json({ message: 'Error adding rejected request to progress' });
    }
  });
  

  router.get('/progress', async (req, res) => {
    try {
      const progressEntries = await ProgressModel.find();
      res.status(200).json({ progress: progressEntries });
    } catch (error) {
      console.error('Error fetching progress entries:', error);
      res.status(500).json({ message: 'Failed to fetch progress entries' });
    }
  });
module.exports =router;