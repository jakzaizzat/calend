import React from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import EventView from "../pages/Events/View";
import BookingView from "../pages/Booking/View";
import Login from "../pages/Login";
import Home from "../pages/Home";
import AuthRoute from "./auth";
import Book from "../pages/Booking/Book";

const Routes = () => {
  return (
    <Switch>
      <AuthRoute path="/dashboard" component={Dashboard} />
      <AuthRoute path="/event/:id" component={EventView} />
      <AuthRoute exact path="/home" component={Home} />
      <Route path="/booking/:id" component={BookingView} />
      <Route path="/book/:id" component={Book} />
      <Route path="/" component={Login} />
    </Switch>
  );
};

export default Routes;
