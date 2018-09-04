import React, { Component } from "react";
import "./App.css";

// components
import Heading from "./components/heading/Heading";
import Projects from "./components/projects/Projects";
import Experiences from "./components/experiences/Experiences";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="components">
          <Heading />
          <Projects />
          <Experiences />
        </div>
      </div>
    );
  }
}

export default App;
