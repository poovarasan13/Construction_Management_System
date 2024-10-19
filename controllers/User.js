
const express = require('express');
const UserModel = require('../model/user.js'); // Adjust the path if necessary

const router = express.Router();

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await UserModel.findOne({ email });
        if (user) {
            if (user.password === password) {
                res.json({ success: true, username: user.name , userphone:user.phone,useremail:user.email});
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


router.post('/signup', async (req, res) => {
    const { name, phone, email, password } = req.body;
    console.log('Received data:', req.body);

    try {
        const newUser = await UserModel.create({ name, phone, email, password });
        console.log('Student created:', newUser);
        res.json({ success: true, message: 'Student registered successfully', user: newUser });
    } catch (error) {
        console.error('Error creating student:', error);
        if (error.code === 11000) {
            res.status(400).json({ success: false, message: 'Email already exists' });
        } else {
            res.status(500).json({ success: false, message: 'An error occurred while registering the student' });
        }
    }
});

module.exports = router;
