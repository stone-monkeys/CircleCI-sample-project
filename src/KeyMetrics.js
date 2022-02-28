import React, { Component } from "react";
import "./KeyMetrics.css";

// eslint-disable-next-line react/prefer-stateless-function
class KeyMetrics extends Component {
  render() {
    return (
      <div className="app">
        <div className="gallery">
          <div className="bubbles" id="pone">
            <p id="textOne">
              <b>THROUGHPUT</b>
            </p>
          </div>
          <div className="bubbles" id="pone">
            <p id="textOne">
              <b>DURATION</b>
            </p>
          </div>
          <div className="bubbles" id="ptwo">
            <p id="textOne">
              <b>MEAN TIME TO RECOVERY</b>
            </p>
          </div>
          <div className="bubbles" id="pthree">
            <p id="textOne">
              <b>SUCCESS RATE</b>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default KeyMetrics;
