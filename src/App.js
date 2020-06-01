import React from "react";
import EventList from "./components/EventList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <EventList />
      <button className="rounded px-4 py-2 bg-red-800 text-white">
        Click me
      </button>
    </div>
  );
}

export default App;
