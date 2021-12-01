import React from "react";
import { Router } from "@reach/router";
import Item from "../pages/item";
import Company from "../pages/company";
const Routes = () => {
  return (
    <>
      <Router>
          <Item path="/items" />
          <Company path="/company" />
      </Router>
    </>
  );
};

export default Routes;
