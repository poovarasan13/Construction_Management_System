const express = require('express');
const ServiceModel = require("../model/services.js");
const multer = require('multer');

const router = express.Router();
const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage });

router.post('/service', upload.fields([{ name: 'image' }, { name: 'image1' }]), async (req, res) => {
    const { fname, lname, email, phone, company, type, about, year ,price} = req.body;

    try {
        const existingService = await ServiceModel.findOne({ fname, company, type });
        if (existingService) {
            return res.status(400).json({ success: false, message: 'Service with this fname, company, and type already exists' });
        }

        const image = req.files.image ? {
            data: req.files.image[0].buffer,        
            contentType: req.files.image[0].mimetype 
        } : null;

        const image1 = req.files.image1 ? {
            data: req.files.image1[0].buffer,        
            contentType: req.files.image1[0].mimetype 
        } : null;
 const newService = await ServiceModel.create({
            fname,
            lname,
            email,
            phone,
            company,
            type,
            about,
            year,
            price,
            image,
            image1
        });

        res.json({ success: true, message: "Service added successfully", service: newService });
    } catch (error) {
        console.error('Error adding service:', error);
        res.status(500).json({ success: false, message: 'An error occurred while adding the service' });
    }
});


router.get('/service', async (req, res) => {
    const { fname } = req.query;  

    try {
       
        const services = await ServiceModel.find({ fname });
        
        const servicesWithImages = services.map(service => {
            const formattedService = service.toObject();
            if (formattedService.image && formattedService.image.data) {
                formattedService.image = `data:${formattedService.image.contentType};base64,${formattedService.image.data.toString('base64')}`; 
            }
            if (formattedService.image1 && formattedService.image1.data) {
                formattedService.image1 = `data:${formattedService.image1.contentType};base64,${formattedService.image1.data.toString('base64')}`; 
            }
            return formattedService;
        });

        res.json({ success: true, services: servicesWithImages });
    } catch (error) {
        console.error('Error fetching services:', error);
        res.status(500).json({ success: false, message: 'An error occurred while fetching services.' });
    }
});
router.get('/services', async (req, res) => {
    const { type } = req.query;  
    try {
        
        const services = await ServiceModel.find({ type });
        
        
        const servicesWithImages = services.map(service => {
            const formattedService = service.toObject();  
            if (formattedService.image && formattedService.image.data) {
                formattedService.image = `data:${formattedService.image.contentType};base64,${formattedService.image.data.toString('base64')}`; 
            }

            
            if (formattedService.image1 && formattedService.image1.data) {
                formattedService.image1 = `data:${formattedService.image1.contentType};base64,${formattedService.image1.data.toString('base64')}`; 
            }

            return formattedService;
        });

       
        res.json({ success: true, services: servicesWithImages });
    } catch (error) {
        console.error('Error fetching services:', error);
        res.status(500).json({ success: false, message: 'An error occurred while fetching services.' });
    }
});



router.put('/service/:id', upload.fields([{ name: 'image' }, { name: 'image1' }]), async (req, res) => {
    const { id } = req.params;
    const { fname, lname, email, phone, company, type,price, about, year } = req.body;

    try {
        const service = await ServiceModel.findById(id);
        if (!service) {
            return res.status(404).json({ success: false, message: 'Service not found' });
        }

        const existingService = await ServiceModel.findOne({ fname, company, type });
        if (existingService && existingService._id.toString() !== id) {
            return res.status(400).json({ success: false, message: 'Service with this fname, company, and type already exists' });
        }

        service.fname = fname;
        service.lname = lname;
        service.email = email;
        service.phone = phone;
        service.company = company;
        service.type = type;
        service.about = about;
        service.year = year;
        service.price=price;

        if (req.files.image) {
            service.image = {
                data: req.files.image[0].buffer,
                contentType: req.files.image[0].mimetype
            };
        }
        if (req.files.image1) {
            service.image1 = {
                data: req.files.image1[0].buffer,
                contentType: req.files.image1[0].mimetype
            };
        }

        await service.save();
        res.json({ success: true, message: 'Service updated successfully', service });
    } catch (error) {
        console.error('Error updating service:', error);
        res.status(500).json({ success: false, message: 'An error occurred while updating the service' });
    }
});

router.delete('/service/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const service = await ServiceModel.findByIdAndDelete(id);
        if (!service) {
            return res.status(404).json({ success: false, message: 'Service not found' });
        }   

        res.json({ success: true, message: 'Service deleted successfully' });
    } catch (error) {
        console.error('Error deleting service:', error);
        res.status(500).json({ success: false, message: 'An error occurred while deleting the service' });
    }
});

module.exports = router;
