import React, { Component } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import './Elevator.css';



class Elevator extends Component {

    render() {
            
        return (
           <div className="app">
               <div className="aboutMe">              
                    <p id="pone">
                        How long does it take for your company to generate business value from a decision?
                        
                        Two vital metrics for any project are Success Rate and Mean Time to Recovery, and using CircleCI’s platform you can target these to reduce End-to-end build time by up to 50% by utilizing features such as Test Splitting, caching and docker native executors
                    </p>
                    <p id="pone"> 
                        We pride ourselves on being the missing link between what Engineers are good at which is ideating and creating awesome applications and what Computers are good at - automation.


                        As an industry leader in CI/CD, we enable our customers to operate above the value line by making Software for organisations and individuals an idea problem, not a delivery problem.


                    </p>
                    <p id="pone">
                        By allowing Engineering Teams to build, test and deploy software confidently, we at CircleCI make release days low risk, frequent, rapid, cheap and predictable all with the goal of enabling you to deliver value to your customer faster                    </p>
                </div>
           </div>
        );
    }
}

export default Elevator;
