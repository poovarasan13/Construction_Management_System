import React, { useState } from 'react'
// import SkillsSection from'../SkillsSection'
import back from "../../assests/images/bg-1.jpg"

function Design() {
    const[para,setPara]=useState("");
    function Design()
    {
        setPara(
          "From the moment that we conceptualize your idea, our dream is to always make our clients happy. In sense that every detailed design we present, our goal is to present the best of designs as per the clients' needs."
        );
    }
    function Preparation() {
      setPara(
        "Our team is well prepared to take up all kinds of construction services. From conceptualizing, designing, building upto commisioning. We have specialists at every stage who make sure that whatever activity we partake in, is successful and until we are cleared for the next stage, that's when we continue."
      );
    }
    function Construction() {
      setPara(
        "The company has developed expertise and has capacity to offer a wide range of professional engineering services in civil and structural engineering fields, covering feasibility studies, conceptualization, planning, design, contract supervision & administration and project management."
      );
    }
    function Revision() {
      setPara(
        "In case of any faults incurred during construction, we are here for this excellent service of revising the faults. We get back to the drawing board and make sure that all is solved and cleared to proceed."
      );
    }
    function Finalization() {
      setPara(
        "Our finalization process is criticalin the manner of sense that, our team will check each and every phase of the construction to make sure that each goal was achieved and with precision. We deeply rely on a no-mistake principle and that makes us have a cutting edge in terms of the construction companies in the country."
      );
    }
  return (
    <>
      <div
        className="container-fluid mt-5 p-5 bg-cover"
        style={{
          backgroundImage: `url(${back})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div class="container p-5">
          <div class="row">
            <div class="col-12 ">
              <h1>Our process</h1>
            </div>
            <div class="col">
              <div class="btn-outline-warning p-3 " onClick={Design}>
                <h2>Design</h2>
              </div>
            </div>
            <div class="col">
              <div class="btn-outline-warning p-3 " onClick={Preparation}>
                <h2>Preparation</h2>
              </div>
            </div>
            <div class="col">
              <div class="btn-outline-warning p-3 " onClick={Construction}>
                <h2>Construction</h2>
              </div>
            </div>
            <div class="col">
              <div class="btn-outline-warning p-3 " onClick={Revision}>
                <h2>Revision</h2>
              </div>
            </div>
            <div class="col">
              <div class="btn-outline-warning p-3 " onClick={Finalization}>
                <h2>Finalization</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="container p-5">
          <div class="row">
            <div class="col-12">
              <p class="h6">{para}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fliud bg-dark text-white px-5"  >
        <div class="row p-5">
          <div class="col p-5 h1">
            {/* <SkillsSection /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Design