import React, { Component } from "react";
import "./App.css";
import {
  HashRouter,
  Switch,
} from "react-router-dom";
import Route from "react-router-dom/Route";
import Home from "./Home";
import Navbar from "./Navbar";
import initFontAwesome from "./initFontAwesome";

initFontAwesome();

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="app">
        <HashRouter basename={process.env.PUBLIC_URL}>
          <Navbar />
          <Switch>
            <Route exact path="/" render={() => <Home />} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
