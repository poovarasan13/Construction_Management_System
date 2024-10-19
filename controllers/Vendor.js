
const express = require('express');
const VendorModel = require('../model/vendor.js'); 

const router = express.Router();


router.post('/vendorsignup', async (req, res) => {
    const { fname, lname, company, category, email, phone, password, state } = req.body;
    try {
        const newVendor = await VendorModel.create({ fname, lname, company, category, email, phone, password, state });
        res.json({ success: true, message: "Vendor Registered", vendor: newVendor });
    } catch (error) {
        console.error('Error creating vendor:', error);
        if (error.code === 11000) {
            res.status(400).json({ success: false, message: 'Email already exists' });
        } else {
            res.status(500).json({ success: false, message: 'An error occurred while registering the vendor' });
        }
    }
});

// Vendor Login
router.post('/vendorlogin', async (req, res) => {
    const { email, password } = req.body;

    try {
        const vendor = await VendorModel.findOne({ email });
        if (vendor) {
          
            if (vendor.password === password) {
                res.json({
                    success: true,
                    id: vendor._id, 
                    fname: vendor.fname,
                    lname: vendor.lname,
                    company: vendor.company,
                    category: vendor.category,
                    email: vendor.email,
                    phone: vendor.phone,
                    state: vendor.state
                });
            } else {
                res.status(401).json({ success: false, message: "The password is incorrect." });
            }
        } else {
            res.status(404).json({ success: false, message: "No record exists." });
        }
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ success: false, message: "Server error." });
    }
});

router.put('/vendorupdate/:id', async (req, res) => {
    const { id } = req.params;
    const { fname, lname, company, category, email, phone, state } = req.body;

    try {
       
        const updatedVendor = await VendorModel.findByIdAndUpdate(
            id,
            { fname, lname, company, category, email, phone, state },
            { new: true, runValidators: true } 
        );

        if (!updatedVendor) {
            return res.status(404).json({ success: false, message: 'Vendor not found' });
        }

        res.json({ success: true, message: "Vendor details updated", vendor: updatedVendor });
    } catch (error) {
        console.error('Error updating vendor:', error);
        if (error.name === 'ValidationError') {
            return res.status(400).json({ success: false, message: 'Validation failed', errors: error.errors });
        }
        if (error.code === 11000) {
            return res.status(400).json({ success: false, message: 'Email already exists' });
        }
        res.status(500).json({ success: false, message: 'An error occurred while updating the vendor' });
    }
});

module.exports = router;
