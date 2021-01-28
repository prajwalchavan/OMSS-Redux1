import React from "react";
import { NavLink } from "react-router-dom";

export default function AdminNav() {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        {/* <div className="container-fluid"> */}
          <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
            <ul className="navbar-nav mr-auto">
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
              <li className="nav-item">
                <NavLink className="nav-link" to="/admin/viewOrders">
                  Orders
                </NavLink>
              </li>
            </ul>
            <ul className=" nav navbar-nav navbar-right">
              <li className="nav-item">
                <a href="#">
                  <span class="glyphicon glyphicon-log-in"></span>
                  <NavLink className="nav-link" to="/">
                    <button type="button" class="btn btn-danger">Logout</button>
                  </NavLink>
                </a>
              </li>
            </ul>
          </div>
        
      </nav>
   </div>
  );
}
