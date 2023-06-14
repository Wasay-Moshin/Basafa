import React from "react";
import RoasterNav from "../Components/Element/Roaster/RoasterNav";
import Header from "../Components/Layout/Header";
import Hero from "../Components/Element/Roaster/Hero";
// import RoasterMenu from "../Components/Element/Roaster/RoasterMenu";

function Roaster() {
  return (
    <div>
      <Header />
      <RoasterNav />
      <Hero/>
    </div>
  );
}

export default Roaster;
