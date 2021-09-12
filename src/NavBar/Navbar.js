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
        </div>
    )
}

export default Navbar
