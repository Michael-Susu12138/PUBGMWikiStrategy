import "./Nav.css";
import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        {/* Use Link for the brand to go to the home route */}
        <Link className="navbar-brand" to="/">
          PUBGM Wiki & Strategy
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {/* Update these to use the Link component */}
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              {/* If you have a route for Weapons, update the 'to' prop */}
              <Link className="nav-link" to="/weapons">
                Weapons
              </Link>
            </li>
            <li className="nav-item">
              {/* Use Link to navigate to the News page */}
              <Link className="nav-link" to="/add">
                News(Add News)
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
