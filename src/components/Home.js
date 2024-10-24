import React, { useEffect, useState } from "react";
import "./Home.css";
// import Swal from 'sweetalert2';
import backgroundimg from "../assests/images/blue.avif";
import ff1 from "../assests/images/ff1.webp";
import f2 from "../assests/images/f2.webp";
import house from "../assests/images/house1.webp";
import build from "../assests/images/house2.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {Link} from "react-router-dom";
import img1 from "../assests/images/services/img1.jpg";
import img2 from "../assests/images/services/img2.jpg";
import img3 from "../assests/images/services/img3.jpg";
import img4 from "../assests/images/services/img4.jpg";
import img5 from "../assests/images/services/img5.jpg";
import img6 from "../assests/images/services/img6.jpg";
import img7 from "../assests/images/services/img7.jpg";
import img8 from "../assests/images/services/img8.jpg";
import img9 from "../assests/images/services/img9.jpg";
import img10 from "../assests/images/services/img10.jpg";
import img11 from "../assests/images/services/img11.jpg";
import img12 from "../assests/images/services/img12.jpg";
import img14 from "../assests/images/services/img14.jpg";
import img13 from "../assests/images/services/Renovation.jpg";
function Home() {
  const data = ["Building", "Designing", "Planning"];
  const [content, setContent] = useState(0);
  // const [services, setServices] = useState([]);
  // const company = "Concrete";

  useEffect(() => {
    const interval = setInterval(() => {
      setContent((prev) => (prev + 1) % data.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [data.length]);
//   useEffect(() => {
        
//     const fetchServices = async () => {
//         try {
//             const response = await fetch('http://localhost:3003/adminservice');
//             const data = await response.json();

//             if (data.success) {
//                 setServices(data.services); 
//             } else {
//                 await Swal.fire({
//                     icon: 'error',
//                     title: 'Error',
//                     text: data.message || 'Could not fetch services.',
//                 });
//             }
//         } catch (error) {
//             console.error('Error fetching services:', error);
//             await Swal.fire({
//                 icon: 'error',
//                 title: 'Oops...',
//                 text: 'An error occurred while fetching services!',
//             });
//         }
//     };

//     fetchServices(); 
// }, []);
  return (
    <>
     <Navbar/>
      <div
        className="container-fluid d-flex justify-content-center align-items-center bg-cover no-repeat"
        style={{
          backgroundImage: `url(${backgroundimg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="text-center mb-5 pb-5">
          <div className="row pt-5">
            <div className="col mt-5 pt-5">
            <h1
            className=" fw-bold display-1 p-3 mt-5 pt-5 text-white"
            style={{ fontfamily: "sans - serif"}}
          >
            IT'S YOUR DREAM
          </h1>
            </div>
          </div>
         
          <h1
            className=" fw-bold p-3 text-warning "
            style={{ fontfamily: "sans - serif"}}
          >
            We are {data[content]}
          </h1>
          <div className="mb-5">

          </div>
          {/* <p
            className="mx-5 px-5  h3"
            style={{
              fontfamily: "sans - serif",
              color: "lightgoldenrodyellow",
            }}
          >
            Moxx is a general engineering company, based in Nairobi, Kenya,
            specializing in Architecture, Civil Engineering, Structural
            Engineering, Water Engineering, Electrical Engineering, Mechanical
            Engineering, and Project Management fields.
          </p> */}
          <br></br>
          {/* <div className="row p-4">
            <p
              className=" p-3 h2"
              style={{ fontfamily: "sans - serif", color: "palegreen" }}
            >
              We shape our buildings; thereafter, they shape us.
            </p>
          </div> */}
          {/* <div className="row p-4">
            <p
              className=" p-3 h3"
              style={{
                fontfamily: "sans - serif",
                color: "lightgoldenrodyellow",
              }}
            >
              A great building must begin with the immeasurable, must go through
              measurable means when it is being designed, and in the end must be
              unmeasured.
            </p>
          </div> */}
        </div>
      </div>
{/* Services */}


<div>
<div className="container-fluid mt-2">
{/* <!--   <div className="card card-block mb-2">
    <h4 className="card-title">Card 1</h4>
    <p className="card-text">Welcom to bootstrap card styles</p>
    <a href="#" className="btn btn-primary">Submit</a>
  </div>   --> */}
  <div className="row justify-content-center mt-3">
    <div className="col-1">
      <div className="text fs-2 fw-bold">SERVICES</div>
    </div>
  </div>
 
<div className='row mx-4 my-5'>



<div className="col-md-3 col-sm-6 px-4 py-4">
<Link 
    to={`/services?serviceType=Architecture`}
    className="text-decoration-none"> 
       <div className="card card-block">
     
    <img src={img12} alt="Architecture" className="img-fluid" style={{height:"200px"}}/>
        <h5 className="card-title mt-3 mb-3 text-center text-decoration-none">Architecture</h5>
       
  </div>
  </Link>
  </div>


  <div className="col-md-3 col-sm-6 px-4 py-4">
  <Link 
    to={`/services?serviceType=Concrete`}
    className="text-decoration-none"
  >
    <div className="card card-block">
      <img src={img1} alt="concrete" style={{ height: "200px" }} />
      <h5 className="card-title mt-3 mb-3 text-center">Concrete Works</h5>
    </div>
  </Link>
</div>




  <div className="col-md-3 col-sm-6 px-4 py-4"> 
  <Link 
    to={`/services?serviceType=Foundation`}
    className="text-decoration-none"> 
    <div className="card card-block">
     
    <img src={img2} alt="Foundation" style={{height:"200px"}}/>
        <h5 className="card-title mt-3 mb-3 text-center">Foundation</h5>
       
  </div></Link>
  </div>
  <div className="col-md-3 col-sm-6 px-4 py-4">
  <Link 
    to={`/services?serviceType=PipeLine`}
    className="text-decoration-none"> 
       <div className="card card-block">
     
    <img src={img3} alt="PipleLine Works" style={{height:"200px"}}/>
        <h5 className="card-title mt-3 mb-3 text-center">PipeLine Works</h5>
       
  </div></Link>
  </div>

  <div className="col-md-3 col-sm-6 px-4 py-4">
  <Link 
    to={`/services?serviceType=Electrical`}
    className="text-decoration-none"> 
      <div className="card card-block">
     
    <img src={img4} alt="Electrical Works" style={{height:"200px"}}/>
        <h5 className="card-title mt-3 mb-3 text-center">Electrical Works</h5>
       
  </div></Link>
  </div>

  <div className="col-md-3 col-sm-6 px-4 py-4">
  <Link 
    to={`/services?serviceType=Painting`}
    className="text-decoration-none">    
     <div className="card card-block">
     
    <img src={img5} alt="Painting" style={{height:"200px"}}/>
        <h5 className="card-title mt-3 mb-3 text-center">Painting</h5>
       
  </div></Link>
  </div>

  <div className="col-md-3 col-sm-6 px-4 py-4">
  <Link 
    to={`/services?serviceType=Grouting`}
    className="text-decoration-none"> 
       <div className="card card-block">
     
    <img src={img6} alt="Grouting Works" style={{height:"200px"}}/>
        <h5 className="card-title mt-3 mb-3 text-center">Grouting Works</h5>
       
  </div></Link>
  </div>
  <div className="col-md-3 col-sm-6 px-4 py-4">
  <Link 
    to={`/services?serviceType=Excavation`}
    className="text-decoration-none"> 
      <div className="card card-block">
     
    <img src={img7} alt="Excavation Works" style={{height:"200px"}}/>
        <h5 className="card-title mt-3 mb-3 text-center">Excavation Works</h5>
       
  </div></Link>

  </div>
  <div className="col-md-3 col-sm-6 px-4 py-4">
  <Link 
    to={`/services?serviceType=Plumbing`}
    className="text-decoration-none"> 
      <div className="card card-block">
     
    <img src={img8} alt="Plumbing" style={{height:"200px"}}/>
        <h5 className="card-title mt-3 mb-3 text-center">Plumbing</h5>      
  </div></Link>
  </div>
  <div className="col-md-3 col-sm-6 px-4 py-4">
  <Link 
    to={`/services?serviceType=Roofing`}
    className="text-decoration-none"> 
      <div className="card card-block">
     
    <img src={img9} alt="Roofing" style={{height:"200px"}}/>
        <h5 className="card-title mt-3 mb-3 text-center">Roofing</h5>
       
  </div></Link>
  </div>
  <div className="col-md-3 col-sm-6 px-4 py-4">
  <Link 
    to={`/services?serviceType=Carpentry`}
    className="text-decoration-none"> 
      <div className="card card-block">
     
    <img src={img10} alt="Carpentry" style={{height:"200px"}}/>
        <h5 className="card-title mt-3 mb-3 text-center">Carpentry</h5>
       
  </div></Link>
  </div>
  <div className="col-md-3 col-sm-6 px-4 py-4">
  <Link 
    to={`/services?serviceType=InteriorDesign`}
    className="text-decoration-none"> 
       <div className="card card-block">
     
    <img src={img11} alt="Interior Design" style={{height:"200px"}}/>
        <h5 className="card-title mt-3 mb-3 text-center">Interior Design</h5>
       
  </div>
  </Link>
  </div>

  <div className="col-md-3 col-sm-6 px-4 py-4">
  <Link 
    to={`/services?serviceType=ExteriorDesign`}
    className="text-decoration-none"> 
       <div className="card card-block">
     
    <img src={img14} alt="EXterior Design" style={{height:"200px"}}/>
        <h5 className="card-title mt-3 mb-3 text-center">Exterior Design</h5>
       
  </div>
  </Link>
  </div>

  <div className="col-md-3 col-sm-6 px-4 py-4">
  <Link 
    to={`/services?serviceType=Renovation`}
    className="text-decoration-none"> 
       <div className="card card-block">
     
    <img src={img13} alt="Renovation" style={{height:"200px"}}/>
        <h5 className="card-title mt-3 mb-3 text-center">Renovation</h5>
       
  </div>
  </Link>
  </div>

  {/* <div className="col-md-3 col-sm-6 px-4 py-4">
  <Link 
    to={`/services?serviceType=Repairing`}
    className="text-decoration-none"> 
       <div className="card card-block">
     
    <img src={img13} alt="Renovation" style={{height:"200px"}}/>
        <h5 className="card-title mt-3 mb-3 text-center">Repairing</h5>
       
  </div>
  </Link>
  </div> */}
  
  
    {/* {services.length > 0 ? (
        services.map((service) => (
          
            <div className='col-md-3 col-sm-6 px-4 py-2' key={service._id}> 
                <div className='card card-block'>
                    {service.image && (
                        <img
                            className='card-img-top '
                            src={service.image} 
                            alt={service.name}
                            style={{ maxWidth: '100%', height: '200px', objectFit: 'cover' }}
                        />
                    )}
                   <Link to={`/${service.name}`} className=" text-dark  ">

                    <h5 className='card-title mt-3 mb-3 text-center '>{service.name}</h5>
                    </Link>
                    <p className='card-text text-center'>{service.desc}</p>
                </div>
            </div>
        ))
    ) : (
        <div className='col-12'>
            <p>No services available.</p>
        </div>
    )} */}
</div>


    
    
  </div>
  


</div>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-12 bg-warning text-center p-4">
            <h1>
              Looking for the best partner for your next construction works?
            </h1>
            <button className="btn btn-outline-dark">HIRE US NOW</button>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <img src={ff1} alt="logo" className="img-fluid" />
          </div>
          <div className="col-md-4 col-sm-12">
            <h1 className="p-3">
              <u>Planning</u>
            </h1>
            <div className="p-3">
              For the successful execution of a project, effective planning is
              essential. Those involved with the design and execution of the
              infrastructure in question must consider zoning requirements.
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <img src={f2} alt="logo1" className="img-fluid" />
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <h1 className="p-3">
              <u>Constructing</u>
            </h1>
            <div className="p-3">
              An era where we want to bring the best out of your idea, a moment
              where we care for our clients bringing up their dream design to
              life and actualizing their dreams in real life.
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <img src={f2} alt="logo1" className="img-fluid" />
          </div>
          <div className="col-md-4 col-sm-12">
            <h1 className="p-3">
              <u>Rebuilding</u>
            </h1>
            <div className="p-3">
              Nobody is perfect they say, at Moxx, we come to rescue. To us
              rebuilding is much more than mere renovation. This is a task we
              take to heart as we want to bring out the best in what was deemed
              the worse or less appealing.
            </div>
          </div>
        </div>
      </div>
      <div className="container  m">
        <div className="row">
          <div className=" col col-md-3 col-sm-3 p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="yellow"
              className="bi bi-alarm bi-warning"
              viewBox="0 0 16 16"
            >
              <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9z" />
              <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1zm1.038 3.018a6 6 0 0 1 .924 0 6 6 0 1 1-.924 0M0 3.5c0 .753.333 1.429.86 1.887A8.04 8.04 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5M13.5 1c-.753 0-1.429.333-1.887.86a8.04 8.04 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1" />
            </svg>
            <h1>8350</h1>
            <p>Hours of Works</p>
          </div>
          <div className=" col col-md-3 col-sm-3 p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="yellow"
              className="bi bi-journal-bookmark-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M6 1h6v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8z"
              />
              <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
              <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
            </svg>
            <h1>240</h1>
            <p>Project complete</p>
          </div>
          <div className=" col col-md-3 col-sm-3 p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="yellow"
              className="bi bi-chat"
              viewBox="0 0 16 16"
            >
              <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105" />
            </svg>
            <h1>120</h1>
            <p>Feedback Received</p>
          </div>
          <div className=" col col-md-3 col-sm-3 p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="yellow"
              className="bi bi-mic-fill"
              viewBox="0 0 16 16"
            >
              <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0z" />
              <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5" />
            </svg>
            <h1>73</h1>
            <p>Satisfied Clients</p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-8">
            <div className="row">
              <div className="col  bg-dark">
                <h1 className="text-white p-5">Our history</h1>
                <div className="d-flex align-items-center ms-5">
                  <button className="btn-dark-outline btn-lg me-3">2016</button>
                  <h5 className="text-white">Beginning Our Services</h5>
                </div>
                <p className="text-white ms-5">
                  We are an Engineering Company drawing our engineering capacity
                  from our full-time and part-time employees. The skills base,
                  capacity and expertise are through experienced professionals
                  who have gained cumulative experience of over many years in
                  the consulting engineering industry.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col  bg-dark">
                <div className="d-flex align-items-center ms-5 ">
                  <button className="btn-dark-outline btn-lg me-3">2018</button>
                  <h5 className="text-white">Offering More Services</h5>
                </div>
                <p className="text-white ms-5">
                  The company has developed expertise and has capacity to offer
                  a wide range of professional consulting engineering services
                  in architectural and engineering fields, covering feasibility
                  studies, conceptualization, planning, design contract
                  supervision and administration and project management.
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="row">
              <div className="col">
                <img
                  src={house}
                  alt="l"
                  className="img-fluid"
                  style={{ width: "600px", height: "425px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid text-white bg-dark mt-3 ">
        <div className="row ">
          <div className="col-4">
            <img
              src={build}
              alt="build"
              style={{ width: "500px", height: "425px" }}
            />
          </div>
          <div className="col-7">
            <div className="row px-5">
              <div className="col-12 py-4 ">
                <h1>Our Skills</h1>
              </div>
            </div>
            <div className="row px-5">
              <div className="col-12">
                <p className="h3">General Consulting</p>
              </div>
              <div className="col-12 py-3">
                <div className="progress">
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="col-12">
                <p className="h3">Construction Management </p>
              </div>
              <div className="col-12 py-3">
                <div className="progress">
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "65%" }}
                    aria-valuenow="65"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="col-12">
                <p className="h3">Design & Build</p>
              </div>
              <div className="col-12 py-3">
                <div className="progress">
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "95%" }}
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container m-2">
        <div className="row">
          <div className="col-12">
            <div className="card-group">
              <div className="col-4">
                <div className="card">
                  <div className="card-img"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
}

export default Home;
