import React from "react";
import { UserContextProvider } from "./context/UserContext";
import { BookingContextProvider } from "./context/BookingContext";
import { BrowserRouter } from "react-router-dom";
import Routes from "./router/routes";
import "toasted-notes/src/styles.css";
import "./App.css";

const App = () => {
  return (
    <div className="App font-sans bg-gray-200 min-h-screen">
      <UserContextProvider>
        <BookingContextProvider>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </BookingContextProvider>
      </UserContextProvider>
    </div>
  );
};

export default App;
