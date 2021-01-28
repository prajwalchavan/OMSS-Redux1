import React from "react";
import { Route, Switch } from "react-router-dom";
import AddUser from "./AddUser";
import ViewCart from "./ViewCart";
import ViewProducts from "./ViewProducts";
import UserNav from "./UserNav";
import { useHistory } from "react-router-dom";
import ViewOrdersbyID from "./ViewOrdersbyID";

export function ReactRouter() {
  const history = useHistory();
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
        <AddUser history={history}/>
      </Route>
      <Route exact path="/user/viewCart">
        <UserNav />
        <ViewCart />
      </Route>
      <Route exact path="/user/viewOrder">
        <UserNav />
        <ViewOrdersbyID />
      </Route>
    </Switch>
  );
}

export default ReactRouter;
