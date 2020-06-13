import React from "react";
import { Redirect, Route } from "react-router-dom";
import mock from "../config/mock";
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

export default AuthRoute;
