// src/pages/CommunityActions.js
import React from 'react';

const CommunityActions = () => {
  return (
    <div>
      <h2 className="mb-4 text-center text-primary">Community Actions</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card shadow-lg border-0 rounded-3">
            <img src="path/to/image.jpg" className="card-img-top" alt="Community Action 1" />
            <div className="card-body">
              <h5 className="card-title">Action 1</h5>
              <p className="card-text">Description of the community action.</p>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card shadow-lg border-0 rounded-3">
            <img src="path/to/image.jpg" className="card-img-top" alt="Community Action 2" />
            <div className="card-body">
              <h5 className="card-title">Action 2</h5>
              <p className="card-text">Description of the community action.</p>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card shadow-lg border-0 rounded-3">
            <img src="path/to/image.jpg" className="card-img-top" alt="Community Action 3" />
            <div className="card-body">
              <h5 className="card-title">Action 3</h5>
              <p className="card-text">Description of the community action.</p>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityActions;
