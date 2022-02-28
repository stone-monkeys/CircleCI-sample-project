import React, { Component } from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// eslint-disable-next-line react/prefer-stateless-function
class Contact extends Component {
  render() {
    return (
      <div className="app">
        <a href="mailto: derry@circleci.com" className="my-links">
          <FontAwesomeIcon icon="envelope" title="Email" />
        </a>

        <a
          href="https://www.linkedin.com/company/circleci/mycompany/"
          className="my-links"
          id="linkedin"
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} title="LinkedIn" />
        </a>

        <a href="https://github.com/CircleCI-Public" className="my-links">
          <FontAwesomeIcon icon={["fab", "github"]} title="Github" />
        </a>
      </div>
    );
  }
}
export default Contact;
