import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = ({ handleColorChange, defaultValue }) => {
  console.log(defaultValue);
  return (
    <nav className="navbar navbar-dark bg-dark shadow sticky-top">
      <div className="container">
        <Link to="/" className="navbar-brand">
          ToDo
        </Link>

        <div className="ml-auto">
          <input
            type="color"
            onChange={handleColorChange}
            defaultValue={defaultValue}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
