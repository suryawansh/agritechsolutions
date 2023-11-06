// import React from "react";
// import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="container">
//         <div className="row justify-content-center ">
//           <img
//             src={require("../../assets/agritech-logo.png")}
//             alt="agritech logo"
//             className="col-lg-3 col-md-3 col-sm-3 col-xs-12 mt-0"
//           />
//         </div>

//         <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
//           <h2>Right Sight Research</h2>
//           <ul>
//             <li>
//               <a href="/about-us">
//                 <FontAwesomeIcon icon={faAngleRight} size="xs" /> About Us
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import "./footer.css";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row justify-content-center ">
          <img
            src={require("../../assets/agritech-logo.png")}
            alt="Right Sight Research"
            className="rsr-white-logo col-lg-3 col-md-3 col-sm-3 col-xs-12 mt-0"
          />
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
            <h2>AgriTech Solutions</h2>
            <ul>
              <li>
                <a href="/about-us">
                  <FontAwesomeIcon icon={faAngleRight} size="xs" /> About Us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
            <h2>Contact Us</h2>
            <ul>
              <li>
                <a href="tel:+14154495492" className="footer-email">
                  <FontAwesomeIcon icon={faAngleRight} size="xs" /> Ph: +1 415
                  449 5492 (US)
                </a>
              </li>

              <li>
                <a href="tel:+918591141509" className="footer-email">
                  <FontAwesomeIcon icon={faAngleRight} size="xs" /> Ph: +91
                  85911 41509 (Ind)
                </a>
              </li>

              <li>
                <a
                  href="mailto:info@rightsightresearch.com"
                  className="footer-email"
                >
                  <FontAwesomeIcon icon={faAngleRight} size="xs" />{" "}
                  info@rightsightresearch.com
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 ">
            <h2>Support</h2>
            <ul className="footer-support-list">
              <li>
                <a href="/order-process">
                  <FontAwesomeIcon icon={faAngleRight} size="xs" /> Order
                  Process
                </a>
              </li>
              <li>
                <a href="/blogs">
                  <FontAwesomeIcon icon={faAngleRight} size="xs" /> Blog
                </a>
              </li>
              <li>
                <a href="/faqs">
                  <FontAwesomeIcon icon={faAngleRight} size="xs" /> FAQs
                </a>
              </li>
              <li>
                <a href="/privacy-policy">
                  <FontAwesomeIcon icon={faAngleRight} size="xs" /> Privacy
                  Policy
                </a>
              </li>
              <li>
                <a href="/terms-and-conditions">
                  <FontAwesomeIcon icon={faAngleRight} size="xs" /> Terms &amp;
                  Conditions
                </a>
              </li>
              <li>
                <a
                  href={`${process.env.REACT_APP_BACKEND_BASE_URL}/sitemap.xml`}
                >
                  <FontAwesomeIcon icon={faAngleRight} size="xs" /> Site Map
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
