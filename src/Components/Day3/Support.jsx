
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Support = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 shadow-lg p-3" style={{ minHeight: '360px' }}>
            <div className="card-body d-flex flex-column justify-content-center text-center">
              <h4 className="card-title mb-3">Customer Support</h4>
              <p className="mb-2">📞 For help, call</p>
              <h5 className="text-primary">1800-123-456</h5>
              <p className="mb-0">or email</p>
              <h6 className="text-muted">support@bankapp.com</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
