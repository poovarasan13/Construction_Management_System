const express = require('express');
const axios = require('axios');
const router = express.Router();

// Using Pollinations AI - completely free, no authentication needed
const POLLINATIONS_API_URL = "https://image.pollinations.ai/prompt";

router.post('/api/generate-image', async (req, res) => {
  try {
    const { prompt } = req.body;

    // Validate input
    if (!prompt || prompt.trim() === '') {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    console.log('Generating image with prompt:', prompt);

    // Pollinations generates image instantly - just construct the URL
    const imageUrl = `${POLLINATIONS_API_URL}/${encodeURIComponent(prompt)}`;
    console.log('Requesting from:', imageUrl);

    // Fetch the generated image
    const imageResponse = await axios.get(imageUrl, {
      responseType: 'arraybuffer',
      timeout: 60000,
    });

    console.log('Image generated successfully');

    // Send image to client
    res.set('Content-Type', 'image/jpeg');
    res.send(imageResponse.data);
  } catch (error) {
    console.error('Image generation error:', {
      message: error.message,
      status: error.response?.status,
      statusText: error.response?.statusText,
    });

    res.status(500).json({ error: `Failed to generate image: ${error.message}` });
  }
});

module.exports = router;






