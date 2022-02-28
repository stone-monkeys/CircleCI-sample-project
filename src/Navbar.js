import React, { useState } from "react";

import { Link } from "react-router-dom";
import "./Navbar.css";
import Route from "react-router-dom/Route";
import Elevator from "./Elevator";
import Home from "./Home";
import KeyMetrics from "./KeyMetrics";
import Contact from "./Contact";

function Navbar() {
  const [click, setClick] = useState(false);

  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/home" className="navbar-logo" onClick={closeMobileMenu}>
          CCI <div className="imglogo" />
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item" id="mainls">
            <Link to="/home" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>

          <li className="nav-item" id="mainls">
            <Link
              to="/elevator"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Elevator
            </Link>
          </li>

          <li className="nav-item" id="mainls">
            <Link
              to="/keyMetrics"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Key Metrics
            </Link>
          </li>

          <li className="nav-item" id="mainls">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>

      <Route path="/home" exact strict component={Home} />
      <Route path="/elevator" exact strict component={Elevator} />
      <Route path="/keyMetrics" exact strict component={KeyMetrics} />
      <Route path="/contact" exact strict component={Contact} />
    </>
  );
}

export default Navbar;
