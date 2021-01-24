import React from "react";
import { Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import HomeNav from "./HomeNav";
import Home from "./Home";

export default function HomeRouter() {
  const history = useHistory();
  return (
    <Switch>
      <Route exact path="/">
        <HomeNav />
        <Home history={history} />
      </Route>
    </Switch>
  );
}
