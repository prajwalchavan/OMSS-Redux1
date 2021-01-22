import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import AddUser from './AddUser'
import ViewUsers from './ViewUsers';
import Home from './Home'
import ViewPorducts from './ViewPorducts';
import AddProduct from './AddProduct';
import AddToCart from './AddToCart';
import ViewCart from './ViewCart';

export function ReactRouter() {
    return (
        <Router forceRefresh>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/" >Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/listOfUsers">List of Users</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/listOfProducts">List of Products</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/addUser">Add User</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/addProduct">Add Product</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/addToCart">Add To Cart</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/viewCart">View Cart</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
renders the first one that matches the current URL. */}
                <Switch>
                    <Route exact path="/listOfUsers">
                        <ViewUsers></ViewUsers>
                    </Route>
                    <Route exact path="/listOfProducts">
                        <ViewPorducts></ViewPorducts>
                    </Route>
                    <Route path="/addUser">
                        <AddUser></AddUser>
                    </Route>
                    <Route path="/addProduct">
                        <AddProduct></AddProduct>
                    </Route>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route exact path="/addToCart">
                        <AddToCart></AddToCart>
                    </Route>
                    <Route exact path="/viewCart">
                        <ViewCart />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default ReactRouter
