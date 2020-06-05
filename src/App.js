import React, { useEffect, useMemo, useState } from "react";
import Dashboard from "./pages/Dashboard";
import NewEvent from "./components/Event/NewEvent";
import Navigation from "./components/shared/Navigation";
import Login from "./pages/Login";
import EventView from "./pages/Events/View";
import { UserContext } from "./state/UserContext";

import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from "react-router-dom";
import "toasted-notes/src/styles.css";
import "./App.css";
import mock from "./config/mock";

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
        children
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

const App = () => {
  const [auth, setAuth] = useState(null);
  const providerAuth = useMemo(() => ({ auth, setAuth }), [auth, setAuth]);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setAuth(mock.user);
    }
  }, []);

  return (
    <div className="App bg-gray-200 min-h-screen">
      <Router>
        <UserContext.Provider value={providerAuth}>
          <div>
            {auth ? <Navigation /> : null}
            <div className="py-16">
              <Switch>
                <AuthRoute path="/dashboard">
                  <Dashboard />
                </AuthRoute>
                <AuthRoute path="/new">
                  <NewEvent />
                </AuthRoute>
                <AuthRoute path="/event/:id">
                  <EventView />
                </AuthRoute>
                <Route path="/">
                  <Login />
                </Route>
              </Switch>
            </div>
          </div>
        </UserContext.Provider>
      </Router>
    </div>
  );
};

export default App;
