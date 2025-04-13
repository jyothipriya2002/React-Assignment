// src/components/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const navigate = useNavigate();

  // Reusable shadow style
  const cardShadow = {
    height: '360px',
    cursor: 'pointer',
    boxShadow: '0 10px 20px rgba(55, 195, 242, 0.5)' // Light blue shadow
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar" style={{ backgroundColor: '#d2e7d6' }}>
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">DASHBOARD</span>
        </div>
      </nav>

      {/* Main Page Cards */}
      <div className="container py-5">
        {/* <h2 className="mb-4 text-center">Assignment</h2> */}
        <div className="row g-4">
          <div className="col-md-3">
            <div
              className="card"
              style={cardShadow}
              onClick={() => navigate('/day1')}
            >
              <div className="card-body d-flex flex-column justify-content-center text-center">
                <h5 className="card-title">Day 1</h5>
                <p className="card-text">React Components</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div
              className="card"
              style={cardShadow}
              onClick={() => navigate('/day2')}
            >
              <div className="card-body d-flex flex-column justify-content-center text-center">
                <h5 className="card-title">Day 2</h5>
                <p className="card-text">Forms & UI</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div
              className="card"
              style={cardShadow}
              onClick={() => navigate('/day3')}
            >
              <div className="card-body d-flex flex-column justify-content-center text-center">
                <h5 className="card-title">Day 3</h5>
                <p className="card-text">React Routing</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div
              className="card"
              style={cardShadow}
              onClick={() => navigate('/day4')}
            >
              <div className="card-body d-flex flex-column justify-content-center text-center">
                <h5 className="card-title">Day 4</h5>
                <p className="card-text">Event Handling & Styling</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h4 className="mb-4 text-center">Click on cards then it is Redirecting to Beautiful 😉 Tasks</h4>
    </div>
  );
};

export default Home;
