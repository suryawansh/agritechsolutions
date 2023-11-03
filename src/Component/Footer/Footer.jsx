import React from "react";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row justify-content-center ">
          <img
            src={require("../../assets/agritech-logo.png")}
            alt="agritech logo"
            className="col-lg-3 col-md-3 col-sm-3 col-xs-12 mt-0"
          />
        </div>

        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
          <h2>Right Sight Research</h2>
          <ul>
            <li>
              <a href="/about-us">
                <FontAwesomeIcon icon={faAngleRight} size="xs" /> About Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
