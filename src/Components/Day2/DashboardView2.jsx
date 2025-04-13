import React from 'react';
import FDForm from './FDForm';
import RDForm from './RDForm';
import BranchSelector from './BranchSelector';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard2 = () => {
  return (
    <div>
      {/* Main Dashboard Layout */}
      <div className="container py-5">
        <div className="row g-4 justify-content-center">
          <div className="col-md-4">
            <div className="card h-100 shadow" style={{ minHeight: '360px' }}>
              <FDForm />
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow" style={{ minHeight: '360px' }}>
              <RDForm />
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow" style={{ minHeight: '360px' }}>
              <BranchSelector />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard2;
