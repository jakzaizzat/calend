import React, { useEffect, useMemo, useState } from "react";
import Navigation from "./components/shared/Navigation";
import { UserContext } from "./state/UserContext";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getEvents } from "./store/modules/event/actions";
import * as api from "./api/events-api-mock";

import mock from "./config/mock";
import Routes from "./router/routes";

import "toasted-notes/src/styles.css";
import "./App.css";

const App = (props) => {
  const [auth, setAuth] = useState(null);
  const providerAuth = useMemo(() => ({ auth, setAuth }), [auth, setAuth]);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setAuth(mock.user);
      // api.findAll().then((res) => {
      //   let events = JSON.parse(localStorage.getItem("events")) || [];
      //   console.log(events);
      //   props.getEvents(events);
      // });
    }
  }, []);

  return (
    <div className="App bg-gray-200 min-h-screen">
      <UserContext.Provider value={providerAuth}>
        <div>
          {auth ? <Navigation /> : null}
          <Routes />
        </div>
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
