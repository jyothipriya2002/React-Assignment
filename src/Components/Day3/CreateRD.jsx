
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CreateRD = () => {
  const [form, setForm] = useState({ contribution: '', tenure: '', bank: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`RD Created with ₹${form.contribution} per month for ${form.tenure} months at ${form.bank}`);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-lg p-3" style={{ minHeight: '360px' }}>
            <div className="card-body">
              <h4 className="card-title text-center mb-4">Create Recurring Deposit</h4>
              <form onSubmit={handleSubmit}>
                <input
                  type="number"
                  className="form-control mb-3"
                  placeholder="Monthly Contribution"
                  value={form.contribution}
                  onChange={(e) => setForm({ ...form, contribution: e.target.value })}
                />
                <input
                  type="number"
                  className="form-control mb-3"
                  placeholder="Tenure (Months)"
                  value={form.tenure}
                  onChange={(e) => setForm({ ...form, tenure: e.target.value })}
                />
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Bank Name"
                  value={form.bank}
                  onChange={(e) => setForm({ ...form, bank: e.target.value })}
                />
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

export default CreateRD;
