import React from "react";
import { Route, Switch } from "react-router-dom";
import ViewUsers from "./ViewUsers";
import DisplayProducts from "./DisplayProducts";
import AddProduct from "./AddProduct";
import AdminNav from "./AdminNav";

export function ReactRouter() {
  return (
    <Switch>
      <Route exact path="/admin">
        <AdminNav />
        Welcome Admin !!!!!
      </Route>
      <Route exact path="/admin/listOfUsers">
        <AdminNav />
        <ViewUsers />
      </Route>
      <Route exact path="/admin/listOfProducts">
        <AdminNav />
        <DisplayProducts />
      </Route>
      <Route path="/admin/addProduct">
        <AdminNav />
        <AddProduct />
      </Route>
    </Switch>
  );
}

export default ReactRouter;
