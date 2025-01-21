import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/lough-neagh-algae.jpg';
import heroImage2 from '../assets/lough-neagh.jpg'
import waterQualityIcon from '../assets/water-quality-icon.png';
import communityIcon from '../assets/community-icon.png';
import mapIcon from '../assets/map-icon.png';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <div
        className="hero text-white text-center d-flex flex-column justify-content-center align-items-center position-relative"
        style={{
          background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroImage}) center/cover no-repeat`,
          height: '500px',
        }}
      >
        <div
          className="hero-content"
          style={{
            animation: 'fadeIn 2s',
          }}
        >
          <h1 className="display-3 fw-bold">
            🌊 Act Now to Save Lough Neagh 🌊
          </h1>
          <p className="lead my-3 fs-4">
            Join the fight against pollution and government inaction to protect
            Northern Ireland’s largest lake.
          </p>
          <button
            className="btn btn-warning btn-lg mt-3 px-4"
            onClick={() => navigate('/get-involved')}
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="container my-5">
        <h2 className="text-center text-primary fw-bold mb-4">
          Platform Features
        </h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card text-center shadow hover-effect">
              <div className="card-body">
                <img
                  src={waterQualityIcon}
                  alt="Water Quality"
                  style={{ width: '50px', marginBottom: '15px' }}
                />
                <h5 className="card-title fw-bold">Water Quality Data</h5>
                <p className="card-text">
                  Access detailed visualizations of water quality metrics in
                  your region.
                </p>
                <button
                  className="btn btn-info"
                  onClick={() => navigate('/water-stats')}
                >
                  View Page
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center shadow hover-effect">
              <div className="card-body">
                <img
                  src={communityIcon}
                  alt="Community Actions"
                  style={{ width: '50px', marginBottom: '15px' }}
                />
                <h5 className="card-title fw-bold">Community Actions</h5>
                <p className="card-text">
                  Explore initiatives and campaigns addressing water issues.
                </p>
                <button
                  className="btn btn-info"
                  onClick={() => navigate('/community-actions')}
                >
                  View Page
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center shadow hover-effect">
              <div className="card-body">
                <img
                  src={mapIcon}
                  alt="Interactive Maps"
                  style={{ width: '50px', marginBottom: '15px' }}
                />
                <h5 className="card-title fw-bold">Interactive Maps</h5>
                <p className="card-text">
                  Discover water quality and biodiversity hotspots near you.
                </p>
                <button
                  className="btn btn-info"
                  onClick={() => navigate('/interactive-maps')}
                >
                  View Page
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Divider */}
      <div
        className="divider"
        style={{
          height: '3px',
          backgroundColor: '#007bff',
          margin: '40px 0',
        }}
      ></div>

      {/* Call to Action Section */}
      <div
        className="cta-section text-white text-center py-5"
        style={{
          background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroImage2}) center/cover no-repeat`,
        }}
      >
        <div className="container">
          <h2 className="display-4 fw-bold">Ready to Make a Difference?</h2>
          <p className="lead fs-4 mt-3">
            Explore actionable steps, connect with local communities, and
            contribute to protecting our waterways.
          </p>
          <button
            className="btn btn-success btn-lg px-4 mt-3"
            onClick={() => navigate('/join')}
          >
            Join the Movement
          </button>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
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

export default Home;
