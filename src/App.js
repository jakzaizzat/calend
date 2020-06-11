import React, { useEffect, useMemo, useState } from "react";
import Navigation from "./components/shared/Navigation";
import { UserContext } from "./state/UserContext";
import "toasted-notes/src/styles.css";
import "./App.css";
import mock from "./config/mock";
import Routes from "./router/routes";

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
      <UserContext.Provider value={providerAuth}>
        <div>
          {auth ? <Navigation /> : null}
          <Routes />
        </div>
      </UserContext.Provider>
    </div>
  );
};

export default App;
