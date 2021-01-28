import React from "react";
import { NavLink } from "react-router-dom";

export default function HomeNav() {
  return (
    <div>
     <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/admin">
                  {/* Admin */}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/user">
                  {/* User */}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
