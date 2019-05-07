import React from "react";
import logo from "./logo.svg";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";

const About = () => <h1>About</h1>;

function App(props) {
  console.log(props.match);
  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hi {toTitleCase(props.match.params.name)}</p>
        <Link to="/about">About</Link>
        <form name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message" />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </header>
    </div>
  );
}

const example = () => {
  return (
    <Router>
      <Route exact path="/:name" component={App} />
      <Route path="/about/:name" component={About} />
    </Router>
  );
};

export default example;
