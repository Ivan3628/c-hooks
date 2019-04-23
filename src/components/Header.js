import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-danger mb-3">
      <div className="container">
        <a href="/" className="navbar-brand text-white">
          React App With Redux
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/">
                <i className="fas fa-home text-white">Home</i>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about">
                <i className="fas fa-question text-white">About</i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
