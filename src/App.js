import React, { Component } from 'react';
import './App.css';
import Home from './Home.js';
import Dropdown from './Navbar.js'
import Navbar from './Navbar.js';
import {BrowserRouter as Router, HashRouter, Link, Switch} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import initFontAwesome from "./initFontAwesome"; 

initFontAwesome();

class App extends Component {
  render() {
    return (
            <div className="app">
              
              <HashRouter basename={process.env.PUBLIC_URL}>
                <Navbar></Navbar>
                <Switch>
                <Route exact path="/" render={props => <Home />} />
    
                </Switch>
              </HashRouter>
            </div>
    );
  }
}

export default App;
