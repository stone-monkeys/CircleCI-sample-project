import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import './Navbar.css';
import About from './About.js';
import Home from './Home.js';
import Experience from './Experience.js';
import Contact from './Contact.js';
import Route from 'react-router-dom/Route';
import Dropdown from './Dropdown';
import { MenuItems } from './MenuItems';



function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>




      <nav className='navbar'>
        <Link to='/home' className='navbar-logo' onClick={closeMobileMenu}>CCI <div className="imglogo"></div></Link>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          
          <li className='nav-item' id="mainls">
            <Link to='/home' className='nav-links' onClick={closeMobileMenu}>Home</Link>
          </li>
          
          <li className='nav-item' id="mainls">
            <Link to='/about' className='nav-links'onClick={closeMobileMenu}>About</Link>
            
          </li>
         
          <li className='nav-item' id="mainls">
            <Link to='/experience' className='nav-links' onClick={closeMobileMenu}>Experience</Link>
          </li>
          
          <li className='nav-item' id="mainls">
            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>Contact Me</Link>
          </li>

         
        </ul> 
      </nav>
      <Route path ="/home" exact strict component={Home}/>
      <Route path ="/about" exact strict component={About}/>
      
      <Route path ="/experience" exact strict component={Experience}/>

      <Route path ="/contact" exact strict component={Contact}/>
    </>
  );
}

export default Navbar;