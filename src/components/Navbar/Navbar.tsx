import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">ARTEMIS</div>
      <div className="navbar-right">
        <Link to="/">Home</Link>
        <Link to="/some-route">Product</Link>
        <Link to="/another-route">Docs</Link>
        <Link to="/another-route">Pricing</Link>
        <Link to="/another-route">About</Link>
        <Link to="/Login" className="get-started">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
