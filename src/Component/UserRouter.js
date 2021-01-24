import React from "react";
import { Route, Switch } from "react-router-dom";
import AddToCart from "./AddToCart";
import AddUser from "./AddUser";
import ViewCart from "./ViewCart";
import ViewProducts from "./ViewProducts";
import UserNav from "./UserNav";

export function ReactRouter() {
  return (
    <Switch>
      <Route exact path="/user">
        <UserNav />
        <ViewProducts />
      </Route>
      <Route exact path="/user/listOfProducts">
        <UserNav />
        <ViewProducts />
      </Route>
      <Route path="/user/addUser">
        <UserNav />
        <AddUser />
      </Route>
      <Route exact path="/user/addToCart">
        <UserNav />
        <AddToCart />
      </Route>
      <Route exact path="/user/viewCart">
        <UserNav />
        <ViewCart />
      </Route>
    </Switch>
  );
}

export default ReactRouter;
