import React, { useState } from 'react';
import image1 from '../assets/collagebackground-desktop.jpg';
import image2 from '../assets/riverLagan.jpg';
import image3 from '../assets/communityAction.jpg';

const Home = () => {
  const [modalContent, setModalContent] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  // Function to set modal data
  const handleLearnMore = (title, content) => {
    setModalTitle(title);
    setModalContent(content);
  };

  return (
    <div>
      {/* Hero Section */}
      <div
        className="hero text-white text-center py-5"
        style={{
          background: `url(${image1}) center/cover no-repeat`,
          height: '400px',
        }}
      >
        <div
          className="overlay d-flex flex-column justify-content-center align-items-center h-100"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
          <h1 className="display-4 fw-bold">Welcome to the Water Issues Platform</h1>
          <p className="lead mt-3">
            Raising Awareness. Inspiring Change. Protecting Our Waterways.
          </p>
          <button
            className="btn btn-primary btn-lg mt-4"
            data-bs-toggle="modal"
            data-bs-target="#infoModal"
            onClick={() =>
              handleLearnMore(
                'Water Issues Overview',
                'Water pollution, biodiversity loss, and contamination of water sources are serious challenges. Our platform provides actionable insights to help communities address these problems.'
              )
            }
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="container my-5">
        <h2 className="text-center text-primary mb-4">Platform Features</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card text-center shadow">
              <div className="card-body">
                <h5 className="card-title">Water Quality Data</h5>
                <p className="card-text">
                  Access detailed visualizations of water quality metrics in
                  your region.
                </p>
                <button
                  className="btn btn-info"
                  data-bs-toggle="modal"
                  data-bs-target="#infoModal"
                  onClick={() =>
                    handleLearnMore(
                      'Water Quality Data',
                      'Our platform provides up-to-date data visualizations on water quality metrics, including pH levels, contaminants, and more.'
                    )
                  }
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center shadow">
              <div className="card-body">
                <h5 className="card-title">Community Actions</h5>
                <p className="card-text">
                  Explore initiatives and campaigns addressing water issues.
                </p>
                <button
                  className="btn btn-info"
                  data-bs-toggle="modal"
                  data-bs-target="#infoModal"
                  onClick={() =>
                    handleLearnMore(
                      'Community Actions',
                      'Discover ongoing initiatives and campaigns in your area that aim to combat water pollution and protect biodiversity.'
                    )
                  }
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center shadow">
              <div className="card-body">
                <h5 className="card-title">Interactive Maps</h5>
                <p className="card-text">
                  Discover water quality and biodiversity hotspots near you.
                </p>
                <button
                  className="btn btn-info"
                  data-bs-toggle="modal"
                  data-bs-target="#infoModal"
                  onClick={() =>
                    handleLearnMore(
                      'Interactive Maps',
                      'Our interactive maps allow you to explore water quality hotspots, biodiversity zones, and areas affected by pollution in your region.'
                    )
                  }
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="infoModal"
        tabIndex="-1"
        aria-labelledby="infoModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="infoModalLabel">
                {modalTitle}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{modalContent}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
