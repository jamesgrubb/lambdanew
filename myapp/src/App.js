import React from "react";
import logo from "./logo.svg";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";

const About = () => <h1>About</h1>;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/about">About</Link>
      </header>
    </div>
  );
}

const example = () => {
  return (
    <Router>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
    </Router>
  );
};

export default example;
