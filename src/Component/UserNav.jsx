import React from "react";
import { NavLink } from "react-router-dom";
export default function UserNav() {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        {/* <div className="container-fluid"> */}
        <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/user/viewCart">
                View Cart
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/user/viewOrder">
                View Order
              </NavLink>
            </li>
          </ul>
          <ul className=" nav navbar-nav navbar-right">
            <li className="nav-item">
              <a href="#">
                <span class="glyphicon glyphicon-log-in"></span>
                <NavLink className="nav-link" to="/">
                  <button type="button" class="btn btn-danger">
                    Logout
                  </button>
                </NavLink>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
