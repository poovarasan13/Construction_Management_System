const express = require('express');
const ComplaintModel = require('../model/complaint.js');

const router = express.Router();

router.post('/complaint', async (req, res) => {
    const { name, v_name, company, phone, email, type, complaint, date } = req.body;

    try {
        const newComplaint = await ComplaintModel.create({ name, v_name, company, phone, email, type, complaint, date });
        res.json({ success: true, message: "Complaint sent successfully", complaint: newComplaint });
    } catch (error) {
        console.error('Error creating complaint:', error);
        if (error.code === 11000) {
            res.status(400).json({ success: false, message: 'Duplicate entry detected (e.g., email already exists)' });
        } else {
            res.status(500).json({ success: false, message: 'An error occurred while processing the complaint' });
        }
    }
});

router.get('/complaints', async (req, res) => {
    try {
        const complaints = await ComplaintModel.find({});
        res.json({ success: true, complaints });
    } catch (error) {
        console.error('Error retrieving complaints:', error);
        res.status(500).json({ success: false, message: 'An error occurred while retrieving complaints' });
    }
});

module.exports = router;
