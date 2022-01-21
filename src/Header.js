import React, { Component } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import About from './About';



class Header extends Component {

    render() {

        return (
            <nav className="menu">
                
                <h1 className="menu__Title">BlackJack  Tutor</h1>

                <ul className="menu__link">
                    <li><Link className="individual_item" to='/'>Home</Link></li>
                    <li> <Link className="individual_item" to='/about'>About</Link></li>
                </ul>

            </nav>
        );
    }
}

export default Header;
