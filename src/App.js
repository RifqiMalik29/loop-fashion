import React from "react";
import Home from './Pages/Home';
import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Home exact path="/" />
      </Switch>
    </Router>
  );
};

export default App;
