import React, { Component } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import './Experience.css';


class Experience extends Component {
    render() {
        return (
           <div className="app">
              <div className="gallery">
                <div className="bubbles" id="pone">
                  <p id="textOne">Solutions Engineer <br/><br/>CircleCI<br/><br/>Jan 2022 - Present</p>
                </div>
                <div className="bubbles" id="pone">
                  <p id="textOne">Software Engineer<br/><br/>Fidelity Investments<br/><br/>DevOps Integration Squad<br/><br/>August 2020 - Jan 2022</p>
                </div>         
                <div className="bubbles" id="ptwo">
                  <p id="textOne">Technical Operations<br/><br/>Sentenial<br/><br/>September 2019 – August 2020</p>
                </div>
                <div className="bubbles" id="pthree">
                  <p id="textOne">Construction Laborer/Machine Operator<br/><br/>Bennett Mechanical Installations (2001) Ltd<br/><br/>May 2018 – August 2019</p>
                </div>
              </div>
           </div>
        );
    }
}

export default Experience;
