import React from "react";
import Hero from "../Components/Element/home/Hero";
import Header2 from "../Components/Layout/Header2";
import Faqs from "../Components/Utils/Faqs";
import Header from "../Components/Layout/Header";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Header2 />
      <Faqs />
    </div>
  );
}

export default Home;
