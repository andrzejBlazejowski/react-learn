import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Person from "./Person/Person";

function App() {
  return (
    <div className="App">
      <Person name="ann" age="23">
        My Hobbies: Drawing
      </Person>
    </div>
  );
}

export default App;
