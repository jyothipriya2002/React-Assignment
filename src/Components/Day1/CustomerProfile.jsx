


import React from 'react';

const CustomerProfile = ({ name, totalFDs, totalRDs, totalInvestment }) => {
  return (
    <div className="card h-100 shadow-sm">
      <div className="card-header bg-info text-white fw-bold">Customer Profile</div>
      <div className="card-body">
        <div className="row mb-2"><div className="col-6"><strong>Name:</strong></div><div className="col-6">{name}</div></div>
        <div className="row mb-2"><div className="col-6"><strong>Total FDs:</strong></div><div className="col-6">{totalFDs}</div></div>
        <div className="row mb-2"><div className="col-6"><strong>Total RDs:</strong></div><div className="col-6">{totalRDs}</div></div>
        <div className="row"><div className="col-6"><strong>Total Investment:</strong></div><div className="col-6">₹{totalInvestment}</div></div>
      </div>
    </div>
  );
};

export default CustomerProfile;

