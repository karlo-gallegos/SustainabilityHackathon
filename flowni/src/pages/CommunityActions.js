import React from 'react';

// Import local images
import volunteeringImage from '../assets/volunteer.jpg'; // Replace with actual path
import pollutionImage from '../assets/pollution.jpg'; // Replace with actual path
import governmentFailuresImage from '../assets/river-pollution.jpg'; // Replace with actual path

const CommunityActions = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center text-primary">Community Actions</h2>
      <p className="text-center">
        Explore ways to take action and help improve water quality in Northern Ireland.
      </p>
      <div className="row">
        {/* Volunteering/Charity Section */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-lg border-0 rounded-3">
            <img
              src={volunteeringImage}  // Use imported local image
              className="card-img-top"
              alt="Volunteering and Charity"
            />
            <div className="card-body">
              <h5 className="card-title">Volunteering & Charity</h5>
              <p className="card-text">
                Get involved in cleaning and restoring rivers in your local community.
                Organizations like <strong>The Rivers Trust</strong> and <strong>Surfers Against Sewage (SAS)</strong> host events and provide cleanup kits.
              </p>
              <a
                href="https://theriverstrust.org/take-action"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Reporting Pollution Section */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-lg border-0 rounded-3">
            <img
              src={pollutionImage} // Use imported local image
              className="card-img-top"
              alt="Reporting Pollution"
            />
            <div className="card-body">
              <h5 className="card-title">Report Pollution</h5>
              <p className="card-text">
                Help protect waterways by reporting pollution incidents. If urgent, call 
                <strong> 0800 80 70 60</strong>. For non-urgent cases, email 
                <strong> emergency-pollution@daera-ni.gov.uk</strong>.
              </p>
              <a
                href="mailto:emergency-pollution@daera-ni.gov.uk"
                className="btn btn-primary"
              >
                Email to Report
              </a>
            </div>
          </div>
        </div>

        {/* Government Failures in Water Section */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-lg border-0 rounded-3">
            <img
              src={governmentFailuresImage} // Use imported local image
              className="card-img-top"
              alt="Government Failures"
            />
            <div className="card-body">
              <h5 className="card-title">Government Failures</h5>
              <p className="card-text">
                Northern Ireland Water admits to inadequate monitoring of discharges. Lough Neagh faces severe algae blooms due to pollution. 39% of storm overflows fail to meet NIEA standards.
              </p>
              <a
                href="https://www.sas.org.uk/water-quality/water-companies-shocking-stats/northern-ireland-water/"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-center mt-5">
        © 2025 Water Issues Platform
      </footer>
    </div>
  );
};

export default CommunityActions;
