import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import EventView from "../pages/Events/View";
import BookingView from "../pages/Booking/View";
import Login from "../pages/Login";
import mock from "../config/mock";
import Home from "../pages/Home";
import DashboardLayout from "../pages/layouts/Dashboard";

const checkAuth = () => {
  const token = localStorage.getItem("token");
  if (!token || token !== mock.user.token) {
    localStorage.removeItem("token");
    return false;
  }
  return true;
};

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      checkAuth() ? (
        <DashboardLayout>
          <Component />
        </DashboardLayout>
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

const Routes = () => {
  return (
    <Switch>
      <AuthRoute path="/dashboard" component={Dashboard} />
      <AuthRoute path="/event/:id" component={EventView} />
      <AuthRoute exact path="/home" component={Home} />
      <Route path="/booking/:id" component={BookingView} />
      <Route path="/" component={Login} />
    </Switch>
  );
};

export default Routes;
