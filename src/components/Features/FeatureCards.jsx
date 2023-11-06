import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./features.css";
import useIsMobile from "../../hooks/useIsMobile";

const FeatureCard = ({ icon, title, description }) => {
  const isMobile = useIsMobile();
  return (
    <div className="feature-card-root">
      <FontAwesomeIcon
        icon={icon}
        size={isMobile ? "lg" : "2x"}
        color="#04525F"
        className="feature-card-icon"
      />
      <h4 className="feature-card-title">{title}</h4>
      <div className="feature-card-description">{description}</div>
    </div>
  );
};

export default FeatureCard;
