import React from 'react';
import FixedDepositSummary from './FixedDepositSummary';
import RDContributionTracker from './RDContributionTracker';
import CustomerProfile from './CustomerProfile';
import 'bootstrap/dist/css/bootstrap.min.css';

const DashboardView = () => {
  return (
    <div>
      

      <div className="container py-5">
        <div className="row g-4 justify-content-center">
          <div className="col-md-4">
            <div className="card h-100 shadow" style={{ minHeight: '360px' }}>
              <FixedDepositSummary
                depositAmount={50000}
                interestRate={6.5}
                tenure={12}
                maturityAmount={53250}
              />
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow" style={{ minHeight: '360px' }}>
              <RDContributionTracker />
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow" style={{ minHeight: '360px' }}>
              <CustomerProfile
                name="Jyothipriya"
                totalFDs={3}
                totalRDs={2}
                totalInvestment={120000}
              />
            </div>
          </div>
        </div>
      </div>

  
    </div>
  );
};

export default DashboardView;

