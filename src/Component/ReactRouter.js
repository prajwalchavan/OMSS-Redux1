import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AdminRouter from "./AdminRouter";
import HomeRouter from "./HomeRouter";
import UserRouter from "./UserRouter";

export function ReactRouter() {
  return (
    <Router>
      <HomeRouter />
      <UserRouter />
      <AdminRouter />
    </Router>
  );
}

export default ReactRouter;
