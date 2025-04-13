
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const RDSummary = () => {
  const [monthly, setMonthly] = useState(1000);
  const [tenure, setTenure] = useState(12);

  const totalInvested = monthly * tenure;
  const estimatedMaturity = totalInvested * 1.08;

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-lg p-3" style={{ minHeight: '360px' }}>
            <div className="card-body">
              <h4 className="card-title text-center mb-4">RD Summary</h4>
              <div className="mb-3">
                <label>Monthly Contribution</label>
                <input
                  type="number"
                  className="form-control"
                  value={monthly}
                  onChange={(e) => setMonthly(Number(e.target.value))}
                  placeholder="Enter monthly amount"
                />
              </div>
              <div className="mb-3">
                <label>Tenure (Months)</label>
                <input
                  type="number"
                  className="form-control"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  placeholder="Enter tenure"
                />
              </div>
              <div className="mt-3">
                <p><strong>Total Invested:</strong> ₹{totalInvested}</p>
                <p><strong>Estimated Maturity:</strong> ₹{estimatedMaturity.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RDSummary;
