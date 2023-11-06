import React from "react";
import { features } from "./utils";
import {
  faChartLine,
  faDatabase,
  faGlobe,
  faChessKing,
} from "@fortawesome/free-solid-svg-icons";
import "./features.css";
import FeatureCard from "./FeatureCards";

const iconMap = {
  "fa-chart-line": faChartLine,
  "fa-database": faDatabase,
  "fa-globe": faGlobe,
  "fa-chess-king": faChessKing,
};

const Features = () => {
  const getIcon = (icon) => {
    return iconMap[icon] || faChartLine;
  };

  return (
    <div className="features-root">
      <h3>Our Approach</h3>
      <div className="underline"></div>
      <div className="features-container">
        {features.map((feature, index) => {
          const { icon, title, description } = feature;
          return (
            <FeatureCard
              icon={getIcon(icon)}
              title={title}
              description={description}
              key={Math.random()}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Features;
