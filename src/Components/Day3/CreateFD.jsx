
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CreateFD = () => {
  const [form, setForm] = useState({ amount: '', tenure: '', interest: '6.5' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`FD Created: ₹${form.amount} for ${form.tenure} months`);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-lg p-3" style={{ minHeight: '360px' }}>
            <div className="card-body">
              <h4 className="card-title text-center mb-4">Create Fixed Deposit</h4>
              <form onSubmit={handleSubmit}>
                <input
                  type="number"
                  className="form-control mb-3"
                  placeholder="Amount"
                  value={form.amount}
                  onChange={(e) => setForm({ ...form, amount: e.target.value })}
                />
                <input
                  type="number"
                  className="form-control mb-3"
                  placeholder="Tenure (Months)"
                  value={form.tenure}
                  onChange={(e) => setForm({ ...form, tenure: e.target.value })}
                />
                <div className="mb-3">
                  <strong>Interest Rate:</strong> {form.interest}%
                </div>
                <div className="d-grid">
                  <button className="btn btn-success" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateFD;
