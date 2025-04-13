
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-lg p-3" style={{ minHeight: '360px' }}>
            <div className="card-body">
              <h4 className="card-title text-center mb-4">Dashboard Overview</h4>
              <ul className="list-group">
                <li className="list-group-item">Total FDs: 3</li>
                <li className="list-group-item">Total RDs: 2</li>
                <li className="list-group-item">Total Investment: ₹1,50,000</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
