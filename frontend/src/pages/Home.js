// src/pages/Home.js
import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";
import WelcomeAudio from "../components/WelecomeAudio";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <CTABanner />
      {/* <WelcomeAudio /> */}
    </div>
  );
};

export default Home;
