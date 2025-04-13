import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const dummyInvestments = [
  { id: 1, type: 'FD', amount: 50000, date: '2024-06-01' },
  { id: 2, type: 'RD', amount: 12000, date: '2024-07-10' },
];

const InvestmentHistory = () => {
  const navigate = useNavigate();

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-lg p-3" style={{ minHeight: '360px' }}>
            <div className="card-body">
              <h4 className="card-title text-center mb-4">Investment History</h4>
              <ul className="list-group">
                {dummyInvestments.map((inv) => (
                  <li
                    key={inv.id}
                    className="list-group-item list-group-item-action"
                    onClick={() => navigate(`/investment/${inv.id}`)}
                    style={{ cursor: 'pointer' }}
                  >
                    {inv.type} - ₹{inv.amount} - {inv.date}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentHistory;

