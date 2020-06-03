import React from "react";
import Index from "../../pages/Dashboard";
import NewEvent from "../Event/NewEvent";
import Navigation from "../shared/Navigation";
import Login from "../../pages/Login";
import EventView from "../../pages/Events/View";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../../App.css";

const App = () => {
  return (
    <div className="App bg-gray-200 min-h-screen">
      <Router>
        <div>
          <Navigation />
          <div className="py-16">
            <Switch>
              <Route path="/dashboard">
                <Index />
              </Route>
              <Route path="/new">
                <NewEvent />
              </Route>
              <Route path="/event/:id">
                <EventView />
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
