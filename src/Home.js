import React, { Component } from "react";
import "./Home.css";

// eslint-disable-next-line react/prefer-stateless-function
class Home extends Component {
  render() {
    return (
      <div className="app">
        <div className="homePage">
          <div id="profile-photo" />
          <div id="name">Continuous Delivery</div>
        </div>
      </div>
    );
  }
}

export default Home;
