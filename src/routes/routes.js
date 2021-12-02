import React from "react";
import { Router } from "@reach/router";
import Item from "../pages/item";
import Company from "../pages/company";
import Login from "../pages/login/login";
const Routes = () => {
  return (
    <>
      <Router>
          <Item path="/items" />
          <Company path="/suppliers" />
          <Login path="/login" />
      </Router>
    </>
  );
};

export default Routes;
