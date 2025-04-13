 // src/components/Day1/RDContributionTracker.jsx
import React, { useState } from 'react';

const RDContributionTracker = () => {
  const [monthlyContribution, setMonthlyContribution] = useState(1000);
  const tenure = 12;
  const totalInvested = monthlyContribution * tenure;
  const estimatedMaturity = totalInvested + totalInvested * 0.06;

  return (
    <div className="card h-100 shadow-sm">
      <div className="card-header bg-success text-white fw-bold">RD Contribution Tracker</div>
      <div className="card-body">
        <div className="mb-3">
          <label className="form-label"><strong>Monthly Contribution (₹)</strong></label>
          <input
            type="number"
            className="form-control"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(parseInt(e.target.value) || 0)}
          />
        </div>
        <div className="row mb-2"><div className="col-6"><strong>Tenure:</strong></div><div className="col-6">{tenure} mo</div></div>
        <div className="row mb-2"><div className="col-6"><strong>Invested:</strong></div><div className="col-6">₹{totalInvested}</div></div>
        <div className="row"><div className="col-6"><strong>Maturity:</strong></div><div className="col-6">₹{estimatedMaturity.toFixed(2)}</div></div>
      </div>
    </div>
  );
};

export default RDContributionTracker;

