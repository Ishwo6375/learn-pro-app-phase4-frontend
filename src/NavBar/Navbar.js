import React from 'react'
import { NavLink } from "react-router-dom";
import "../styles/courseContainer.css";


function Navbar() {
    return (
        <div className="nav-container">
          
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
    )
}

export default Navbar
