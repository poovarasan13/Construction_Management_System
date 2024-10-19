import React from "react";
import background from "./con.jpg";
import con from "./con.jpg";
import plan from "./plan.jpg";
import engineer1 from "./engineer1.avif";
import build from "./buiding.jpg";
import Navbar from "./Navbar";

const Civil = () => {
  return (
    <>
    <Navbar/>
      <div
        className="container-fluid mt-5 p-5 bg-cover"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="row pt-5">
          <div className="col-12 col-md-6 text-start h1 ps-5">
            <div class="row">HIGH INNOVATION</div>
            <div class="row">COMPANY</div>
          </div>
        </div>
        <div className="row ps-5 pt-4">
          <div className="col-12 col-md-6">
            <h5>
              Moxx is a general engineering company based in Nairobi, Kenya. It
              is established to carry out activities of general engineering,
              specializing in Architecture, Civil Engineering, Structural
              Engineering, Water Engineering, Electrical Engineering, Mechanical
              Engineering, and Project Management fields.
            </h5>
          </div>
          <div class="row p-5">
            <div class="col-6 d-flex ">
              <button class="border border-dark btn btn-warning ms-3 me-3">
                OUR SEVICES
              </button>
              <button class="border border-dark btn btn-light ">
                CONTACT US
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="container ">
        <div class="row">
          <div class="col ">
            <div class="card-group p-2  ">
              <div class="col-4 col-md-4 col-sm-12">
                <div class="card p-2 ">
                  <div class="card-img-top">
                    <img src={con} alt="con" class="img-fluid" />
                  </div>
                  <div class="card-body">
                    <div class="card-tilte h3">Planning</div>
                    <div class="card-text">
                      For the successful execution of a project, effective
                      planning is essential. Those involved with the design and
                      execution of the infrastructure in question must consider
                      zoning requirements.
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-4 col-md-4 col-sm-12">
                <div class="card p-2  ">
                  <div class="card-img-top">
                    <img src={con} alt="con" class="img-fluid" />
                  </div>
                  <div class="card-body">
                    <div class="card-tilte h3">Constructing</div>
                    <div class="card-text">
                      A construction project must fit into the legal framework
                      governing the property. These include governmental
                      regulations on the use of property that are created in the
                      process of construction.
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-4 col-md-4 col-sm-12">
                <div class="card p-2  ">
                  <div class="card-img-top">
                    <img src={plan} alt="con" class="img-fluid" />
                  </div>
                  <div class="card-body">
                    <div class="card-tilte h3">Rebuilding</div>
                    <div class="card-text">
                      Our team ensure the building continues to operate in
                      accordance with its design, including replacing elements
                      which are approaching the end of their useful life to make
                      it effective and functioning.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row bg-dark  mt-5 pt-5">
          <div class="  col-3 col-md-3 col-sm-2 p-5 text-white">
            <h1 class="text-white">8350</h1>
            <p>Hours of Works</p>
          </div>
          <div class=" col-3 col-md-3 col-sm-2 p-5 text-white">
            <h1>240</h1>
            <p>Project complete</p>
          </div>
          <div class=" col-3 col-md-3 col-sm-2 p-5 text-white">
            <h1>120</h1>
            <p>Feedback Received</p>
          </div>
          <div class=" col-3 col-md-3 col-sm-2 p-5 text-white">
            <h1>73</h1>
            <p>Satisfied Clients</p>
          </div>
        </div>
      </div>
      <div
        class="container-fluid  p-5 bg-cover"
        style={{
          backgroundImage: `url(${engineer1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div class="container">
          <div class="row p-5 text-dark ">
            <div class="col-4 col-md-4 col-sm-12 ">
              <h1 class="text-primary fs-1">Professional Staff</h1>
              <p class="h6">
                We have developed expertise and capacity to offer a wide range
                of professional consulting engineering services.
              </p>
            </div>
            <div class="col-4 col-md-4 col-sm-12 ">
              <h1 class="text-primary fs-1"> Save Time and Money</h1>
              <p class="h6">
                With the expertise on board, we make sure that the projects we
                undertake take the shortest time possibble to develop. We make
                sure that the money plus time injected in the projects is worth
                the client's specifications.
              </p>
            </div>
            <div class="col-4 col-md-4 col-sm-12 ">
              <h1 class="text-primary fs-1">Realistic Approach</h1>
              <p class="h6">
                A facilitated approach will have clarity on uncertainties, role
                requirements, and buying-in of completion time by all
                stakeholders.
              </p>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row p-5 text-dark ">
            <div class="col-4 col-md-4 col-sm-12 ">
              <h1 class="text-primary fs-1">On Time Completion</h1>
              <p class="h6">
                Duration for projects, which are meticulously planned, well
                executed and deliverables show visible signs of client
                satisfaction in the time allocated as per the client's
                preference.
              </p>
            </div>
            <div class="col-4 col-md-4 col-sm-12 ">
              <h1 class="text-primary fs-1">No Hidden Cost</h1>
              <p class="h6">
                We serve our clients with utmost transparency, ensuring that we
                present all the costs incurred to them with detailed evidence.
              </p>
            </div>
            <div class="col-4 col-md-4 col-sm-12 ">
              <h1 class="text-primary fs-1">Zero Complaints</h1>
              <p class="h6">
                For over the years we have served our clients, we have managed
                to serve fully to the customers' satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-6 col-md-6 col-sm-12">
            <h1 class="">About Us</h1>
            <p>
              Moxx is a general engineering company, based on Nairobi, Kenya. It
              is established to carry out activities of general engineering,
              specializing in Architecture, Civil Engineering, Structural
              Engineering, Water Engineering, Electrical Engineering, Mechanical
              Engineering and Project Management fields.
            </p>
            <div class="row">
              <div class="col-6">
                <h3>Our Vision</h3>
                <ul type="cricle">
                  <li>
                    provide engineering solutions that satisfy the needs of our
                    clients.
                  </li>
                  <li>To improve the quality of life of our people.</li>
                  <li>
                    To be a leading consulting architecture and engineering
                    company.
                  </li>
                  <li>
                    To be a consulting architecture, engineering and project
                    management company of choice for employers.
                  </li>
                </ul>
              </div>
              <div class="col-6">
                <h3>Our Mission</h3>
                <p>
                  To provide the highest Innovative and Quality Consulting
                  architectural, engineering and project management services
                  that will ensure Client satisfaction, long-term benefits to
                  beneficiaries and Clients, the upliftment of communities,
                  maximise equity and skills transfer by adding value through
                  the employment and application of world-class resources,
                  practices and technologies.
                </p>
              </div>
            </div>
          </div>

          <div class="col-6 col-md-6 col-sm-12 bg-dark text-white">
            <div class="row px-5">
              <div class="col-12 py-4 ">
                <h1>Our Skills</h1>
              </div>
            </div>
            <div class="row px-5">
              <div class="col-12">
                <p class="h3">General Consulting</p>
              </div>
              <div class="col-12 py-3">
                <div class="progress">
                  <div
                    class="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div class="col-12">
                <p class="h3">Construction Management </p>
              </div>
              <div class="col-12 py-3">
                <div class="progress">
                  <div
                    class="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "65%" }}
                    aria-valuenow="65"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div class="col-12">
                <p class="h3">Design & Build</p>
              </div>
              <div class="col-12 py-3">
                <div class="progress">
                  <div
                    class="progress-bar bg-warning"
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
      <div class="container-fluid">
        <div class="row">
          <div class="col-6 pt-3">
            <img
              src={build}
              alt="bu"
              style={{ width: "750px", height: "475px" }}
            />
          </div>
          <div class="col-6 pt-3">
            <div class="col">
              <div class="row">
                <div class="col  bg-dark">
                  <h1 class="text-white p-5">Our history</h1>
                  <div class="d-flex align-items-center ms-5">
                    <button class="btn-dark-outline btn-lg me-3">2016</button>
                    <h5 class="text-white">Beginning Our Services</h5>
                  </div>
                  <p class="text-white ms-5">
                    We are an Engineering Company drawing our engineering
                    capacity from our full-time and part-time employees. The
                    skills base, capacity and expertise are through experienced
                    professionals who have gained cumulative experience of over
                    many years in the consulting engineering industry.
                  </p>
                </div>
              </div>

              <div class="row">
                <div class="col  bg-dark">
                  <div class="d-flex align-items-center ms-5 ">
                    <button class="btn-dark-outline btn-lg me-3">2018</button>
                    <h5 class="text-white">Offering More Services</h5>
                  </div>
                  <p class="text-white ms-5">
                    The company has developed expertise and has capacity to
                    offer a wide range of professional consulting engineering
                    services in architectural and engineering fields, covering
                    feasibility studies, conceptualization, planning, design
                    contract supervision and administration and project
                    management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid bg-dark">
        <div class="row">
          <div class="col">
            <h1 >Our Services</h1>
          </div>
        </div>

      </div>
    </>
  );
};

export default Civil;
