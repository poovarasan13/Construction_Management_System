import React, { useState } from 'react';
import img from '../../assests/images/g.png';
import img1 from '../../assests/images/g1.png';
import img2 from '../../assests/images/g2.png';
import img3 from '../../assests/images/g3.png';
import Navbar from '../Navbar';
import Footer from '../Footer';
// /home/poovarasan/Documents/Projects/mini-project/construction/src/assests/images/generated-image .png
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
        const errorMessage = await response.text(); 
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

    <>
    <Navbar/>
    <div className='container-fluid '>
       <div className='row colorr' style={{ backgroundColor: "rgba(7, 7, 7, 0.9)" }}>
          <div className='col pt-5 py-3 '></div>
        </div>
      <div className="container-fluid mt-5">
        
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-10 col-sm-12">
            <div className="card shadow-lg p-5 bg-white rounded">
              <h1 className="mb-4 text-center text-warning">Generate Your Room Design's Here</h1>
          <div className='row'>
            <div className='col'>
            <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Describe the image you want to create..."
                  className="form-control rounded-3 px-4"
                  aria-label="Image Description"
                />
            </div>
          </div>
              <div >
                
                <br></br>
                <div className='row justify-content-center'>
                  <div className='col-1 '>
                  <div className="input-group-append">
                  <button
                    className="btn btn-primary  px-4"
                    onClick={handleClick}
                    disabled={loading}
                  >
                    {loading ? 'Generating...' : 'Generate'}
                  </button>
                </div>
                  </div>
                  
                
                </div>
                
              </div>

              {error && <p className="text-danger text-center">{error}</p>}

              {imageSrc && (
                <div className="card mt-4 shadow">
                  <img
                    src={imageSrc}
                    alt="Generated"
                    className="card-img-top img-fluid"
                    style={{ maxHeight: '400px', objectFit: 'cover' }}
                  />
                  <div className="card-body text-center">
                    <button className="btn btn-success me-3" onClick={handleDownload}>
                      Download Image
                    </button>
                    <button className="btn btn-warning" onClick={handleRegenerate}>
                      Regenerate
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-5">
  <div className="row justify-content-center">
    <div className="col-lg-3   col-md-3 col-sm-12">
      <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
        <div className="card-image">
          <img src={img} className="img-fluid" alt="generate1" style={{ objectFit: 'cover', height: '200px', width: '100%' }} />
        </div>
        <div className="card-body text-center p-4">
          <h5 className="card-title fw-bold text-warning">Youtuber Room Design</h5>
          
          
        </div>
      </div>
    </div>
    <div className="col-lg-3   col-md-3 col-sm-12">
      <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
        <div className="card-image">
          <img src={img1} className="img-fluid" alt="generate11" style={{ objectFit: 'cover', height: '200px', width: '100%' }} />
        </div>
        <div className="card-body text-center p-4">
          <h5 className="card-title fw-bold text-warning">Waiting Room Design</h5>
          
          
        </div>
      </div>
    </div>
    <div className="col-lg-3   col-md-3 col-sm-12">
      <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
        <div className="card-image">
          <img src={img2} className="img-fluid" alt="generate2" style={{ objectFit: 'cover', height: '200px', width: '100%' }} />
        </div>
        <div className="card-body text-center p-4">
          <h5 className="card-title fw-bold text-warning">Kitchen  Design</h5>
         
          
        </div>
      </div>
    </div>

    <div className="col-lg-3   col-md-3 col-sm-12">
      <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
        <div className="card-image">
          <img src={img3} className="img-fluid" alt="generate3" style={{ objectFit: 'cover', height: '200px', width: '100%' }} />
        </div>
        <div className="card-body text-center p-4">
          <h5 className="card-title fw-bold text-warning">Kids Room Design</h5>
         
          
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
    <Footer/>
    </>
   
  );
};

export default Gpt;
