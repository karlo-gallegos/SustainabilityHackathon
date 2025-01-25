import React from 'react';
import teamImage from '../assets/team-pic.png'; // Replace with an actual image
import projectImage from '../assets/logo.png'; // Replace with an actual image
import sdgsImage from '../assets/SDG goals.jpg'; // Replace with the actual SDG goals image

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
          <h2 className="fw-bold text-primary">Our Mission</h2>
          <p className="text-secondary">
            FlowNI is a community-driven platform committed to supporting the United Nations Sustainable Development Goals (SDGs) by raising awareness about the importance of protecting Northern Ireland's waterways. We focus on addressing water pollution, preserving biodiversity, and ensuring clean water and sanitation for all (SDG 6). Our mission is to educate, inspire, and empower individuals and communities to take meaningful action toward sustainable management and conservation of these vital ecosystems, contributing to the health of both people and the planet.
          </p>
        </div>

        {/* SDG Goals and Logo Carousel */}
        <div className="col-md-6">
          <div id="imageCarousel" className="carousel slide mb-5" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={projectImage}
                  alt="Project Logo"
                  className="d-block w-100 img-fluid rounded shadow"
                  style={{ maxHeight: '300px', objectFit: 'contain' }} // Adjust the size
                />
              </div>
              <div className="carousel-item">
                <img
                  src={sdgsImage}
                  alt="UN Sustainable Development Goals"
                  className="d-block w-100 img-fluid rounded shadow"
                  style={{ maxHeight: '300px', objectFit: 'contain' }} // Adjust the size
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#imageCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#imageCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
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
      We are a group of students from Queen's University Belfast, working together to raise awareness about the protection of Northern Ireland's waterways. With different areas of study and backgrounds in Computer Science, we’re learning as we go, and are dedicated to using our skills to help our community and environment in any way we can.
    </p>
  </div>
  <div className="col-md-6 text-center">
    <img
      src={teamImage}
      alt="Team Collaboration"
      className="img-fluid rounded shadow"
    />
    <p className="text-secondary mt-2">
      Left: Joshua McAllister, Right: Karlo Gallegos
    </p>
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

      {/* Special Thanks Section */}
      <div className="text-center my-4">
        <p className="text-muted">Special thanks to all our contributors:</p>
        <div className="d-flex justify-content-center">
          <ul className="list-unstyled">
            <li className="text-secondary">
              <strong>Contribution towards film:</strong> Zack Keane, Emily McCallum
            </li>
            <li className="text-secondary">
              <strong>Contributor towards Support in Learning React:</strong> Adam Caughey
            </li>
          </ul>
        </div>
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
