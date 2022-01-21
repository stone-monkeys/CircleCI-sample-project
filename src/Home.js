import React, { Component } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './Home.css';
import About from './About.js';
import Navbar from './Navbar.js';

class Home extends Component {

  render() {
    return (
      <div className="app">
        <div className="homePage">
          <div id="profile-photo"></div>
            <div id="name">Continuous Delivery</div>
            <div id="occupation">@CircleCI</div> 
        </div>
      </div>
    );
  }
}

export default Home;
