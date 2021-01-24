import React from "react";
import { NavLink } from "react-router-dom";
export default function UserNav() {
  return (
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
              <NavLink className="nav-link" to="/user/listOfProducts">
                List of Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/user/addUser">
                Add User
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/user/addToCart">
                Add To Cart
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/user/viewCart">
                View Cart
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
