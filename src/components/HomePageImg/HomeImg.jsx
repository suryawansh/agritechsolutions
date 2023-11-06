import React from "react";

const HomeImg = () => {
  return (
    <div>
      <img
        src={require("../../assets/agritech-logo.png")}
        alt="Right Sight Research"
        className="rsr-white-logo col-lg-3 col-md-3 col-sm-3 col-xs-12 mt-0"
      />
      <img
        src={require("../../assets/MicrosoftTeams-image.png")}
        alt="Homepage Img"
      />
    </div>
  );
};

export default HomeImg;
