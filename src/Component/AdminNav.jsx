import React from "react";
import { NavLink } from "react-router-dom";

export default function AdminNav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/admin/listOfUsers">
                  List of Users
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/admin/listOfProducts">
                  List of Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/admin/addProduct">
                  Add Product
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
