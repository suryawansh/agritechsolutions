import {
  faChevronDown,
  faChevronRight,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const MobileHeader = (props) => {
  const { isMenuOpen, handleMenuClick } = props;

  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  return (
    <Modal show={isMenuOpen} centered fullscreen className="menu-bar-container">
      <Button
        style={{ backgroundColor: "#055160" }}
        className="menu-bar-mobile-close"
      >
        <FontAwesomeIcon icon={faClose} onClick={handleMenuClick} />
      </Button>
      <Button variant="link" href="/">
        Home
      </Button>
      <Button variant="link" href="/about-us">
        About Us
      </Button>
      <button
        onClick={() => setShowServicesDropdown(!showServicesDropdown)}
        className="all-categories-btn btn btn-link"
      >
        Our Services
        <FontAwesomeIcon
          icon={showServicesDropdown ? faChevronDown : faChevronRight}
          size="xs"
        />
      </button>
      {showServicesDropdown && (
        <div className="services-dropdown-container">
          <Button variant="link" href="/syndicated-reports">
            Syndicated Reports
          </Button>

          <Button variant="link" href="/consulting-services">
            Consulting Services
          </Button>
          <Button variant="link" href="/customized-research">
            Customized Research
          </Button>
        </div>
      )}

      <Button variant="link" href="/all-reports">
        All Reports
      </Button>
      <Button variant="link" href="/become-publisher">
        Become Publisher
      </Button>
      <Button variant="link" href="/blogs">
        Blog
      </Button>
      <Button variant="link" href="/contact-us">
        Contact Us
      </Button>
    </Modal>
  );
};

export default MobileHeader;
