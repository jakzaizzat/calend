import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import EventView from "../pages/Events/View";
import BookingView from "../pages/Booking/View";
import Login from "../pages/Login";
import mock from "../config/mock";

const checkAuth = () => {
  const token = localStorage.getItem("token");
  if (!token || token !== mock.user.token) {
    localStorage.removeItem("token");
    return false;
  }
  return true;
};

const AuthRoute = ({ children, ...rest }) => (
  <Route
    {...rest}
    render={({ location }) =>
      checkAuth() ? (
        <div className="py-0 px-4">{children}</div>
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: location }
          }}
        />
      )
    }
  />
);

const Routes = () => {
  return (
    <Router>
      <Switch>
        <AuthRoute path="/dashboard">
          <Dashboard />
        </AuthRoute>
        <AuthRoute path="/event/:id">
          <EventView />
        </AuthRoute>
        <Route path="/booking/:id">
          <BookingView />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
