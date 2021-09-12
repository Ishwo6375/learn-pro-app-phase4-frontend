import React from 'react'
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div>
        <NavLink className="nav-item" to="/">
          Home
        </NavLink>

        <NavLink className="nav-item" to="/about">
         About
        </NavLink>
        <NavLink className="nav-item" to="/courses">
         All Courses
        </NavLink>
        </div>
    )
}

export default Navbar
