import React from "react";
import algaeImage1 from "../assets/algae-bloom1.jpg"; // Replace with your image
import algaeImage2 from "../assets/algae-bloom2.jpg"; // Replace with your image
import algaeImage3 from "../assets/algae-bloom3.jpg"; // Replace with your image
import { useNavigate } from "react-router-dom";
import "animate.css";

const GetInvolved = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <div
        className="hero text-white d-flex flex-column justify-content-center align-items-center text-center position-relative"
        style={{
          background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(${algaeImage1}) center/cover no-repeat`,
          height: "100vh",
        }}
      >
        <h1 className="display-2 fw-bold animate__animated animate__fadeInDown">
          🌊 Protect Lough Neagh 🌊
        </h1>
        <p
          className="lead fs-4 my-4 animate__animated animate__fadeInUp"
          style={{ maxWidth: "600px" }}
        >
          Algae blooms are destroying one of Northern Ireland's most vital
          ecosystems. Together, we can stop this ecological disaster.
        </p>
        <button
          className="btn btn-light btn-lg px-5 py-3 shadow animate__animated animate__pulse animate__infinite"
          onClick={() => navigate("/join")}
        >
          Get Involved
        </button>
      </div>

      {/* Content Section */}
      <div className="container py-5">
        <h2 className="text-center fw-bold text-gradient mb-5">
          Understanding the Crisis
        </h2>
        <div className="row align-items-center mb-5">
          <div
            className="col-md-6 mb-4 mb-md-0 animate__animated animate__fadeInLeft"
          >
            <img
              src={algaeImage2}
              alt="Algae Bloom"
              className="img-fluid rounded shadow-lg"
            />
          </div>
          <div className="col-md-6 animate__animated animate__fadeInRight">
            <p className="fs-5">
              Lough Neagh is under threat from persistent algae blooms that
              suffocate wildlife, devastate biodiversity, and disrupt local
              livelihoods. The root causes? Pollution, outdated water
              management, and unchecked waste discharge.
            </p>
            <ul className="list-group">
              <li className="list-group-item bg-light">
                <strong>Did you know?</strong> Algae blooms release harmful
                toxins into the water, making it unsafe for humans and animals.
              </li>
              <li className="list-group-item bg-light">
                <strong>Fact:</strong> Over 39% of storm overflows fail
                environmental standards.
              </li>
              <li className="list-group-item bg-light">
                <strong>Impact:</strong> Fish populations have declined by 50%
                due to habitat destruction.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Actionable Steps Section */}
      <div
        className="py-5"
        style={{
          background:
            "linear-gradient(135deg, #0099f7 0%, #f11712 100%)",
        }}
      >
        <div className="container">
          <h2 className="text-center fw-bold text-white mb-5">
            What You Can Do
          </h2>
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="card shadow-lg border-0 p-4 hover-card">
                <h5 className="fw-bold">📢 Spread Awareness</h5>
                <p>
                  Share critical information about the algae bloom crisis and
                  encourage others to take action.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow-lg border-0 p-4 hover-card">
                <h5 className="fw-bold">🤝 Support Local Efforts</h5>
                <p>
                  Join community cleanups and initiatives to reduce pollution
                  around Lough Neagh.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow-lg border-0 p-4 hover-card">
                <h5 className="fw-bold">⚖️ Advocate for Change</h5>
                <p>
                  Demand accountability from the government and push for proper
                  water quality monitoring systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-5 position-relative" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container text-center">
          <h2 className="fw-bold text-gradient mb-4">Shocking Statistics</h2>
          <div className="row">
            <div className="col-md-4">
              <h3 className="fw-bold display-4">2,444</h3>
              <p>Storm overflows affecting water quality</p>
            </div>
            <div className="col-md-4">
              <h3 className="fw-bold display-4">39%</h3>
              <p>Unsatisfactory overflows per NIEA</p>
            </div>
            <div className="col-md-4">
              <h3 className="fw-bold display-4">50%</h3>
              <p>Reduction in fish populations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div
        className="cta text-white text-center py-5 position-relative"
        style={{
          background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url(${algaeImage3}) center/cover no-repeat`,
        }}
      >
        <h2 className="display-4 fw-bold">Join the Fight</h2>
        <p className="lead mt-3">
          Together, we can restore the beauty and health of Lough Neagh for
          future generations.
        </p>
        <button
          className="btn btn-warning btn-lg px-5 py-3 mt-4 shadow"
          onClick={() => navigate("/join")}
        >
          Take Action Now
        </button>
      </div>

      {/* Custom CSS */}
      <style>{`
        .text-gradient {
          background: linear-gradient(to right, #0099f7, #f11712);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hover-card {
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .hover-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
};

export default GetInvolved;
