import React from 'react';
/* import teamImage from '../assets/team-collaboration.jpg'; // Replace with an actual image
import projectImage from '../assets/project-goal.jpg'; // Replace with an actual image */

const About = () => {
  return (
    <div className="about-page container my-5">
      {/* Page Header */}
      <div className="text-center my-4">
        <h1 className="display-4 text-primary fw-bold">About FlowNI</h1>
        <p className="lead text-secondary">
          Empowering communities to protect Northern Ireland’s waterways.
        </p>
      </div>

      {/* Project Overview Section */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
{/*           <img
            src={projectImage}
            alt="Project Goals"
            className="img-fluid rounded shadow"
          /> */}
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold text-primary">Our Mission</h2>
          <p className="text-secondary">
            FlowNI is a community-driven platform dedicated to raising awareness
            about water pollution, biodiversity loss, and the challenges facing
            Northern Ireland's waterways, particularly Lough Neagh. Our mission
            is to educate, inspire, and empower individuals to take meaningful
            action toward protecting and preserving these vital ecosystems.
          </p>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="features-section text-center my-5">
        <h2 className="fw-bold text-primary">Key Features of FlowNI</h2>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card shadow hover-effect p-3">
              <h5 className="fw-bold text-info">Water Quality Metrics</h5>
              <p>
                Access real-time data and visualizations on water quality across
                Northern Ireland.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow hover-effect p-3">
              <h5 className="fw-bold text-info">Community Action Plans</h5>
              <p>
                Learn how local communities are coming together to combat
                pollution and protect biodiversity.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow hover-effect p-3">
              <h5 className="fw-bold text-info">Interactive Maps</h5>
              <p>
                Explore pollution hotspots, biodiversity zones, and local
                initiatives near you.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <h2 className="fw-bold text-primary">The Team Behind FlowNI</h2>
          <p className="text-secondary">
            Our team consists of passionate individuals dedicated to creating
            impactful solutions for environmental challenges. From developers
            and data scientists to designers and community leaders, we bring a
            wide range of expertise to the table.
          </p>
        </div>
        <div className="col-md-6">
          {/* <img
            src={teamImage}
            alt="Team Collaboration"
            className="img-fluid rounded shadow"
          /> */}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="cta-section text-center my-5 p-5 bg-light rounded shadow">
        <h2 className="fw-bold text-primary">Join Us in Protecting Our Waterways</h2>
        <p className="text-secondary">
          Whether you’re a concerned citizen, a researcher, or a community
          leader, your involvement can make a difference. Join the FlowNI
          movement today and help us create a sustainable future for Northern
          Ireland’s waterways.
        </p>
        <button
          className="btn btn-success btn-lg mt-3 px-4"
          onClick={() => window.location.href = '/get-involved'}
        >
          Get Involved
        </button>
      </div>

      {/* Custom Styles */}
      <style>{`
        .hover-effect:hover {
          transform: scale(1.05);
          transition: transform 0.3s ease-in-out;
        }
        .hover-effect {
          transition: transform 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default About;
