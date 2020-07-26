import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./login";
import Home from "./home";
import Order from "./order";
import OrderSuccess from "./order_success";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/order">
          <Order />
        </Route>
        <Route path="/order-success">
          <OrderSuccess />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
