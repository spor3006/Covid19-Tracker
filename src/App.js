import React, { Component } from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }
}

export default App;
