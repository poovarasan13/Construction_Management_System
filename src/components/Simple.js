import React, { useEffect, useState } from "react";
import "./Home.css";
import backgroundimg from "./backgroundimg1.jpeg";
import ff1 from "./ff1.webp";
import f2 from "./f2.webp";

function Home() {
  const data = ["Building", "Designing", "Planning"];
  const [content, setContent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setContent((prev) => (prev + 1) % data.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <div>
      <div
        className="container-fluid mt-5 pt-5 d-flex justify-content-center align-items-center bg-cover no-repeat"
        style={{
          backgroundImage: `url(${backgroundimg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="text-center">
          <h1 className="text-primary fw-bold display-1">IT'S YOUR DREAM</h1>
          <h1 className="text-warning fw-normal">We are {data[content]}</h1>
          <p className="mx-5 px-5 text-danger">
            Moxx is a general engineering company, based in Nairobi, Kenya,
            specializing in Architecture, Civil Engineering, Structural
            Engineering, Water Engineering, Electrical Engineering, Mechanical
            Engineering, and Project Management fields.
          </p>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
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
    </div>
  );
}

export default Home;
