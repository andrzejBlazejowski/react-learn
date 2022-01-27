import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Person from "./Person/Person";

function App() {
  const [persons, setPersons] = useState([
    { name: "ann", age: "23", children: "useState" },
    { name: "Dominik", age: "22", children: "useState" },
  ]);
  const switchNames = () => {
    const copPersons = [...persons];
    copPersons[0].name = persons[1].name;
    copPersons[1].name = persons[0].name;
    console.log(copPersons);
    setPersons(copPersons);
  };
  return (
    <div className="App">
      <button onClick={switchNames}>switch names</button>
      {persons.map((person, index) => {
        return (
          <Person key={index} name={person.name} age={person.age}>
            {person.children}
          </Person>
        );
      })}
    </div>
  );
}

export default App;
