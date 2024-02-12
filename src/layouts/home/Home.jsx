import React from "react";
import Logo from "../../assets/images/home-hero.jpg";
import { HeroImage } from "../../components";

const Home = () => {
  return (
    <div>
      <div className="hero-image">
        <HeroImage image={Logo} alt="hero-logo" />
      </div>
    </div>
  );
};

export default Home;
