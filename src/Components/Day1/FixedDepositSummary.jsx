// // src/components/Day1/FixedDepositSummary.jsx
import React, { useState } from 'react';

const FixedDepositSummary = ({ depositAmount, interestRate, tenure, maturityAmount }) => {
  const [detailed, setDetailed] = useState(false);

  return (
    <div className="card h-100 shadow-sm">
      <div
        className="card-header text-dark d-flex justify-content-between align-items-center"
        style={{ backgroundColor: '#d2e7d6' }}
      >
        <span className="fw-bold">Fixed Deposit Summary</span>
        <button className="btn btn-outline-dark btn-sm" onClick={() => setDetailed(!detailed)}>
          {detailed ? 'Summary View' : 'Detailed View'}
        </button>
      </div>
      <div className="card-body">
        <div className="row mb-2"><div className="col-6"><strong>Deposit:</strong></div><div className="col-6">₹{depositAmount}</div></div>
        <div className="row mb-2"><div className="col-6"><strong>Rate:</strong></div><div className="col-6">{interestRate}%</div></div>
        <div className="row mb-2"><div className="col-6"><strong>Tenure:</strong></div><div className="col-6">{tenure} mo</div></div>
        {detailed && (
          <div className="row"><div className="col-6"><strong>Maturity:</strong></div><div className="col-6">₹{maturityAmount}</div></div>
        )}
      </div>
    </div>
  );
};

export default FixedDepositSummary;


