import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { clearAll } from "../utils/saveList";

const Navbar = ({ handleColorChange, defaultValue }) => {
  const onClearAll = () => {
    if (window.confirm("Are you sure you want to clear your todo")) {
      clearAll();
    }
  };

  return (
    <nav className="navbar navbar-dark bg-dark shadow sticky-top">
      <div className="container">
        <div className="mr-auto">
          <Link to="/" className="navbar-brand">
            ToDo
          </Link>
        </div>

        <div className="ml-auto">
          <input
            type="color"
            onChange={handleColorChange}
            defaultValue={defaultValue}
          />
        </div>

        {/* <div className="ml-auto">
          <button className="btn" onClick={onClearAll}>
            <span className="fas fa-trash text-white" />
          </button>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
