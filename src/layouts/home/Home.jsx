import React from "react";
import Logo from "../../assets/images/home-hero.jpg";
import hero2 from "../../assets/images/home-hero-2.jpg";
import firstImage from "../../assets/images/it_home_aug_01_in.jpg";
import secondImage from "../../assets/images/it_home_aug_02_in.jpg";

import { Button, Card, HeroImage, Product } from "../../components";

import { carouselItem, settingPurpose, exploreProduct } from "./fixture";

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
            <hr />
          </div>
        </section>
        <section>
          <div className="home-section-image">
            <HeroImage image={firstImage} alt="firstImage" />
            <HeroImage image={secondImage} alt="secondImage" />
          </div>
        </section>

        <section>
          <div className="home-setting-purpose">
            <div className="purpose-heading">
              <h1>Settings for every purpose</h1>
              <p>
                Designed for people. Designed for you. Explore our <br />{" "}
                solutions for working and healing.
              </p>
            </div>
            <div className="purpose-heading-content">
              {settingPurpose?.map((setting) => (
                <Card item={setting} />
              ))}
            </div>
          </div>
        </section>
        <section>
          <div className="explore-product">
            <div className="explore-heading">
              <h1>Explore our products</h1>
              <p>
                Find the right design for enabling your people to do their best.
              </p>
            </div>
            <div className="explore-content">
              {exploreProduct.map((item, index) => (
                <Product item={item} />
              ))}
            </div>
          </div>
        </section>
        <section className="hero-container">
          <HeroImage image={hero2} alt="hero-logo-2" />
          <div className="home-hero-text">
            <h1>
              Herman Miller <br /> Online Store
            </h1>
            <h2>
              Visit our online store for exciting <br /> offers!
            </h2>
            <Button label={"Shope Now"} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
