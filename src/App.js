import React from "react";
import ContextProvider from "./context/index";
import { BrowserRouter } from "react-router-dom";
import Routes from "./router/routes";
import "toasted-notes/src/styles.css";
import "./App.css";

const App = () => {
  return (
    <div className="App font-sans bg-gray-200 min-h-screen">
      <ContextProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
};

export default App;
