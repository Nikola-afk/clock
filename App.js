import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Clock from "./components/clock";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Clock />
    </div>
  );
}

export default App;
