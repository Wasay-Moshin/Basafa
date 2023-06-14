import React from "react";
import RoasterMenu from "./RoasterMenu";
import Comparisontable from "./Comparisontable";
function Hero() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <RoasterMenu />
          </div>
          <div className="col-md-9">
            <Comparisontable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
