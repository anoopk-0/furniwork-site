import React from "react";
import Logo from "../../assets/images/home-hero.jpg";
import { Button, Card, HeroImage } from "../../components";

import { carouselItem } from "./fixture";

const Home = () => {
  return (
    <div>
      <div className="home-container">
        <section className="hero-container">
          <HeroImage image={Logo} alt="hero-logo" />
          <div className="home-hero-text">
            <h1>Sits like a glove</h1>
            <h2>
              Incredibly versatile and visually irresistible, the Luva <br />
              Modular Sofa Group is the perfect fit.
            </h2>
            <Button label={"Discover Now"} />
          </div>
        </section>

        <section>
          <div className="home-carousel">
            {carouselItem.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </div>
        </section>
        <section className="home-typography">
          <div className="container-typography">
            <h1>
              At Herman Miller, we want you to do great things. That’s why we
              make problem-solving designs that are as beautiful as they are
              useful.
            </h1>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
