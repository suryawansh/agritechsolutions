// import React, { useState, useContext } from "react";
// import { Button } from "react-bootstrap";
// import "./header.css";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import MobileHeader from "./MobileHeader";
// import useIsMobile from "../../hooks/useIsMobile";

// const Header = () => {
//   const isMobile = useIsMobile();

//   const [showDropdown, setShowDropdown] = useState(false);
//   const [showServicesDropdown, setShowServicesDropdown] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleMenuClick = () => setIsMenuOpen(!isMenuOpen);

//   return (
//     <header>
//       <div className="main-header-container">
//         <div className="col-desktop-5 col-phone-6 col-phonemin-8 header-main-logo-container">
//           <a id="header-main-logo" href="/">
//             <span className="logo">
//               <img
//                 src={require("../../assets/agritech-logo.png")}
//                 alt="Logo RightSightResearch"
//               />
//             </span>
//           </a>
//         </div>
//         <div className="menu-bar-root">
//           <div className="email-contact-root">
//             <div className="ind-number">
//               <img src={indiaFlagImg} alt="india flag" className="ind-flag" />
//               <a href="tel:+918591141509" className="email-header">
//                 +91 85911 41509
//               </a>
//             </div>
//             <div className="usa-number">
//               <img src={usaFlagImg} alt="usa-flag" className="usa-flag" />
//               <a href="tel:+14154495492" className="email-header">
//                 +1 415 449 5492
//               </a>
//             </div>
//             <div className="usa-number">
//               <FontAwesomeIcon icon={faEnvelope} size="lg" />
//               <a
//                 href="mailto:info@rightsightresearch.com"
//                 className="email-header"
//               >
//                 info@rightsightresearch.com
//               </a>
//             </div>
//           </div>
//           {isMobile ? (
//             <>
//               <Button style={{ backgroundColor: "#055160" }}>
//                 <FontAwesomeIcon
//                   icon={faBars}
//                   onClick={handleMenuClick}
//                   className="menu-bar-mobile-bars"
//                 />
//               </Button>
//               <MobileHeader
//                 isMenuOpen={isMenuOpen}
//                 handleMenuClick={handleMenuClick}
//               />
//             </>
//           ) : (
//             <div className={`menu-bar-container`}>
//               <Button variant="link" href="/">
//                 Home
//               </Button>
//               <Button variant="link" href="/about-us">
//                 About Us
//               </Button>
//               <Button
//                 onMouseEnter={() => setShowServicesDropdown(true)}
//                 onMouseLeave={() => setShowServicesDropdown(false)}
//                 className="all-categories-btn"
//                 variant="link"
//                 href="/"
//               >
//                 Our Services
//               </Button>
//               {showServicesDropdown && (
//                 <div
//                   onMouseEnter={() => setShowServicesDropdown(true)}
//                   onMouseLeave={() => setShowServicesDropdown(false)}
//                   className="services-dropdown-container"
//                 >
//                   <Button variant="link" href="/syndicated-reports">
//                     Syndicated Reports
//                   </Button>

//                   <Button variant="link" href="/consulting-services">
//                     Consulting Services
//                   </Button>
//                   <Button variant="link" href="/customized-research">
//                     Customized Research
//                   </Button>
//                 </div>
//               )}

//               <Button
//                 onMouseEnter={() => setShowDropdown(true)}
//                 onMouseLeave={() => setShowDropdown(false)}
//                 className="all-categories-btn"
//                 variant="link"
//                 href="/categories"
//               >
//                 All Categories
//               </Button>
//               {showDropdown && (
//                 <div
//                   onMouseEnter={() => setShowDropdown(true)}
//                   onMouseLeave={() => setShowDropdown(false)}
//                   className="dropdown-container"
//                 >
//                   )}
//                 </div>
//               )}

//               <Button variant="link" href="/all-reports">
//                 All Reports
//               </Button>
//               <Button variant="link" href="/become-publisher">
//                 Become Publisher
//               </Button>
//               <Button variant="link" href="/blogs">
//                 Blog
//               </Button>
//               <Button variant="link" href="/contact-us">
//                 Contact Us
//               </Button>
//             </div>
//           )}
//         </div>
//       </div>
//       <hr style={{ margin: 0 }} />
//     </header>
//   );
// };

// export default Header;
