const express = require('express');
const ServiceModel = require("../model/adminservices.js");
const multer = require('multer');

const router = express.Router();
const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage });

router.post('/adminservice', upload.single('image'), async (req, res) => {
    const { name, desc } = req.body;

    try {
        
        const existingService = await ServiceModel.findOne({ name });
        if (existingService) {
            return res.status(400).json({ success: false, message: 'Service with this name already exists' });
        }

        let image = null;
        if (req.file) {
            image = {
                data: req.file.buffer,        
                contentType: req.file.mimetype 
            };
        }

       
        const newService = await ServiceModel.create({
            name,
            desc,
            image 
        });

        res.json({ success: true, message: "Service added successfully", service: newService });
    } catch (error) {
        console.error('Error adding service:', error);
        res.status(500).json({ success: false, message: 'An error occurred while adding the service' });
    }
});
router.get('/adminservice', async (req, res) => {
    try {
        const services = await ServiceModel.find();
        
       
        const servicesWithImages = services.map(service => {
            if (service.image && service.image.data) {
                return {
                    ...service.toObject(),
                    image: `data:${service.image.contentType};base64,${service.image.data.toString('base64')}` // Convert to base64
                };
            }
            return service;
        });

        res.json({ success: true, services: servicesWithImages });
    } catch (error) {
        console.error('Error fetching services:', error);
        res.status(500).json({ success: false, message: 'An error occurred while fetching services.' });
    }
});


module.exports = router;
