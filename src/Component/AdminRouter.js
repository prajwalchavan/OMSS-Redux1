import React from "react";
import { Route, Switch } from "react-router-dom";
import ViewUsers from "./ViewUsers";
import DisplayProducts from "./DisplayProducts";
import AddProduct from "./AddProduct";
import AdminNav from "./AdminNav";
import ViewOrders from "./ViewOrders";

var sectionStyle = {
  width: "100%",
  height: "620px",
  backgroundImage:
    "url('http://www.fmhaca.gov.et/wp-content/uploads/2019/02/drugs-min-1200x620.jpg')",
};
export function ReactRouter() {
  return (
    <Switch>
      <Route exact path="/admin">
        <AdminNav />
        <div
          id="intro-example"
          className="p-5 text-center bg-image"
          style={sectionStyle}
        >
          <h1>
            <u>
              <i>Welcome Admin!!!</i>
            </u>
          </h1>
        </div>
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
      <Route path="/admin/viewOrders">
        <AdminNav />
        <ViewOrders />
      </Route>
    </Switch>
  );
}

export default ReactRouter;
