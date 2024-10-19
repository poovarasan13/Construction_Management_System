import React, { useState } from 'react';
import Navbar from '../Navbar';


const Gpt = () => {
  const [inputText, setInputText] = useState('');
  const [imageSrc, setImageSrc] = useState('');
  const [error, setError] = useState('');
  const [imageBlob, setImageBlob] = useState(null); 
  const [loading, setLoading] = useState(false); 

  const token = "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";

  const query = async () => {
    try {
      setLoading(true); 
      const response = await fetch(
        "https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({ "inputs": inputText }),
        }
      );
  
      if (!response.ok) {
        const errorMessage = await response.text(); // Fetch error message from API
        throw new Error(errorMessage || 'Failed to fetch image');
      }
  
      const blob = await response.blob();
      const objectURL = URL.createObjectURL(blob);
      setImageSrc(objectURL); 
      setImageBlob(blob); 
    } catch (err) {
      console.error('Error during fetch:', err);
      setError(`Failed to generate image: ${err.message}`); 
    } finally {
      setLoading(false); 
    }
  };
  const handleClick = () => {
    if (inputText.trim() === '') {
      setError('Input cannot be empty.');
      return;
    }
    setError(''); 
    query();
  };

  const handleDownload = () => {
    if (imageBlob) {
      const link = document.createElement('a');
      link.href = URL.createObjectURL(imageBlob);
      link.download = 'generated-image.png'; 
      link.click();
    }
  };

  const handleRegenerate = () => {
    
    setImageSrc('');
    setImageBlob(null);
    query();
  };

  return (
    <div >
     <Navbar/>
     <div className='container-fluid'>
            <div className='row  colorr' style={{backgroundColor: "rgba(7, 7, 7, 0.9)"}}>
            <div className='col pt-5 py-3 '></div>
          </div>
            </div>
 <div className="container text-center mt-5">
      <h1 className="mb-4 text-warning">Image Generator</h1>

      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text to generate image"
        className="form-control mb-3"
      />
      <button
        className="btn btn-warning text-dark fw-bold mb-2"
        onClick={handleClick}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Generate'}
      </button>
      {error && <p className="text-danger fw-bold">{error}</p>}

      {imageSrc && (
        <div className="mt-4">
          <img
            id="image"
            src={imageSrc}
            alt="Generated"
            className="img-fluid rounded mb-3 shadow"
          />
          <br />
          <button className="btn btn-dark text-warning me-2" onClick={handleDownload}>
            Download Image
          </button>
          <button className="btn btn-warning text-dark" onClick={handleRegenerate}>
            Regenerate
          </button>
        </div>
      )}
    </div>
    </div>
   
  );
};

export default Gpt;
