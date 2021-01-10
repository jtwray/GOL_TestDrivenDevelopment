import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import GridContainer from "./components/grid/GridContainer";
import Rules from "./components/Rules";
import About from "./components/About";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/Game" component={GridContainer} />
      <Route exact path="/rules" component={Rules} />
      <Route exact path="/about" component={About} />
    </div>
  );
};

export default App;
