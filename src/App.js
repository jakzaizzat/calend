import React from "react";
import Dashboard from "./components/Dashboard";
import NewEvent from "./components/NewEvent";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="App">
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

          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/new">
              <NewEvent />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
