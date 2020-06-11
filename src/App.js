import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "@material-ui/core";

function App() {
  function alertTeste() {
    alert("devair é gay");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button 
          color="primary" 
          onClick={alertTeste}
          variant="contained"
        >
          show the message
        </Button>
      </header>
    </div>
  );
}

export default App;
