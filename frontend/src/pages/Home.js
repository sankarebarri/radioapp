// src/pages/Home.js
import React from "react";
import Hero from "../components/Hero";
import CTABanner from "../components/CTABanner";

const Home = () => {
  return (
    <div>
      <Hero />
      <CTABanner />
      {/* <WelcomeAudio /> */}
    </div>
  );
};

export default Home;
