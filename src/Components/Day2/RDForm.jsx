
import React, { useState } from 'react';

const RDForm = () => {
  const [monthlyContribution, setMonthlyContribution] = useState('');
  const [tenure, setTenure] = useState('');
  const [bankName, setBankName] = useState('');
  const [summary, setSummary] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const total = monthlyContribution * tenure;
    const maturity = total + total * 0.05;
    setSummary({ bankName, maturity, total });
  };

  return (
    <div className="card h-100 shadow-sm">
      <div className="card-header bg-success text-white">RD Plan Creation</div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Monthly Contribution (₹)</label>
            <input
              type="number"
              className="form-control"
              value={monthlyContribution}
              onChange={(e) => setMonthlyContribution(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label>Tenure (Months)</label>
            <input
              type="number"
              className="form-control"
              value={tenure}
              onChange={(e) => setTenure(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label>Bank Name</label>
            <input
              type="text"
              className="form-control"
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Show Summary</button>
        </form>
        {summary && (
          <div className="mt-3 alert alert-info">
            <p><strong>Bank:</strong> {summary.bankName}</p>
            <p><strong>Total Invested:</strong> ₹{summary.total}</p>
            <p><strong>Estimated Maturity:</strong> ₹{summary.maturity.toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RDForm;
