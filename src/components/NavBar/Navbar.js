import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/courseContainer.css";

function Navbar() {
  return (
    <div className="nav-container">
      <div>
      <img
        alt="logo"
        className="logo"
        src="https://www.logolynx.com/images/logolynx/d4/d4bc74313f8bbf1d6bd48e141f6f87f2.png"
        width="180px"
      />

      <h6 className="contact-head"><span className="span-1">Learn</span>Pro<span className="span-1">.edu</span></h6>
      </div>
      <NavLink className="nav-item" activeClassName="main-nav-active-1"  to="/">
        Home
      </NavLink>
      <NavLink className="nav-item" activeClassName="main-nav-active" to="/courses">
        All Courses
      </NavLink>
      <NavLink className="nav-item" activeClassName="main-nav-active" to="/instructors">
        Our Instructors
      </NavLink>
      <NavLink className="nav-item" activeClassName="main-nav-active" to="/contact">
        Contact Us
      </NavLink>
    </div>
  );
}

export default Navbar;
