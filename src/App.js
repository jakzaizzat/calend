import React, { useEffect, useMemo, useState } from "react";
import Navigation from "./components/shared/Navigation";
import { UserContext } from "./state/UserContext";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getEvents } from "./store/modules/event/actions";
import * as api from "./api/events-api-mock";

import mock from "./config/mock";
import { BrowserRouter } from "react-router-dom";
import Routes from "./router/routes";

import "toasted-notes/src/styles.css";
import "./App.css";
import { eventsData } from "../src/api/demo";

const App = () => {
  const [auth, setAuth] = useState(null);
  const providerAuth = useMemo(() => ({ auth, setAuth }), [auth, setAuth]);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setAuth(mock.user);
    }
    if (!localStorage.getItem("events")) {
      localStorage.setItem("events", JSON.stringify(eventsData));
    }
  }, []);

  return (
    <div className="App bg-gray-200 min-h-screen">
      <UserContext.Provider value={providerAuth}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
};

function mapStateToProps({ eventState }) {
  return { eventState };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getEvents }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
