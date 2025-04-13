

import React, { useState } from 'react';

const branches = {
  Hyderabad: { address: 'Ameerpet, Hyderabad', code: 'HYD001', ifsc: 'HYDB0001' },
  Bangalore: { address: 'Indiranagar, Bangalore', code: 'BLR001', ifsc: 'BLRB0001' },
  Chennai: { address: 'T Nagar, Chennai', code: 'CHN001', ifsc: 'CHNB0001' },
};

const BranchSelector = () => {
  const [selectedBranch, setSelectedBranch] = useState('');

  return (
    <div className="card h-100 shadow-sm">
      <div className="card-header bg-dark text-white">Bank Branch Selector</div>
      <div className="card-body">
        <select className="form-select mb-3" onChange={(e) => setSelectedBranch(e.target.value)} defaultValue="">
          <option value="" disabled>Select a Branch</option>
          {Object.keys(branches).map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>

        {selectedBranch && (
          <div className="alert alert-secondary">
            <p><strong>Address:</strong> {branches[selectedBranch].address}</p>
            <p><strong>Branch Code:</strong> {branches[selectedBranch].code}</p>
            <p><strong>IFSC:</strong> {branches[selectedBranch].ifsc}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BranchSelector;
