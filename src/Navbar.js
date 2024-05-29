// Navbar.js

import React from 'react';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"


const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
        <div className="container">
          <span className="navbar-brand text-primary display-4" style={{ fontWeight: 'bold' }}>ToDo App</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Developer Social Media
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item d-flex align-items-center" href="https://www.facebook.com/tengku.aizad.71" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f me-2"></i> Facebook
                  </a></li>
                  <li><a className="dropdown-item d-flex align-items-center" href="https://github.com/tgxzd" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github me-2"></i> GitHub
                  </a></li>
                  <li><a className="dropdown-item d-flex align-items-center" href="https://www.instagram.com/tgxzd/?hl=en" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram me-2"></i> Instagram
                  </a></li>
                  <li><a className="dropdown-item d-flex align-items-center" href="https://www.linkedin.com/in/tengku-aizad-tengku-noor-azman-96881927b/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in me-2"></i> LinkedIn
                  </a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
