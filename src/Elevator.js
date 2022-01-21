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
                        
                        A vital metric for any project is Lead time for Changes, and using our platform you can target this by reducing Cycle Time 
                        - the time from deciding that you need to make a change to having it in production and the hands of your customers.
                    </p>
                    <p id="pone"> 
                        We pride ourselves on being the missing link between what Engineers are good at which is ideating and creating awesome 
                        applications and what Computers are good at - automation.

                        As an industry leader in CI/CD,  we enable our customers to operate above the value line by making Software for organisations 
                        and individuals an idea problem, not a delivery problem.

                        By allowing Engineering Teams to build, test and deploy software confidently, we make release days low risk, frequent, rapid, cheap and predictable all while enabling you to deliver value to your customer faster
                    </p>
                    <p id="pone">
                        By allowing Engineering Teams to build, test and deploy software confidently, we make release days low risk, frequent, rapid, cheap and predictable all while enabling you to deliver value to your customer faster
                    </p>
                </div>
           </div>
        );
    }
}

export default Elevator;
