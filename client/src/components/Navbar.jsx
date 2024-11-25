import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    // Remove token from localStorage
    localStorage.removeItem("authToken");

    // Redirect to the login page
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link to="/Dashboard" className="navbar-brand">
            Admin Panel
          </Link>
        </div>
        <div>
          <button className="btn btn-secondary" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
