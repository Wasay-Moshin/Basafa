import React from "react";
import RoasterNav from "../Components/Element/Roaster/RoasterNav";
import Header from "../Components/Layout/Header";
import Hero from "../Components/Element/Roaster/Hero";
// import Comparisontable from "../Components/Element/Roaster/Comparisontable";
// import RoasterMenu from "../Components/Element/Roaster/RoasterMenu";
// import RoasterMenu from "../Components/Element/Roaster/RoasterMenu";

function Roaster() {
  return (
    <div className="roaster">
      <Header />
      <RoasterNav />
      {/* <RoasterMenu /> */}
      <Hero />
    </div>
  );
}

export default Roaster;
