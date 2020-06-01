import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import NewEvent from "../Event/NewEvent";
import Login from "../Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../../App.css";

const App = () => {
  return (
    <div className="App bg-gray-200 min-h-screen">
      <Router>
        <div>
          <nav>
            <ul className="flex">
              <li className="px-4 py-2">
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li className="px-4 py-2">
                <Link to="/new">Create a new link</Link>
              </li>
            </ul>
          </nav>
          <div className="py-16">
            <Switch>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/new">
                <NewEvent />
              </Route>
              <Route path="/">
                <Login />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
