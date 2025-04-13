import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FDCalculator = () => {
  const [amount, setAmount] = useState('');
  const [tenure, setTenure] = useState('');
  const [interestRate, setInterestRate] = useState(5.5); // Default
  const [maturity, setMaturity] = useState(null);

  const handleCalculate = () => {
    const interest = (amount * interestRate * tenure) / 100;
    setMaturity(parseFloat(amount) + interest);
  };

  const handleTenureChange = (e) => {
    const value = e.target.value;
    setTenure(value);
    if (value >= 60) setInterestRate(7);
    else if (value >= 36) setInterestRate(6.5);
    else setInterestRate(5.5);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-lg p-3" style={{ minHeight: '360px' }}>
            <div className="card-body">
              <h4 className="card-title text-center mb-4">FD Calculator</h4>
              <div className="mb-3">
                <label>Deposit Amount</label>
                <input
                  className="form-control"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  type="number"
                  placeholder="Enter amount"
                />
              </div>
              <div className="mb-3">
                <label>Tenure (in months)</label>
                <input
                  className="form-control"
                  value={tenure}
                  onChange={handleTenureChange}
                  type="number"
                  placeholder="Enter tenure"
                />
              </div>
              <div className="mb-3">
                <label>Interest Rate: <strong>{interestRate}%</strong></label>
              </div>
              <div className="d-grid">
                <button className="btn btn-primary" onClick={handleCalculate}>
                  Calculate Maturity
                </button>
              </div>
              {maturity && (
                <div className="alert alert-success mt-3 text-center">
                  Maturity Amount: ₹{maturity.toFixed(2)}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FDCalculator;

