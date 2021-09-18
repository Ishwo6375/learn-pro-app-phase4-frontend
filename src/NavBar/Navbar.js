import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/courseContainer.css";

function Navbar() {
  return (
    <div className="nav-container">
      <img alt="logo"  className="logo"src="https://www.logolynx.com/images/logolynx/d4/d4bc74313f8bbf1d6bd48e141f6f87f2.png" width="180px" />
      <NavLink className="nav-item" to="/">
        Home
      </NavLink>
      <NavLink className="nav-item" to="/courses">
        All Courses
      </NavLink>
      <NavLink className="nav-item" to="/instructors">
        Our Instructors
      </NavLink>
    </div>
  );
}

export default Navbar;
