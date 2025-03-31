// filepath: c:\Users\Ashutosh\OneDrive\Documents\GitHub\WW-Portfolio-01\src\pages\DevDisplayDetails.js
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/WorkDetails.css";

const DevDisplayDetails = () => {
  return (
    <>
      <Navbar />
      <section className="breadcrumb_area">
        <div className="container">
          <div className="breadcrumb_content" data-aos="fade-up">
            <p>DevDisplay</p>
            <h1 className="section_heading">
              DevDisplay - Paradise for Developers
            </h1>
          </div>
        </div>
      </section>
      <section className="project_details_wrap">
        <div className="container">
          <div className="d-flex project_infos_wrap shadow_box">
            <div className="project_details_info flex-1">
              <h3>DevDisplay</h3>
              <p>
                Built an innovative platform for developers to showcase their
                projects and collaborate. Leveraged React.js for the frontend
                and Node.js with Express for the backend, ensuring a seamless
                and responsive user experience.
              </p>
            </div>
            <div className="project_details_info flex-1">
              <h3>Tech Stack</h3>
              <p>Frontend: React.js, CSS, JavaScript</p>
              <p>Backend: Node.js, Express</p>
              <p>Database: MongoDB</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DevDisplayDetails;