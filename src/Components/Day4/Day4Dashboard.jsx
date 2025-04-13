

import React from 'react';
import FDMaturityCalc from './FDMaturityCalc';
import RDContributionEvents from './RDContributionEvents';
import ThemeSwitcher from './ThemeSwitcher';
import 'bootstrap/dist/css/bootstrap.min.css';

const Day4Dashboard = () => {
  return (
    <div className="container py-5">
      {/* Theme Switcher at the top right */}
      <div className="d-flex justify-content-end mb-4">
        <ThemeSwitcher />
      </div>

      <div className="row g-4 justify-content-center">
        {/* FD Calculator Card */}
        <div className="col-md-4">
          <div className="card shadow-lg p-3" style={{ minHeight: '360px' }}>
            <div className="card-body">
              <FDMaturityCalc />
            </div>
          </div>
        </div>

        {/* RD Tracker Card */}
        <div className="col-md-4">
          <div className="card shadow-lg p-3" style={{ minHeight: '360px' }}>
            <div className="card-body">
              <RDContributionEvents />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Day4Dashboard;

